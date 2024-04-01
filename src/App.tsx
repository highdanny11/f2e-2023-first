import Header from './views/Header'
import Footer from './views/Footer'
import Home from './views/home/index.tsx'
import Active from './views/active/index.tsx'
import Policy from './views/policy/index.tsx'
import Test from './views/test.tsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Test />} ></Route>
        <Route path='/active' element={<Active />}></Route>
        <Route path='/policy/:id' element={<Policy />}></Route>
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
