import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import useValid from '@kirok-fe/hooks/useValid';
import { useNavigate } from 'react-router-dom';
import { fonts } from '@kirok-fe/constants';

// Components
import BottomSheet from '@kirok-fe/components/BottomSheetModal/BottomSheet';
import InputText from '@kirok-fe/components/Input/InputText';
import LastBottomSheet from '@kirok-fe/components/BottomSheetModal/LastBottomSheet';
import GenderBtn from '@kirok-fe/components/Input/GenderBtn';
import ProgressBtn from '@kirok-fe/components/ProgressBtn';

// Api
import { getAllInstitution } from '@kirok-fe/apis/institution';

// Recoil
import { parentsState } from '@kirok-fe/recoil/parentsState';
import { useRecoilState } from 'recoil';
import { addKidsState } from '@kirok-fe/recoil/addKidsState';
import { PageUrls } from '@kirok-fe/constants/page-urls';

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
		<Container>
			{isModalOpen && (
				<LastBottomSheet closeModal={() => setIsModalOpen(false)}>
					<BottomSheet handleChoice={handleChoice} institutions={institutions} />
				</LastBottomSheet>
			)}

			<Description>
				안녕하세요! <br />
				키록에 오신 걸 환영합니다.
				<br />
				소중한 자녀의 정보를 등록해주세요
				<LowerText>*정확한 자녀의 확인을 위해 실명을 입력해주세요</LowerText>
			</Description>
			<ChoiceBtn onClick={handleClick}>
				<Wrapper>
					<Content>{isChoiced ? parent.institution : '어린이집을 선택해주세요.'}</Content>
					<Arrow src="/images/icon_arrow.png" />
				</Wrapper>
			</ChoiceBtn>

			{isChoiced && !isModalOpen && (
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
					<BtnWrapper>
						<ProgressBtn title="자녀 추가 등록" onclick={addKid} />
						<ProgressBtn title="다음" onclick={Checkinfo} />
					</BtnWrapper>
				</KidsInfoContainer>
			)}
		</Container>
	);
};

export default Parents;

const Container = styled.div`
	padding: 60px 25px 0;
	height: 100vh;
	/* width: 100vw; */
	font-family: ${fonts.suit.regular};
`;

const Description = styled.div`
	/* margin-top : 50px; */
	margin-bottom: 30px;
	font-size: 20px;
	font-weight: 600;
	line-height: 28px;
`;

const LowerText = styled.div`
	font-size: 15px;
	font-weight: 400;
	line-height: 19px;
	color: #696969;
`;

const ChoiceBtn = styled.button`
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 335px;
	/* width: 100%; */
	height: 51px;
	border: 1.5px solid #e0e5d6;
	border-radius: 12px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 295px;
	height: 35px;
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
	/* height: 70%; */
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
`;

const Photo = styled.img`
	margin-right: 18px;
	width: 80px;
	height: 80px;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const BtnWrapper = styled.div`
	display: flex;
	gap: 8px;
`;
