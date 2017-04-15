import React from 'react'
import styled from 'styled-components'
import { fontSize, palette } from '../m-btn'

const Wrapper = styled.section`
    padding: 2rem;
`

const Title = styled.h1`
  font-size: ${fontSize.heading1};
  color: ${palette.info.light};
  text-shadow: 0 2px 5px ${palette.primary.main};

`

export default () => (
  <Wrapper>
    <Title>{'<Mbtn />'}</Title>
    <p>One to rule them all</p>
  </Wrapper>
)
