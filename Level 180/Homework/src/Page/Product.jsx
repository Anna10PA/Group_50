import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import Reviews from '../Components/Reviews'

function Product() {
    let location = useLocation()
    let product = location.state
    let { type, name } = useParams()

    let [count, setCount] = useState(1)
    let [curentImage, setCurentPage] = useState(product.imgList[0])
    let [chosenIndex, setIndex] = useState(null)

    console.log(curentImage)

    console.log('keys', useParams())
    console.log(product)


    if (!product) return
    let array = []
    for (let i = 0; i < Math.floor(product.rate); i++) {
        array.push(i)
    }

    return (
        <>
            <section className='border-t border-gray-300 mx-[70px] flex flex-col items-start gap-[35px] w-[90%] max-lg:mx-[20px] max-sm:gap-[15px] '>
                <div className='flex items-center gap-[20px] text-gray-400 pt-[20px] max-sm:gap-[10px]'>
                    <h1>Home</h1>
                    <i className="fa-solid fa-chevron-right"></i>
                    <h1>Shop</h1>
                    <i className="fa-solid fa-chevron-right"></i>
                    <h1>{product.id % 2 == 0 ? 'Women' : 'Men'}</h1>
                    <i className="fa-solid fa-chevron-right"></i>
                    <h1 className='text-black'>{type[0].toUpperCase() + type.slice(1).toLowerCase()}</h1>
                </div>
                <div className='flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:items-center '>
                    <div className='flex items-center gap-[20px] w-[60%] max-sm:flex-col-reverse max-lg:w-[100%]'>
                        <div className='flex flex-col items-center gap-[20px] max-sm:flex-row'>
                            <div className={`w-[150px] h-[170px] overflow-hidden flex items-center justify-center rounded-[10px] duration-200 cursor-pointer bg-[#f2f3ee] max-sm:w-[100px] max-sm:h-[100px] ${product.imgList[0] == curentImage ? 'border border-[3px]' : ''}`} onClick={()=> {
                                setCurentPage(product.imgList[0])
                            }}>
                                <img src={product.imgList[0]} alt="" className='object-cover duration-200 hover:scale-[1.1] scale-[1] w-full h-[100%]' />
                            </div>
                            <div className={`w-[150px] h-[170px] overflow-hidden flex items-center justify-center rounded-[10px] duration-200 cursor-pointer bg-[#f2f3ee] max-sm:w-[100px] max-sm:h-[100px] ${product.imgList[1] == curentImage ? 'border border-[3px]' : ''}`} onClick={()=> {
                                setCurentPage(product.imgList[1])
                            }}>
                                <img src={product.imgList[1]} alt="" className='object-cover duration-200 hover:scale-[1.1] scale-[1] w-full h-[100%]' />
                            </div>
                            <div className={`w-[150px] h-[170px] overflow-hidden flex items-center justify-center rounded-[10px] duration-200 cursor-pointer bg-[#f2f3ee] max-sm:w-[100px] max-sm:h-[100px] ${product.imgList[2] == curentImage ? 'border border-[3px]' : ''}`} onClick={()=> {
                                setCurentPage(product.imgList[2])
                            }}>
                                <img src={product.imgList.length < 3 ? product.imgList[0] : product.imgList[2]} alt="404" className='object-cover duration-200 hover:scale-[1.1] scale-[1] w-full h-[100%]' />
                            </div>
                        </div>
                        <div className='max-w-[450px] bg-[#e8e9e8] w-full h-[550px] overflow-hidden rounded-[10px] flex items-center justify-center border-[3px] border-[#e8e9e8] max-sm:w-[350px] max-sm:h-[280px] min-w-[300px] max-lg:max-w-[750px] max-lg:w-[150%] max-md:min-w-[300px] '>
                            <img src={curentImage ? curentImage : chosenIndex ? product.imgList[chosenIndex] : product.imgList[0] } alt="" className='w-full hover:scale-[1.1] object-cover duration-200 scale-[1] ' />
                        </div>
                    </div>
                    <div className='w-[70%] max-w-[900px] max-sm:w-[100%] max-lg:w-[100%]'>
                        <h1 className='text-[40px] font-[900] leading-[45px] max-xl:text-[30px] max-sm:text-[24px] max-sm:leading-[30px] max-sm:w-[90%]'>{product.title.toUpperCase()}</h1>
                        <div className='flex items-center gap-[10px] mt-[10px]'>
                            <p className='flex items-center gap-[7px] text-[20px]c'>
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
                            <h1 className='text-[rgba(0,0,0,0.6)] text-[17px]'>
                                <span className='text-black'>
                                    {product.rate !== Math.floor(product.rate) ? product.rate : `${product.rate}.0`}
                                </span>
                                /5
                            </h1>
                        </div>
                        <div className='flex items-center gap-[20px] mt-[17px]'>
                            <h1 className='text-[32px] font-[700] max-xl:text-[30px] max-sm:text-[24px]'>${product.price}</h1>
                            <h1 className='text-[#b2b2b2] font-[600] text-[32px] line-through max-sm:text-[24px]'>
                                {product.discount ? `$${product.discount}` : ''}
                            </h1>
                            {product.discount ? <div className="bg-[#ffebeb] px-[15px] text-[rgba(255,51,51,1)] font-[500] py-[5px] rounded-[60px] w-[min-content] max-sm:text-[14px]">-{Math.floor(((product.discount - product.price) / product.discount) * 100)}%</div> : null}
                        </div>
                        <p className='w-[90%] min-w-[300px] text-[rgba(0,0,0,0.6)] mt-[10px] pb-[20px] max-sm:text-[14px]'>
                            {product.desc}
                        </p>
                        <div className='border-t border-gray-300 pt-[20px] flex flex-col items-start gap-[10px] pb-[20px] max-sm:text-[14px]'>
                            <h2 className='text-[rgba(0,0,0,0.6)] font-[400]'>Select color</h2>
                            <div className='flex items-center gap-[15px] '>
                                {
                                    product.colorList.map((item, index) => {
                                        return <div className={`w-[40px] h-[40px] rounded-[50%] cursor-pointer flex items-center justify-center ${item === 'white' ? 'border-[2px] text-black' : 'text-white'} bg-[${item}]`} style={{ backgroundColor: item }} key={item} onClick={()=> {
                                            setIndex(index)
                                            setCurentPage(product.imgList[index])
                                            console.log(product.colorList[index])
                                        }}>
                                             <i className={`fa-solid fa-check ${index === chosenIndex ? 'opacity-[100%]' : 'opacity-0'}`}></i>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className='border-t border-gray-300 pt-[20px] flex flex-col items-start gap-[10px] pb-[20px] max-sm:text-[14px]'>
                            <h2 className='text-[rgba(0,0,0,0.6)]'>Choose Size</h2>
                            <div className='flex items-center gap-[20px] flex-wrap max-sm:gap-[10px]'>
                                {
                                    product.sizeList.map((item, index) => {
                                        return <button className='bg-[rgba(240,240,240,1)] text-[rgba(0,0,0,0.6)] cursor-pointer px-[25px] py-[10px] text-[16px] rounded-[20px]  max-sm:text-[14px]' key={index} >{item}</button>
                                    })
                                }
                            </div>
                        </div>
                        <div className='border-t border-gray-300 pt-[20px] flex items-center gap-[20px]'>
                            <div className='bg-[#f0f0f0] px-[30px] py-[15px] rounded-[50px] flex items-center justify-between gap-[40px] min-w-[200px] max-sm:min-w-[140px] max-sm:gap-[15px]'>
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
                            <button className='w-full rounded-[50px] bg-black text-white px-[30px] py-[15px] cursor-pointer max-sm:text-[14px] font-[500] tracking-[1px]'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mx-[70px] flex flex-col items-start gap-[35px] w-[90%] max-lg:mx-[20px] max-sm:gap-[15px] mt-[30px]'>
                <div className='w-full flex items-center justify-evenly border-b border-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.6)] mt-[30px] text-[20px] font-[400] pb-[20px] max-sm:text-[16px] max-md:justify-between'>
                    <h1 className='cursor-pointer'>Product Details</h1>
                    <h1 className='cursor-pointer underline decoration-solid underline-offset-25 decoration-black text-black'>Rating & Reviews</h1>
                    <h1 className='cursor-pointer'>FAQs</h1>
                </div>
                <Reviews />
            </section>
        </>
    )
}

export default Product