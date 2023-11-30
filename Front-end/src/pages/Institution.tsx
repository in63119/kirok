import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Components
import Login from '../components/Login';
import RegistrationRequest from '../components/RegistrationRequest';
import Header from 'components/Header';

// Recoil
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { institutionState } from '../recoil/institutionState';

const Institution = ({ hasGoback = true }) => {
	const { isLogin } = useRecoilValue(institutionState);
	const logOut = useResetRecoilState(institutionState);

	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(-1);
	};

	return (
		<div>
			{isLogin ? (
				<Container>
					<RegistrationRequest />
					<Button onClick={logOut}>기업 로그아웃</Button>
				</Container>
			) : (
				<div>
					<Header hasGoback={hasGoback} handleClickGoBack={goBackHandler} />
					<Login />
				</div>
			)}
		</div>
	);
};

export default Institution;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 20vh;
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
