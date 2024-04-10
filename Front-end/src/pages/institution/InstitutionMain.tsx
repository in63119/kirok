import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PageUrls } from 'constants/page-urls';

// Recoil
import { useResetRecoilState, useRecoilValue } from 'recoil';
import { institutionState } from '../../recoil/institutionState';

// CSS
import fonts from 'constants/fonts';

const InstitutionMain = () => {
	const resetState = useResetRecoilState(institutionState);
	const { name } = useRecoilValue(institutionState);
	const navigate = useNavigate();

	const logOut = () => {
		resetState();
		navigate(PageUrls.INTRO);
	};

	return (
		<Container>
			<Header>
				<Logo onClick={logOut} src="/images/logo_kirok.png" />
				<Setting src="/images/icon_setting.png" />
			</Header>
			<Content>
				<Title>
					<TitleImg src="/images/institution/icon_institutionName.png" />
					<TitleName>{name}</TitleName>
				</Title>
				<RegistContainer>
					<ConfirmRequest
						src="/images/institution/frame_confirmRequest.png"
						onClick={() => {
							navigate(PageUrls.INSTITUTION.REGISTRATION_REQUEST);
						}}
					/>
					<ChildrenCheck src="/images/institution/frame_childrenCheck.png" />
				</RegistContainer>
			</Content>
		</Container>
	);
};

export default InstitutionMain;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
`;

const Logo = styled.img`
	width: 100px;
	height: auto;
	cursor: pointer;
`;

const Setting = styled.img`
	width: 24px;
	height: auto;
	cursor: pointer;
`;

const Content = styled.main`
	padding: 0 16px;
`;

const Title = styled.h1`
	display: flex;
	align-items: center;
	font-size: 24px;
	color: #333;
	margin-left: 6px;
`;
const TitleImg = styled.img`
	width: 24px;
	height: auto;
	margin-right: 8px;
`;

const RegistContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

const ConfirmRequest = styled.img`
	width: 159.5px;
	height: auto;
	margin: 8px 14px;
`;

const ChildrenCheck = styled.img`
	width: 159.5px;
	height: auto;
	margin: 8px 14px;
`;

const TitleName = styled.div`
	font-family: ${fonts.suit.bold};
	font-weight: 700;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
`;
