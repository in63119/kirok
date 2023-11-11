import React from 'react';
import styled from 'styled-components';

interface CheckInfoProps {
	name: string;
	birth: string;
	gender: string;
}

const CheckInfo: React.FC<CheckInfoProps> = (props) => {
	const { name, birth, gender } = props;
	return (
		<Container>
			<ProfileImg src="/images/icon_profile.png"></ProfileImg>
			<ProfileText>
				<Name>{name}</Name>
				<Birth>{birth}</Birth>
				<Gender>{gender}</Gender>
			</ProfileText>
		</Container>
	);
};

export default CheckInfo;

const Container = styled.div`
	padding: 18px 16px;
	display: flex;
	background-color: #ffffff;
	border-radius: 14px;
	border: 1px solid #e0e5d6;
	gap: 16px;
	box-shadow: 0 0 10px 0 #5a624b29;

	margin-bottom: 16px;
`;

const ProfileImg = styled.img`
	width: 80px;
	height: 80px;
`;

const ProfileText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
`;

const Name = styled.div`
	padding: 9px 20px;
	border-radius: 12px;
	border: 1px solid #e0e5d6;
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;
`;

const Birth = styled.div`
	padding: 9px 20px;
	border-radius: 12px;
	border: 1px solid #e0e5d6;
`;

const Gender = styled.div`
	padding: 12px 0;
	text-align: center;
	border-radius: 12px;
	color: #76ab00;
	background-color: #f1f6e2;
	font-size: 16px;
	line-height: 20px;
	font-weight: 500;
`;
