import Header from './views/Header'
import Footer from './views/Footer'
import Home from './views/home/index.tsx'
import Active from './views/active/index.tsx'
import Test from './views/test.tsx'
import { Routes, Route } from 'react-router-dom'
// import Banner from './views/home/Banner'
// import About from './views/home/About'
// import News from './views/home/News'
// import Policy from './views/home/Policy'
// import Merchandise from './views/home/Merchandise'
// import Service from './views/home/Service'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Test />} ></Route>
        <Route path='/active' element={<Active />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
