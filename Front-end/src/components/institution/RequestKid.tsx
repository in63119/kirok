import React from 'react';
import { styled } from 'styled-components';

interface RequestKidProps {
	name: string;
	gender: string;
	birth: string;
	index: number;
}

const RequestKid: React.FC<RequestKidProps> = ({ name, gender, birth, index }) => {
	return (
		<KidContainer>
			<KidIndex>{index + 1}</KidIndex>
			<KidInfo>
				<KidName>{name}</KidName>
				<KidDetails>
					<KidBirth>{birth}</KidBirth>
					<KidGender>{gender}</KidGender>
				</KidDetails>
			</KidInfo>
		</KidContainer>
	);
};

export default RequestKid;

const KidContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	margin: 5px 0;
	background-color: #f8f8f8;
	border-radius: 8px;
`;

const KidIndex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	margin-right: 15px;
	background-color: #e1e1e1;
	border-radius: 50%;
	font-weight: bold;
`;

const KidInfo = styled.div`
	flex-grow: 1;
`;

const KidName = styled.div`
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 5px;
`;

const KidDetails = styled.div`
	font-size: 0.9rem;
	color: #666;
`;

const KidBirth = styled.span`
	margin-right: 10px;
`;

const KidGender = styled.span``;
