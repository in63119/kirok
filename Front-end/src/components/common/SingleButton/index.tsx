import React from 'react';
import * as Styled from './index.styled';

type SingleButtonProps = Styled.SingleButtonStyleProps & {
	text: string;
	icon?: {
		asset: string;
		position: 'left' | 'right';
	};
};

const SingleButton: React.FC<SingleButtonProps> = ({ text, ...styleProps }) => {
	return <Styled.Wrapper {...styleProps}>{text}</Styled.Wrapper>;
};

export default SingleButton;
