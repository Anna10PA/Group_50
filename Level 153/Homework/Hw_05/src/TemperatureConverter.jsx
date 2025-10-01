import { useState } from 'react'

function TemperatureConverter() {
    let [value, setValue] = useState('C')
    let [result, setResult] = useState('Result')

    let converter = (number) => {
        setResult((value === 'F' ? (number - 32) * 5 / 9 : (9/5) * number + 32).toFixed(1))
    }
    return (
        <div className='w-full h-screen bg-gray-950 text-white flex items-center justify-center flex-col gap-10'>
            <h1 className='text-[40px] text-[#0f0] font-[700] tracking-[5px]'>{result} {value == 'C'? 'F' : 'C'}</h1>
            <form className='bg-gray-800 flex items-center px-[20px] py-[15px] gap-[5px] rounded font-[800] tracking-[3px] justify-center' onSubmit={(e) => {
                e.preventDefault()
                converter(e.target.value.value)
            }}>
                <h2 className='text-[20px]'>{value}</h2>
                <input type="number" className='focus:outline-none text-center text-[20px] w-[150px]'
                    name='value' />
                <button className='h-full bg-[#0f0] px-[10px] rounded font-[600] text-gray-900 cursor-pointer duration-400 hover:bg-[#0c0]'>Submit</button>
            </form>
            <p className='text-[20px] font-[600] tracking-[1.5px]'>You Have Selected: {value === 'C' ? 1 : 2}</p>
            <div className='flex flex-col item-center gap-3 text-[19px] tracking-[2px] font-[600]'>
                <button onClick={() => {
                    setValue('C')
                }}
                    className={`cursor-pointer border px-[10px] py-[5px] rounded ${value === 'C' ? 'border-[green] text-[#0f0]' : 'border-[red] text-red-600'}`}
                >1. Celsius To Fahrenheit</button>
                <button onClick={() => {
                    setValue('F')
                }}
                    className={`cursor-pointer border px-[10px] py-[5px] rounded ${value === 'F' ? 'border-[green] text-[#0f0]' : 'border-[red] text-red-600'}`}>2. Fahrenheit To Celsius</button>
            </div>
        </div>
    )
}

export default TemperatureConverter
