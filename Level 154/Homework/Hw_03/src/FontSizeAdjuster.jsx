import Toast from "./Toast.jsx"
import { useState } from 'react'

function FontSizeAdjuster() {
    let [isOpen, setOpen] = useState(false)
    let [isError, setIsError] = useState(false)
    let [font, setFont] = useState(null)

    return (
        <div className='h-screen w-full flex items-center justify-center flex-col bg-gray-950 gap-10'>
            <form className='bg-gray-700 flex items-center gap-[15px] px-[15px] py-[5px]' onSubmit={(e) => {
                e.preventDefault()
                if (e.target.number.value <= 100 && e.target.number.value >= 10) {
                    setIsError(false)
                    setFont(e.target.number.value)
                } else {
                    setIsError(true)
                    setOpen(true)
                }
            }}>
                <input type="number" className='focus:outline-none text-white tracking-[2px] font-[700]' name='number' />
                <button type='submit' className='px-[10px] py-[5px] bg-[#0f0] text-gray-900 font-[700] trucking-[2px] rounded cursor-pointer'>Submit</button>
                <button type='reset' className='px-[10px] py-[5px] bg-[#f00] text-gray-950 font-[700] trucking-[2px] rounded cursor-pointer'>Reset</button>
            </form>
            <p style={{ fontSize: `${font}px` }} className='text-white font-[600] tracking-[2px]'>Text</p>
            {isError && isOpen ?
                <Toast content='The number must be between 10-100' expiresIn={10000} colors={{ background: 'rgb(255, 100, 100)', color: 'rgb(166, 0, 62)' }} funct={setOpen} /> :
                null}
        </div>
    )
}

export default FontSizeAdjuster

