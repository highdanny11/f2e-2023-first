export function ScrollTop() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }
  return(
    <div onClick={scrollTop} className="
      xl:w-20 xl:h-20
      w-10 h-10
      fixed bottom-10 right-10 z-[4]
      cursor-pointer rounded-full
      text-primary bg-white
      flex justify-center items-center">
      <i className="xl:text-[40px] text-xl bi bi-arrow-up"></i>
    </div>
  )
}