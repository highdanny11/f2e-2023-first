// import ReactDOM from 'react-dom'
// import tail from '@/assets/images/footer/tail.svg'
// import turtle from '@/assets/images/footer/turtle.svg'
// import boat from '@/assets/images/footer/boat.svg'

function Footer() {
  return(
    <footer className="pt-20 overflow-hidden">
      <div className="wave">
        <div className="
          max-w-[768px] mx-auto text-center px-2 flex flex-col
          relative
          md:block md:mb-8 md:px-5
        ">
          <h3 className="text-white order-1 mb-5">陳英渝服務處</h3>
          <ul className="
            order-3
            text-white flex flex-wrap items-center w-full justify-between pl-12 md:pl-0 md:mb-7
          ">
            <li>
              <i className="bi bi-geo-alt-fill mr-4"></i>
              <span>海星區聽海大道88號鳳梨大樓3樓</span>
            </li>
            <li className="my-5 md:my-0">
              <a href="tel:(02) 878-9487">
                <i className="bi bi-telephone-fill mr-4"></i>
                (02) 878-9487
              </a>
            </li>
            <li>
              信箱：
              <a href="mailto:meowoffice@linmeow.tw" className="underline">meowoffice@linmeow.tw</a>
            </li>
          </ul>
          <p className="text-white order-2 mb-7">服務時間:週一至週五 9:00 - 18:00</p>
          <p className="text-white text-sm mt-7 md:mt-0 order-4">版權聲明：© 2023 陳英渝版權所有</p>
          {/* <img className="boat" src={boat} alt="boat" /> */}
          {/* <img className="turle" src={turtle} alt="turtle" /> */}
          {/* <img className="tail" src={tail} alt="tail" /> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer