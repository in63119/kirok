import React from 'react';
import * as Styled from './index.styled';
import SingleButton, { SingleButtonProps } from '../SingleButton';

type OmitSingleButtonProps = Omit<SingleButtonProps, 'color' | 'variant'>;

type DoubleButtonProps = {
	color: SingleButtonProps['color'];
	left: OmitSingleButtonProps;
	right: OmitSingleButtonProps;
};

const DoubleButton: React.FC<DoubleButtonProps> = ({ left, right, color }) => {
	return (
		<Styled.Wrapper>
			<SingleButton {...left} color={color} variant="solid-secondary" />
			<SingleButton {...right} color={color} variant="solid-primary" />
		</Styled.Wrapper>
	);
};

export default DoubleButton;
