import React, { useCallback, useEffect, useState } from 'react';
import { GENDER_MAN, GENDER_WOMAN } from './index.constant';
import Spacing from 'components/common/Spacing';
import SingleButton from 'components/common/SingleButton';
import InputBox from 'components/Input/InputBox';
import ValidationRule from 'utils/validators';
import * as Styled from './index.styled';
import ImageUpload, { ImageUploadProps } from 'components/Input/ImageUpload';

const DEFUALT_PROFILE_IMAGE = '/images/parent/kid-register-profile.png';

export interface KidRegisterForm {
	name: string;
	birth: string;
	gender: string;
	profileImageBase64: string;
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

	const { name, birth, gender, profileImageBase64 } = form;

	const isGenderMan = form.gender === GENDER_MAN;

	const uploadImage: ImageUploadProps['uploadImage'] = useCallback(
		(profileImageBase64: string) => {
			updateForm(idx, { ...form, profileImageBase64 });
		},
		[idx, form, updateForm],
	);

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
					<Styled.LeftArea>
						<ImageUpload src={profileImageBase64 || DEFUALT_PROFILE_IMAGE} uploadImage={uploadImage} />
					</Styled.LeftArea>
					<Styled.RightArea>
						<InputBox
							placeholder="이름"
							type="name"
							value={form.name}
							onChange={(e) => {
								updateForm(idx, { ...form, name: e.target.value });
							}}
							validators={ValidationRule.name}
						/>
						<Spacing size={8} />
						<InputBox
							placeholder="생년월일(8자리)"
							type="birth"
							value={form.birth}
							onChange={(e) => {
								updateForm(idx, { ...form, birth: e.target.value });
							}}
							validators={ValidationRule.birthDate}
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
					<Styled.LeftArea>
						<Styled.ProfileImage src={profileImageBase64} />
					</Styled.LeftArea>
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
