import React from 'react';
import styled from 'styled-components';
import { fonts } from '../constants';
import { useNavigate } from 'react-router-dom';

// Recoil
import { useRecoilState } from 'recoil';
import { parentsState } from '../recoil/parentsState';

// Components
import CheckInfo from '../components/CheckKidsInfo/CheckInfo';
import HeaderContainer from '../components/Header/HeaderContainer';
import LongBtn from '../components/Button/LongBtn';

const CheckKidsinfo = () => {
	const [parent] = useRecoilState(parentsState);
	const navigate = useNavigate();

	const goBackHandler = () => {
		navigate(-1);
	};

	return (
		<Container>
			<HeaderContainer isGoback={true} goBackHandler={goBackHandler} />
			<Disc>등록할 자녀의 정보를 확인해 주세요.</Disc>
			<Contents>
				<Title>{parent.institution}</Title>
				<CheckInfo name={parent.name} birth={parent.birth} gender={parent.gender} />
			</Contents>
			<BtnWrapper>
				<LongBtn type="edit" path="/parents" />
				<LongBtn type="request" path="/parents" />
			</BtnWrapper>
		</Container>
	);
};

export default CheckKidsinfo;

const Container = styled.div`
	font-family: ${fonts.suit.regular};
`;

const Disc = styled.div`
	margin: 12px 0px 44px;
	padding-left: 20px;
	font-weight: 600;
	font-size: 20px;
	line-height: 25px;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	margin-bottom: 16px;
	padding: 12px 32px;
	background-color: #f8f8f8;
	border-radius: 12px;
	max-width: 199px;
	font-family: ${fonts.suit.regular};
	color: #87bef0;
	font-weight: 600;
	font-size: 18px;
	line-height: 22.46px;
	text-align: center;
`;

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	bottom: 40px;
	left: 50%;
	transform: translateX(-50%);
	gap: 8px;
`;
