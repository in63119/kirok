import React, { useEffect, useState } from 'react';
import * as Styled from './index.styled';
import { GENDER_MAN, GENDER_WOMAN } from './index.constant';
import Spacing from 'components/common/Spacing';
import SingleButton from 'components/common/SingleButton';

export interface KidRegisterForm {
	name: string;
	birth: string;
	gender: string;
}

export interface KidRegisterItemProps {
	idx: number;
	editable: boolean;
	hasDeleteButton: boolean;
	form: KidRegisterForm;
	setForm: (idx: number, updatedForm: KidRegisterForm) => void;
}

const KidRegisterItem: React.FC<KidRegisterItemProps> = ({ idx, form, editable, hasDeleteButton, setForm }) => {
	const [mode, setMode] = useState<'edit' | 'readOnly'>('edit');

	const { name, birth, gender } = form;

	const isGenderMan = form.gender === GENDER_MAN;

	useEffect(() => {
		if (editable) {
			setMode('edit');
		} else {
			setMode('readOnly');
		}
	}, [editable]);

	if (mode === 'edit') {
		return (
			<>
				<Spacing size={20} />
				{hasDeleteButton && (
					<Styled.DeleteArea>
						<Styled.DeleteIcon src="/images/parent/minus-circle.png" />
					</Styled.DeleteArea>
				)}
				<Styled.InfoContainer>
					<Styled.Photo src="/images/parent/kid-register-profile.png" />
					<Styled.RightArea>
						<Styled.Input
							placeholder="이름을 입력하세요"
							type="name"
							value={form.name}
							onChange={(e) => {
								setForm(idx, { ...form, name: e.target.value });
							}}
							// valid={!isValid.isName}
						/>
						<Spacing size={8} />
						<Styled.Input
							placeholder="생년월일을 입력하세요"
							type="birth"
							value={form.birth}
							onChange={(e) => {
								console.log(e);
								setForm(idx, { ...form, birth: e.target.value });
							}}
							// valid={!isValid.isBirth}
						/>
						<Spacing size={8} />
						<Styled.BtnWrapper>
							<SingleButton
								text={GENDER_MAN}
								size="small"
								color="primary"
								state={isGenderMan ? 'default' : 'disabled'}
								variant="outline"
								handleClick={() => {
									setForm(idx, { ...form, gender: GENDER_MAN });
								}}
							/>
							<SingleButton
								text={GENDER_WOMAN}
								size="small"
								color="primary"
								state={!isGenderMan ? 'default' : 'disabled'}
								variant="outline"
								handleClick={() => {
									setForm(idx, { ...form, gender: GENDER_WOMAN });
								}}
							/>
						</Styled.BtnWrapper>
					</Styled.RightArea>
				</Styled.InfoContainer>
				<Spacing size={32} />
			</>
		);
	} else if (mode === 'readOnly') {
		return (
			<Styled.Container>
				<Styled.ProfileImg src="/images/icon_profile.png" />
				<Styled.ProfileText>
					<Styled.Name>{name}</Styled.Name>
					<Styled.Birth>{birth}</Styled.Birth>
					<Styled.Gender>{gender}</Styled.Gender>
				</Styled.ProfileText>
			</Styled.Container>
		);
	} else {
		return <>확인 필요 : 정의되지 않은 mode 입니다.</>;
	}
};

export default KidRegisterItem;
