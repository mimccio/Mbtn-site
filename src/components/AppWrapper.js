import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// global styles
import '../styles/reset.css'
import '../styles/normalize.css'
import '../styles/box-sizing.css'
// eslint-disable-next-line
import globalStyles from '../styles/globalStyles'

import { palette, setBackground } from 'm-btn'

const bg = setBackground('primary', 'light')

const Wrapper = styled.section`
  text-align: center;
  color: ${palette.primary.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${bg.color};
  min-height: calc(100vh);

  a {
    color: ${palette.primary.main};

    &:hover {
      text-decoration: underline;
      color: ${palette.primary.dark};
    }
  }
`

export default class AppWrapper extends Component {
  getChildContext () {
    return {
      bg: bg
    }
  }

  render () {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

AppWrapper.childContextTypes = {
  bg: PropTypes.object
}
