import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BottomSheet from "../components/BottomSheetModal/BottomSheet";

import { getAllInstitution } from "../apis/institution";

import { parentsState } from "../recoil/parentsState";
import { useRecoilState } from "recoil";
import { addKidsState } from "../recoil/addKidsState";
import useValid from "../hooks/useValid";
import InputText from "../components/Input/InputText";
import LastBottomSheet from "../components/BottomSheetModal/LastBottomSheet";
import GenderBtn from "../components/Input/GenderBtn";
import ProgressBtn from "../components/ProgressBtn";
import { useNavigate } from "react-router-dom";
import { fonts } from "../constants";

const Parents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [institutions, setIntitutions] = useState<string | null>(null);
  const [isChoiced, setIsChoiced] = useState("");
  const [parent, setParent] = useRecoilState(parentsState);
  const [addKids, setAddKids] = useRecoilState(addKidsState);

  const [form, setForm] = useState({
    name: "",
    birth: "",
    gender: "",
  });
  const [isGender, setIsGender] = useState("");
  const [isGenderChoiced, setIsGenderChoiced] = useState(null);
  const navigate = useNavigate();

  const { isValid } = useValid(form);

  const handleClick = () => {
    console.log(isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  const institutionsName = async () => {
    const res = await getAllInstitution();
    console.log(res);
    if (res) {
      setIntitutions(res);
    }
  };

  const handleChoice = (e) => {
    setIsChoiced(e.target.innerText);
    setParent((prev) => ({
      ...prev,
      institution: e.target.innerText,
    }));
    setIsModalOpen(false);
  };

  const handleGender = (e) => {
    console.log(e.target.innerText);
    setIsGender(e.target.innerText);
    setParent((prev) => ({
      ...prev,
      gender: e.target.innerText,
    }));
  };

  const addKid = () => {
    setAddKids((prev) => [...prev, parent]);
  };

  const Checkinfo = () => {
    navigate("/checkKidsinfo");
  };

  useEffect(() => {
    institutionsName();
  }, []);

  useEffect(() => {
    console.log(parent);
    console.log(addKids);
  }, [parent, addKids]);

  return (
    <Container>
      {isModalOpen && (
        <LastBottomSheet
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        >
          <BottomSheet
            handleChoice={handleChoice}
            institutions={institutions}
          />
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
          <Content>
            {isChoiced ? parent.institution : "어린이집을 선택해주세요."}
          </Content>
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
                <GenderBtn
                  type="남아"
                  title="남아"
                  isGender={isGender}
                  handleGender={handleGender}
                />
                <GenderBtn
                  type="여아"
                  title="여아"
                  isGender={isGender}
                  handleGender={handleGender}
                />
              </BtnWrapper>
            </InputWrapper>
          </InfoContainer>
          <BtnWrapper>
            <ProgressBtn title="자녀 추가 등록" onclick={addKid} />
            <ProgressBtn title="다음" onclick={Checkinfo} parent={parent} />
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
