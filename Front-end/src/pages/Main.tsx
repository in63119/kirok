import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SingleButton from 'components/common/SingleButton';
import { PageUrls } from '../constants/page-urls';
import { useRecoilValue } from 'recoil';
import { kakaoState } from '../recoil/kakaoState';
import { kakaoOpen } from 'apis/kakao';

const Main = () => {
	const navigate = useNavigate();
	const kakao = useRecoilValue(kakaoState);

	const handleClickParentButton = useCallback(() => {
		kakaoOpen();
		navigate(PageUrls.PARENT.KAKAO_LOGIN);
	}, [navigate]);

	useEffect(() => {
		// TODO: 부모 가입 상태에 따라 추가 분기하기
		if (kakao.kakaoEmail && kakao.kakaoId) {
			navigate(PageUrls.PARENT.WELCOME);
		}
	}, [kakao.kakaoEmail, kakao.kakaoId, navigate]);

	return (
		<Container>
			<Logo src="/images/logo_kirok.png" />
			<ButtonsWrap>
				<SingleButton
					size="large"
					color="secondary"
					state="default"
					variant="solid-primary"
					text="선생님용"
					handleClick={() => {
						navigate(PageUrls.INSTITUTION.LOGIN);
					}}
				/>
				<SingleButton
					size="large"
					color="primary"
					state="default"
					variant="solid-primary"
					text="부모님용"
					handleClick={handleClickParentButton}
				/>
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
	width: 168px;
`;
