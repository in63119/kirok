import React from 'react';
import { styled } from 'styled-components';

interface InputBoxProps {
	title: string;
}

const InputBox: React.FC<InputBoxProps> = (props) => {
	const { title } = props;
	return (
		<div>
			InputBox
			<Container>
				<Title>{title}</Title>
				<InputBoxWrap></InputBoxWrap>
			</Container>
		</div>
	);
};

export default InputBox;

const Container = styled.div``;

const Title = styled.div``;

const InputBoxWrap = styled.div``;
