import { css, styled } from 'styled-components';

export const InputFrame = styled.div``;

export const Input = styled.input<{ isError: boolean }>`
	width: 100%;
	display: flex;
	height: 48px;
	padding: 5.5px 20px;
	justify-content: center;
	align-items: center;

	border-radius: 12px;
	outline: none;
	background: #fff;

	${({ isError }) => {
		if (isError) {
			return css`
				border: 1px solid #f18f8f;
			`;
		} else {
			return css`
				border: 1.5px solid var(--grey-3, #e0e5d6);
			`;
		}
	}}

	color: var(--text-normal, #282828);
	font-family: SUIT;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px; /* 150% */

	&::placeholder {
		color: var(--text-grey-2, #969696);
		font-family: SUIT;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px; /* 150% */
	}
`;

export const ErrorText = styled.div`
	margin-top: 2px;

	color: #f18f8f;
	font-family: SUIT;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px; /* 171.429% */
`;
