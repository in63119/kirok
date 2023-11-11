import React, { useEffect } from 'react';

// recoil
import { useResetRecoilState, useRecoilValue } from 'recoil';
import { kakaoState } from '../recoil/kakaoState';

import styled from 'styled-components';
import ShortBtn from '../components/Button/ShortBtn';

// eslint-disable-next-line

/* 
  Inbrew의 Recoil 강좌! 

  recoil은 몇 가지만 터득하면 정말 간단합니다. 우선 초기 셋팅에 대한 설명부터 드릴게요.

  1. 초기 셋팅(이미 되어있음)
    (1) 설치
      - recoil 설치 : yarn add recoil
      - recoil-persist 설치 : yarn add recoil-persist
        - recoil-persist는 웹 브라우져를 새로고침 했을 때 상태값이 날라가지 않게 해줍니다.

    (2) 셋팅
      - index.tsx 루트 감싸기
        Front-end/src/index.tsx를 살펴보지요. 렌더를 해주는 곳 제일 위쪽(루트)를 RecoilRoot로 감싸줬습니다.
        이렇게 해서 전역으로 상태관리가 가능하다고 보시면 될 것 같아요.
          ```code
          // index.tsx
            ...
            root.render(
              <RecoilRoot>
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              </RecoilRoot>
            );
        ```
      - Atom 구성
        Front-end/src/recoil/kakaoState.ts를 살펴봅시다.(따로 제가 만든 구성이에요. 이거 나중에 복사해서 다른 상태 만들때 사용면 됩니다.)
        현재 kakaoState.kakaoEmail, kakaoState.isLogin 전역 상태를 만들어서 디폴트 값을 "" & false로 만들었습니다.
        이건 React.State의 const state = useState(""); 같은 느낌이라고 생각하시면 됩니다.
          ```code
            // kakaoState.ts
            ...
            export const kakaoState = atom({
              key: "kakao",
              default: {
                kakaoEmail: "",
                isLogin: false,
              },
              effects_UNSTABLE: [persistAtom],
            });
          ```
    2. 활용법
      이제 전역 상태를 React.State처럼 어떻게 활용하는지 알아봅시다.
      recoil의 상태를 불러오고, 쓰는 방법은 여러가지가 있는데 대표적인 함수 몇 개만 알면 됩니다.
      - useRecoilState : react의 useState 처럼 '[상태, set상태] = useRecoilState(kakaoState)' 처럼 사용하면 됩니다.
      - useRecoilValue : 상태의 값을 불러오는 함수입니다.(set은 안됨) 'const code = useRecoilValue(kakaoState)' 처럼 사용하면 됩니다.
      - useSetRecoilState : set상태 만을 위한 함수입니다.(get은 ㄴㄴ) 'const setCode = useSetRecoilState(kakaoState)' 처럼 사용하면 됩니다.
      - useResetRecoilState : 상태를 최초의 디폴트 값으로 reset할 때 'const resetCode = useResetRecoilState(kakaoState)' 처럼 사용하면 됩니다.
*/

// Components
import { useNavigate } from 'react-router-dom';

const Main = () => {
	const resetKakaoState = useResetRecoilState(kakaoState);
	const kakao = useRecoilValue(kakaoState);
	const navigate = useNavigate();

	useEffect(() => {
		console.log('카카오 상태 : ', kakao);
		if (kakao.kakaoEmail && kakao.kakaoId) {
			navigate('/parents');
		}
	}, [kakao, kakao.isLogin, navigate, kakao.kakaoEmail, kakao.kakaoId]);

	if (kakao.kakaoEmail && kakao.kakaoId) {
		navigate('/parents');
	}

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
