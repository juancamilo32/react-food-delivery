import React from 'react'

import { Navbar, Hero, Services, ChooseUs, HomeDelivery, Download } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <ChooseUs />
      <HomeDelivery />
      <Download />
    </div>
  )
}

export default App