import React, { ChangeEventHandler, InputHTMLAttributes, useMemo } from 'react';
import { InputValidator } from 'utils/validators';
import * as Styled from './index.styled';

type InputBoxProps = InputHTMLAttributes<HTMLInputElement> & {
	value: string;
	placeholder?: string;
	validators?: InputValidator[];
	onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputBox: React.FC<InputBoxProps> = ({ value, validators, onChange, ...restProps }) => {
	const {
		isError,
		errorText,
	}: {
		isError: boolean;
		errorText: string;
	} = useMemo(() => {
		const hasValue = value.length > 0;
		if (hasValue && validators && validators.length > 0) {
			for (let i = 0; i < validators.length; i++) {
				const validator = validators[i];

				if (!validator.condition(value)) {
					return {
						isError: true,
						errorText: validator.errorText,
					};
				} else {
					continue;
				}
			}
		}

		return {
			isError: false,
			errorText: '',
		};
	}, [validators, value]);

	return (
		<Styled.InputFrame>
			<Styled.Input {...restProps} value={value} isError={isError} onChange={onChange} />
			{isError && <Styled.ErrorText>{errorText}</Styled.ErrorText>}
		</Styled.InputFrame>
	);
};

export default InputBox;
