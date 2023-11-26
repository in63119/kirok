import { HEADER_HEIGHT } from 'components/Header';
import { css, styled } from 'styled-components';

const SIDE_PADDING = '20px';

export const SidePaddingStyle = css`
	padding-left: ${SIDE_PADDING};
	padding-right: ${SIDE_PADDING};
`;

export const ParentLayout = styled.div<{ hasSidePadding: boolean }>`
	width: 100%;
	height: calc(100vh - ${HEADER_HEIGHT}px);
	padding: 12px 0;
	${({ hasSidePadding }) => hasSidePadding && SidePaddingStyle}

	position: relative;
	overflow: scroll;
`;

export const Body = styled.div`
	width: 100%;
	margin-top: 48px;
`;

export const SidePaddingBody = styled(Body)`
	${SidePaddingStyle}
`;

export const SidePaddingInner = styled.div`
	${SidePaddingStyle}
`;

export const CenterizedBody = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	padding: 0 20px;
`;

export const MarginBottom = styled.div`
	/* TODO: 40px 보장 */
	height: 180px;
`;
