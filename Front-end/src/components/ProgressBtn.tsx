import React from 'react';
import { styled } from 'styled-components';
import { fonts } from '../constants/index';

interface ProgressBtnProps {
	title: string;
	onclick: () => void; // TODO: camelCase 로 바꾸기
}

const ProgressBtn: React.FC<ProgressBtnProps> = (props) => {
	const { title, onclick } = props;

	return (
		<Container>
			<Btn title={title} onClick={onclick}>
				{title}
			</Btn>
		</Container>
	);
};

export default ProgressBtn;

const Container = styled.div`
	margin-top: 70px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	width: 100%;
`;

const Btn = styled.div<{ title: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 56px;
	border-radius: 14px;
	background-color: ${({ title }) => (title === '다음' ? '#A1DC2E' : '#F1F6E2')};
	color: ${({ title }) => (title === '다음' ? '#FFFFFF' : '#76AB00')};
	font-family: ${fonts.suit.regular};
	font-size: 18px;
	line-height: 24px;
	font-weight: 600;
	text-align: center;
`;
