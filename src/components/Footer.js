import React from 'react'
import styled from 'styled-components'
import { palette } from '../m-btn'

const Wrapper = styled.section`
  margin-top: auto;
`

const LoveIcon = styled.i`
  color: ${palette.warning.main};
`

export default () => (
  <Wrapper>
    <div>
      <p>
        <a href='https://github.com/mimccio/Mbtn-site'>
          <i className='fa fa-github' aria-hidden='true' /> view source
        </a>
      </p>
      <p>
        made by <a href='https://twitter.com/mimccio' target='_blank'>
          @mimccio
        </a> with <LoveIcon className='fa fa-heart' aria-hidden='true' /> and <a
          href='https://styled-components.com/' target='_blank'
        >styled-components
        </a>
      </p>

    </div>

  </Wrapper>
)
