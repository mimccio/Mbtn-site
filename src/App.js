import React from 'react'

import AppWrapper from './components/AppWrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

export default () => (
  <main>
    <AppWrapper>
      <Header />
      <Content />
      <Footer />
    </AppWrapper>
  </main>
)
