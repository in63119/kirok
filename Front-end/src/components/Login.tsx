import React from 'react';
import styled from 'styled-components';

// Recoil
import { useRecoilState } from 'recoil';
import { institutionState } from '@kirok-fe/recoil/institutionState';

// Api
import { institutionLogin } from '@kirok-fe/apis/institution';

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

	return (
		<Container>
			<ButtonsWrap>
				<input type="text" placeholder="ID" onChange={(event) => handleInputId(event.target.value)} />
				<input type="text" placeholder="PASSWORD" onChange={(event) => handleInputPassword(event.target.value)} />
				<button onClick={handleInputClick}>기업 로그인</button>
			</ButtonsWrap>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 40vh;
`;

const ButtonsWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;
