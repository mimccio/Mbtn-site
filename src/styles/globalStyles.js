import { injectGlobal } from 'styled-components'
import { font, fontSize, spacing } from '../m-btn'

// eslint-disable-next-line
injectGlobal`

  {/* Body */}
  p, a, li, button {
    font-family: ${font.body};
    font-size: ${fontSize.body};
  }

  {/* Headings */}
  h1, h2, h3, h4, h5, h6 {
    font-family: ${font.heading};
  }

  h1 {
    font-size: ${fontSize.heading1};
  }
  h2 {
    font-size: ${fontSize.heading2};
  }
  h3 {
    font-size: ${fontSize.heading3};
  }
  h4, h5, h6 {
    font-size: ${fontSize.heading4};
  }

  {/* Spacing */}
  h1, h2, h3, h4, h5, h6,
  ul, ol, dl,
  blockquote, p, address,
  hr,
  table,
  fieldset, figure,
  pre {
    margin-bottom: ${spacing.small};
  }

  ul, ol,
  dd {
    margin-left: ${spacing.small};
  }

  a {
    text-decoration: none;
  }

  i {
    padding: 0;
  }

`
