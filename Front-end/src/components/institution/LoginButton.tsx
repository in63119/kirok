import React from 'react';
import { styled } from 'styled-components';

// Recoil
import { useRecoilValue } from 'recoil';
import { kakaoState } from '../../recoil/kakaoState';

// Api
import { kakaoOpen } from '../../apis/kakao';

const LoginButton = () => {
	const { isLogin } = useRecoilValue(kakaoState);

	const handleClick = () => {
		isLogin && kakaoOpen();
	};

	return (
		<Container onClick={handleClick}>
			<Img src="/images/login_btn.png" />
		</Container>
	);
};

export default LoginButton;

const Container = styled.button``;

const Img = styled.img``;
