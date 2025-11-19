import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductInfos } from '../App'

function Header() {
    const navigate = useNavigate()
    const infos = useContext(ProductInfos)
    console.log('info-info', infos)
    return (
        <>
            <article className='bg-black w-full py-[12px] flex items-center justify-center gap-[30px] '>
                <h1 className='text-gray-100 font-[200] tracking-[1px] text-[14px] text-center max-lg:text-[10px]'>
                    Sign up and get 20% off to your first order. <span className='text-white font-[400] underline'>Sign Up Now</span>
                </h1>
                <i className="fa-solid fa-xmark text-white absolute right-[100px] text-[23px] cursor-pointer max-lg:relative max-lg:right-0 max-lg:text-[18px]" onClick={(e) => {
                    e.target.parentElement.style.display = 'none'
                }}></i>
            </article>

            {/* Header */}
            <header className='flex items-center justify-between gap-[40px] max-lg:gap-[20px] py-[30px] px-[80px] max-lg:px-[20px] max-sm:py-[15px]'>
                <div className='hidden max-lg:block'>
                    <Link to='Cart'>
                        <i className="fa-solid fa-bars text-[24px] mt-[5px]"></i>
                    </Link>
                </div>
                <h1 className='text-[32px] font-[500] font-[BBH_Sans_Hegarty]'>SHOP.CO</h1>
                <nav className='max-lg:hidden'>
                    <ul className='flex items-center gap-[25px] w-[max-content]'>
                        <Link to='/'>
                            <li className='cursor-pointer'>Home</li>
                        </Link>
                        <li className='cursor-pointer' onClick={() => {
                            navigate('/Sale', { state: infos })
                        }}>Sale</li>
                        <Link to='Contact'>
                            <li className='cursor-pointer'>Contact</li>
                        </Link>
                    </ul>
                </nav>
                <div className='bg-[#f0f0f0] flex items-center justify-start gap-[15px] px-[20px] py-[10px] w-[80%] max-w-[750px] rounded-[62px] min-w-[222px] max-lg:bg-white max-lg:min-w-[min-content] max-lg:gap-0 max-lg:p-[0] max-lg:justify-end'>
                    <i className="fa-solid fa-magnifying-glass text-[rgba(0,0,0,0.4)] text-[18px] max-lg:text-black max-lg:text-[23px]"></i>
                    <input type="text" placeholder='Search for products...' className='outline-none placeholder:text-[rgba(0,0,0,0.4)] font-[400] w-full max-lg:hidden' />
                </div>
                <div className='text-[24px] flex items-center gap-[15px]'>
                    <Link to='Cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                    <Link to=''>
                        <i className="fa-solid fa-circle-user"></i>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header
