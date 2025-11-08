function DressStyle() {
    return (
        <section className="bg-[#f0f0f0] m-[70px] flex items-center flex-col gap-[60px] py-[70px] rounded-[30px] max-lg:mx-[20px] max-lg:py-[45px] max-lg:gap-[30px]">
            <h1 className="font-[800] text-[48px] max-lg:text-[30px] w-[80%] text-center leading-[35px]">BROWSE BY DRESS STYLE</h1>
            <div className="grid w-full px-[60px] gap-[30px] grid-cols-3 max-lg:grid-cols-1 max-md:px-[20px]">
                <div className="overflow-hidden h-[250px] col-span-1 col-start-1 row-start-1 rounded-[15px] flex justify-center items-center pt-[30px] relative max-lg:col-span-1 max-lg:col-start-1 max-lg:row-start-1 max-md:h-[180px] bg-white">
                    <img src="/image-003-1.png" alt="" className="object-cover rotate-y-[180deg] scale-[1.3] duration-300 hover:scale-[1.5] cursor-pointer" />
                    <h1 className="font-[600] tracking-[0.3px] z-[2] absolute top-[20px] left-[35px] text-[25px]">Casual</h1>
                </div>
                <div className="overflow-hidden h-[250px] col-span-2 col-start-2 row-start-1 rounded-[15px] flex justify-end items-center pt-[30px] relative bg-white cursor-pointer group max-lg:col-span-1 max-lg:col-start-1 max-lg:row-start-2 max-md:h-[180px]">
                    <img src="/image-003-2.png" className='object-cover scale-[1.3] duration-300 group-hover:scale-[1.5] cursor-pointer absolute right-[-200px] max-lg:right-[-130px] max-lg:top-[10px] top-[-20px]' alt="" />
                    <h1 className="font-[600] tracking-[0.3px] z-[2] absolute top-[20px] left-[35px] text-[25px]">Formal</h1>
                </div>
                <div className="overflow-hidden h-[250px] col-span-2 col-start-1 row-start-2 rounded-[15px] flex justify-end items-center pt-[30px] relative bg-white cursor-pointer group max-lg:col-span-1 max-lg:col-start-1 max-lg:row-start-3 max-md:h-[180px]">
                    <img src="/image-003-3.png" className='object-cover scale-[1] duration-300 group-hover:scale-[1.2] cursor-pointer max-sm:absolute max-sm:right-[-30px]' alt="" />
                    <h1 className="font-[600] tracking-[0.3px] z-[2] absolute top-[20px] left-[35px] text-[25px]">Party</h1>
                </div>
                <div className="overflow-hidden h-[250px] col-span-1 col-start-3 row-start-2 rounded-[15px] relative bg-white cursor-pointer group max-lg:col-span-1 max-lg:col-start-1 max-lg:row-start-4 flex items-center justify-end px-0 py-0 max-md:h-[180px]">
                    <img src="/image-003-4.png" alt="" className="object-cover duration-300 group-hover:scale-[1.1] cursor-pointer absolute right-[-100px]" />
                    <h1 className="font-[600] tracking-[0.3px] z-[2] absolute top-[20px] left-[35px] text-[25px]">Casual</h1>
                </div>
            </div>
        </section>
    )
}

export default DressStyle
