import perosn from '@/assets/images/banner/banner-person.svg'
import whale from '@/assets/images/banner/banner_whale.svg'

function Banner() {
  return (
    <div className="banner">
      <div className="banner-wrap">
        <h2 className="
            font-bold text-primary text-base pt-[10%]
            md:text-2xl
            xl:text-[48px]
          ">
          <span className='
            bg-primary text-white rounded-full leading-none mr-2 px-[6px]
            xl:px-4
          '>1</span>
          陳英渝
        </h2>
        <p className="
            text-right text-primary absolute right-[4%] top-1/4
            leading-[120%]
            md:right-[10%] md:text-2xl md:leading-[120%]
            xl:text-[48px] xl:right-0
          ">
          從鯨魚的眼中，
          <br />
          看見台灣
        </p>
        <img className="
            aspect-[1/1] w-[28vw] absolute bottom-0 left-[10%]
            lg:left-0
            xl:left-[-15%]
            "
          src={perosn}
          alt="陳英渝"
        />
        <img className="
            aspect-[1/1] w-[60vw]
            absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2
            "
          src={whale}
          alt="whale"
        />
      </div>
    </div>
  )
}

export default Banner;