import Category from './Category'
import ContactUs from './ContactUs'
import About from './About'

function FullPage() {
  return (
    <>
        <header className='w-full flex items-center justify-center h-[100px] bg-black'>
        <nav className='w-full flex items-center justify-center text-white font-[600]'>
          <ul className='w-full flex items-center justify-center gap-[20px]'>
            <li className='cursor-pointer duration-200 hover:text-blue-500'>Home</li>
            <li className='cursor-pointer duration-200 hover:text-blue-500'>About</li>
            <li className='cursor-pointer duration-200 hover:text-blue-500'>Contact</li>
            <li className='cursor-pointer duration-200 hover:text-blue-500'>Category</li>
          </ul>
        </nav>
      </header> 
    </>
  )
}

export default FullPage
