import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// recoil
import { useRecoilValue } from 'recoil';
import { kakaoState } from '../../recoil/kakaoState';

// api
import { kakaoOpen } from '../../apis/kakao';

const ShortBtn = (props: any) => {
	const { title } = props;
	const { isLogin } = useRecoilValue(kakaoState);
	const navigate = useNavigate();

	const handleClick = () => {
		if (title === '부모님용' && !isLogin) {
			kakaoOpen();
			navigate('/login');
		} else {
			navigate('/Institution');
		}
	};

	return (
		<Container title={title} onClick={handleClick}>
			<Title>{title}</Title>
		</Container>
	);
};

export default ShortBtn;

const Container = styled.div<{ title: string }>`
	background-color: ${({ title }) => (title === '선생님용' ? '#55B5E6' : '#A1DC2E')};
	display: flex;
	justify-content: center;
	align-items: center;
	width: 168px;
	height: 54px;
	border-radius: 14px;
	cursor: pointer;
`;

const Title = styled.div`
	color: #ffffff;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
`;
