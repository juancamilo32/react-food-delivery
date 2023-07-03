import React from 'react'

import { Navbar, Hero, Services, ChooseUs, HomeDelivery, Download, Footer } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <ChooseUs />
      <HomeDelivery />
      <Download />
      <Footer />
    </div>
  )
}

export default App