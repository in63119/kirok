import React from 'react';
import { styled } from 'styled-components';
import fonts from 'constants/fonts';

interface RequestKidProps {
	name: string;
	gender: string;
	birth: string;
	index: number;
}

interface KidContainerProps {
	isOdd: boolean;
}

const RequestKid: React.FC<RequestKidProps> = ({ name, gender, birth, index }) => {
	const isOdd = (index + 1) % 2 !== 0;

	return (
		<KidContainer isOdd={isOdd}>
			<KidInfo>
				<KidName>{name}</KidName>
				<KidBirth>{birth}</KidBirth>
				<KidGender>{gender}</KidGender>
			</KidInfo>
		</KidContainer>
	);
};

export default RequestKid;

const KidContainer = styled.div.withConfig({
	shouldForwardProp: (prop) => !['isOdd'].includes(prop),
})<KidContainerProps>`
	display: flex;
	align-items: center;
	padding: 0 20.5px;
	width: 258px;
	height: 49px;
	background-color: ${(props) => (props.isOdd ? '#ECF5FB' : '#F8F8F8')};
	border-radius: 12px;
`;

const KidInfo = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const KidName = styled.div`
	font-family: ${fonts.suit.bold};
	font-weight: 500;
	font-size: 17px;
	line-height: 21.22px;
`;

const KidBirth = styled.span`
	font-family: ${fonts.suit.bold};
	font-weight: 500;
	font-size: 17px;
	line-height: 21.22px;
`;

const KidGender = styled.span`
	font-family: ${fonts.suit.bold};
	font-weight: 500;
	font-size: 17px;
	line-height: 21.22px;
`;
