import { useRef, useEffect } from 'react'


export default function AccrodingItem({ data, setAccrodings }: { data: {id:number, trigger:boolean, question: string}, setAccrodings: (val: any) => any }) {
  const { question, trigger, id } = data
  const donateRef = useRef<null | {current: HTMLElement }>(null)
  const donateParentRef = useRef<null | {current: HTMLElement }>(null)


  const triggerDonate = () => {
    setAccrodings((val: {id:number, trigger:boolean, question: string}[]) => val.map((item) => {
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
    if (!donateRef.current ||!donateParentRef.current) return
    const parentNode = donateParentRef.current as unknown as HTMLElement
    if (trigger) {
      parentNode.setAttribute('style', `max-height: 1000px;`)
    } else {
      const { height } = (donateRef.current as unknown as HTMLElement).getBoundingClientRect()
      parentNode.setAttribute('style', `max-height: ${height}px;`)
    }
  }, [trigger])

  return (
    <li
      className="
        border-b-2 border-b-primary overflow-hidden mb-2
        duration-300 ease-out transition-all cursor-pointer
      "
      ref={donateParentRef as React.RefObject<HTMLLIElement>}
      onClick={triggerDonate}>
      <div className="flex items-center gap-4 pb-4" ref={donateRef as React.RefObject<HTMLDivElement>}>
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