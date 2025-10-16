function Card_01({ img, name, rate, price, oldPrice }) {
    let array = []
    for (let i = 0; i < Math.floor(rate); i++) {
        array.push(i)
    }
    return (
        <div className='w-[90%] flex flex-col items-start gap-[8px]'>
            <div className="h-[300px] w-full overflow-hidden flex items-center justify-center rounded-[20px] bg-[#f0eeed]">
                <img src={img} alt="" className="w-[100%] duration-200 hover:scale-[1.05] object-cover" />
            </div>
            <div>
                <h1 className="font-[600] text-[20px]">{name[0].toUpperCase() + name.slice(1).toLowerCase()}</h1>
                <div className="flex items-center gap-[6px]">
                    {
                        array.map((_, index) => {
                            return <i className="fa-solid fa-star text-[#ffc633]" key={index}></i>
                        })

                    }
                    {
                        rate % 1 !== 0 ?
                            <i className="fa-solid fa-star-half text-[#ffc633]"></i>
                            : null

                    }
                    <p className="text-gray-500">{String(rate).includes('.') ? <span className="text-black">{rate}/</span> : <span className="text-black"> {rate}.0/</span>}5</p>
                </div>
            </div>
            <div className="flex items-center justify-start gap-[15px]">
                <h1 className="text-black font-[700] text-[24px]">${price}</h1>
                <h1 className="text-gray-400 font-[600] text-[24px] line-through">{oldPrice ? <span>${oldPrice}</span> : null}</h1>
                {oldPrice ? <div className="bg-[#ffebeb] px-[15px] text-[rgba(255,51,51,1)] font-[500] py-[5px] rounded-[60px] ml-[5px]">-{Math.floor(((oldPrice - price) / oldPrice) * 100)}%</div> : null}
            </div>
        </div >
    )
}

export default Card_01
