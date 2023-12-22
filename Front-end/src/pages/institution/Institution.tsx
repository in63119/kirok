import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PageUrls } from 'constants/page-urls';

// Components
import Login from '../../components/institution/Login';
import Header from 'components/Header';
import Intro from 'components/common/Intro';

// CSS
import fonts from 'constants/fonts';

// Recoil
import { useRecoilValue } from 'recoil';
import { institutionState } from '../../recoil/institutionState';

const Institution = ({ hasGoback = true }) => {
	const { isLogin } = useRecoilValue(institutionState);
	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(PageUrls.INTRO);
	};

	useEffect(() => {
		if (isLogin) {
			const timer = setTimeout(() => {
				navigate(PageUrls.INSTITUTION.MAIN);
			}, 1500);

			return () => clearTimeout(timer);
		}
	}, [isLogin, navigate]);

	return (
		<div>
			{isLogin ? (
				<Intro />
			) : (
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
