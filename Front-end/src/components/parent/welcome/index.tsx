import React from 'react';
import * as Styled from './index.styled';
import Layout from 'components/Layout';
import Spacing from 'components/common/Spacing';
import SingleButton from 'components/common/SingleButton';
import { useNavigate } from 'react-router-dom';
import { PageUrls } from 'constants/page-urls';

const Welcome: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Layout hasGoback={false}>
			<Layout.CenterizedBody>
				<Styled.Image src="/images/parent/welcome-logo.png" />
				<Spacing size={8} />
				<Styled.Title>키록에 오신 걸 환영합니다.</Styled.Title>
				<Styled.Description>
					서비스를 이용하려면 자녀 확인이 필요해요!
					<br />
					자녀의 어린이집으로 요청 할 <br />
					우리 아이의 정보를 입력해주세요 :)
				</Styled.Description>
			</Layout.CenterizedBody>
			<Layout.Footer>
				<SingleButton
					size="large"
					color="primary"
					state="default"
					variant="solid-primary"
					text="자녀 정보 입력하러 가기"
					handleClick={() => {
						navigate(PageUrls.PARENT.KID_REGISTER);
					}}
				/>
			</Layout.Footer>
		</Layout>
	);
};

export default Welcome;
