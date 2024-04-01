import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom';

import PolicyImg from "@/assets/images/policy/policy1.png"
import PolicyImg1 from '@/assets/images/policy/policy1-1.png'
import PolicyImg2 from '@/assets/images/policy/policy2.png'
import PolicyImg3 from '@/assets/images/policy/policy2-1.png'
import PolicyImg4 from '@/assets/images/policy/policy3.png'
import PolicyImg5 from '@/assets/images/policy/policy3-1.png'

const policyList = [
  {
    id: 1,
    title: '為鯨魚謀福利！推動鯨魚保障方案',
    time: '2023/10/15',
    main: '如果沒有鯨魚，這將對海洋生態系統和全球生態平衡產生重大影響。以下是一些可能發生的情況：食物鏈失衡：鯨魚在海洋食物鏈中頂級掠食者，以小型浮游生物和小魚類為食。如果沒有鯨魚來控制這些獵物種群，可能會導致這些生物過度繁殖，影響整個食物鏈的平衡。浮游生物增加：鯨魚的糞便富含養分，有助於浮游生物的生長。沒有鯨魚的情況下，這些養分可能不會被釋放到海洋中，影響浮游生物的數量和分佈。捕食性控制減弱：鯨魚可以控制獵物種群的數量，維持生態平衡。沒有鯨魚的情況下，某些獵物可能會增加，對其他生物種群產生負面影響。氣候影響：鯨魚通過幫助吸收二氧化碳和其他溫室氣體有助於減輕氣候變化。它們的減少可能導致更多溫室氣體被排放到大氣中。損害生態旅遊業：鯨魚觀光業在許多地區對經濟至關重要。沒有鯨魚，這一產業可能會受到重大沖擊，影響當地社區的生計。綜上所述，鯨魚在海洋生態系統中扮演著重要的角色，如果它們消失或減少，將對海洋生態平衡、生物多樣性、氣候和經濟產生深遠的影響。保護鯨魚是維護海洋健康和全球生態平衡的關鍵一步。因此，陳英渝提出以下鯨魚保障方案，讓牠們生生不息。設立鯨魚保護區：建立特定區域，以禁止捕鯨活動，並保護鯨魚的棲息地。這些區域提供了安全的環境，讓鯨魚得以繁衍和生存。國際合作：參與國際鯨魚保護公約，如國際捕鯨委員會（IWC），以協調世界各地的鯨魚保護努力，並監控捕鯨活動。研究和監測：支持科學研究，以了解不同鯨魚種群的狀況、棲息地和遷徙模式。這些信息有助於制定更有效的保護政策。',
    defaultImg: PolicyImg,
    defaultText: '鯨魚在海洋生態系統中扮演著重要的角色，如果它們消失或減少，將對海洋生態平衡、生物多樣性、氣候和經濟產生深遠的影響。保護鯨魚是維護海洋健康和全球生態平衡的關鍵一步。因此，陳英渝提出鯨魚保障方案，讓牠們生生不息。',
    imgL: PolicyImg,
    imgR: PolicyImg1,
  },
  {
    id: 2,
    title: '減少海洋污染，維護海洋生態系統',
    time: '2023/11/21',
    main: '減少海洋污染和維護海洋生態系統非常重要，因為海洋對地球生態系統和全球氣候具有重大影響，同時也支撐著我們的生計和經濟。以下是一些這方面的重要原因：生態平衡：海洋是地球上最大的生態系統之一，其中包含龐大的生物多樣性。許多生物種類依賴海洋中的食物鏈，如果海洋污染繼續加劇，將對生態平衡產生嚴重的影響。全球氣候調節：海洋吸收大量的二氧化碳，有助於調節全球氣候。然而，過多的二氧化碳和溫室氣體排放導致海洋酸化，進一步影響生態系統，如珊瑚礁和貝殼類生物。經濟價值：海洋提供了大量的食物、能源和經濟機會。漁業是許多國家的重要產業，而海洋觀光業也在各地蓬勃發展。海洋污染和過度捕撈可能威脅這些經濟活動。健康風險：海洋污染不僅危害海洋生物，還可能對人類健康構成風險。食用受污染的海鮮可能導致食品中毒和健康問題。生態服務：海洋提供了多種重要的生態服務，如淨化水質、減緩風暴的影響、提供濱海保護等。保持這些生態服務對於緩解自然災害和保護沿海社區至關重要。文化和遺產：海洋對許多文化和社區具有重要意義，並且在宗教、藝術和傳統生活方式中扮演著重要角色。總而言之，減少海洋污染並保護海洋生態系統是保護地球生態平衡、氣候穩定、經濟和文化遺產的必要措施。它需要全球努力，包括政府、企業和個人的參與，以確保我們的海洋保持健康、可持續和繁榮。因此，陳英渝提出以下友善海洋方案，還原海洋的面貌，給予海綿寶寶一個乾淨的家園。塑料污染控制：政府可以實行法律和規定，限制或禁止使用一次性塑料製品，鼓勵可持續替代品的使用，並提供經濟激勵措施，以減少塑料污染。海洋保護區設立：建立和管理海洋保護區，以保護海洋生態系統、保護海洋生物多樣性和維護生態平衡。這些區域可以限制漁業活動，避免環境破壞。污染管制：制定法律和標準，以控制工業和農業活動對海洋的污染，包括廢水排放和有害物質的排放。',
    defaultImg: PolicyImg2,
    defaultText: '減少海洋污染並保護海洋生態系統是保護地球生態平衡、氣候穩定、經濟和文化遺產的必要措施。它需要全球努力，包括政府、企業和個人的參與，以確保我們的海洋保持健康、可持續和繁榮因此，陳英渝提出友善海洋方案，還原海洋的面貌，給予海綿寶寶一個乾淨的家園。',
    imgL: PolicyImg2,
    imgR: PolicyImg3,
  },
  {
    id: 3,
    title: '推廣海洋保護教育，讓愛更加專業',
    time: '2023/12/28',
    main: '海洋教育的價值在在於提高人們對海洋的關心和保護的重要性。海洋教育有助於塑造下一代環保者和海洋保護者，以維護地球的生態平衡。以下是海洋教育推廣的重要性：提高環保意識：海洋教育可以幫助人們理解海洋生態系統的脆弱性及人類活動對其的影響。這有助於提高環保意識，鼓勵人們減輕海洋汙染、過度捕撈和氣候變化的影響。保護海洋生物：通過教育，人們可以瞭解到海洋中存在的多樣性的生物，並認識到許多海洋生物面臨滅絕的風險。這促使人們支持保護和保育海洋生物的舉措。可持續漁業：海洋教育有助於普及可持續漁業的概念，強調漁業管理和資源保護的重要性。這對於維護漁業資源的可持續性至關重要。塑料汙染減少：教育可以幫助人們瞭解塑料汙染對海洋的威脅，以及減少塑料使用和垃圾處理的重要性。促進科學研究：通過海洋教育，年輕人可以被激發對科學研究的興趣，可能將來成為海洋科學家或保護活動家。社區參與：教育可以促進社區的參與，鼓勵人們採取行動，例如組織清潔海灘活動、支持環保組織和參與政策制定。經濟機會：海洋教育可以為人們提供關於海洋職業和經濟機會的信息，從漁業到旅遊和科學研究。總之，海洋教育推廣有助於保護我們的海洋、促進可持續發展，以及培養新一代的環保者和海洋保護者。這對於維護地球生態平衡和可持續未來至關重要。因此，陳英渝提出海洋保護教育方案，提高公眾對海洋的認識、關心和參與。建立海洋保護教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的海洋保護教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。製作教育資料：出版愛護海洋手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識推廣愛護海洋課程：與學校、社區組織和綠色社團合作，推出一系列免費的愛護海洋課程。預計每年將有超過 10,000 名市民受益。',
    defaultImg: PolicyImg4,
    defaultText: '鯨魚在海洋生態系統中扮演著重要的角色，如果它們消失或減少，將對海洋生態平衡、生物多樣性、氣候和經濟產生深遠的影響。保護鯨魚是維護海洋健康和全球生態平衡的關鍵一步。因此，陳英渝提出鯨魚保障方案，讓牠們生生不息。',
    imgL: PolicyImg4,
    imgR: PolicyImg5,
  },
]

export default function Policy() {
  const { id } = useParams()
  const [ policy, setPolicy ] = useState({...policyList.find((item) => `${item.id}` === id)})
  const [ policys, setPolicys ] = useState(policyList.filter((item) => `${item.id}` !== id))
  useEffect(() => {
    setPolicy({...policyList.find((item) => `${item.id}` === id)})
    setPolicys(policyList.filter((item) => `${item.id}` !== id))
  }, [id])
  return (
    <>
      <h2 className="text-center text-primary my-5 text-lg tracking-[140%] xl:text-[32px] xl:my-10">{policy.title}</h2>
      <section className="max-w-[1280px] mx-auto px-4">
        <ul className="flex items-center flex-wrap w-full gap-4 mb-4 md:flex-nowrap">
          <li className="md:w-1/2 w-full">
            <img className="w-full" src={policy.imgL} alt="new" />
          </li>
          <li className="md:w-1/2 w-full">
            <img className="w-full" src={policy.imgR} alt="new" />
          </li>
        </ul>
        <p>發表日期 {policy.time}</p>
        <br />
        <br />
        <p>{policy.main}</p>
        <br />
        <br />
      </section>
      <h3 className="text-center text-primary text-[20px] leading-[140%] mb-8">其他活動</h3>
      <ul className="max-w-[1334px] mx-auto px-4 flex gap-6 flex-wrap lg:flex-nowrap">
        {
          policys.map((item) => (
            <li className="lg:w-1/2 bg-secondary rounded-2xl" key={item.id}>
              <Link to={`/policy/${item.id}`}>
                <div className="flex items-start justify-between gap-4 md:gap-6">
                  <img className="shrink-0 md:w-[196px] w-1/3" src={item.defaultImg} alt="new" width="196" height="196" />
                  <div className="text-primary flex-grow pt-2 md:pt-4">
                    <h3 className="md:text-[20px] text-base leading-[140%] mb-2 md:mb-4">{item.title}</h3>
                    <p className="md:text-base text-sm leading-[140%]">{item.defaultText}</p>
                  </div>
                </div>
              </Link>
          </li>
          ))
        }
      </ul>
    </>
  )
}