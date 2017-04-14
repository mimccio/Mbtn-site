import React from 'react'
import styled from 'styled-components'
import { fontSize, palette } from '../m-btn'

const Wrapper = styled.section`
    text-align: center;
`

const Title = styled.h1`
  color: ${palette.primary};
  font-size: ${fontSize.heading1};
`

export default () => (
  <Wrapper>
    <Title>M-button</Title>
    <p>One to rule them all</p>
    <p>made with <a href='https://styled-components.com/' target='_blank'>styled-components</a></p>
  </Wrapper>
)
