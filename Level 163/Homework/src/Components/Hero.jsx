import React from 'react'
import TopProductsCard from './TopProductsCard'

function Hero() {
    return (
        <main className='flex flex-col items-center pt-[50px]'>
            <section className='flex text-white flex-col justify-center px-[60px] gap-[60px] h-[100vh] w-full bg-[url(/hero_bg.png)] bg-no-repeat bg-center bg-cover '>
                <div>
                    <h2 className='font-p text-[#E9BD8C] text-[20px] font-[500] tracking-[1px]'>Delicious Cafe</h2>
                    <h1 className='text-[65px] leading-[1.2]'>
                        Sweet Treats, <br />
                        Perfect Eats
                    </h1>
                </div>
                <div className='flex items-center gap-[25px]'>
                    <button className='bg-[#933c24] px-[38px] py-[15px] rounded-[8px] font-[500] tracking-[1px] border text-[20px] border-black cursor-pointer duration-300 hover:bg-[brown]'>Shop Now</button>
                    <button className='text-[#E9BD8C] font-[500] tracking-[1px] text-[20px] cursor-pointer'>Learn More</button>
                </div>
            </section>
            <section className='flex flex-col items-center w-full min-h-[100vh] justify-center gap-[30px] mt-[60px]'>
                <h1 className='font-[700] text-[45px] text-center'>Top Products</h1>
                <div className='w-[70%] px-[20px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]'>
                    <TopProductsCard image='/image_001.png' price={40} title='Whole Grain Bread' />
                    <TopProductsCard image='/image_002.png' price={40} title='Whole Grain Bread' />
                    <TopProductsCard image='/image_003.png' price={40} title='Whole Grain Bread' />
                    <TopProductsCard image='/image_004.png' price={40} title='Whole Grain Bread' />
                    <TopProductsCard image='/image_005.png' price={40} title='Whole Grain Bread' />
                    <TopProductsCard image='/image_006.png' price={40} title='Whole Grain Bread' />
                </div>
            </section>
        </main>
    )
}

export default Hero
