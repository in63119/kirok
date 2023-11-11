import { HEADER_HEIGHT } from 'components/Header';
import { styled } from 'styled-components';

export const ParentLayout = styled.div`
	width: 100%;
	height: calc(100vh - ${HEADER_HEIGHT}px);
	padding: 12px 20px 0;

	position: relative;
	overflow: scroll;
`;

export const Body = styled.div`
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

export const FooterWrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 0 20px 15px;
`;

export const MarginBottom = styled.div`
	/* TODO: 40px 보장 */
	height: 180px;
`;
