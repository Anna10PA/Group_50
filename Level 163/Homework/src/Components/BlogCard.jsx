function BlogCard({name, text, img}) {
    return (
        <div className='bg-[#393939] min-h-[250px] max-h-[350px] rounded-[5px] px-[25px] py-[20px] flex flex-col gap-[15px] justify-between cursor-pointer duration-200 hover:bg-[#303030]'>
            <div className='flex items-center gap-[15px] w-full'>
                <img src={img} className='w-[45px] h-[45px] rounded-[50%] border-[3px] border-gray-100' alt="" />
                <div className='text-white leading-[23px] '>
                    <h1 className='text-[20px] font-[700]'>{name}</h1>
                    <p className='text-[14px] text-gray-300 font-[500]'>Costumer</p>
                </div>
            </div>
            <h1 className='font-[500]'>
                {text}
            </h1>
            <div className='flex items-center gap-[10px] my-[10px]'>
                <i className="fa-solid fa-star text-yellow-400 text-[23px]"></i>
                <i className="fa-solid fa-star text-yellow-400 text-[23px]"></i>
                <i className="fa-solid fa-star text-yellow-400 text-[23px]"></i>
                <i className="fa-solid fa-star text-yellow-400 text-[23px]"></i>
                <i className="fa-solid fa-star text-yellow-400 text-[23px]"></i>
            </div>
        </div>
    )
}

export default BlogCard
