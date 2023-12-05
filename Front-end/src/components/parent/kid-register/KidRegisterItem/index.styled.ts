import { IMAGE_UPLOAD_PROFILE_SIZE } from 'components/Input/ImageUpload/index.styled';
import styled from 'styled-components';

export const ReadonlyInput = styled.div`
	width: 100%;

	display: flex;
	height: 44px;
	padding: 0px 20px;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;

	border-radius: 12px;
	border: 1px solid var(--Grey, #f8f8f8);
	background: var(--Grey, #f8f8f8);
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

export const LeftArea = styled.div`
	width: ${IMAGE_UPLOAD_PROFILE_SIZE}px;
`;

export const ProfileImage = styled.img`
	width: ${IMAGE_UPLOAD_PROFILE_SIZE}px;
	height: ${IMAGE_UPLOAD_PROFILE_SIZE}px;
	border-radius: 50%;
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
