import React from 'react';
import styled from 'styled-components';

// Components
import Login from '../components/Login';
import RegistrationRequest from '../components/RegistrationRequest';

// Recoil
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { institutionState } from '../recoil/institutionState';

const Institution = () => {
	const { isLogin } = useRecoilValue(institutionState);
	const logOut = useResetRecoilState(institutionState);

	return (
		<div>
			<div>여기는 기업용입니다. 아직 기획과 디자인이 완성되지 않아서</div>
			<div>이 페이지로 어떻게 들어올지는 확인해야 함.</div>
			<div>유랑단 ID: UandCrew</div>
			<div>유랑단 PASSWORD: 1234</div>
			{isLogin ? (
				<Container>
					<RegistrationRequest />
					<Button onClick={logOut}>기업 로그아웃</Button>
				</Container>
			) : (
				<div>
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
