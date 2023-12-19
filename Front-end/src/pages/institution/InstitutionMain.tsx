import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PageUrls } from 'constants/page-urls';

// Components
// import RegistrationRequest from '../../components/institution/RegistrationRequest';

// Recoil
import { useResetRecoilState } from 'recoil';
import { institutionState } from '../../recoil/institutionState';

const InstitutionMain = () => {
	const resetState = useResetRecoilState(institutionState);
	const navigate = useNavigate();

	const logOut = () => {
		resetState();
		navigate(PageUrls.INSTITUTION.LOGIN);
	};

	return (
		<div>
			<Container>
				{/* <RegistrationRequest /> */}
				<Button onClick={logOut}>기업 로그아웃</Button>
			</Container>
		</div>
	);
};

export default InstitutionMain;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Button = styled.button`
	background-color: '#55B5E6';
	display: flex;
	justify-content: center;
	align-items: center;
	width: 168px;
	height: 54px;
	border-radius: 14px;
	margin-top: 50px;
`;
