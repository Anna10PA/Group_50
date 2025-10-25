import { useLocation, useParams, useNavigate } from 'react-router-dom'

function Product() {
    let location = useLocation()
    let { type, name } = useParams()
    let navigate = useNavigate()
    let product = location.state
    console.log(product)

    if (!product) {
        return (
            <h1 className="text-center mt-10">
                Not found
            </h1>
        )
    }
    let array = []
    for (let i = 0; i < Math.floor(product.rate); i++) {
        array.push(i)
    }

    return (
        <section className='border-t border-gray-300 mx-[70px] flex flex-col items-start gap-[40px]'>
            <h1 className='flex items-center gap-[20px] text-gray-400 '>
                <span>Home</span>
                <i className="fa-solid fa-chevron-right"></i>
                <span>Shop</span>
                <i className="fa-solid fa-chevron-right"></i>
                <span>Men</span>
                <i className="fa-solid fa-chevron-right"></i>
                <span className='text-black'>{type}</span>
            </h1>
            <div className='w-full flex items-center'>
                <div className='flex w-full items-center gap-[20px]'>
                    <div className='flex flex-col items-center gap-[20px]'>
                        <div className='w-[150px] h-[170px] overflow-hidden flex items-center justify-center rounded-[10px] duration-200 cursor-pointer bg-[#f2f3ee]'>
                            <img src={product.imgList[0]} alt="" className='object-cover duration-200 hover:scale-[1.1] scale-[1] w-full h-[100%]' />
                        </div>
                        <div className='w-[150px] h-[170px] overflow-hidden flex items-center justify-center rounded-[10px] duration-200 cursor-pointer bg-[#f2f3ee]'>
                            <img src={product.imgList[1]} alt="" className='object-cover duration-200 hover:scale-[1.1] scale-[1] w-full h-[100%]' />
                        </div>
                        <div className='w-[150px] h-[170px] overflow-hidden flex items-center justify-center rounded-[10px] duration-200 cursor-pointer bg-[#f2f3ee]'>
                            <img src={product.imgList.length < 3 ? product.imgList[0] : product.imgList[2]} alt="404" className='object-cover duration-200 hover:scale-[1.1] scale-[1] w-full h-[100%]' />
                        </div>
                    </div>
                    <div className='max-w-[560px] bg-[#e8e9e8] w-full h-[550px] overflow-hidden rounded-[10px] flex items-center justify-center border-[3px] border-[#e8e9e8]'>
                        <img src={product.mainImgSrc} alt="" className='w-full hover:scale-[0.9] object-cover duration-200 scale-[0.8]' />
                    </div>
                </div>
                <div>
                    <h1 className='text-[40px] font-[900] leading-[50px]'>{product.title}</h1>
                    <div className='flex items-center gap-[15px]'>
                        <p className='flex items-center gap-[5px]'>
                            {
                                array.map((_, index) => {
                                    return <i className="fa-solid fa-star text-[#ffc633]" key={index}></i>
                                })

                            }
                            {
                                product.rate % 1 !== 0 ?
                                    <i className="fa-solid fa-star-half text-[#ffc633]"></i>
                                    : null

                            }
                        </p>
                        <h1>
                            <span>
                                {product.rate}
                            </span>
                            / 5
                        </h1>
                    </div>
                    <div className='flex items-center gap-[50px]'>
                        <h1 className='text-[32px] font-[700]'>${product.price}</h1>
                        <h1 className='text-gray-400 font-[600] text-[32px] line-through'>
                            {product.discount ?  `$${product.discount}` : ''}
                        </h1>
                        {product.discount ? <div className="bg-[#ffebeb] px-[15px] text-[rgba(255,51,51,1)] font-[500] py-[5px] rounded-[60px] ml-[5px] w-[min-content]">-{Math.floor(((product.discount - product.price) / product.discount) * 100)}%</div> : null}
                    </div>
                    <p>
                        {product.desc}
                    </p>
                    <div className='border-t border-gray-300 '>
                        <h2 className='text-[rgba(0,0,0,0.6)]'>Select color</h2>
                        <div className='flex items-center gap-[10px]'>
                            {
                                product.colorList.map(item => {
                                    return <div className={`w-[40px] h-[40px] rounded-[50%] cursor-pointer`} style={{ backgroundColor: item }} key={item}></div>
                                })
                            }
                        </div>
                    </div>
                    <div className='border-t border-gray-300 '>
                        <h2 className='text-[rgba(0,0,0,0.6)]'>Choose Size</h2>
                        <div className='flex items-center gap-[20px]'>
                            {
                                product.sizeList.map(item => {
                                    return <button className='bg-[rgba(240,240,240,1)] text-[rgba(0,0,0,0.6)] cursor-pointer px-[25px] py-[10px] text-[16px] rounded-[20px]'>{item}</button>
                                })
                            }

                            {/* <button className='bg-[rgba(240,240,240,1)] text-[rgba(0,0,0,0.6)] cursor-pointer px-[25px] py-[10px] text-[16px] rounded-[20px]'>Medium</button>
                            <button className='bg-[rgba(240,240,240,1)] text-[rgba(0,0,0,0.6)] cursor-pointer px-[25px] py-[10px] text-[16px] rounded-[20px]'>Large</button>
                            <button className='text-[rgba(240,240,240,1)] bg-[rgb(0,0,0)] cursor-pointer px-[25px] py-[10px] text-[16px] rounded-[20px]'>X-Large</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product