import { ChangeEvent, useState } from 'react'
import Header from './views/Header'
import Footer from './views/Footer'
import Banner from './views/home/Banner'
import About from './views/home/About'
import News from './views/home/News'
import Policy from './views/home/Policy'


function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <News />
      <Policy />
      <Footer />
    </>
  )
}

export default App
