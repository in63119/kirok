import React from "react";
import styled from "styled-components";
import ShortBtn from "../components/Button/ShortBtn";
import { Link } from "react-router-dom";

const SelectIntro = () => {
  const clickBtn = () => {};
  return (
    <Container>
      <Logo src="/images/KIROK.png"></Logo>
      <ButtonsWrap>
        <Link to="/">
          <ShortBtn onClick={clickBtn} title={"부모님용"} btncolor={"true"} />
        </Link>
        <ShortBtn title={"선생님용"} btncolor={"false"} />
      </ButtonsWrap>
    </Container>
  );
};

export default SelectIntro;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Logo = styled.img`
  margin-bottom: 180px;
  width: 260px;
  height: 76px;
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
