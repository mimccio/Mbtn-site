import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Mbtn, { setBackground, palette } from '../m-btn'

const bg = setBackground('grey', 'lighter')

const Wrapper = styled.div`
  height: 400px;
  color: ${palette.primary.main};
  background-color: ${bg.color};
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin: 0;
  flex-direction: column;
  align-items: center;
  border-radius: 0;
  box-shadow: 0 2px 8px ${palette.primary.main};

  @media (min-width:881px) {
  margin: 0 4rem;
  border-radius: 50px;
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
      bg: bg
    }
  }

  render () {
    return (
      <Wrapper>
        <SmallSection>
          <Mbtn info accent icon textColor='info' textNuance='dark' content='query_builder' />
          <Mbtn icon color='#4DD0E1' textColor='PaleVioletRed' content='lock_open' />
          <Mbtn primary light icon textPlatte='success' textNuance='dark' content='check' />

          <Mbtn warning icon content='cloud_circle' />

          <Mbtn primary icon content='directions_bike' />
          <Mbtn danger accent light icon content='local_cafe' bold />
          <Mbtn info icon textColor='warning' textNuance='light' content='query_builder' />
          <Mbtn info light icon textColor='primary' textNuance='dark' content='airplanemode_active' />

          <Mbtn success icon content='code' />
          <Mbtn primary dark icon iconClass='fa fa-hand-peace-o' />
          <Mbtn icon grey darker iconClass='devicon-react-original colored' />
          <Mbtn warning light icon iconClass='devicon-github-plain colored' />
          <Mbtn color='#3B5998'icon iconClass='fa fa-facebook' bold />
          <Mbtn info light icon iconClass='fa fa-pied-piper-pp' />
        </SmallSection>

        <Section>
          <Mbtn primary content='<Mbtn/>' />
          <Mbtn primary accent content='Accent' />

          <Mbtn info content='Info' bold />
          <Mbtn info light content='Light' />

          <Mbtn warning textColor='info' textNuance='dark' content='Warning' />
          <Mbtn warning light content='Light' />
          <Mbtn warning dark content='Dark' />

          <Mbtn primary lighter textColor='danger' textNuance='dark' content='custom' />
          <Mbtn success accent textColor='MidnightBlue ' content='custom' />
          <Mbtn success dark content=' ☀ Hi ☯ ' />
          <Mbtn color='#4DD0E1' textColor='primary' content='Bonjour' />
        </Section>

      </Wrapper>
    )
  }

}
Content.childContextTypes = {
  bg: PropTypes.object
}
