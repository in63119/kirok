import styled from 'styled-components';

export const IMAGE_UPLOAD_PROFILE_SIZE = 80;

const zIndexEditableIcon = 10;

export const Wrapper = styled.div`
	width: ${IMAGE_UPLOAD_PROFILE_SIZE}px;
	height: ${IMAGE_UPLOAD_PROFILE_SIZE}px;
	border-radius: ${IMAGE_UPLOAD_PROFILE_SIZE}px;

	position: relative;

	cursor: pointer;
`;

export const HiddenInput = styled.input`
	display: none;
`;

export const Thumbnail = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;

	position: absolute;
	top: 0;
	z-index: ${zIndexEditableIcon - 1};
`;

export const EditableIcon = styled.img`
	z-index: ${zIndexEditableIcon};

	position: absolute;
	bottom: 0;
	right: 0;
`;
