import React from 'react'
import { styled } from 'styled-components'

interface Prop {
    gender: "남아" | "여아"
}

const GenderBtn = (prop: Prop) => {

  return (
        <Container>
            <BtnWrapper>
                <Btn>

                </Btn>
            </BtnWrapper>
        </Container>
  )
}

export default GenderBtn

const Container = styled.div``

const BtnWrapper = styled.div``

const Btn = styled.div`
    width: 114px;
    height: 44px;
    border-radius: 12px;
    border: 1.5px solid #A1DC2E;
`