import React from 'react'

function Card_02({ Name, Rate, Comment }) {
    return (
        <div className='border border-gray-300 rounded-[15px] flex flex-col gap-[20px] justify-start item-start p-[30px] w-[330px] h-[300px]'>
            <div className='flex flex-col items-start gap-[15px] row-start-1'>
                <div className='flex items-center gap-[5px] text-[23px]'>
                    <i className="fa-solid fa-star text-[#ffc633]"></i>
                    <i className="fa-solid fa-star text-[#ffc633]"></i>
                    <i className="fa-solid fa-star text-[#ffc633]"></i>
                    <i className="fa-solid fa-star text-[#ffc633]"></i>
                    <i className="fa-solid fa-star text-[#ffc633]"></i>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <h1 className='font-[700] text-[18px]'>{Name}</h1>
                    <i className="fa-solid fa-circle-check text-[rgba(1,171,49,1)]"></i>
                </div>
            </div>
            <p>{Comment}</p>
        </div>
    )
}

export default Card_02
