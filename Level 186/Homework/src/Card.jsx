import React from 'react'

function Card({ image, name, price, description, id }) {
    return (
        <div className='rounded h-[300px] overflow-hidden duration-100 group relative'>
            <img src={image || 'https://i.pinimg.com/736x/ed/27/44/ed27448079046041522dd0d293589e43.jpg'} alt={image} className='w-full h-full object-cover' />
            <div className='group-hover:h-full h-0 bg-[rgba(0,0,0,0.8)] backdrop-sepia-50 absolute bottom-0 left-0 w-full duration-300 flex flex-col items-start justify-end px-[20px]  group-hover:py-[30px] py-0 overflow-hidden gap-[10px]'>
                <h3 className='text-gray-300 font-[500] absolute right-[20px] top-[10px]'>#{id}</h3>
                <h2 className='text-white text-[25px] leading-8 font-bold'>{name}</h2>
                <h1 className='text-[#00ff00] text-[30px] font-bold'>${price}</h1>
                <p className='max-h-[60px] overflow-auto text-gray-400 leading-5 overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none]'>{description}</p>
                <button className='border rounded text-[#00ff00] px-[30px] py-[5px] font-bold mt-[10px] border-[#00ff00] cursor-pointer hover:opacity-55 duration-100'>Detail</button>
            </div>
        </div>
    )
}

export default Card
