import { styled } from 'styled-components';

export const Image = styled.img`
	width: 100px;
	height: 100px;
`;

export const Title = styled.div`
	color: var(--text-normal, #282828);
	text-align: center;
	font-family: SUIT;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

export const Description = styled.div`
	color: var(--text-normal, #282828);
	text-align: center;
	font-family: SUIT;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px; /* 150% */
`;
