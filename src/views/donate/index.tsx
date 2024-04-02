import Whale from '@/assets/images/icon/whale.png'

export default function Donate() {
  return (
    <section className="
     md:bg-secondary md:mt-[120px] relative mb-6
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
        px-4 overflow-hidden mx-auto md:max-w-[900px] 2xl:px-0 2xl:max-w-[1296px]
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
      </div>
    </section>
  )
}