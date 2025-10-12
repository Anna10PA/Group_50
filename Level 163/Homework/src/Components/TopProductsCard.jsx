import React from 'react'

function TopProductsCard({ image, price, title }) {
    return (
        <div className='bg-[url(/bg.png)] h-[360px] bg-no-repeat bg-cover flex flex-wrap items-center px-[15px] gap-[25px] rounded group justify-center '>
            <img src={image} alt="" className='scale-[1] duration-150 group-hover:scale-[1.2] h-[150px] mt-[20px]' />
            <div className='flex flex-col items-start gap-[10px] pr-[2px] relative bottom-[20px]'>
                <div className='w-full text-white font-[500] flex items-center justify-between'>
                    <h1 className='text-[20px] tracking-[1px]'>${price}</h1>
                    <div className='w-[30px] h-[30px] rounded-[50%] border border-white text-white flex justify-center items-center'>i</div>
                </div>
                <div className='text-[16px] tracking-[1px] text-white flex items-center w-full justify-between '>
                    <h1 className='w-[60%]'>{title}</h1>
                    <button className='px-[10px] bg-[#933c24] rounded-[5px] py-[5px] cursor-pointer'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default TopProductsCard
