import { useState } from 'react'
import Message from './Message.jsx'

function CharCounter() {
    let [count, setCount] = useState(0)
    let [value, setValue] = useState('')
    let [isDisabledValue, setIsDisabled] = useState(false)

    return (
        <div className='h-screen w-full flex items-center justify-center bg-gray-900 gap-5 flex-col-reverse'>
            <div className='flex items-center gap-[20px]'>
                <div className='flex items-center bg-gray-800 rounded px-5 py-3 gap-[10px]'>
                    <textarea className={`focus:outline-none font-[600] tracking-[2px] ${count === 100 ? 'text-red-400' : 'text-white'}`}
                        value={value.trim()}
                        onChange={(e) => {
                            e.preventDefault()
                            setValue(e.target.value)
                            setCount(e.target.value.length)
                            setIsDisabled(e.target.value.length < 100 ? false : true)
                        }} disabled={isDisabledValue} >
                    </textarea>
                    <h2 className={`${count === 100 ? 'text-red-400' : 'text-gray-300'} font-600 tracking-[3px] font-[700]`}>
                        {count}
                    </h2>
                </div>
                <button className='bg-red-400 cursor-pointer px-[15px] py-[10px] font-[700] tracking-[2px] rounded text-gray-950 duration-200 hover:bg-red-600' onClick={() => {
                    setValue('')
                    setCount(0)
                    setIsDisabled(false)
                }}>Reset</button>
            </div>
            {isDisabledValue ? 
            <div className='h-[100px]'>
                <Message/> 
            </div>: 
            <div className='h-[100px]'>
                </div>}
        </div>
    )
}

export default CharCounter
