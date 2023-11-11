import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// recoil
import { useRecoilState } from 'recoil';
import { kakaoState } from '../recoil/kakaoState';

// type
import { TkakaoState } from '../utils/type';

// api
import { postCodeToServer } from '../apis/kakao';
import { PageUrls } from '@constants/page-urls';

const Callback = () => {
	const navigate = useNavigate();
	const codeFromUri = new URL(window.location.href).searchParams.get('code') ?? '';
	const [kakaoCode, setKakaoCode] = useRecoilState(kakaoState);

	const handleKakao = useCallback(async () => {
		setKakaoCode((prev) => ({
			// TODO: TkakaoState 제거
			...prev,
			isLogin: true,
		}));

		if (kakaoCode.isLogin) {
			const result = await postCodeToServer(codeFromUri);
			setKakaoCode((prev: TkakaoState) => ({
				...prev,
				kakaoEmail: result.email,
				kakaoId: result.kakaoId,
			}));
			navigate(PageUrls.INTRO);
		}
	}, [codeFromUri, kakaoCode.isLogin, navigate, setKakaoCode]);

	useEffect(() => {
		handleKakao();
	}, [handleKakao]);

	return (
		<div>
			<div>로딩 중...</div>
		</div>
	);
};

export default Callback;
