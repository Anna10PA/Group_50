import { useState } from 'react'

function Card_04() {
    const [count, setCount] = useState(1)

    return (
        <div className='flex items-center gap-[20px] border-b border-[rgba(0,0,0,0.1)] py-[20px] w-full relative max-md:py-[12px]'>
            <div className='max-w-[150px] max-h-[150px] overflow-hidden flex items-center justify-center  rounded-[9px] max-md:max-w-[100px] max-md:max-h-[100px] border-[#F0EEED]'>
                <img src="Id_18/image_01.png" alt="" className='object-cover duration-200 scale-[1] ' />
            </div>
            <div className='leading-[2] w-full'>
                <h1 className='font-[700] text-[22px] max-md:text-[18px] max-md:max-w-[85%] leading-[1.2] max-sm:text-[16px] '>Gradient Graphic T-shirt</h1>
                <p className='text-[16px] max-md:text-[14px]'>Size:<span className='text-[rgba(0,0,0,0.6)]'> Large</span></p>
                <p className='text-[16px] max-md:text-[14px]'>Color:<span className='text-[rgba(0,0,0,0.6)]'> Gray</span></p>
                <h1 className='font-[700] text-[26px] mt-[10px] max-md:text-[18px]'>$200</h1>
            </div>
            <i className="fa-solid fa-trash absolute top-[0px] right-[10px] text-[rgba(255,51,51,1)] text-[25px] cursor-pointer duration-200 hover:text-red-600 mt-[20px] max-lg:right-[0px] max-md:text-[22px]"></i>
            <div className='bg-[#f0f0f0] px-[20px] py-[10px] rounded-[50px] flex items-center justify-center gap-[30px] min-w-[150px] max-sm:min-w-[100px] max-sm:gap-[15px] absolute bottom-[20px] right-[10px] max-md:py-[5px] max-md:min-w-[80px] max-md:bottom-[12px] max-md:right-[0px]'>
                <i className="fa-solid fa-minus text-[20px] cursor-pointer max-sm:text-[15px]" onClick={() => {
                    setCount(count - 1 > 0 ? count - 1 : 1)
                }}></i>
                <div className='text-[17px]'>
                    {count}
                </div>
                <i className="fa-solid fa-plus text-[20px] cursor-pointer max-sm:text-[15px]" onClick={() => {
                    setCount(count + 1)
                }}></i>
            </div>
        </div>
    )
}

export default Card_04
