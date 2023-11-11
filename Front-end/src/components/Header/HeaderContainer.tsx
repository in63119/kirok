import React from 'react';
import styled from 'styled-components';

const HeaderContainer = (props) => {
	const { isGoback, goBackHandler } = props;

	return (
		<Container>
			<LeftMenu onClick={goBackHandler}>{isGoback && <GobackIcon src="/images/icon_goBack.png" />}</LeftMenu>
		</Container>
	);
};

export default HeaderContainer;

const Container = styled.div`
	padding: 14px 20px;
	display: flex;
	align-items: center;
	width: 100%;
`;

const LeftMenu = styled.div`
	cursor: pointer;
`;

const GobackIcon = styled.img`
	width: 24px;
	height: 24px;
`;
