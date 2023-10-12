import React from 'react'
import styled from 'styled-components'

const CheckInfo = (props) => {
    const {name, birth, gender} = props;
  return (
        <Container>
            <ProfileImg src="/images/icon_profile.png"></ProfileImg>
            <ProfileText>
                <Name>{name}</Name>
                <Birth>{birth}</Birth>
                <Gender>{gender}</Gender>
            </ProfileText>
        </Container>
  )
}

export default CheckInfo

const Container = styled.div`
    padding: 18px 16px;
    display: flex;
    background-color: #FFFFFF;
    width: 335px;
    border-radius: 14px;
    border: 1px solid #E0E5D6;
    gap: 16px;
    box-shadow: 0 0 10px 0 #5A624B29;
`

const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
`

const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Name = styled.div`
    padding: 9px 20px;
    width: 180px;
    border-radius: 12px;
    border: 1px solid #E0E5D6;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
`

const Birth = styled.div`
    padding: 9px 20px;
    width: 180px;
    border-radius: 12px;
    border: 1px solid #E0E5D6;
`

const Gender = styled.div`
    padding: 12px 0;
    text-align: center;
    border-radius: 12px;
    color: #76AB00;
    background-color: #F1F6E2;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
`

