import React from 'react'
import styled from 'styled-components'

// global styles
import '../styles/reset.css'
import '../styles/normalize.css'
import '../styles/box-sizing.css'

import globalStyles from '../styles/globalStyles'

import { palette, defaultTextColor, setBackground } from '../m-btn'

const bgColor = setBackground('primary', 'light').color

const Wrapper = styled.section`
  color: ${palette.primary.dark};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${bgColor};
  min-height: 100vh;

  a {
    color: ${palette.primary.main};

    &:hover {
      text-decoration: underline;
      color: ${palette.primary.dark};
    }
  }
`

export default (props) => (

  <Wrapper>
    {props.children}
  </Wrapper>
)
