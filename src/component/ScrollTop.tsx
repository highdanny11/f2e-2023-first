export function ScrollTop() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }
  return(
    <div onClick={scrollTop} className="fixed bottom-10 right-10 z-[4] cursor-pointer rounded-full text-primary bg-white w-20 h-20 flex justify-center items-center">
      <i className="bi bi-arrow-up text-[40px]"></i>
    </div>
  )
}