import { useState } from 'react'

function Description() {
  let [value, setValue] = useState('')
  let [result, setResult] = useState('No Description')

  return (
    <div className='h-screen w-full flex justify-center items-center gap-5 flex-col bg-gray-950 text-white'>
      <form onSubmit={(e) => {
        e.preventDefault()
        setResult(value)
      }}
        className='flex items-center gap-5'>
        <textarea
          placeholder='Enter text'
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          className='border rounded px-[10px] py-[5px]'
        ></textarea>
        <button type='submit'
          className='bg-[#0f0] text-black px-[15px] py-[6px] rounded font-[800] tracking-[1px] cursor-pointer hover:bg-[#0d0]'>Submit</button>
        <button type='reset'
          className='bg-[#f00] text-black px-[15px] py-[6px] rounded font-[800] tracking-[1px] cursor-pointer hover:bg-[#d00]'
          onClick={()=> {
            setValue('')
            setResult('')
          }}>Reset</button>
      </form>
      <p
        className='text-[25px] font-[700] tracking-[2px]'>Your Description: <span className='text-[#0f0]'>{result}</span></p>
    </div>
  )
}

export default Description
