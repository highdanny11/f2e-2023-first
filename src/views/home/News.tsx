import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Whale from '@/assets/images/icon/whale.png'
import new1 from '@/assets/images/news/new-1.png'
import new2 from '@/assets/images/news/new-2.png'
import new3 from '@/assets/images/news/new-3.png'

export default function News() {
  const navigate = useNavigate();

  const toActive = (id:number) => {
    navigate(`/active/${id}`);
  }

  const news = [
    {
      id: 1,
      time: '2023/12/26',
      title: '參與台北環保論壇，爭取海洋友善環境',
      img: new1,
      article: '炎炎夏日的周六，我走進了台北環保論壇，決定要全力宣傳「鯨魚至上」的理念！我相信，鯨魚在海洋中，每一隻都應該有自己的 VIP 休憩空間。',
    },
    {
      id: 2,
      time: '2023/11/21',
      title: '參與台北環保論壇，爭取海洋友善環境',
      img: new2,
      article: '炎炎夏日的周六，我走進了台北環保論壇，決定要全力宣傳「鯨魚至上」的理念！我相信，鯨魚在海洋中，每一隻都應該有自己的 VIP 休憩空間。',
    },
    {
      id: 3,
      time: '2023/12/26',
      title: '參與台北環保論壇，爭取海洋友善環境',
      img: new3,
      article: '街上氣氛真的很棒，從小孩到大人，甚至有些朋友都穿著由義大利知名設計師Sit Down Please所打造的經典龍蝦裝來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「海洋友善環境」政策的決心。',
    },
  ]

  const [newValue, setNewValue] = useState('new1')

  const handleNewChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.value) {
      setNewValue(e.target.value);
    }
  }
  return (
    <section className="
        mt-16 md:bg-secondary md:mt-[120px] relative
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
        最新活動
        <img className="md:hidden" src={Whale} alt="whale" width="87" />
      </h2>
      <div className="overflow-hidden mx-auto md:max-w-[900px] 2xl:max-w-[1296px]">
        <input id="new1" name="new" type="radio"
          className="hidden peer/new1"
          value="new1"
          checked={newValue === 'new1'}
          onChange={handleNewChange} />
        <input id="new2" name="new" type="radio"
          className="hidden peer/new2" value="new2" checked={newValue === 'new2'} onChange={handleNewChange} />
        <input id="new3" name="new" type="radio"
          className="hidden peer/new3" value="new3" checked={newValue === 'new3'} onChange={handleNewChange} />
        <ul
          className="
            list-none flex flex-no-wrap
            w-[300%]
            will-change-transform translate-x-0 duration-500 ease-in-out
            peer-checked/new1:translate-x-[0%]
            peer-checked/new2:translate-x-[-33.3333%]
            peer-checked/new3:translate-x-[-66.6666%]
            md:w-full md:!translate-x-0
          "
        >
          {
            news.map((item, index) => {
              return (
                <li className="w-1/3 px-4" key={item.id}>
                  <div>
                    <time className="inline-block text-2xl leading-[140%] mb-2 text-primary">{item.time}</time>
                    <img className="mb-1" src={item.img} alt="圖片" />
                    <h3 className="px-2 text-[20px] leading-[140%] text-primary">{item.time}</h3>
                    <p className="px-2 mb-6 text-base leading-[140%] text-primary xl:min-h-[157px] md:min-h-[202px]">{item.article}</p>
                    <button
                      type="button"
                      className="appearance-none border-none outline-none bg-primary hover:bg-opacity-[70%] text-white min-w-[210px] mx-auto py-[10px] rounded-lg block"
                      onClick={() => toActive(index + 1)}
                    >
                      繼續閱讀
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="
          mt-6 flex items-center justify-center
          md:hidden
        ">
          <label className={`cursor-pointer inline-block w-2 h-2 rounded-full bg-[#d9d9d9] ${newValue === "new1" && 'bg-primary'}`} htmlFor="new1"></label>
          <label className={`cursor-pointer inline-block w-2 h-2 rounded-full bg-[#d9d9d9] mx-4 ${newValue === "new2" && 'bg-primary'}`} htmlFor="new2"></label>
          <label className={`cursor-pointer inline-block w-2 h-2 rounded-full bg-[#d9d9d9] ${newValue === "new3" && 'bg-primary'}`} htmlFor="new3"></label>
        </div>
      </div>
    </section>
  )
}