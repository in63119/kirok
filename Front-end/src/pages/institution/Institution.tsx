import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Components
import Login from '../../components/institution/Login';
import RegistrationRequest from '../../components/institution/RegistrationRequest';
import Header from 'components/Header';

// Recoil
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { institutionState } from '../../recoil/institutionState';

// CSS
import fonts from 'constants/fonts';

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
					{/* 아래의 RegistrationRequest 대신 로그인 모션이 들어가야 함 */}
					<RegistrationRequest />
					<Button onClick={logOut}>기업 로그아웃</Button>
				</Container>
			) : (
				<div>
					<Container>
						<Header hasGoback={hasGoback} handleClickGoBack={goBackHandler} />
						<LogoContainer>
							<Logo>
								<LogoTitle>선생님 로그인</LogoTitle>
								<Image src="/images/institution/login_institution.png" alt="Institution Login" />
							</Logo>
						</LogoContainer>
						<Login />
					</Container>
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

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 120px;
`;

const Logo = styled.div`
	width: 124px;
	height: 156px;
`;

const LogoTitle = styled.div`
	font-family: ${fonts.suit.bold};
	font-weight: 700;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
`;

const Image = styled.img``;
