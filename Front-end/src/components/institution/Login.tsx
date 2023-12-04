import React from 'react';
import styled from 'styled-components';

// Recoil
import { useRecoilState } from 'recoil';
import { institutionState } from '../../recoil/institutionState';

// Api
import { institutionLogin } from '../../apis/institution';

// CSS
import fonts from 'constants/fonts';

const Login = () => {
	const [institution, setInstitution] = useRecoilState(institutionState);

	const handleInputId = (value: string) => {
		setInstitution((prev: any) => ({
			...prev,
			id: value,
		}));
	};
	const handleInputPassword = (value: string) => {
		setInstitution((prev: any) => ({
			...prev,
			password: value,
		}));
	};

	const handleInputClick = async () => {
		// 입력 값이 아무것도 없을 때, 임시조치
		if (!institution.id || !institution.password) {
			alert('아이디와 비밀번호를 입력해주세요.');
			return;
		}

		const data = {
			id: institution.id,
			password: institution.password,
		};
		const result = await institutionLogin(data);

		if (result.result) {
			setInstitution((prev: any) => ({
				...prev,
				isLogin: result.result,
				name: result.name,
			}));
		}
	};

	const handleLinkClick = () => {
		window.open('https://forms.gle/psNzHhK3vyAG4MVx7');
	};

	return (
		<Container>
			<FormContainer>
				<InputContainer>
					<Label htmlFor="username">아이디 입력</Label>
					<StyledInput id="username" type="text" onChange={(event) => handleInputId(event.target.value)} />
					<Label htmlFor="password">비밀번호 입력</Label>
					<StyledInput id="password" type="password" onChange={(event) => handleInputPassword(event.target.value)} />
					<LoginButton onClick={handleInputClick}>로그인</LoginButton>
				</InputContainer>
				<HelpLinks>
					<LinkButton onClick={handleLinkClick}>아이디 | 비밀번호 찾기</LinkButton>
				</HelpLinks>
			</FormContainer>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	width: 335px;
`;

const InputContainer = styled.div`
	width: 100%;
	margin-bottom: 1rem;
`;

const StyledInput = styled.input`
	width: 100%;
	padding: 12px 10px;
	font-size: 16px;
	border: none;
	border-bottom: 2px solid #ccc;
	background-color: transparent;
	margin-bottom: 20px;
	outline: none;

	&:focus {
		border-bottom: 2px solid #a1dc2e;
	}

	&::placeholder {
		color: #aaa;
	}
`;

const LoginButton = styled.button`
	width: 100%;
	padding: 0.5rem;
	background-color: #a1dc2e;
	color: #282828;
	border: none;
	border-radius: 4px;
	margin-top: 1rem;
	cursor: pointer;
	font-family: ${fonts.suit.bold};
	font-weight: 700;
	font-size: 17px;
	line-height: 21.22px;
`;

const HelpLinks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
`;

const LinkButton = styled.button`
	background: none;
	border: none;
	color: #0000ee;
	cursor: pointer;
`;

const Label = styled.label`
	display: block;
	font-family: ${fonts.suit.bold};
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
`;
