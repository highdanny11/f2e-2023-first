import PolicyImg from "@/assets/images/policy/policy1.png"
export default function Policy() {
  return(
    <>
      <h2 className="text-center text-primary my-5 text-lg tracking-[140%] xl:text-[32px] xl:my-10">為鯨魚謀福利！推動鯨魚保障方案</h2>
      <section className="max-w-[1280px] mx-auto px-4">
        <ul className="flex items-center flex-wrap w-full gap-4 mb-4 md:flex-nowrap">
          <li className="md:w-1/2 w-full">
            <img className="w-full" src={PolicyImg} alt="new" />
          </li>
          <li className="md:w-1/2 w-full">
            <img className="w-full" src={PolicyImg} alt="new" />
          </li>
        </ul>
        <p>發表日期 2023/12/26</p>
        <br />
        <br />
        <p>
          如果沒有鯨魚，這將對海洋生態系統和全球生態平衡產生重大影響。以下是一些可能發生的情況：
          <br />
          <br />
          <br />
          食物鏈失衡：鯨魚在海洋食物鏈中頂級掠食者，以小型浮游生物和小魚類為食。如果沒有鯨魚來控制這些獵物種群，可能會導致這些生物過度繁殖，影響整個食物鏈的平衡。
          浮游生物增加：鯨魚的糞便富含養分，有助於浮游生物的生長。沒有鯨魚的情況下，這些養分可能不會被釋放到海洋中，影響浮游生物的數量和分佈。
          捕食性控制減弱：鯨魚可以控制獵物種群的數量，維持生態平衡。沒有鯨魚的情況下，某些獵物可能會增加，對其他生物種群產生負面影響。
          氣候影響：鯨魚通過幫助吸收二氧化碳和其他溫室氣體有助於減輕氣候變化。它們的減少可能導致更多溫室氣體被排放到大氣中。
          損害生態旅遊業：鯨魚觀光業在許多地區對經濟至關重要。沒有鯨魚，這一產業可能會受到重大沖擊，影響當地社區的生計。
          <br />
          <br />
          <br />
          綜上所述，鯨魚在海洋生態系統中扮演著重要的角色，如果它們消失或減少，將對海洋生態平衡、生物多樣性、氣候和經濟產生深遠的影響。
          保護鯨魚是維護海洋健康和全球生態平衡的關鍵一步。因此，陳英渝提出以下鯨魚保障方案，讓牠們生生不息。
          <br />
          <br />
          <br />
          1. 設立鯨魚保護區：建立特定區域，以禁止捕鯨活動，並保護鯨魚的棲息地。這些區域提供了安全的環境，讓鯨魚得以繁衍和生存。
          <br />
          2. 國際合作：參與國際鯨魚保護公約，如國際捕鯨委員會（IWC），以協調世界各地的鯨魚保護努力，並監控捕鯨活動。
          <br />
          3. 研究和監測：支持科學研究，以了解不同鯨魚種群的狀況、棲息地和遷徙模式。這些信息有助於制定更有效的保護政策。
        </p>
        <br />
        <br />
      </section>
      <h3 className="text-center text-primary text-[20px] leading-[140%] mb-8">其他活動</h3>
      <ul className="max-w-[1334px] mx-auto px-4 flex gap-6 flex-wrap lg:flex-nowrap">
        <li className="lg:w-1/2 bg-secondary rounded-2xl">
          <div className="flex items-start justify-between gap-4 md:gap-6">
            <img className="shrink-0 md:w-[196px] w-1/3" src={PolicyImg} alt="new" width="196" height="196"/>
            <div className="text-primary flex-grow pt-2 md:pt-4">
              <h3 className="md:text-[20px] text-base leading-[140%] mb-2 md:mb-4">香香的烤魷魚活動！</h3>
              <p className="md:text-base text-sm leading-[140%]">為了推廣海洋生物永續生存的重要，讓更多人一起愛護海洋，我們舉辦了一場前所未有的「烤魷魚活動」！</p>
            </div>
          </div>
        </li>
        <li className="lg:w-1/2 bg-secondary rounded-2xl">
          <div className="flex items-start justify-between gap-4 md:gap-6">
            <img className="shrink-0 md:w-[196px] w-1/3" src={PolicyImg} alt="new" width="196" height="196"/>
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