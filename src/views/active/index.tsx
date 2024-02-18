import New1 from '@/assets/images/news/new-1.png';

export default function Active() {
  return (
    <>
      <h2 className="text-center text-primary my-5 text-lg tracking-[140%] xl:text-[32px] xl:my-10">參與台北環保論壇，爭取友善環境</h2>
      <section className="max-w-[1280px] mx-auto px-4">
        <ul className="flex items-center flex-wrap w-full gap-4 mb-4 md:flex-nowrap">
          <li className="md:w-1/2 w-full">
            <img className="w-full" src={New1} alt="new" />
          </li>
          <li className="md:w-1/2 w-full">
            <img className="w-full" src={New1} alt="new" />
          </li>
        </ul>
        <p>發表日期 2023/12/26</p>
        <br />
        <br />
        <p>
          在一個美麗的夏日早晨，台北舉辦了一場重要的環保論壇，重點討論如何建立一個海洋友善的環境。這次論壇吸引了來自政府、學術界、環保組織和當地社區的代表，他們都熱衷於保護台灣的海洋生態系統。
          <br />
          <br />
          <br />
          陳英渝是這次論壇的主要參與者之一。她一直以來都關心海洋環保議題，並且她提出了相關的法案。當她站在論壇的講台上，她分享了自己的熱情和承諾，以及她的願景，即建立一個海洋友善的台灣。
          <br />
          <br />
          <br />
          陳英渝提到了海洋污染、過度捕撈和海洋生態系統的崩壞，並指出這些問題對台灣的經濟和環境都帶來了嚴重影響。她提出了一系列政策建議，包括提高海洋保護區的規模，加強海洋監測和執法，以及推動環保教育。
          <br />
          <br />
          <br />
          此外，陳英渝強調了社區參與的重要性，她鼓勵當地社區和環保團體共同參與保護台灣的海洋環境。她分享了一個案例，講述當地一個小漁村如何透過清潔海灘和減少塑料使用，改變了他們的社區，使之變得更加環保友善。
          <br />
          <br />
          <br />
          論壇結束後，陳英渝與其他與會者互動，收集了更多意見和建議。她承諾將努力推動相應的法案。她感到非常滿足，因為她知道她不僅參與了一個重要的環保討論，還鼓勵了更多人一同努力，以建立一個更加海洋友善的台灣。這次論壇標誌著一個新的開始，為台灣的海洋環境保護帶來了希望。
        </p>
        <br />
        <br />
        <h3>活動照片</h3>
      </section>
      <div className="bg-secondary py-6">
        <ul className="grid gap-6 gird-row-4 grid-cols-4 max-w-[1328px] mx-auto p-4">
          <li className="col-span-4 row-span-2 lg:order-3 lg:col-span-2 lg:row-span-2"><img className="w-full" src={New1} alt="new" /></li>
          <li className="col-span-2 row-span2 lg:order-1 lg:col-span-1 lg:row-span-1"><img className="w-full" src={New1} alt="new" /></li>
          <li className="col-span-2 row-span2 lg:order-2 lg:col-span-1 lg:row-span-1"><img className="w-full" src={New1} alt="new" /></li>
          <li className="col-span-2 row-span2 lg:order-4 lg:col-span-1 lg:row-span-1"><img className="w-full" src={New1} alt="new" /></li>
          <li className="col-span-2 row-span2 lg:order-5 lg:col-span-1 lg:row-span-1"><img className="w-full" src={New1} alt="new" /></li>
        </ul>
      </div>
      <h3 className="text-center text-primary text-[20px] leading-[140%] mb-8">其他活動</h3>
      <ul className="max-w-[1334px] mx-auto px-4 flex gap-6 flex-wrap lg:flex-nowrap">
        <li className="lg:w-1/2 bg-secondary rounded-2xl">
          <div className="flex items-start justify-between gap-4 md:gap-6">
            <img className="shrink-0 md:w-[196px] w-1/3" src={New1} alt="new" width="196" height="196"/>
            <div className="text-primary flex-grow pt-2 md:pt-4">
              <h3 className="md:text-[20px] text-base leading-[140%] mb-2 md:mb-4">香香的烤魷魚活動！</h3>
              <p className="md:text-base text-sm leading-[140%]">為了推廣海洋生物永續生存的重要，讓更多人一起愛護海洋，我們舉辦了一場前所未有的「烤魷魚活動」！</p>
            </div>
          </div>
        </li>
        <li className="lg:w-1/2 bg-secondary rounded-2xl">
          <div className="flex items-start justify-between gap-4 md:gap-6">
            <img className="shrink-0 md:w-[196px] w-1/3" src={New1} alt="new" width="196" height="196"/>
            <div className="text-primary flex-grow pt-2 md:pt-4">
              <h3 className="md:text-[20px] text-base leading-[140%] mb-2 md:mb-4">掃街模式開啟！帶起鯨魚帽來和我一起走！</h3>
              <p className="md:text-base text-sm leading-[140%]">街上氣氛真的很棒，從小孩到大人，甚至有些朋友都穿著由義大利知名設計師Sit Down Please所打造的經典龍蝦裝來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「海洋友善環境」政策的決心。</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}