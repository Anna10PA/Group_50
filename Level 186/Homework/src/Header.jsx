import { IsOpen } from "./App"
import { useContext } from "react"


function Header() {
  let { open, setOpen } = useContext(IsOpen)

  return (
    <header className='min-h-[12vh] bg-gray-950 flex items-center justify-between px-12 z-50'>
      <h1 className='text-white text-[25px]'>ShopHope.com</h1>
      <i className="fa-solid fa-gears text-white text-[30px] cursor-pointer duration-100 hover:text-gray-200" onClick={() => { 
        setOpen(!open)
      }}></i>
    </header>
  )
}

export default Header
