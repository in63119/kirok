import React, { useRef, useState } from "react";
import { styled } from "styled-components";

const BottomSheet = (props) => {
  // const ref = useRef();
  const { institutions, handleChoice } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <BackgroundContainer>
    <Container>
      {institutions?.map((items: string, index: number) => (
        <InputContainer onClick={handleChoice} key={index}>
          <Name>{items}</Name>
          <Line />
        </InputContainer>
      ))}
    </Container>
    // </BackgroundContainer>
  );
};

export default BottomSheet;

const BackgroundContainer = styled.div``;

const Container = styled.div`
  /* z-index: 3; */
  padding: 40px 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 402px; */
  /* border: 1px solid grey;
border-radius: 14px 14px 0px 0px; */
  /* background-color: red; */
`;

const InputContainer = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #969696;
`;

const Line = styled.div`
  margin-top: 16px;
  width: 85%;
  height: 1.5px;
  background-color: #e0e5d6;
`;
