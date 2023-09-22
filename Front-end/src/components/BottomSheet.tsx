import React, { useRef } from 'react'
import { styled } from 'styled-components'

const BottomSheet = (props) => {
// const ref = useRef();
const {institutions} = props;
  return (
    <BackgroundContainer>
      d
      {institutions?.map((items) => (
        <Container key={items.id} >
            {items.name}
        </Container>
      ))}
    </BackgroundContainer>
  )
}

export default BottomSheet

const BackgroundContainer = styled.div``

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 402px;
border: 1px solid grey;
border-radius: 14px 14px 0px 0px;
/* background-color: beige; */
`