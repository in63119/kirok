import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import fonts from 'constants/fonts';

// DB
import { firestore } from '../../utils/firestore';
import { onSnapshot, query, collection } from 'firebase/firestore';

// Component
import Header from 'components/Header';
import RequestKid from 'components/institution/RequestKid';

// Recoil
import { useRecoilValue } from 'recoil';
import { institutionState } from '../../recoil/institutionState';

interface RegistrationItem {
	birth: string;
	gender: string;
	institution: string;
	isRegistered?: boolean;
	name: string;
}

const RegistrationRequest = ({ hasGoback = true }) => {
	const institution = useRecoilValue(institutionState);
	const [realTimeRequest, setRealTimeRequest] = useState<RegistrationItem[]>([]);
	const q = query(collection(firestore, 'institution', `${institution.name}`, 'RegistrationRequest'));
	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(-1);
	};

	useEffect(() => {
		const unsubscribe = onSnapshot(
			q,
			(querySnapshot) => {
				const requests: RegistrationItem[] = [];

				querySnapshot.forEach((doc) => {
					const data: RegistrationItem = doc.data() as RegistrationItem;
					if (data) {
						requests.push(data);
					}
				});

				setRealTimeRequest(requests);
			},
			(err) => {
				console.log('TODO: error 처리 일관화', err);
			},
		);

		return () => {
			unsubscribe();
		};
	}, [q]);

	return (
		<Container>
			<HeaderContainer>
				<Header hasGoback={hasGoback} handleClickGoBack={goBackHandler} />
				<Title>등록 요청 확인</Title>
			</HeaderContainer>
			{realTimeRequest.length === 0
				? null
				: realTimeRequest?.map((kid: RegistrationItem, i: number) => (
						<div key={i}>
							<div>
								{kid.name} {kid.gender} {kid.birth}
							</div>
							<RequestKid name={kid.name} gender={kid.gender} birth={kid.birth} index={i} />
						</div>
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
