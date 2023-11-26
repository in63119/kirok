import React, { useState } from 'react';
import * as Styled from './index.styled';
import BottomSheetModal from '../BottomSheetModal';

interface SelectBoxProps {
	selectedIdx?: number;
	placeholder: string;
	data: string[];
	handleClickItem: (idx: number) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ selectedIdx, placeholder, data, handleClickItem }) => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<BottomSheetModal showModal={showModal} closeModal={closeModal}>
				<Styled.Container>
					{data.map((items, index) => (
						<Styled.SelectItemWrapper
							key={index}
							onClick={() => {
								handleClickItem(index);
								closeModal();
							}}
						>
							<Styled.Name>{items}</Styled.Name>
						</Styled.SelectItemWrapper>
					))}
				</Styled.Container>
			</BottomSheetModal>
			<Styled.SelectBoxWrapper onClick={() => setShowModal(true)}>
				<Styled.SelectBoxContentWrapper>
					<Styled.SelectBoxLabel>{selectedIdx !== undefined ? data[selectedIdx] : placeholder}</Styled.SelectBoxLabel>
					<Styled.ArrowIcon src="/images/icon_arrow.png" />
				</Styled.SelectBoxContentWrapper>
			</Styled.SelectBoxWrapper>
		</>
	);
};

export default SelectBox;
