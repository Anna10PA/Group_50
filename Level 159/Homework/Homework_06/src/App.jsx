/* 
6) შექმენით ორი state: temperature (რიცხვი), city (სტრინგი)
შექმენით ორი input -> ერთში ტემპერატურას შევიყვანთ მეორეში ქალაქის სახელს
შექმენით useEffect, რომელიც ორიცე state ს თვალს ადევნებს
თუ temperature > 35 და city.length >= 3 -> console.log("Heat Alert in", city)
თუ temperature < 5 -> console.log("Cold Alert in", city)
სხვა შემთხვევაში -> console.log("Weather normal")
*/

import { useState, useEffect } from 'react'

function App() {
  let [temperature, setTemperature] = useState(0)
  let [city, setCity] = useState('')
  let [result, setResult] = useState('')
  let [start, setStart] = useState(false)

  useEffect(() => {
    setResult(temperature > 35 && city.trim().length >= 3 && start ? `Heat Alert in, ${city}` : temperature < 5 && start ? `Cold Alert in ${city}` : !start ? '' : "Weather normal")
    console.log(temperature > 35 && city.trim().length >= 3 ? `Heat Alert in, ${city}` : temperature < 5 ? `Cold Alert in ${city}` : "Weather normal")
  }, [temperature, city])

  return (
    <div className='bg-gray-950 h-screen w-full flex items-center justify-center flex-col text-white'>
      <form
        className='bg-gray-900 px-[30px] py-[50px] flex flex-col gap-[30px] items-center rounded' onSubmit={(e) => {
          e.preventDefault()
          setTemperature(e.target.Number.value)
          setCity(e.target.City.value)
          setStart(true)
        }}>
        <div className='flex gap-[50px]'>
          <div className='relative'>
            <input type="number" id='Number' className='peer rounded outline-none px-[10px] py-[5px] tracking-[2px] focus:text-white text-gray-800 focus:border-blue-500 border-white border-[2px]' name='Number' />
            <label htmlFor="Number" className='absolute duration-200 top-[5px] left-[10px] transition peer-focus:translate-x-[-10px] peer-focus:translate-y-[-28px] peer-focus:text-[12px] tracking-[2px] font-[500] peer-focus:text-blue-500'>Temperature</label>
          </div>
          <div className='relative'>
            <input type="text" id='City' className='peer rounded outline-none  px-[10px] py-[5px] tracking-[2px] focus:text-white text-gray-800 focus:border-blue-500 border-white border-[2px]' name='City' />
            <label htmlFor="City" className='absolute duration-200 top-[5px] left-[10px] transition peer-focus:translate-x-[-10px] peer-focus:translate-y-[-28px] peer-focus:text-[12px] tracking-[2px] font-[500] peer-focus:text-blue-500'>City</label>
          </div>
        </div>
        <p className='h-[20px] font-[600] tracking-[2px]'>{result}</p>
        <div className='flex items-center gap-[10px]'>
          <button className='bg-[#0f0] cursor-pointer px-[20px] py-[5px] rounded text-black font-[700] tracking-[1px] hover:bg-[#0a0] duration-200' type='submit'>Submit</button>
          <button className='bg-[#f00] cursor-pointer px-[20px] py-[5px] rounded text-black font-[700] tracking-[1px] hover:bg-[#a00] duration-200' type='reset' onClick={() => {
            setStart(false)
            setResult('')
          }}>Reset</button>
        </div>
      </form>

    </div>
  )
}

export default App
