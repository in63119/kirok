import React from 'react';
import { styled } from 'styled-components';

interface Prop {
	place?: string;
	type?: 'name' | 'birth';
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	valid?: boolean;
	handleSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputText = (props: Prop) => {
	return (
		<Container isvalid={props.valid?.toString()}>
			<Title>{props.type === 'name' ? '이름' : '생년월일(8자리)'}</Title>
			<input type={props.type} value={props.value} onChange={props.onChange} />
		</Container>
	);
};

export default InputText;

const Container = styled.div<{ isvalid?: string }>`
	margin-bottom: 14px;
	width: 237px;
	height: 56px;
	/* text-align: center; */

	& > input {
		/* width: 80%;
      height: 3rem; */
		padding-top: 8px;
		width: 100%;
		height: 28px;
		border-style: none;
		outline: none;
		border-bottom: 1.5px solid ${(props) => (props.isvalid === 'true' ? '#F18F8F' : '#A1DC2E')};
	}
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	color: #969696;
`;
