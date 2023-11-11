import { HEADER_HEIGHT } from 'components/Header';
import { styled } from 'styled-components';

export const ParentLayout = styled.div`
	width: 100%;
	height: calc(100vh - ${HEADER_HEIGHT}px);
	padding: 12px 20px 0;
`;

export const ChildLayout = styled.div`
	width: 100%;
	margin-top: 48px;
`;

export const Title = styled.div`
	font-size: 20px;
	font-weight: 600;
	line-height: 28px;
	white-space: pre-wrap;
`;

export const SubTitle = styled.div<{ color: string }>`
	margin-top: 8px;
	font-size: 15px;
	font-weight: 400;
	line-height: 19px;
	color: ${({ color }) => color};
	white-space: pre-wrap;
`;
