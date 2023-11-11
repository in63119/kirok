import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import useValid from '../hooks/useValid';
import { useNavigate } from 'react-router-dom';

// Components
import BottomSheet from '../components/BottomSheetModal/BottomSheet';
import InputText from '../components/Input/InputText';
import LastBottomSheet from '../components/BottomSheetModal/LastBottomSheet';
import GenderBtn from '../components/Input/GenderBtn';
import ProgressBtn from '../components/ProgressBtn';

// Api
import { getAllInstitution } from '../apis/institution';

// Recoil
import { parentsState } from '../recoil/parentsState';
import { useRecoilState } from 'recoil';
import { addKidsState } from '../recoil/addKidsState';
import { PageUrls } from '../constants/page-urls';
import Layout from '../components/Layout';

const Parents = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [institutions, setIntitutions] = useState<string[]>([]);
	const [isChoiced, setIsChoiced] = useState('');
	const [parent, setParent] = useRecoilState(parentsState);
	const [, setAddKids] = useRecoilState(addKidsState);

	const [form, setForm] = useState({
		name: '',
		birth: '',
		gender: '',
	});
	const [isGender, setIsGender] = useState('');
	const navigate = useNavigate();

	const { isValid } = useValid(form);

	const handleClick = () => {
		setIsModalOpen(!isModalOpen);
	};

	const institutionsName = useCallback(async () => {
		const res = await getAllInstitution();

		if (res) {
			setIntitutions(res);
		}
	}, []);

	// TODO: 임시로 any
	const handleChoice = (e: any) => {
		setIsChoiced(e.target.innerText);
		setParent((prev) => ({
			...prev,
			institution: e.target.innerText,
		}));
		setIsModalOpen(false);
	};

	const handleGender = (e: any) => {
		setIsGender(e.target.innerText);
		setParent((prev) => ({
			...prev,
			gender: e.target.innerText,
		}));
	};

	const addKid = () => {
		// TODO: addkid 와 parent 공존하는 이유?
		setAddKids((prev) => [...prev, parent]);
	};

	const Checkinfo = () => {
		navigate(PageUrls.CHECK_KIDS_INFO);
	};

	useEffect(() => {
		institutionsName();
	}, [institutionsName]);

	return (
		<Layout
			hasGoback={false}
			title={{ text: '안녕하세요!\n키록에 오신 걸 환영합니다.\n소중한 자녀의 정보를 등록해주세요' }}
			subTitle={{ text: '* 정확한 자녀의 확인을 위해 실명을 입력해주세요' }}
		>
			{isModalOpen && (
				<LastBottomSheet closeModal={() => setIsModalOpen(false)}>
					<BottomSheet handleChoice={handleChoice} institutions={institutions} />
				</LastBottomSheet>
			)}
			<Layout.Body>
				<ChoiceBtn onClick={handleClick}>
					<Wrapper>
						<Content>{isChoiced ? parent.institution : '어린이집을 선택해주세요.'}</Content>
						<Arrow src="/images/icon_arrow.png" />
					</Wrapper>
				</ChoiceBtn>
			</Layout.Body>
			{isChoiced && !isModalOpen && (
				// TODO: 자녀 정보 확인 컴포넌트랑 중복
				<KidsInfoContainer>
					<Title>자녀 정보 입력</Title>
					<InfoContainer>
						<Photo src="images/icon_profile.png"></Photo>
						<InputWrapper>
							<InputText
								place="이름을 입력하세요"
								type="name"
								value={form.name}
								onChange={(e) => {
									setForm({ ...form, name: e.target.value });
									setParent({ ...parent, name: e.target.value });
								}}
								valid={!isValid.isName}
							/>
							<InputText
								place="생년월일을 입력하세요"
								type="birth"
								value={form.birth}
								onChange={(e) => {
									setForm({ ...form, birth: e.target.value });
									setParent({ ...parent, birth: e.target.value });
								}}
								valid={!isValid.isBirth}
							/>
							<BtnWrapper>
								<GenderBtn type="남아" title="남아" isGender={isGender} handleGender={handleGender} />
								<GenderBtn type="여아" title="여아" isGender={isGender} handleGender={handleGender} />
							</BtnWrapper>
						</InputWrapper>
					</InfoContainer>
				</KidsInfoContainer>
			)}
			<Layout.Footer>
				<BtnWrapper>
					<ProgressBtn title="자녀 추가 등록" onclick={addKid} />
					<ProgressBtn title="다음" onclick={Checkinfo} />
				</BtnWrapper>
			</Layout.Footer>
		</Layout>
	);
};

export default Parents;

const ChoiceBtn = styled.button`
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 8px 20px;
	border: 1.5px solid #e0e5d6;
	border-radius: 12px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const Content = styled.div`
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	text-align: center;
	color: #969696;
`;

const Arrow = styled.img`
	width: 20px;
	height: 20px;
`;

const KidsInfoContainer = styled.div`
	margin-top: 40px;
`;

const Title = styled.div`
	margin-bottom: 32px;
	font-size: 16px;
	line-height: 20px;
	font-weight: 500;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 18px;
`;

const Photo = styled.img`
	width: 80px;
	height: 80px;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const BtnWrapper = styled.div`
	display: flex;
	gap: 8px;
	width: 100%;
`;
