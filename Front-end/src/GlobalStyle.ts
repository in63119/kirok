import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		touch-action: manipulation;
		box-sizing: border-box;
	}
	i {
		font-style: normal;
	}
	input,
	button {
		font-family: inherit;
	}
	button {
		cursor: pointer;

		&:disabled {
			cursor: not-allowed;
		}
	}
	/**
		https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/
	*/
	input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 1000px transparent inset;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}
`;

export default GlobalStyle;
