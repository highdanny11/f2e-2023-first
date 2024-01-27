import personalSm from '@/assets/images/about/personal-sm.svg'
import personal from '@/assets/images/about/personal.svg'
export default function About() {
  return (
    <section className='px-4 max-w-[1296px] mx-auto lg:flex lg:items-end lg:justify-center'>
      <h2 className='text-center text-primary text-[32px] leading-[50px] mb-4 md:hidden'>
        關於英渝
      </h2>
      <img className='w-full md:hidden mb-5' src={personalSm} alt="person" />
      <img className='hidden max-w-[636px] mx-auto order-2 md:block lg:w-1/2' src={personal} alt="person" />
      <div className='lg:relative lg:left-[6%]'>
        <h2 className='text-primary text-[32px] leading-[50px] mb-4 hidden md:block md:text-center lg:text-left'>
          關於英渝
        </h2>
        <p className="
            text-primary bg-secondary rounded-tr-[50px] rounded-bl-[50px]
              py-6 px-2 leading-[200%] font-normal text-base
              lg:px-5 lg:py-[66px] 2xl:text-[24px] 2xl:leading-[32px]
            "
        >
          出生於深海裡的大鳳梨裡。
          <br />
          海洋不再如往日那樣寧靜和清澈，經常有一片漂浮的塑料垃圾，
          <br className='hidden lg:block' />
          傷害著我深愛的海洋生物。
          <br />
          被吸管傷害的海龜、吞下塑膠微粒的魚，引發疾病和痛苦。
          <br />
          以及過度捕撈導致許多海洋生物的數量銳減，損害了整個生態。
          <br />
          因時常聽到海哭的聲音，我希望能夠喚起人們對海洋的愛護意識。
          <br />
          還原海洋的面貌，給予海綿寶寶一個乾淨的家園。
          <br />
          只要你幫海，海就會幫你。
        </p>
      </div>

    </section>
  )
}