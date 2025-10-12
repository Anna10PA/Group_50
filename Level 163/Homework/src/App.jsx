import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Hero from './Components/Hero'
import Blog from './Components/Blog'
import ContactUs from './Components/ContactUs'
import Services from './Components/Services'


function App() {
  let [curentPage, setCurentPage] = useState('Home')
  function CheckCurrentPage() {
    let Location = useLocation()
    useEffect(() => {
      setCurentPage(Location.pathname.slice(1) || 'Home')
    }, [Location])
  }
  return (
    <>
      <BrowserRouter>
        <CheckCurrentPage />
        <header className='h-[70px] fixed top-0 flex items-center w-full gap-[70px] px-[60px] justify-start py-[55px] bg-black z-[2]'>
          <img src="/Logo.png" alt="" />
          <nav className='w-[65%] max-w-[400px] max-md:hidden'>
            <ul className='text-white font-[500] w-[100%] flex items-center gap-[20px] text-[20px] justify-between min-w-[310px]'>
              <Link to='/'>
                <li className={`${curentPage === 'Home' ? 'text-[#E9BD8C]' : 'text-white'} cursor-pointer`} onClick={() => {
                  setCurentPage('Home')
                }}>Home</li>
              </Link>
              <Link to='/Blog'>
                <li className={`${curentPage === 'Blog' ? 'text-[#E9BD8C]' : 'text-white'} cursor-pointer`} onClick={() => {
                  setCurentPage('Blog')
                }}>Blog</li>
              </Link>
              <Link to='/ContactUs'>
                <li className={`${curentPage === 'ContactUs' ? 'text-[#E9BD8C]' : 'text-white'} cursor-pointer`} onClick={() => {
                  setCurentPage('ContactUs')
                }}>Contact Us </li>
              </Link>
              <Link to='/Services'>
                <li className={`${curentPage === 'Services' ? 'text-[#E9BD8C]' : 'text-white'} cursor-pointer`} onClick={() => {
                  setCurentPage('Services')
                }}>Services </li>
              </Link>
            </ul>
          </nav>
          <div className='text-white relative'>
            <i className="fa-solid fa-cart-shopping text-[28px] text-[#E9BD8C] cursor-pointer duration-150 hover:text-[#bf8c52]"></i>
            <h1 className='absolute top-[-18px] right-[-5px] font-[600] text-[22px]'>0</h1>
          </div>
        </header>
        <Routes key={Location.key}>
          <Route path='/' element={<Hero />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
      </BrowserRouter>
      <footer>

      </footer>
    </>
  )
}

export default App
