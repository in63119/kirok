import React from 'react';
import { styled } from 'styled-components';

interface RequestKidProps {
	name: string;
	gender: string;
	birth: string;
	index: number;
}

const RequestKid = (props: RequestKidProps) => {
	console.log(props);
	return <Container>test</Container>;
};

export default RequestKid;

const Container = styled.button``;
