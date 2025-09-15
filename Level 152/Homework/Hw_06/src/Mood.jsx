import { useState } from 'react'

function Mood() {
    let [value, setValue] = useState('')
    let [result, setResult] = useState('')
    return (
        <div className='h-screen w-full flex items-center flex-col justify-center gap-5 bg-gray-900 text-white'>
            <form onSubmit={(e) => {
                e.preventDefault()
                setResult(value.toLowerCase() === 'happy' ? '😀' : value.toLowerCase() === 'sad' ? '🙁' : value.toLowerCase() === 'scared' ? '😰' : value.toLowerCase() === 'angry' ? '😡' : 'Unknown 🤷‍♂️')
            }} className='flex items-center gap-[30px]'>
                <input type="text"
                    value={value}
                    placeholder='Enter your mood'
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    className='border px-[20px] py-[5px] rounded tracking-[2px]'
                />
                <button type='submit'
                    className='bg-[#0a0] rounded px-[10px] py-[5px] tracking-[2px] font-[700] cursor-pointer'
                >Submit</button>
                <button type='reset' onClick={() => {
                    setValue('')
                    setResult('')
                }}
                    className='bg-[#a00] rounded px-[10px] py-[5px] tracking-[2px] font-[700] cursor-pointer'>
                    reset</button>
            </form>
            <h1 className='text-[30px] tracking-[3px] font-[700]'>Your Mood: {result}</h1>
        </div>
    )
}

export default Mood
