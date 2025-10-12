import React from 'react'

function Services() {
    return (
        <div className='bg-[url(/hero_bg.png)] min-h-[100vh] bg-no-repeat bg-center bg-cover flex justify-center items-center'>
            <div className='flex items-center justify-center gap-[30px] flex-wrap w-full mt-[140px] px-[20px]'>
                <div className='text-white bg-[linear-gradient(#a94115,#4a0a01)] rounded-[5px] px-[30px] py-[20px] max-w-[450px] animate-my'>
                    <h1 className='text-[40px] leading-10.5 font-[font-Playwrite] text-[#ffbf00] font-[700]'>20% Off <br /> Your First Order</h1>
                    <p className='mt-[10px]'>Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibenjgg.</p>
                    <button className='bg-[#933c24] px-[18px] py-[5px] rounded-[5px] font-[500] tracking-[1px] text-[12px] cursor-pointer duration-300 hover:bg-[brown] mt-[25px]'>Learn More</button>
                </div>
                <div className='text-white bg-[linear-gradient(#787878,#272727)] rounded-[5px] px-[30px] py-[20px] max-w-[450px] animate-my lg:mt-[85px] ml-[40px]' style={{ animationDelay: '1s', opacity: '0' }} >
                    <h1 className='text-[40px] leading-10.5 font-[font-Playwrite] text-[#060400] font-[700]'>40% off <br /> three cakes.</h1>
                    <p className='mt-[10px]'>Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibenjgg.</p>
                    <button className='bg-[#555555] px-[18px] py-[5px] rounded-[5px] font-[500] tracking-[1px] text-[12px] cursor-pointer duration-300 hover:bg-[#725c5c] mt-[25px]'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Services
