import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import fonts from 'constants/fonts';
import { RegistrationItem } from 'utils/type';

// DB
import { initialization } from 'db/firestore';
import { query, collection, onSnapshot } from 'firebase/firestore';

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
	const [selectedKids, setSelectedKids] = useState<Set<number>>(new Set());
	const navigate = useNavigate();
	const db = initialization();

	const goBackHandler = () => {
		navigate(-1);
	};

	const toggleSelection = (index: number) => {
		setSelectedKids((prevSelected) => {
			const newSelected = new Set(prevSelected);
			if (newSelected.has(index)) {
				newSelected.delete(index);
			} else {
				newSelected.add(index);
			}
			return newSelected;
		});
	};

	useEffect(() => {
		const fetchRealTimeRequests = () => {
			const realTimeRequestsQuery = query(collection(db, 'institution', institution.name, 'RegistrationRequest'));
			onSnapshot(realTimeRequestsQuery, (snapshot) => {
				const realTimeRequestList = snapshot.docs.map((doc) => {
					const { birth, gender, institution, name } = doc.data();
					console.log(doc.data());
					return { birth, gender, institution, name };
				});
				setRealTimeRequest(realTimeRequestList);
			});
		};

		fetchRealTimeRequests();
	}, [db, institution.name]);

	return (
		<Container>
			<HeaderContainer>
				<Header hasGoback={hasGoback} handleClickGoBack={goBackHandler} />
				<Title>등록 요청 확인</Title>
			</HeaderContainer>
			{realTimeRequest.length === 0
				? null
				: realTimeRequest?.map((kid: RegistrationItem, i: number) => (
						<KidContainer key={i} selected={selectedKids.has(i)} onClick={() => toggleSelection(i)}>
							<RequestKid name={kid.name} gender={kid.gender} birth={kid.birth} index={i} />
							<SelectionIndicator selected={selectedKids.has(i)} />
						</KidContainer>
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
	background-color: ${({ selected }) => (selected ? '#E0F7FA' : 'transparent')};
	transition: background-color 0.3s;
	cursor: pointer;

	&:hover {
		background-color: #e0f7fa;
	}
`;

const SelectionIndicator = styled.div<StyledSelected>`
	width: 20px;
	height: 20px;
	border: 2px solid #009688;
	border-radius: 50%;
	margin-left: auto;
	background-color: ${({ selected }) => (selected ? '#009688' : 'transparent')};
	transition: background-color 0.3s;
`;
