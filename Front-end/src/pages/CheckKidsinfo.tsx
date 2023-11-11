import React from 'react';
import styled from 'styled-components';
import { fonts } from '../constants';

// Recoil
import { useRecoilState } from 'recoil';
import { parentsState } from '../recoil/parentsState';

// Components
import CheckInfo from '../components/CheckKidsInfo/CheckInfo';
import LongBtn from '../components/Button/LongBtn';
import { PageUrls } from '../constants/page-urls';
import Layout from 'components/Layout';

const CheckKidsinfo = () => {
	const [parent] = useRecoilState(parentsState);

	return (
		<Layout hasGoback title={{ text: '등록할 자녀의 정보를 확인해 주세요.' }}>
			<Layout.Body>
				<Title>{parent.institution}</Title>
				<CheckInfo name={parent.name} birth={parent.birth} gender={parent.gender} />
			</Layout.Body>
			<Layout.Footer>
				<ButtonWrapper>
					<LongBtn type="edit" path={PageUrls.PARENTS} />
					<LongBtn type="request" path={PageUrls.PARENTS} />
				</ButtonWrapper>
			</Layout.Footer>
		</Layout>
	);
};

export default CheckKidsinfo;

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

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
