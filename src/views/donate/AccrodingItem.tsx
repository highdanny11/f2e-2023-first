import { useRef, useEffect } from 'react'


export default function AccrodingItem({ data, setAccrodings }) {
  const { question, trigger, id } = data
  const donateRef = useRef<null | {current: HTMLElement }>(null)


  const triggerDonate = () => {
    setAccrodings((val) => val.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          trigger: !item.trigger
        }
      }else {
        item.trigger = false
        return item
      }
      return item
    }))
  }

  useEffect(() => {
    const parentNode = donateRef.current.parentNode
    if (trigger) {
      parentNode.style = `max-height: 1000px;`
    }else {
      const { height } = donateRef.current.getBoundingClientRect()
      donateRef.current.parentNode.style = `max-height: ${height}px;`
    }
  }, [trigger])

  return (
    <li
      className="
        border-b-2 border-b-primary overflow-hidden mb-2
        duration-300 ease-out transition-all cursor-pointer
      "
      onClick={triggerDonate}>
      <div className="flex items-center gap-4 pb-4" ref={donateRef}>
        <span className="
          flex items-center justify-center
          rounded-[8px] bg-primary text-white w-10 h-[34px]
          font-semibold text-[24px] leading-none shrink-0
        ">Q</span>
        <div className="flex items-center flex-grow justify-between text-base leading-[23px] text-primary">
          <p>{question}</p>
          <span>
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 pb-4">
        <span className="
          flex items-center justify-center
          rounded-[8px] bg-primary text-white w-10 h-[34px]
          font-semibold text-[24px] leading-none shrink-0
        ">A</span>
        <p className="text-base leading-[23px] text-primary">這只是練習用的 sideproject。</p>
      </div>
    </li>
  )
}