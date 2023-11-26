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
	updateForm: (idx: number, updatedForm: KidRegisterForm) => void;
	deleteForm: (idx: number) => void;
}

const KidRegisterItem: React.FC<KidRegisterItemProps> = ({
	idx,
	form,
	editable,
	hasDeleteButton,
	updateForm,
	deleteForm,
}) => {
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
					<Styled.DeleteArea onClick={() => deleteForm(idx)}>
						<Styled.DeleteIcon src="/images/parent/minus-circle.png" />
					</Styled.DeleteArea>
				)}
				<Styled.InfoContainer>
					{/* TODO: form.photo 업로드 */}
					<Styled.Photo src="/images/parent/kid-register-profile.png" />
					<Styled.RightArea>
						<Styled.Input
							placeholder="이름을 입력하세요"
							type="name"
							value={form.name}
							onChange={(e) => {
								updateForm(idx, { ...form, name: e.target.value });
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
								updateForm(idx, { ...form, birth: e.target.value });
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
									updateForm(idx, { ...form, gender: GENDER_MAN });
								}}
							/>
							<SingleButton
								text={GENDER_WOMAN}
								size="small"
								color="primary"
								state={!isGenderMan ? 'default' : 'disabled'}
								variant="outline"
								handleClick={() => {
									updateForm(idx, { ...form, gender: GENDER_WOMAN });
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
			<>
				<Spacing size={20} />
				<Styled.InfoContainer>
					{/* TODO: photo 업로드 */}
					<Styled.Photo src="/images/parent/kid-register-profile.png" />
					<Styled.RightArea>
						<Styled.ReadonlyInput>{name}</Styled.ReadonlyInput>
						<Spacing size={8} />
						<Styled.ReadonlyInput>{birth}</Styled.ReadonlyInput>
						<Spacing size={8} />
						<Styled.Gender>{gender}</Styled.Gender>
					</Styled.RightArea>
				</Styled.InfoContainer>
				<Spacing size={32} />
			</>
		);
	} else {
		return <>확인 필요 : 정의되지 않은 mode 입니다.</>;
	}
};

export default KidRegisterItem;
