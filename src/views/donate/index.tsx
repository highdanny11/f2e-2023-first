import Whale from '@/assets/images/icon/whale.png'
import person from '@/assets/images/donate/personal.jpg'

import Product from '@/assets/images/donate/product.jpg'
import Product2 from '@/assets/images/donate/product-2.jpg'
import Product3 from '@/assets/images/donate/product-3.jpg'

import AccrodingItem from './AccrodingItem'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';


import { useState, useRef, useEffect } from 'react'

export default function Donate() {
  const questions = [
    {
      id: 0,
      question: '捐款收據是以電子郵件、郵寄還是其他方式發送的？',
      trigger: false,
    },
    {
      id: 1,
      question: '請問該如何修改定期定額捐款金額？',
      trigger: false,
    },
    {
      id: 3,
      question: '如果我在未來需要進一步的協助或信息，可以聯繫組織的哪位負責人或部門？',
      trigger: false,
    },
  ]
  const [ accrodings, setAccrodings ] = useState(questions)
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)

  const slideTo = (index:number) => {
    swiperRef.current.swiper.slideTo(index)
    setActiveIndex(index)
  }

  useEffect(() => {
    swiperRef.current.swiper.activeIndex = activeIndex
  }, [swiperRef])

  return (
    <section className="
      md:mt-[120px] relative mb-6
      md:pt-[135px] md:pb-10
      xl:mt-[160px]
    ">
      <h2 className="
        pl-6 pr-5 py-3 mb-4 flex justify-between items-center bg-secondary text-primary
        text-[32px] leading-[140%]
        md:bg-[url('@/assets/images/icon/whale.png')] md:bg-contain md:bg-center md:bg-no-repeat md:bg-[transparent]
        md:justify-center md:text-white md:pl-0 md:pr-0 md:py-0 md:pt-[4%] md:max-w-[371px] md:mx-auto md:min-h-[231px] md:w-1/3
        md:absolute md:left-1/2 md:top-0 md:-translate-y-1/2 md:-translate-x-1/2
      ">
        小額捐款
        <img className="md:hidden" src={Whale} alt="whale" width="87" />
      </h2>

      <div className="
        px-4 overflow-hidden mx-auto md:max-w-[900px] xl:max-w-[1024px] 2xl:px-0 2xl:max-w-[1296px]
      ">
        <p className="text-primary text-center text-2xl leading-[140%]">
          個人力量有限，但團結一致，
          <br className="md:hidden" />
          我們能夠實現改變。
          <br className="md:hidden" />
          您的支持將劃下改變的開始。
        </p>
        <ul className="
          grid gap-x-2 gap-y-6 grid-cols-2 grid-rows-3 mt-6
          md:grid-cols-3 md:grid-rows-2
        ">
          <li><button className="appearance-none border-primary border-[2px] border-solid outline-none hover:bg-primary text-primary hover:text-white w-full mx-auto py-5 rounded-lg block duration-300 ease-out text-[32px] leading-[140%]" type="button">$300</button></li>
          <li><button className="appearance-none border-primary border-[2px] border-solid outline-none hover:bg-primary text-primary hover:text-white w-full mx-auto py-5 rounded-lg block duration-300 ease-out text-[32px] leading-[140%]" type="button">$1,000</button></li>
          <li><button className="appearance-none border-primary border-[2px] border-solid outline-none hover:bg-primary text-primary hover:text-white w-full mx-auto py-5 rounded-lg block duration-300 ease-out text-[32px] leading-[140%]" type="button">$10,000</button></li>
          <li><button className="appearance-none border-primary border-[2px] border-solid outline-none hover:bg-primary text-primary hover:text-white w-full mx-auto py-5 rounded-lg block duration-300 ease-out text-[32px] leading-[140%]" type="button">$30,000</button></li>
          <li><button className="appearance-none border-primary border-[2px] border-solid outline-none hover:bg-primary text-primary hover:text-white w-full mx-auto py-5 rounded-lg block duration-300 ease-out text-[32px] leading-[140%]" type="button">$50,000</button></li>
          <li><button className="appearance-none border-primary border-[2px] border-solid outline-none hover:bg-primary text-primary hover:text-white w-full mx-auto py-5 rounded-lg block duration-300 ease-out text-[32px] leading-[140%]" type="button">$100,000</button></li>
        </ul>
        <div className="
          flex flex-wrap w-full mt-6 gap-6
          md:grid md:grid-cols-3 md:gap-5 md:mt-8
        ">
          <input
            type="number"
            placeholder="請自行輸入金額"
            className="
              w-full rounded-lg
              border-primary border-[2px] border-solid
              appearance-none outline-none
              placeholder-[rgba(86,91,101,1)]
              text-[32px] text-primary px-2 py-3
              md:col-span-2
            " />
          <button
            type="button"
            className="
              appearance-none border-none outline-none
            bg-primary hover:bg-opacity-[70%]
              text-[32px] leading-[140%]
            text-white py-[33px] rounded-lg block
              flex-grow
            ">
            前往捐款
          </button>
        </div>
        <div className="bg-secondary rounded-2xl mt-6 xl:mt-10 md:pt-5 xl:pt-0">
          <div className="xl:flex xl:gap-4 xl:items-center">
            <div className="rounded-2xl overflow-hidden mb-6 max-w-[416px] md:mx-auto shrink-0 xl:mb-0 xl:mt-[-20px]">
              <img src={person} alt="personal" />
            </div>
            <div className="py-4">
              <h3 className="text-primary text-2xl leading-[140%] mb-6 px-4">一個人可以改變世界，但更多人可以一同締造歷史。讓我們共同締造更好的未來。</h3>
              <p className="text-primary text-base leading-[200%] px-4">
                大眾小額捐款提供了政治資金的透明度。每一筆捐款都可以追蹤和記錄，確保捐款者的身份不受隱瞞，這樣可以防止貪污和不正當的政治行為。
                這不僅有助於保護民主的純潔性，還可以提高政治選舉的公平性，讓每位參選者都有機會為自己的政治理念而競爭，而不是只有那些擁有巨額資金的人。
                <br />
                對於英渝來說，大眾小額捐款是一個充滿希望的選項。它允許他們與選民建立更緊密的聯繫，傾聽他們的需求和關切，並獲得他們的支持。這樣的資金來源是可持續的，
                並且表明參選者真正關心他們代表的選區，而不僅僅是來自特定利益團體的代理人。
                沒有您的支持，我們將無法實現我們的使命。無論多少，您的捐款都對我們的立委競選至關重要。
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="
            text-center text-primary text-[32px] leading-[46px] mb-6
          ">
            常見問題
          </h2>
          <ul>
            {accrodings && accrodings.map((accroding, index) => <AccrodingItem key={index} data={accroding} setAccrodings={setAccrodings} />) }
          </ul>
        </div>
      </div>
      <div className="px-4 mt-8 md:px-0">
        <h2 className="text-center text-primary mb-8 text-[32px] leading-[46px]">
          渝渝小物
        </h2>
        <Swiper
          ref={swiperRef}
          className="mySwiper"
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1.8,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <img src={Product} alt="product" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={Product2} alt="product" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={Product3} alt="product" />
          </SwiperSlide>
        </Swiper>
        <ul className="flex items-center justify-between max-w-[60px] mx-auto mt-5">
          <li onClick={() => slideTo(0)} className={activeIndex === 0 ? 'rounded-full bg-primary w-[10px] h-[10px]' : 'rounded-full bg-[#D9D9D9] w-[10px] h-[10px]'}></li>
          <li onClick={() => slideTo(1)} className={activeIndex === 1 ? 'rounded-full bg-primary w-[10px] h-[10px]' : 'rounded-full bg-[#D9D9D9] w-[10px] h-[10px]'}></li>
          <li onClick={() => slideTo(2)} className={activeIndex === 2 ? 'rounded-full bg-primary w-[10px] h-[10px]' : 'rounded-full bg-[#D9D9D9] w-[10px] h-[10px]'}></li>
        </ul>
        <div className="mt-8 md:max-w-[600px] xl:max-w-[1280px] mx-auto xl:flex xl:items-center xl:justify-between">
          <p className="text-primary pb-5 text-2xl leading-[40px]">
            拒絕一次性用品，環保小物可以陪伴你一輩子。選擇可持續，選擇環保。
            <br className="hidden xl:block" />
            更多渝渝環保小物，請前往蝦皮賣場參考選購。
          </p>
          <div className="text-center">
            <button
              type="button"
              className="
                rounded-xl bg-primary hover:bg-opacity-40 inline-block
                text-white text-2xl leading-[50pxs] py-3 px-6
              ">
              前往蝦皮賣場
            </button>
          </div>
        </div>
        
      </div>
      
    </section>
  )
}