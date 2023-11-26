import styled from 'styled-components';

// Readonly
export const Container = styled.div`
	padding: 18px 16px;
	display: flex;
	background-color: #ffffff;
	border-radius: 14px;
	border: 1px solid #e0e5d6;
	gap: 16px;
	box-shadow: 0 0 10px 0 #5a624b29;

	margin-bottom: 16px;
`;

export const ProfileImg = styled.img`
	width: 80px;
	height: 80px;
`;

export const ProfileText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
`;

export const Name = styled.div`
	padding: 9px 20px;
	border-radius: 12px;
	border: 1px solid #e0e5d6;
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;
`;

export const Birth = styled.div`
	padding: 9px 20px;
	border-radius: 12px;
	border: 1px solid #e0e5d6;
`;

export const Gender = styled.div`
	padding: 12px 0;
	text-align: center;
	border-radius: 12px;
	color: #76ab00;
	background-color: #f1f6e2;
	font-size: 16px;
	line-height: 20px;
	font-weight: 500;
`;

// Editable

export const DeleteArea = styled.div`
	text-align: right;
`;

export const DeleteIcon = styled.img`
	width: 24px;
	height: 24px;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 18px;
`;

export const Input = styled.input`
	display: flex;
	height: 48px;
	padding: 5.5px 20px;
	justify-content: center;
	align-items: center;

	border-radius: 12px;
	border: 1.5px solid var(--grey-3, #e0e5d6);
	outline: none;
	background: #fff;

	color: var(--text-normal, #282828);
	font-family: SUIT;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px; /* 150% */

	&::placeholder {
		color: var(--text-grey-2, #969696);
		font-family: SUIT;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px; /* 150% */
	}
`;

export const Photo = styled.img`
	width: 80px;
	height: 80px;
`;

export const RightArea = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const BtnWrapper = styled.div`
	display: flex;
	gap: 8px;
	width: 100%;
`;
