import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import palette from '../m-btn/config/colorPalette'
import Mbtn, { bg } from '../m-btn'

const background = bg('info', 'lighter')
const backgroundColor = background.color
const shadowColorLight = background.shadow.light
const shadowColorDark = background.shadow.dark

const Wrapper = styled.div`
  height: 400px;
  color: ${palette.primary.main};
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SmallSection = styled(Section)`
  width: 100%;
`

export default class Content extends Component {

  getChildContext () {
    return {
      color: backgroundColor,
      shadowColorLight: shadowColorLight,
      shadowColorDark: shadowColorDark
    }
  }

  render () {
    return (
      <Wrapper>
        <SmallSection>
          <Mbtn info accent icon textColorPalette='info' textNuance='dark' content='query_builder' />
          <Mbtn icon color='#4DD0E1' customTextColor='red' content='lock_open' />
          <Mbtn primary light icon textPlatte='success' textNuance='dark' content='check' />

          <Mbtn warning icon content='cloud_circle' />

          <Mbtn primary icon content='directions_bike' />
          <Mbtn danger accent light icon content='local_cafe' bold />
          <Mbtn info icon textColorPalette='primary' textNuance='lighter' content='query_builder' />
          <Mbtn info light icon textPalette='primary' textNuance='dark' content='airplanemode_active' />

          <Mbtn success icon content='code' />
          <Mbtn primary dark icon iconClass='fa fa-hand-peace-o' />
          <Mbtn icon grey darker iconClass='devicon-react-original colored' />
          <Mbtn warning light icon iconClass='devicon-github-plain colored' />
          <Mbtn color='#3B5998'icon iconClass='fa fa-facebook' bold />
          <Mbtn info light icon iconClass='fa fa-pied-piper-pp' />
        </SmallSection>

        <Section>
          <Mbtn primary content='Primary' />
          <Mbtn primary dark content='Dark' />
          <Mbtn primary accent content='Accent' />

          <Mbtn info content='Info' bold />
          <Mbtn info light content='Light' />
          <Mbtn info dark content='Dark' />

          <Mbtn warning textColor='info' textNuance='dark' content='Warning' bold />
          <Mbtn warning light content='Light' />
          <Mbtn warning dark content='Dark' />

          <Mbtn primary lighter textNuance='dark' content='darkText' />
          <Mbtn success accent customTextColor='red' content='custom' />
          <Mbtn success dark textPalette='warning' textNuance='light' content=' ☀ Hi ☯ ' />
          <Mbtn color='#4DD0E1' textPalette='primary' textNuance='dark' content='Bonjour' />
        </Section>

      </Wrapper>
    )
  }

}
Content.childContextTypes = {
  color: PropTypes.string,
  shadowColorLight: PropTypes.string,
  shadowColorDark: PropTypes.string
}
