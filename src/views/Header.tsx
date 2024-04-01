import logo from '@/assets/images/header/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return(
    <>
      <header className="bg-[linear-gradient(90deg,#1D3260_0%,#a2b6df_100%,#6b8cce_100%,#a2b6df_100%)] py-[10px] relative z-10">
        <div className="
          flex justify-between items-center text-white max-w-[1320px] px-3 mx-auto
        ">
          <div className="flex items-center justify-between">
            <Link to="/">
            <img className="mr-2" src={logo} alt="logo" />
            <h1>陳英渝</h1>
            </Link>
          </div>
          <ul className="lg:flex items-center text-white hidden">
            <li className='mr-8 last:mr-0'>
              <Link to="active">最新活動</Link>
            </li>
            <li className='mr-8 last:mr-0'>
              <Link to="policy/1">政策議題</Link>
            </li>
            <li className='mr-8 last:mr-0'>
              <a href="#">名眾服務</a>
            </li>
            <li className='mr-8 last:mr-0'>
              <a href="#">小額捐款</a>
            </li>
          </ul>
          <ul className="lg:flex items-center hidden">
            <li className='mr-8 last:mr-0'>
              <a href="#" className='inline-block'>
                <i className="bi bi-instagram text-[40px] w-10 h-10 leading-0"></i>
              </a>
            </li>
            <li className='mr-8 last:mr-0'>
              <a href="#" className='inline-block'>
                <i className="bi bi-facebook text-[40px] w-10 h-10 leading-0"></i>
              </a>
            </li>
            <li className='mr-8 last:mr-0'>
              <a href="#" className='inline-block'>
                <i className="bi bi-line text-[40px] w-10 h-10 leading-0"></i>
              </a>
            </li>
            <li className='mr-8 last:mr-0'>
              <a href="#" className='inline-block'>
              <i className="bi bi-youtube text-[40px] w-10 h-10 leading-0"></i>
              </a>
            </li>
          </ul>
          {/* hambuger */}
          <div className="lg:hidden w-[50px] h-[50px] flex flex-col justify-between p-2">
            <span className="inline-block bg-white w-full h-1 rounded-sm"></span>
            <span className="inline-block bg-white w-full h-1 rounded-sm"></span>
            <span className="inline-block bg-white w-full h-1 rounded-sm"></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header