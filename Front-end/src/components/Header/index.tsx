import React from 'react';
import zIndex from 'constants/z-index';
import styled from 'styled-components';

interface HeaderProps {
	hasGoback: boolean;
	handleClickGoBack: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
	const { hasGoback, handleClickGoBack } = props;

	return (
		<Container>
			<LeftMenu onClick={handleClickGoBack}>{hasGoback && <GobackIcon src="/images/icon_goBack.png" />}</LeftMenu>
		</Container>
	);
};

export default Header;

export const HEADER_HEIGHT = 44;

const Container = styled.div`
	padding: 6px 14px;
	display: flex;
	align-items: center;
	width: 100%;
	height: ${HEADER_HEIGHT}px;

	z-index: ${zIndex.gnb};
`;

const LeftMenu = styled.div`
	cursor: pointer;
`;

const GobackIcon = styled.img`
	width: 24px;
	height: 24px;
`;
