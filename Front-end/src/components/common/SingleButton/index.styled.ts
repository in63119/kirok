import { css, styled } from 'styled-components';

export type SingleButtonStyleProps = {
	size: 'large' | 'medium' | 'small';
	color: 'primary' | 'secondary';
	state: 'default' | 'disabled';
	variant: 'solid-primary' | 'solid-secondary' | 'outline' | 'text';
};

export const Wrapper = styled.div<SingleButtonStyleProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 14px;

	font-style: normal;
	font-family: SUIT;
	font-weight: 600;
	line-height: 24px;

	${({ size }) => {
		switch (size) {
			case 'large':
				return css`
					padding: 16px 32px;
					font-size: 18px;
				`;
			case 'medium':
				return css`
					padding: 12px 24px;
					font-size: 17px;
				`;

			case 'small':
				return css`
					padding: 10px 20px;
					font-size: 16px;
				`;
		}
	}}

	${({ color, state, variant }) => {
		if (color === 'primary' && state === 'default') {
			switch (variant) {
				case 'solid-primary':
					return css`
						background: var(--primary-normal, #a1dc2e);
						color: var(--White, #fff);
					`;
				case 'solid-secondary':
					return css`
						background: var(--primary-assistive, #f1f6e2);
						color: var(--primary-strong, #76ab00);
					`;
				case 'outline':
					return css`
						border: 1.5px solid var(--primary-normal, #a1dc2e);
						color: var(--primary-strong, #76ab00);
					`;
				case 'text':
					return css`
						color: var(--primary-strong, #76ab00);
					`;
			}
		} else if (color === 'primary' && state === 'disabled') {
			switch (variant) {
				case 'solid-primary':
					return css`
						background: var(--text-grey-2, #969696);
						color: var(--White, #fff);
					`;
				case 'outline':
					return css`
						border: 1.5px solid var(--grey-3, #e0e5d6);
						color: var(--text-grey-2, #969696);
					`;
				case 'text':
					return css`
						color: var(--text-grey-2, #969696);
					`;
			}
		}
		// color === 'secondary'
	}}
`;
