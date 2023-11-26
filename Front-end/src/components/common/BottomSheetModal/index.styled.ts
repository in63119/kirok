import zIndex from 'constants/z-index';
import styled from 'styled-components';

const BOTTOMSHEET_BACKGROUND = 'white';

// TODO: Header 위 차지하도록
export const ModalBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.5;
	z-index: ${zIndex.modalBackground};
`;

export const BottomSheet = styled.div`
	z-index: ${zIndex.modalBackground + 1};

	position: fixed;
	left: 0;
	bottom: 0;

	padding-bottom: 40px;

	width: 100%;
	max-height: 60vh; /* TODO: 최소 높이 여쭙기 */
	overflow-y: scroll;

	border-radius: 14px 14px 0px 0px;
	background-color: ${BOTTOMSHEET_BACKGROUND};

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const BottomSheetInnerWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

export const IndicatorWrapper = styled.div`
	position: sticky;
	top: 0;

	display: flex;
	justify-content: center;
	padding: 10.5px 0;

	background-color: ${BOTTOMSHEET_BACKGROUND};
`;

export const Indicator = styled.div`
	width: 48px;
	height: 3px;

	border-radius: 10px;
	background: var(--text-grey-1, #696969);
`;

export const ChildrenWrap = styled.div`
	padding: 0 28px;
`;
