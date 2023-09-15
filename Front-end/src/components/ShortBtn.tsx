import React from 'react'
import styled from 'styled-components'

const ShortBtn = (props) => {
const {title, btncolor} = props

  return (
        <Container btncolor={btncolor}>
            <Title>
            {title}
            </Title>
            
        </Container>
  )
}

export default ShortBtn

const Container = styled.div<{btncolor: boolean}>`
background-color: ${({btncolor})=> btncolor ? "#55B5E6" : "#A1DC2E" };
display: flex;
justify-content: center;
align-items: center;
width: 168px;
height: 54px;
border-radius: 14px;
`

const Title = styled.div`
color: #FFFFFF;
font-weight: 600;
font-size: 18px;
line-height: 22px;
`