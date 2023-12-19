import React from 'react';
import styled from 'styled-components';

const Intro = () => {
	return (
		<Container>
			<Image src="/images/intro.gif" />
		</Container>
	);
};

export default Intro;

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

const Image = styled.img`
	max-width: 360px;
	max-height: 176.02px;
	margin-top: 244px;
`;
