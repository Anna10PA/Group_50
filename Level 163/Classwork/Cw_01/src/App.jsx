//   1) რეაქთით ააწყვეთ მუშა ნავიგაციის მენიუ

import About from './About'
import Category from './Category'
import ContactUs from './ContactUs'
import Home from './Home'
import { useState } from 'react'

function App() {
  let [page, setPage] = useState('Home')
  return (
    <>
    <header className='w-full flex items-center justify-center h-[100px] bg-black'>
        <nav className='w-full flex items-center justify-center text-white font-[600]'>
          <ul className='w-full flex items-center justify-center gap-[20px]'>
            <li onClick={()=> {
              setPage('Home')
            }} className='cursor-pointer duration-200 hover:text-blue-500'>Home</li>
            <li onClick={()=> {
              setPage('About')
            }} className='cursor-pointer duration-200 hover:text-blue-500'>About</li>
            <li onClick={()=> {
              setPage('Contact')
            }} className='cursor-pointer duration-200 hover:text-blue-500'>Contact</li>
            <li onClick={()=> {
              setPage('Category')
            }} className='cursor-pointer duration-200 hover:text-blue-500'>Category</li>
          </ul>
        </nav>
    </header>
    <main className='h-[80vh] flex items-center justify-center font-[600] text-[50px]'>
      {page === 'Home' ? < Home/> : page === 'About' ? < About/> : page === 'Contact' ? <ContactUs/> : page === 'Category' ? < Category/> : <h1>404 Not found</h1>}
    </main>
    
    </>
  )
}

export default App
