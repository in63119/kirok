import React from 'react';
import styled from 'styled-components';

function BottomSheet({ closeModal, children }) {
	return (
		<>
			<StyledModalBackground onClick={closeModal} />
			<StyledBottomSheet>
				<StyledBottomSheetHeader></StyledBottomSheetHeader>
				<ChildrenWrap>{children}</ChildrenWrap>
			</StyledBottomSheet>
		</>
	);
}

export default BottomSheet;

const StyledModalBackground = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100vw;
	height: 100vh;
	background-color: black;
	opacity: 0.5;
	z-index: 1;
`;

const StyledBottomSheet = styled.div`
	z-index: 2;
	position: fixed;
	left: 0;
	min-width: 100vw;
	height: fit-content;
	height: 100vh;
	max-height: 30%;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	bottom: 0;
	border-radius: 1rem 1rem 0 0;
	background-color: white;
`;

const StyledBottomSheetHeader = styled.div`
	height: 10px;
	padding: 10px 10px;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	background: white;

	& > img {
		cursor: pointer;
	}

	& > div {
		font-weight: 600;
		font-size: 1.4rem;
		line-height: 1.7rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
`;

const ChildrenWrap = styled.div``;
