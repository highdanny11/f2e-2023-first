import Whale from '@/assets/images/icon/whale.png'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { publicServerSchma } from '@/verify/publicServer'

export default function Service() {
  const { 
    register, // state
    handleSubmit, // function
    formState: { errors },
  } = useForm({
    resolver: zodResolver(publicServerSchma),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <section
      id="service"
      className="mt-16 relative
        md:bg-secondary md:mt-[120px] md:pt-[135px] md:pb-10
        xl:mt-[320px] xl:max-w-[1294px] mx-auto md:rounded-tr-[20%] md:rounded-bl-[20%]
        2xl:mt-[160px]
      ">
      <h2 className="
          pl-6 pr-5 py-3 mb-4 flex justify-between items-center bg-secondary text-primary
          text-[32px] leading-[140%]
          md:bg-[url('@/assets/images/icon/whale.png')] md:bg-contain md:bg-center md:bg-no-repeat md:bg-[transparent]
          md:justify-center md:text-white md:pl-0 md:pr-0 md:py-0 md:pt-[4%] md:max-w-[371px] md:mx-auto md:min-h-[231px] md:w-1/3
          md:absolute md:left-1/2 md:top-0 md:-translate-y-1/2 md:-translate-x-1/2
        ">
        民眾服務
        <img className="md:hidden" src={Whale} alt="whale" width="87" />
      </h2>
      <p className="text-primary text-2xl leading-[140%] px-5 pb-6 md:text-center">
        我們在這裡，為您提供幫助，
        <br className="hidden md:block" />
        請請透過表單留下您的聯絡資訊，由專人與您聯繫，謝謝
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
        bg-secondary pt-4 pb-8 px-4 
          mx-auto
          max-w-[600px]
          md:border-solid md:border-[10px] md:border-white
          md:rounded-tr-[20%] md:rounded-bl-[20%]
          xl:max-w-[854px]
        ">
        <h3 className="text-primary text-center text-[32px] leading-[140%] mb-6">
          民眾服務表單
        </h3>
        <ul className="
            mb-8
            xl:px-[106px]
          ">
          <li className="mb-2 md:flex md:justify-between md:items-center xl:mb-4">
            <label className="
                text-2xl leading-[140%] text-primary block mb-2
                after:inline-block after:content-['*'] after:text-[#F40B0B] after:text-base
              "
              htmlFor="username"
            >
              姓名
              {errors?.username?.message && <span className="text-[#F40B0B] text-sm">{`${errors.username.message}`}</span>}
            </label>
            <input
              id="username"
              type="text"
              {...register("username")}
              className="
                w-full rounded-lg appearance-none border-none outline-none text-2xl text-primary px-2 py-3
                xl:w-[416px]
              "/>
          </li>
          <li className="mb-2 md:flex md:justify-between md:items-center xl:mb-4">
            <label
              className="
                text-2xl leading-[140%] text-primary block mb-2
                after:inline-block after:content-['*'] after:text-[#F40B0B] after:text-base
              "
              htmlFor="phone"
            >
              行動電話
              {errors?.phone?.message && <span className="text-[#F40B0B] text-sm">{`${errors.phone.message}`}</span>}
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="
                w-full rounded-lg appearance-none border-none outline-none text-2xl text-primary px-2 py-3
                xl:w-[416px]
              " />
          </li>
          <li className="mb-2 md:flex md:justify-between md:items-center xl:mb-4">
            <label
              className="
                text-2xl leading-[140%] text-primary block mb-2
                after:inline-block after:content-['*'] after:text-[#F40B0B] after:text-base
              "
              htmlFor="email"
            >電子信箱
              {errors?.email?.message && <span className="text-[#F40B0B] text-sm">{`${errors.email.message}`}</span>}
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="
                w-full rounded-lg appearance-none border-none outline-none text-2xl text-primary px-2 py-3
                xl:w-[416px]
              " />
          </li>
          <li>
            <label
              className="
                text-2xl leading-[140%] text-primary block mb-2
                after:inline-block after:content-['*'] after:text-[#F40B0B] after:text-base
              "
              htmlFor="message"
            >留下您的訊息
              {errors?.message?.message && <span className="text-[#F40B0B] text-sm">{`${errors.message.message}`}</span>}
            </label>
            <textarea
              {...register("message")}
              id="message"
              className="w-full rounded-lg appearance-none border-none outline-none text-2xl text-primary px-2 py-3" 
            />
          </li>
        </ul>
        <button
          className="bg-primary text-white w-[196px] mx-auto text-center py-3 rounded-lg block"
          type="submit"
        >
          提交
        </button>
      </form>
    </section>
  )
}