import React from "react";
import styled from "styled-components";
import { fonts } from "../../constants";
import { useNavigate } from "react-router-dom";

// Recoil
import { useRecoilValue } from "recoil";
import { parentsState } from "../../recoil/parentsState";
import { kakaoState } from "../../recoil/kakaoState";

// Api
import { childRegistration } from "../../apis/kids";

interface Prop {
  type: "edit" | "request";
  path: string;
}

const LongBtn = (props: Prop) => {
  const navigate = useNavigate();
  const { path, type } = props;
  const { kakaoId } = useRecoilValue(kakaoState);
  const requestKidInfo = useRecoilValue(parentsState);

  async function clickHandler() {
    switch (type) {
      case "edit":
        navigate(path);
        break;
      case "request":
        const reqData = {
          requestKidInfo,
          kakaoId,
        };
        const result = await childRegistration(reqData);

        // 기관 요청 등록 후 응답
        console.log("기관 요청 등록 후 응답 : ", result);
        break;
    }
  }

  return (
    <Container onClick={clickHandler} type={type}>
      <Text>{type === "edit" ? "정보 수정하기" : "등록 요청"}</Text>
    </Container>
  );
};

export default LongBtn;

const Container = styled.div<{ type: string }>`
  padding: 16px 0;
  display: flex;
  justify-content: center;
  width: 335px;
  border-radius: 14px;
  background-color: ${({ type }) => (type === "edit" ? "#FFFFFF" : "#A1DC2E")};
  color: ${({ type }) => (type === "edit" ? "#969696" : "#FFFFFF")};
  border: 1px solid ${({ type }) => (type === "edit" ? "#969696" : "")};
  font-family: ${fonts.suit.regular};
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const Text = styled.div``;
