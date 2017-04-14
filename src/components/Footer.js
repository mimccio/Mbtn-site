import React from 'react'
import styled from 'styled-components'
import { fontSize, palette } from '../m-btn'

const Wrapper = styled.section`
  height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 4rem;
`

export default () => (
  <Wrapper>
    <div>
      <p>
        made by
        <a href='https://twitter.com/mimccio' target='_blank'> @mimccio </a>
        with
        <a
          href='https://styled-components.com/' target='_blank'
        > styled-components
        </a>
      </p>
    </div>

  </Wrapper>
)
