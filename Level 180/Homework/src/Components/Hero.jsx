function Hero() {
  return (
    <>
      <section className='bg-[rgba(242,240,241,1)] min-h-[70vh] flex flex-col justify-center overflow-hidden relative w-full'>
        <div className="w-full flex items-center justify-between px-[80px] max-lg:px-[0px] relative max-xl:pt-[80px] max-sm:pt-[40px] max-lg:flex-col max-xl:px-[40px]">
          <div className='flex flex-col items-start gap-[30px] max-lg:px-[20px]'>
            <h1 className='font-[500] text-[75px] leading-[75px] max-md:text-[40px] max-md:leading-[40px] max-2xl:text-[50px] max-xl:text-[50px] font-[BBH_Sans_Hegarty]'>FIND CLOTHES <br />THAT MATCHES <br /> YOUR STYLE</h1>
            <p className='text-[rgba(0,0,0,0.6)] max-md:text-[14px]'>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
            <button className='bg-black text-white px-[50px] py-[12px] text-[16px] rounded-[62px] font-[500] cursor-pointer max-md:max-w-[500px] max-md:w-[95%]'>Shop Now</button>
            <div className='flex items-center justify-center gap-[30px] flex-wrap mt-[20px] max-md:mt-[0]'>
              <div className='w-[max-content]'>
                <h1 className='text-[40px] font-[700] max-md:text-[24px] max-2xl:text-[37px]'>200+</h1>
                <p className='text-[rgba(0,0,0,0.6)] max-md:text-[12px]'>International Brands</p>
              </div>
              <div className='w-[1.5px] h-[80px] bg-[rgba(0,0,0,0.1)]'></div>
              <div>
                <h1 className='text-[40px] font-[700] max-md:text-[24px] max-2xl:text-[37px]'>2,000+</h1>
                <p className='text-[rgba(0,0,0,0.6)] max-md:text-[12px]'>High-Quality Products</p>
              </div>
              <div className='w-[1.5px] h-[80px] bg-[rgba(0,0,0,0.1)] max-sm:hidden'></div>
              <div>
                <h1 className='text-[40px] font-[700] max-md:text-[24px] max-2xl:text-[37px]'>30,000+</h1>
                <p className='text-[rgba(0,0,0,0.6)] max-md:text-[12px]'>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className='h-[95vh] w-full max-w-[700px] flex items-start justify-center overflow-hidden relative bg-[url("/poster.jpg")] bg-cover max-sm:h-[410px] bg-[position:top_-50px_center]  min-w-[300px] max-sm:bg-[position:top_center] max-xl:max-w-[500px] max-xl:max-h-[85vh]'>
            <img src="/star.png" alt="" className='absolute z-[2] top-[48%] left-[10px] w-[50px] ' />
            {/* <img src="/poster.jpg" alt=""  /> */}
            <img src="/star-big.png" alt="" className='absolute z-[2] top-[20%] right-[5px] max-md:w-[70px]' />
          </div>
        </div>
        <div className='bg-black flex items-center justify-around flex-wrap gap-[20px] px-[20px] py-[40px]'>
          <img src="/Versace.png" alt="Versace" className='max-md:h-[22px]' />
          <img src="/Zara.png" alt="Zara" className='max-md:h-[22px]' />
          <img src="/Gucci.png" alt="Gucci" className='max-md:h-[22px]' />
          <img src="/Prada.png" alt="Prada" className='max-md:h-[18px]' />
          <img src="/Calvin klein.png" alt="Calvin klein" className='max-md:h-[22px]' />
        </div>
      </section>
    </>
  )
}

export default Hero
