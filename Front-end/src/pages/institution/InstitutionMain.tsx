import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PageUrls } from 'constants/page-urls';

// Components
// import RegistrationRequest from '../../components/institution/RegistrationRequest';

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
					<ConfurmRequest src="/images/institution/frame_confirmRequest.png" />
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
	color: #333; /* Adjust to match the design */
	margin-left: 16px; /* Align with the Logo in the Header */
	/* Removed margin-top to allow Content's padding to handle vertical spacing */
`;
const TitleImg = styled.img`
	width: 24px; /* Adjust width to match your title image size */
	height: auto;
	margin-right: 8px;
`;

const RegistContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const ConfurmRequest = styled.img`
	width: 100%; /* Adjust width to fit your design */
	height: auto;
	margin: 8px 0; /* Adjust margin to match your design */
`;

const ChildrenCheck = styled.img`
	width: 100%; /* Adjust width to fit your design */
	height: auto;
	margin: 8px 0; /* Adjust margin to match your design */
`;

const TitleName = styled.div`
	font-family: ${fonts.suit.bold};
	font-weight: 700;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
`;
