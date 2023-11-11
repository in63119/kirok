import React from 'react';
import { styled } from 'styled-components';

interface BottomSheetProps {
	institutions: string[];
	handleChoice: React.MouseEventHandler<HTMLDivElement>;
}

const BottomSheet: React.FC<BottomSheetProps> = (props) => {
	const { institutions, handleChoice } = props;

	return (
		<Container>
			{institutions?.map((items: string, index: number) => (
				<InputContainer onClick={handleChoice} key={index}>
					<Name>{items}</Name>
					<Line />
				</InputContainer>
			))}
		</Container>
	);
};

export default BottomSheet;

const Container = styled.div`
	padding: 40px 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const InputContainer = styled.div`
	padding-bottom: 16px;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 56px;
	justify-content: center;
	align-items: center;
`;

const Name = styled.div`
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;
	color: #969696;
`;

const Line = styled.div`
	margin-top: 16px;
	width: 85%;
	height: 1.5px;
	background-color: #e0e5d6;
`;
