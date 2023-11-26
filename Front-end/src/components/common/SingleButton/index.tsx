import React from 'react';
import * as Styled from './index.styled';

export type SingleButtonProps = Styled.SingleButtonStyleProps & {
	text: string;
	icon?: {
		asset: string;
		position: 'left' | 'right';
	};
	handleClick: () => void;
};

const SingleButton: React.FC<SingleButtonProps> = ({ text, handleClick, ...styleProps }) => {
	return (
		<Styled.Wrapper {...styleProps} onClick={handleClick}>
			{text}
		</Styled.Wrapper>
	);
};

export default SingleButton;
