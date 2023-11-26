import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Layout, { LayoutProps } from 'components/Layout';
import { getAllInstitution } from 'apis/institution';
import KidRegisterItem, { KidRegisterForm, KidRegisterItemProps } from './KidRegisterItem';
import DoubleButton from 'components/common/DoubleButton';
import Spacing from 'components/common/Spacing';
import SelectBox from 'components/common/SelectBox';
import { GENDER_MAN } from './KidRegisterItem/index.constant';
import Divider from 'components/common/Divider';

const INITIAL_KID_FORM: KidRegisterForm = {
	name: '',
	birth: '',
	gender: GENDER_MAN,
};

const KidRegister: React.FC = () => {
	const [selectedInstitutionIdx, setSelectedInstitutionIdx] = useState<number | undefined>();
	const [institutionList, setIntitutionList] = useState<string[]>([]);

	const [kidForms, setKidForms] = useState<KidRegisterForm[]>([INITIAL_KID_FORM]);

	const [mode] = useState<'create' | 'edit' | 'readOnly'>('create');
	const editable = mode === 'edit' || mode === 'create';

	const setKidFormItem: KidRegisterItemProps['setForm'] = useCallback((idx, updatedForm) => {
		setKidForms((prev) => {
			const result = [...prev.slice(0, idx), { ...updatedForm }, ...prev.slice(idx + 1)];
			console.log(idx, result);

			return result;
		});
	}, []);

	const title = useMemo(() => {
		switch (mode) {
			case 'create':
				return '입력한 자녀의 정보를 확인 해주세요 :)';
			case 'edit':
				return '등록할 자녀의 정보를 수정해 주세요 :)';
			case 'readOnly':
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
			case 'readOnly':
				return {
					text: '요청이 수락되면 사용할 수 있어요 :) 잠시만 기다려 주세요!',
					color: '282828',
				};
		}
	}, [mode]);

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
					<SelectBox
						selectedIdx={selectedInstitutionIdx}
						data={institutionList}
						placeholder="어린이집 선택"
						handleClickItem={setSelectedInstitutionIdx}
					/>
					<Spacing size={56} />
				</Layout.SidePaddingBody>
				{kidForms.map((form, idx) => (
					<React.Fragment key={idx}>
						<Layout.SidePaddingInner>
							<KidRegisterItem
								idx={idx}
								editable={editable}
								hasDeleteButton={idx !== 0 && editable}
								form={form}
								setForm={setKidFormItem}
							/>
						</Layout.SidePaddingInner>
						{idx !== kidForms.length - 1 && (
							<>
								<Divider size="m" />
							</>
						)}
					</React.Fragment>
				))}
				<Layout.Footer>
					<DoubleButton
						color="primary"
						left={{
							text: '자녀 추가 등록',
							size: 'large',
							state: 'default',
							handleClick: () => {
								setKidForms((prev) => [...prev, INITIAL_KID_FORM]);
							},
						}}
						right={{
							text: '다음',
							size: 'large',
							state: 'default',
							handleClick: () => {
								console.log('checkinfo');
							},
						}}
					/>
				</Layout.Footer>
			</Layout>
		</>
	);
};

export default KidRegister;
