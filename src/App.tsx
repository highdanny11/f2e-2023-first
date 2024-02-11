import { ChangeEvent, useState } from 'react'
import Whale from '@/assets/images/icon/whale.png'
import Header from './views/Header'
import Footer from './views/Footer'
import Banner from './views/home/Banner'
import About from './views/home/About'
import News from './views/home/News'
import Policy from './views/home/Policy'
import product1 from '@/assets/images/merchandise/product1.png'
import product2 from '@/assets/images/merchandise/product2.png'
import product3 from '@/assets/images/merchandise/product3.png'


function App() {
  const [ product, setProduct ] = useState('product1')
  const handleProductChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.value) {
      setProduct(e.target.value)
    }
  }
  return (
    <>
      <Header />
      <Banner />
      <About />
      <News />
      <Policy />
      <section className="
        bg-[url('@/assets/images/merchandise/globe.png')] bg-[360px,360px] bg-[center,top] bg-no-repeat py-4
        md:bg-center md:bg-none
      ">
        <h2 className="
          flex justify-between items-center pl-7 pr-[21px] text-[32px] leading-[140%] text-primary mb-6
          md:w-[371px] md:mx-auto md:text-white md:h-[231px] md:px-0 md:pt-[4%]
          md:justify-center md:bg-[url('@/assets/images/icon/whale.png')] md:bg-no-repeat md:bg-center md:bg-contain 
          md:z-10 md:relative
        ">
          渝魚小物
          <img className="w-[87px] md:hidden" src={Whale} alt="Whale" />
        </h2>
        <div className="
        md:bg-secondary md:py-8 md:rounded-tr-[100px] md:rounded-bl-[100px] md:relative after:hidden
          after:md:bg-[url('@/assets/images/merchandise/globe.png')] after:bg-contain after:absolute
          after:w-[360px] after:h-[360px] after:md:inline-block after:top-0 after:left-1/2 after:-translate-x-1/2
          after:xl:w-[636px] after:xl:h-[636px] after:xl:top-[-50%]
        ">
          <div className="overflow-hidden mx-auto md:max-w-[900px] 2xl:max-w-[1296px] relative z-10">
            <input id="product1" name="product" type="radio"
              className="hidden peer/product1" value="product1"
              checked={product === 'product1'}
              onChange={handleProductChange}
            />
            <input id="product2" name="product" type="radio"
              className="hidden peer/product2" value="product2"
              checked={product === 'product2'}
              onChange={handleProductChange}
            />
            <input id="product3" name="product" type="radio"
              className="hidden peer/product3" value="product3"
              checked={product === 'product3'}
              onChange={handleProductChange}
            />
            <ul className="
              list-none flex flex-no-wrap
              w-[300%]
              will-change-transform translate-x-0 duration-500 ease-in-out
              peer-checked/product1:translate-x-[0%]
              peer-checked/product2:translate-x-[-33.3333%]
              peer-checked/product3:translate-x-[-66.6666%]
              md:w-full md:!translate-x-0
            ">
              <li className="w-1/3 px-4"><img src={product1} alt="product1" /></li>
              <li className="w-1/3 px-4"><img src={product2} alt="product2" /></li>
              <li className="w-1/3 px-4"><img src={product3} alt="product3" /></li>
            </ul>
          </div>
        </div>
        <div className="
          mt-6 flex items-center justify-center
          md:hidden mb-6 relative z-10
        ">
					<label className={`cursor-pointer inline-block w-2 h-2 rounded-full bg-[#d9d9d9] ${product === "product1" && 'bg-primary'}`} htmlFor="product1"></label>
					<label className={`cursor-pointer inline-block w-2 h-2 rounded-full bg-[#d9d9d9] mx-4 ${product === "product2" && 'bg-primary'}`} htmlFor="product2"></label>
					<label className={`cursor-pointer inline-block w-2 h-2 rounded-full bg-[#d9d9d9] ${product === "product3" && 'bg-primary'}`} htmlFor="product3"></label>
				</div>
        <div className="
          flex items-center flex-wrap justify-center pl-[41px] pr-[21px] mx-auto md:max-w-[900px] 2xl:max-w-[1296px]
          md:justify-between md:flex-nowrap md:mt-4 md:px-4 relative z-10
        ">
          <p className="text-primary leading-[200%] mb-6 max-w-[768px] text-base md:text-2xl md:leading-[40px]">拒絕一次性用品，環保小物可以陪伴你一輩子。選擇可持續，選擇環保。更多渝渝環保小物，請前往蝦皮賣場參考選購。</p>
          <button type="button" className="
            bg-primary text-white p-2 leading-[50px] text-[20px] rounded-2xl hover:bg-opacity-80
            md:basis-[306px] ml-4
          ">前往蝦皮賣場</button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
