import React from 'react';
import * as Styled from './index.styled';

interface BottomSheetModalProps {
	showModal: boolean;
	closeModal: () => void;
	children: React.ReactNode;
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({ showModal, closeModal, children }) => {
	return (
		<>
			{showModal && (
				<>
					<Styled.ModalBackground onClick={closeModal} />
					<Styled.BottomSheet>
						<Styled.BottomSheetInnerWrapper>
							<Styled.IndicatorWrapper>
								<Styled.Indicator />
							</Styled.IndicatorWrapper>
							<Styled.ChildrenWrap>{children}</Styled.ChildrenWrap>
						</Styled.BottomSheetInnerWrapper>
					</Styled.BottomSheet>
				</>
			)}
		</>
	);
};

export default BottomSheetModal;
