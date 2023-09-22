import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import BottomSheet from '../components/BottomSheet';
import KidsInfo from '../components/KidsInfo';

import { childRegistration } from "../apis/kids";
import { getAllInstitution } from "../apis/institution";

const Parents = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = () => {
        console.log(isModalOpen)
        setIsModalOpen(!isModalOpen)
    }

    const [institutions, setIntitutions] = useState<string | null>(null);
    const institutionsName = async () => {
        const res = await getAllInstitution();
        console.log(res)
        if (res) {
            setIntitutions(res);
        }
    }

  
    

  return (
        <Container>
            <Description>
            안녕하세요! <br/>
            키록에 오신 걸 환영합니다.<br/>
            소중한 자녀의 정보를 등록해주세요
                <LowerText>
                    *정확한 자녀의 확인을 위해 실명을 입력해주세요
                </LowerText>
            </Description>
            <ChoiceBtn onClick={handleClick}>
                <Wrapper>
                <Content>어린이집을 선택해주세요.</Content>
                <Arrow src='/images/icon_arrow.png' />
                </Wrapper>
            </ChoiceBtn>
            {/* <KidsInfo /> */}
        {isModalOpen && ( <BottomSheet institutions={institutions} closeModal={()=> setIsModalOpen(false)} />)}


        </Container>
  )
}

export default Parents

const Container = styled.div`
padding: 60px 25px 0;
height: 100vh;
`

const Description = styled.div`
    /* margin-top : 50px; */
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
`

const LowerText = styled.div`
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    color: #696969;
`

const ChoiceBtn = styled.button`
    background-color: transparent; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 335px;
    height: 51px;
    border: 1.5px solid #E0E5D6;
    border-radius: 12px;
    cursor: pointer;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 295px;
    height: 35px;
`

const Content = styled.div`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;
    color: #969696;
`

const Arrow = styled.img`
    width: 20px;
    height: 20px;
`
