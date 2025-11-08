import React from 'react'

function Send() {
    return (
        <div className='w-full px-[70px] max-lg:px-[20px] absolute z-[2] top-[-12%] max-xl:top-[-20%] max-md:top-[-12%] max-sm:top-[-30%]'>
            <div className='bg-black text-white rounded-[20px] px-[80px] py-[50px]  max-md:px-[20px] flex items-center justify-between gap-[50px] max-xl:flex-col max-md:py-[30px] max-md:gap-[30px]'>
                <h1 className='font-[900] text-[40px] leading-[45px] max-md:text-[28px] max-w-[550px] max-md:leading-[35px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div className='w-[50%] max-md:w-[100%] max-lg:min-w-[250px] max-w-[390px] flex flex-col gap-[17px]'>
                    <div className='relative bg-white px-[20px] flex items-center gap-[15px] h-[50px] rounded-[50px]'>
                        <i className="fa-solid fa-envelope text-gray-400 text-[20px] "></i>
                        <input type="email" placeholder='Enter your email address' className='placeholder:text-[rgba(0,0,0,0.4)] outline-none text-[17px] text-black' />
                    </div>
                    <button className='w-full bg-white rounded-[50px] h-[48px] text-black font-[500] max-md:text-[15px] cursor-pointer duration-200 hover:bg-gray-300'>Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
    )
}

export default Send
