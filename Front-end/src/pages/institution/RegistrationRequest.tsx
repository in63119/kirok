import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import fonts from 'constants/fonts';
import { RegistrationItem, GroupedRequests } from 'utils/type';

// DB
import { initialization } from 'db/firestore';
import { collection, onSnapshot } from 'firebase/firestore';

// Component
import Header from 'components/Header';
import RequestKid from 'components/institution/RequestKid';

// Recoil
import { useRecoilValue } from 'recoil';
import { institutionState } from '../../recoil/institutionState';

interface StyledSelected {
	selected: boolean;
}

const RegistrationRequest = ({ hasGoback = true }) => {
	const institution = useRecoilValue(institutionState);
	const [realTimeRequest, setRealTimeRequest] = useState<RegistrationItem[]>([]);
	const [selectedKids, setSelectedKids] = useState<{ [date: string]: { [index: number]: boolean } }>({});
	const [selectAll, setSelectAll] = useState(false);
	const navigate = useNavigate();
	const db = initialization();

	const goBackHandler = () => {
		navigate(-1);
	};

	const toggleSelection = (date: string, index: number) => {
		setSelectedKids((prevSelected) => {
			const newSelected = { ...prevSelected };
			if (!newSelected[date]) {
				newSelected[date] = {};
			}
			newSelected[date][index] = !newSelected[date][index];
			return newSelected;
		});
	};

	const toggleSelectAll = () => {
		if (selectAll) {
			setSelectedKids({});
		} else {
			const allIndices = realTimeRequest.reduce(
				(acc, item, index) => {
					const date = `${item.created_at.split(' ')[1]} ${item.created_at.split(' ')[2]}`;
					if (!acc[date]) {
						acc[date] = {};
					}
					acc[date][index] = true;
					return acc;
				},
				{} as { [date: string]: { [index: number]: boolean } },
			);
			setSelectedKids(allIndices);
		}
		setSelectAll(!selectAll);
	};

	const groupedRequests = realTimeRequest.reduce((acc: GroupedRequests, item) => {
		const date = `${item.created_at.split(' ')[1]} ${item.created_at.split(' ')[2]}`;
		if (!acc[date]) {
			acc[date] = [];
		}
		acc[date].push(item);
		return acc;
	}, {});

	useEffect(() => {
		const realTimeRequestsRef = collection(db, 'institution', institution.name, 'RegistrationRequest');
		const unsubscribe = onSnapshot(realTimeRequestsRef, (snapshot) => {
			const realTimeRequestList = snapshot.docs.map((doc) => {
				const { birth, gender, institution, name, created_at } = doc.data() as RegistrationItem;
				const time = created_at.split(' ')[3];
				return { birth, gender, institution, name, created_at, time };
			});
			setRealTimeRequest(realTimeRequestList);
		});

		return () => unsubscribe();
	}, [db, institution.name]);

	useEffect(() => {
		const totalSelectedCount = Object.values(selectedKids).reduce(
			(acc, dateObj) => acc + Object.keys(dateObj).length,
			0,
		);
		if (selectAll && realTimeRequest.length && totalSelectedCount !== realTimeRequest.length) {
			setSelectAll(false);
		}
	}, [realTimeRequest, selectAll, selectedKids]);

	return (
		<Container>
			<HeaderContainer>
				<Header hasGoback={hasGoback} handleClickGoBack={goBackHandler} />
				<Title>등록 요청 확인</Title>
			</HeaderContainer>
			<SelectionAll onClick={toggleSelectAll}>
				{selectAll ? (
					<Check src="/images/institution/icon_check.png" alt="Check" />
				) : (
					<NotCheck src="/images/institution/icon_check_empty.png" alt="NotCheck" />
				)}
				전체 선택({Object.values(selectedKids).reduce((acc, dateObj) => acc + Object.keys(dateObj).length, 0)}/
				{realTimeRequest.length})
			</SelectionAll>
			{Object.entries(groupedRequests).map(([date, kids]) => (
				<React.Fragment key={date}>
					<DateTitle>{date}</DateTitle>
					{kids.map((kid, i) => (
						<KidContainer
							key={`${date}-${i}`}
							selected={selectedKids[date]?.[i] ?? false}
							onClick={() => toggleSelection(date, i)}
						>
							<RequestKid name={kid.name} gender={kid.gender} birth={kid.birth} index={i} />
							<RequestKidTime>{kid.time}</RequestKidTime>
						</KidContainer>
					))}
				</React.Fragment>
			))}
		</Container>
	);
};

export default RegistrationRequest;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
`;

const Title = styled.div`
	position: absolute;
	font-family: ${fonts.suit.bold};
	font-weight: 600;
	font-size: 18px;
	line-height: 22.46px;
	text-align: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const HeaderContainer = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	padding: 16px;
`;

const KidContainer = styled.div<StyledSelected>`
	display: flex;
	align-items: center;
	transition: background-color 0.3s;
	cursor: pointer;
	background-color: ${(props) => (props.selected ? '#dff0ff' : 'transparent')};

	&::before {
		content: '';
		display: block;
		width: 24px;
		height: 24px;
		margin-right: 10px;
		background: url(${(props) =>
				props.selected ? '/images/institution/icon_check.png' : '/images/institution/icon_check_empty.png'})
			no-repeat center center;
		background-size: contain;
	}
`;

const DateTitle = styled.div`
	font-family: ${fonts.suit.bold};
	font-weight: 600;
	font-size: 14px;
	line-height: 17.47px;
	padding: 8px 20px 8px 20px;
`;

const SelectionAll = styled.div`
	font-family: ${fonts.suit.bold};
	font-weight: 400;
	font-size: 14px;
	line-height: 17.47px;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

const NotCheck = styled.img`
	width: 24px;
	height: 24px;
`;

const Check = styled.img`
	width: 24px;
	height: 24px;
`;

const RequestKidTime = styled.div`
	font-family: ${fonts.suit.bold};
	font-weight: 500;
	font-size: 11px;
	line-height: 13.73px;
`;
