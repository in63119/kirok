import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Layout, { LayoutProps } from 'components/Layout';
import { getAllInstitution } from 'apis/institution';
import KidRegisterItem, { KidRegisterForm, KidRegisterItemProps } from './KidRegisterItem';
import DoubleButton from 'components/common/DoubleButton';
import Spacing from 'components/common/Spacing';
import SelectBox from 'components/common/SelectBox';
import { GENDER_MAN } from './KidRegisterItem/index.constant';
import Divider from 'components/common/Divider';
import SingleButton from 'components/common/SingleButton';
import * as Styled from './index.styled';
import ValidationRule from 'utils/validators';
import { registerKidInfos } from 'apis/parent';
import { useRecoilState } from 'recoil';
import { kakaoState } from 'recoil/kakaoState';

const INITIAL_KID_FORM: KidRegisterForm = {
	name: '',
	birth: '',
	gender: GENDER_MAN,
	profileImageBase64: '',
};

const KidRegister: React.FC = () => {
	const [{ kakaoId }] = useRecoilState(kakaoState);

	const [selectedInstitutionIdx, setSelectedInstitutionIdx] = useState<number | undefined>();
	const [institutionList, setIntitutionList] = useState<string[]>([]);
	const [kidForms, setKidForms] = useState<KidRegisterForm[]>([INITIAL_KID_FORM]);
	const [mode, setMode] = useState<'create' | 'edit' | 'confirm' | 'complete'>('create');
	const editable = mode === 'create' || mode === 'edit';

	const title = useMemo(() => {
		switch (mode) {
			case 'create':
				return '소중한 자녀의 정보를 입력해 주세요 :)';
			case 'edit':
				return '등록할 자녀의 정보를 수정해 주세요 :)';
			case 'confirm':
				return '입력한 자녀의 정보를 확인 해주세요 :)';
			case 'complete':
				return '어린이집으로\n 자녀 등록 요청이 완료되었어요!';
		}
	}, [mode]);

	const subTitle: LayoutProps['subTitle'] = useMemo(() => {
		switch (mode) {
			case 'create':
			case 'edit':
				return {
					text: '*정확한 확인을 위해 실명을 입력해 주세요.',
					color: '#696969',
				};
			case 'confirm':
				return undefined;
			case 'complete':
				return {
					text: '요청이 수락되면 사용할 수 있어요 :)\n잠시만 기다려 주세요!',
					color: '282828',
				};
		}
	}, [mode]);

	const validKidForms: boolean = useMemo(() => {
		return kidForms.every(({ name, birth }) => {
			if (name && birth) {
				if (ValidationRule.name.every(({ condition }) => condition(name))) {
					if (ValidationRule.birthDate.every(({ condition }) => condition(birth))) {
						return true;
					}
				}
			}

			return false;
		});
	}, [kidForms]);

	const submit = useCallback(() => {
		if (selectedInstitutionIdx !== undefined) {
			const institutionName = institutionList[selectedInstitutionIdx];

			const data = kidForms.map((item) => {
				const gender = item.gender === GENDER_MAN ? 'M' : 'F';

				return { ...item, gender, institutionName };
			});

			registerKidInfos({
				parentId: kakaoId,
				data,
			});
		}
	}, [kakaoId, kidForms, institutionList, selectedInstitutionIdx]);

	const scrollToTop = useCallback(() => {
		if (window) {
			// TODO: 기능 확인 필요
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, []);

	const Button = useMemo(() => {
		switch (mode) {
			case 'create':
			case 'edit':
				return (
					<DoubleButton
						color="primary"
						left={{
							text: '자녀 추가 등록',
							size: 'large',
							state: 'default',
							handleClick: () => {
								scrollToTop();
								setKidForms((prev) => [...prev, INITIAL_KID_FORM]);
							},
						}}
						right={{
							text: '다음',
							size: 'large',
							state: validKidForms ? 'default' : 'disabled',
							handleClick: () => {
								scrollToTop();
								setMode('confirm');
							},
						}}
					/>
				);
			case 'confirm':
				return (
					//  TODO: 미니버튼 구조로 바꾸기
					<DoubleButton
						color="primary"
						left={{
							text: '수정하기',
							size: 'large',
							state: 'default',
							handleClick: () => {
								scrollToTop();
								setMode('create');
							},
						}}
						right={{
							text: '등록요청',
							size: 'large',
							state: 'default',
							handleClick: () => {
								submit();
								// TODO: 통신 완료하고 complete 로 옮기기
								scrollToTop();
								setMode('complete');
							},
						}}
					/>
				);
			case 'complete':
				return (
					<SingleButton
						text="키록에서 할 수 있는 ~?"
						size="large"
						state="default"
						color="primary"
						variant="solid-primary"
						handleClick={() => {
							console.log('router');
						}}
					/>
				);
		}
	}, [mode, validKidForms, submit, scrollToTop]);

	const deleteKidFormItem: KidRegisterItemProps['deleteForm'] = useCallback((idx) => {
		setKidForms((prev) => {
			const result = [...prev.slice(0, idx), ...prev.slice(idx + 1)];

			return result;
		});
	}, []);

	const setKidFormItem: KidRegisterItemProps['updateForm'] = useCallback((idx, updatedForm) => {
		setKidForms((prev) => {
			const result = [...prev.slice(0, idx), { ...updatedForm }, ...prev.slice(idx + 1)];

			return result;
		});
	}, []);

	const getInstitutionList = useCallback(async () => {
		const res = await getAllInstitution();

		if (res) {
			setIntitutionList(res);
		}
	}, []);

	useEffect(() => {
		// if (institutions.length === 0) // TODO: 최적화
		getInstitutionList();
	}, [getInstitutionList]);

	return (
		<>
			<Layout hasGoback={false} hasSidePadding={false} title={{ text: title }} subTitle={subTitle}>
				<Layout.SidePaddingBody>
					{editable ? (
						<SelectBox
							selectedIdx={selectedInstitutionIdx}
							data={institutionList}
							placeholder="어린이집 선택"
							handleClickItem={setSelectedInstitutionIdx}
						/>
					) : (
						<>
							{selectedInstitutionIdx !== undefined && (
								<Styled.ReadOnlySelectBoxWrapper>
									<Styled.ReadOnlySelectBoxLabel>
										{institutionList[selectedInstitutionIdx]}
									</Styled.ReadOnlySelectBoxLabel>
								</Styled.ReadOnlySelectBoxWrapper>
							)}
						</>
					)}
					<Spacing size={36} />
				</Layout.SidePaddingBody>
				{kidForms.map((form, idx) => (
					<React.Fragment key={idx}>
						<Layout.SidePaddingInner>
							<KidRegisterItem
								idx={idx}
								editable={editable}
								hasDeleteButton={idx !== 0 && editable}
								form={form}
								updateForm={setKidFormItem}
								deleteForm={deleteKidFormItem}
							/>
						</Layout.SidePaddingInner>
						{idx !== kidForms.length - 1 && (
							<>
								<Divider size="m" />
							</>
						)}
					</React.Fragment>
				))}
				<Layout.Footer>{Button}</Layout.Footer>
			</Layout>
		</>
	);
};

export default KidRegister;
