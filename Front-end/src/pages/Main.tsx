import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { kakaoState } from '../recoil/kakaoState';
import styled from 'styled-components';
import ShortBtn from '../components/Button/ShortBtn';
import { useNavigate } from 'react-router-dom';
import { PageUrls } from '../constants/page-urls';

const Main = () => {
	const kakao = useRecoilValue(kakaoState);
	const navigate = useNavigate();

	useEffect(() => {
		if (kakao.kakaoEmail && kakao.kakaoId) {
			navigate(PageUrls.PARENTS);
		}
	}, [kakao, kakao.isLogin, navigate, kakao.kakaoEmail, kakao.kakaoId]);

	return (
		<Container>
			<Logo src="/images/logo_kirok.png" />
			<ButtonsWrap>
				<ShortBtn title={'선생님용'} />
				<ShortBtn title={'부모님용'} />
			</ButtonsWrap>
		</Container>
	);
};

export default Main;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const Logo = styled.img`
	margin-bottom: 180px;
	width: 260px;
	height: 76px;
`;

const ButtonsWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;
