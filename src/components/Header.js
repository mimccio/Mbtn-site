import React from 'react'
import styled from 'styled-components'
import { fontSize, palette } from '../m-btn'

const Wrapper = styled.section`
    text-align: center;
    padding: 2rem;
`

const Title = styled.h1`
  color: ${palette.primary};
  font-size: ${fontSize.heading1};
`

export default () => (
  <Wrapper>
    <Title>{'<Mbtn />'}</Title>
    <p>One to rule them all</p>
  </Wrapper>
)
