import React from 'react';
import { styled } from 'styled-components';

interface GenderBtnProps {
	title: string;
	type: string;
	handleGender: (e: any) => void;
	isGender: string; // TODO: 이름 고쳐야함.. 비교자 이상
}

const GenderBtn: React.FC<GenderBtnProps> = (prop) => {
	const { title, type, handleGender, isGender } = prop;

	//   const list = [
	//     { type: "male", title: "남아" },
	//     { type: "female", title: "여아" },
	//   ];
	return (
		<Container>
			<Btn className={`${type === isGender ? 'choiced' : ''}`} onClick={handleGender}>
				{title}
			</Btn>
		</Container>
	);
};

export default GenderBtn;

const Container = styled.div`
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	width: 100%;
`;

const Btn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 44px;
	border-radius: 12px;
	border: 1.5px solid #e0e3da;
	text-align: center;
	font-size: 16px;
	line-height: 20px;
	font-weight: 500;
	color: #e0e3da;

	&.choiced {
		border: 1.5px solid #a1dc2e;
		color: #a1dc2e;
	}
`;
