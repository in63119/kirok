export type InputValidator = {
	condition: (value: string) => boolean;
	errorText: string;
};

const name: InputValidator[] = [
	{
		condition: (val: string) => {
			const reg = /^[가-힣a-zA-Z]{2,6}$/;
			return reg.test(val);
		},
		errorText: '',
	},
];

const birthDate: InputValidator[] = [
	// TODO: 날짜 유효성 체크 필요
	{
		condition: (value) => {
			return value.trim().length === 8;
		},
		errorText: '',
	},
];

const ValidationRule = {
	name,
	birthDate,
};

export default ValidationRule;
