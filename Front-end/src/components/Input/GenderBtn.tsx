import React from 'react'

import { styled } from 'styled-components'

const GenderBtn = (prop) => {
    const {title, type, handleGender, isGender} = prop

    const list = [
        {type: "male",title:"남아"}, 
        {type: "female",title:"여아"}
    ]
  return (
        <Container>
            <Btn className={`${type === isGender ? "choiced" : "" }`} onClick={handleGender}>{title}</Btn>
        </Container>
  )
}

export default GenderBtn

const Container = styled.div`
    cursor: pointer;
    -webkit-tap-highlight-color : transparent;

`

const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 114px;
    height: 44px;
    border-radius: 12px;
    border: 1.5px solid #E0E3DA;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    color: #E0E3DA;
    
    &.choiced {
        border: 1.5px solid #A1DC2E;
        color: #A1DC2E;
    }
`

