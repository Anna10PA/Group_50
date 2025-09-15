import { useState } from 'react'

function Greeting() {
    let [value, setValue] = useState('')
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-950 text-white gap-[30px]'>
            <form className='gap-[30px] flex items-center'>
                <input type="text"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    placeholder='Enter name'
                    className='border-1 px-[10px] py-[5px] rounded tracking-[3px]'
                />
                <button onClick={(e)=> {
                    e.preventDefault()
                    setValue('')
                }} className='px-[20px] py-[10px] bg-red-600 rounded font-[700] tracking-[2px] cursor-pointer duration-400 hover:bg-red-700'>Reset</button>
            </form>
            <h1 className='text-[35px]'>Hello <span className='tracking-[4px] text-gray-300'> {value} </span></h1>
        </div>
    )
}

export default Greeting
