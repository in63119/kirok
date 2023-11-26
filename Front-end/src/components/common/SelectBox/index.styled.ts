import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SelectItemWrapper = styled.div`
	padding: 16px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 56px;

	border-bottom: 1.5px solid #e0e5d6;
`;

export const Name = styled.div`
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;
	color: #969696;
`;

/* SelectBox UI */
export const SelectBoxWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SelectBoxContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;

	background: #f8f8f8;
	padding: 12px 32px;
	border-radius: 12px;
`;

export const SelectBoxLabel = styled.div`
	color: var(--text-grey-1, #696969);
	text-align: center;
	font-family: SUIT;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

export const ArrowIcon = styled.img`
	width: 20px;
	height: 20px;
`;
