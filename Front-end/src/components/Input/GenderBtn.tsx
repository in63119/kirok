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

const Container = styled.div``

const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 114px;
    height: 44px;
    border-radius: 12px;
    border: 1.5px solid #E0E3DA;
    text-align: center;
    
    &.choiced {
        border: 1.5px solid #A1DC2E;
    }
`

