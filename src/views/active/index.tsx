import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import SpeechImg from '@/assets/images/active/event-1.jpeg';
import SpeechImg4 from '@/assets/images/active/event-4.jpeg';
import SpeechImg5 from '@/assets/images/active/event-5.jpeg';
import SpeechImg6 from '@/assets/images/active/event-6.jpeg';
import SpeechImg7 from '@/assets/images/active/event-7.jpeg';
import SpeechImg8 from '@/assets/images/active/event-8.jpeg';
import SpeechImg9 from '@/assets/images/active/event-9.jpeg';
import SpeechImg10 from '@/assets/images/active/event-10.jpeg';
import SpeechImg11 from '@/assets/images/active/event-11.jpeg';
import SpeechImg12 from '@/assets/images/active/event-12.jpeg';
import ProcessionImg from '@/assets/images/active/event-2.jpeg';
import ProcessionImg1 from '@/assets/images/active/procession-1.jpeg';
import ProcessionImg2 from '@/assets/images/active/procession-2.jpeg';
import ProcessionImg3 from '@/assets/images/active/procession-3.jpeg';
import ProcessionImg4 from '@/assets/images/active/procession-4.jpeg';
import ProcessionImg5 from '@/assets/images/active/procession-5.jpeg';
import ProcessionImg6 from '@/assets/images/active/procession-6.jpeg';
import ProcessionImg7 from '@/assets/images/active/procession-7.jpeg';
import ProcessionImg8 from '@/assets/images/active/procession-8.jpeg';
import ProcessionImg13 from '@/assets/images/active/event-13.jpeg';

import BBQImg from '@/assets/images/active/event-3.png';
import BBQImg1 from '@/assets/images/active/BBQ-1.jpeg';
import BBQImg2 from '@/assets/images/active/BBQ-2.jpeg';
import BBQImg3 from '@/assets/images/active/BBQ-3.jpeg';
import BBQImg4 from '@/assets/images/active/BBQ-4.jpeg';
import BBQImg5 from '@/assets/images/active/BBQ-5.jpeg';
import BBQImg6 from '@/assets/images/active/BBQ-6.jpeg';
import BBQImg7 from '@/assets/images/active/BBQ-7.jpeg';
import BBQImg8 from '@/assets/images/active/BBQ-8.jpeg';
import BBQImg9 from '@/assets/images/active/BBQ-9.jpeg';
import BBQImg10 from '@/assets/images/active/BBQ-10.jpeg';


const activeList = [
  {
    id: 1,
    title: '參與台北環保論壇，爭取友善環境',
    mainImg: SpeechImg,
    main: '在一個美麗的夏日早晨，台北舉辦了一場重要的環保論壇，重點討論如何建立一個海洋友善的環境。這次論壇吸引了來自政府、學術界、環保組織和當地社區的代表，他們都熱衷於保護台灣的海洋生態系統。陳英渝是這次論壇的主要參與者之一。她一直以來都關心海洋環保議題，並且她提出了相關的法案。當她站在論壇的講台上，她分享了自己的熱情和承諾，以及她的願景，即建立一個海洋友善的台灣。陳英渝提到了海洋污染、過度捕撈和海洋生態系統的崩壞，並指出這些問題對台灣的經濟和環境都帶來了嚴重影響。她提出了一系列政策建議，包括提高海洋保護區的規模，加強海洋監測和執法，以及推動環保教育。此外，陳英渝強調了社區參與的重要性，她鼓勵當地社區和環保團體共同參與保護台灣的海洋環境。她分享了一個案例，講述當地一個小漁村如何透過清潔海灘和減少塑料使用，改變了他們的社區，使之變得更加環保友善。論壇結束後，陳英渝與其他與會者互動，收集了更多意見和建議。她承諾將努力推動相應的法案。她感到非常滿足，因為她知道她不僅參與了一個重要的環保討論，還鼓勵了更多人一同努力，以建立一個更加海洋友善的台灣。這次論壇標誌著一個新的開始，為台灣的海洋環境保護帶來了希望。',
    subImg: SpeechImg4,
    imgs: [SpeechImg5, SpeechImg6, SpeechImg7, SpeechImg9],
    gallery: [SpeechImg8, SpeechImg10, SpeechImg11, SpeechImg12, SpeechImg9],
    time: '2023/12/26',
    defaultText: '炎炎夏日的周六，我走進了台北環保論壇，決定要全力宣傳「鯨魚至上」的理念！我相信，鯨魚在海洋中，每一隻都應該有自己的 VIP 休憩空間。'
  },
  {
    id: 2,
    title: '掃街模式開啟！帶起鯨魚帽來和我一起走！',
    mainImg: ProcessionImg,
    main: '經驗豐富的立法委員候選人陳英渝，充滿活力和熱情地開始了掃街活動之旅。陳英渝一直以來都深受選區居民的支持，因為她不僅是他們的代表，還是他們的朋友。一個星期天的早晨，陳英渝和她的選舉團隊來到當地一個繞鬧的街上，計畫進行一場特別的選舉活動。他們裝飾了一個小舞台，擺放了一些彩旗和選舉海報。莉莉穿著的T恤，握著麥克風，熱情洋溢地和市民互動。街上的人們開始湧向小舞台，他們對陳英渝充滿好奇和期待，因為他們知道陳英渝一直以來都是一個傾聽和解決問題的代表。當陳英渝開始演講時，她講述了她在議會中的工作，以及她對保護海洋的承諾。她的話語充滿希望和信心，人們紛紛鼓掌並高呼口號。然後，陳英渝決定讓活動更加互動和有趣。她邀請市民提出問題，並親自回答每個問題。這種直接的互動讓人們感到自己的聲音被聽到，並且感受到陳英渝真誠的關心。在場的年輕人和長者們都表達了他們的支持，並紛紛加入了陳英渝的志願團隊。當選活動結束時，市場裡充滿歡樂和笑聲。陳英渝感到非常開心，因為她知道她不僅獲得了市民的支持，還建立了更多的社區聯繫。她明白，這個選舉季節充滿希望，並且充滿了她為當地海洋做出更多積極改變的動力。街上氣氛真的很棒，從小孩到大人，甚至有些朋友都穿著由義大利知名設計師Sit Down Please所打造的經典龍蝦裝來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「海洋友善環境」政策的決心。',
    subImg: ProcessionImg13,
    imgs: [ProcessionImg1, ProcessionImg2, ProcessionImg5, ProcessionImg6],
    gallery: [ProcessionImg3, ProcessionImg4, ProcessionImg7, ProcessionImg8, ProcessionImg13],
    time: '2023/12/26',
    defaultText: '街上氣氛真的很棒，從小孩到大人，甚至有些朋友都穿著由義大利知名設計師Sit Down Please所打造的經典龍蝦裝來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「海洋友善環境」政策的決心。'
  },
  {
    id: 3,
    title: '香香的烤魷魚活動！',
    mainImg: BBQImg,
    main: '陳英渝與「海洋之愛」的海洋保護單位決定舉辦一個獨特的活動，以唤起人們對海洋的保護意識。他們計畫了一場盛大的「烤魷魚節」，旨在讓參與者體驗美味的海鮮，同時強調保護海洋和海洋生物的重要性。活動當天，一片歡樂的氛圍籠罩著整個海灘。保護單位的成員在沙灘上搭建了簡單的烤架和用來烤海鮮的設備。當地漁夫捐贈了新鮮的魷魚，都是當地可持續捕撈的，以確保不會對海洋生態造成傷害。活動開始後，參與者可以品嚐到美味的烤魷魚。同時，保護單位的成員向人們提供有關海洋保護的資訊，解釋了海洋污染、過度捕撈和海洋生態系統的現狀。他們還舉辦了互動活動，如收拾沙灘上的垃圾和討論可持續漁業的工作坊。當夜幕降臨時，活動進行了一個特別的儀式。參與者們點燃了蠟燭，將它們放在沙灘上，形成一個大大的愛心。這象徵著每個人對海洋的承諾，保護海洋生物和環境。這場「烤魷魚節」不僅讓人們享受美味的食物，還成功地喚起了參與者對海洋保護的關注。參與者離開時，帶走了更多的知識和對行動的決心，並答應將這個重要信息傳遞給他們的家人和朋友。陳英渝和「海洋之愛」保護單位的這個活動成為了一個啟發人心的例子，呼籲人們共同保護海洋和海洋生物，以確保它們的永續存在。',
    subImg: BBQImg9,
    imgs: [BBQImg1, BBQImg2, BBQImg6, BBQImg7],
    gallery: [BBQImg3, BBQImg4, BBQImg5, BBQImg8, BBQImg10],
    time: '2023/12/26',
    defaultText: '為了推廣海洋生物永續生存的重要，讓更多人一起愛護海洋，我們舉辦了一場前所未有的「烤魷魚活動」！'
  },
]

export default function Active() {
  const { id } = useParams();
  const [activeData, setActiveData] = useState({...activeList.find((item) => item.id === Number(id))})
  const [activeListData, setActiveListData] = useState(activeList.filter((item) => item.id !== Number(id))) 
  useEffect(() => {
    setActiveData({...activeList.find((item) => item.id === Number(id))})
    setActiveListData(activeList.filter((item) => item.id !== Number(id)))
  }, [id])
  function getOrderClassName(index: number) {
    if(index >=2) {
      return `lg:order-${index + 2}`
    }else {
      return `lg:order-${index + 1}`
    }
  }
  return (
    <>
      <h2 className="text-center text-primary my-5 text-lg tracking-[140%] xl:text-[32px] xl:my-10">參與台北環保論壇，爭取友善環境</h2>
      <section className="max-w-[1280px] mx-auto px-4 overflow-hidden xl:overflow-visible">
        <ul className="flex items-center flex-wrap w-full gap-10 mb-10 md:mb-4 md:gap-4 md:flex-nowrap">
          <li className="md:w-1/2 w-full rounded-2xl overflow-hidden">
            <img className="w-full" src={activeData.mainImg} alt="new" />
          </li>
          <li className="md:w-1/2 w-full">
             <div className="gallery">
              {activeData.gallery && activeData.gallery.map((item, index) =>  <img src={item} key={index}  />) }
             </div>
          </li>
        </ul>
        <p>發表日期 {activeData.time}</p>
        <br />
        <br />
        <p>
          {activeData.main}
        </p>
        <br />
        <br />
        <h3>活動照片</h3>
      </section>
      <div className="bg-secondary py-6">
        <ul className="grid gap-6 gird-row-4 grid-cols-4 max-w-[1328px] mx-auto p-4">
          {/* 第一張 */}
          <li className="col-span-4 row-span-2 lg:order-3 lg:col-span-2 lg:row-span-2 rounded-[16px] overflow-hidden">
            <img className="w-full" src={activeData.subImg} alt="new" />
          </li>
          {activeData.imgs && activeData.imgs.map((item, index) => 
            <li className={`col-span-2 row-span-2 ${getOrderClassName(index)} lg:col-span-1 lg:row-span-1 rounded-[16px] overflow-hidden`} key={item}>
              <img className="w-full" src={item} alt="new" />
            </li>
           )}
        </ul>
      </div>
      <h3 className="text-center text-primary text-[20px] leading-[140%] mb-8">其他活動</h3>
      <ul className="max-w-[1334px] mx-auto px-4 flex gap-6 flex-wrap lg:flex-nowrap">
        {activeListData && activeListData.map((item) => 
          <li className="lg:w-1/2 bg-secondary rounded-2xl" key={item.id}>
            <Link to={`/active/${item.id}`}>
              <div className="flex items-start justify-between gap-4 md:gap-6">
                <div className="rounded-[16px] shrink-0 md:w-[196px] w-1/3 overflow-hidden">
                  <img src={item.mainImg} alt="new" width="196" height="196"/>
                </div>
                <div className="text-primary flex-grow pt-2 md:pt-4">
                  <h3 className="md:text-[20px] text-base leading-[140%] mb-2 md:mb-4">{item.title}</h3>
                  <p className="md:text-base text-sm leading-[140%]">{item.defaultText}</p>
                </div>
              </div>
            </Link>
          </li>  
        )}
      </ul>
    </>
  )
}