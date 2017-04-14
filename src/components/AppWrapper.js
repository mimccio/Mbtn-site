import React from 'react'
import styled from 'styled-components'

// global styles
import '../styles/reset.css'
import '../styles/normalize.css'
import '../styles/box-sizing.css'

import globalStyles from '../styles/globalStyles'

import { palette, defaultTextColor, defaultBackgroundColor } from '../m-btn'

const Wrapper = styled.section`
  color: ${defaultTextColor};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${defaultBackgroundColor};
  min-height: 100vh;

  a {
    color: ${palette.primary.main};

    &:hover {
      text-decoration: underline;
    }
  }
`

export default (props) => (

  <Wrapper>
    {props.children}
  </Wrapper>
)
