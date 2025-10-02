/* 
5) შექმენით ორი state: count და isActive (boolean)
ერთი ღილაკით გაზარდეთ count, მეორე ღილაკით შეცვალეთ isActive
შექმენით useEffect, რომელიც რეაგირებს ორივე state-ზე
თუ count > 10 და isActive === true -> console.log("High activity")
თუ count <= 10 და isActive === false -> console.log("Low activity")
სხვა შემთხვევაში -> console.log("Normal state")
*/

import { useState, useEffect } from 'react'

function App() {
  let [count, setCount] = useState(0)
  let [isActive, setIsActive] = useState(false)
  let [result, setResult] = useState('')

  useEffect(() => {
    setResult(count > 10 && isActive ? 'High activity' : count <= 10 && !isActive ? 'Low activity': 'Normal state')
    console.log(count > 10 && isActive ? 'High activity' : count <= 10 && !isActive ? 'Low activity': 'Normal state')
  }, [count, isActive])

  return (
    <div className='bg-gray-950 h-screen w-full flex items-center justify-center flex-col gap-[40px]'>
        {/* counter div */}
        <div  className='flex items-center justify-center gap-[80px] text-white w-full'>
          <div className='flex flex-col items-center gap-[20px]'>
            <h1 className='text-[40px]'>{count}</h1>
            <div className='flex items-center gap-[10px]'>
              <button className='border rounded w-[70px] text-[20px] duration-200 cursor-pointer hover:bg-red-700'
                onClick={() => {
                  setCount(count ? count - 1 : 0)
                }}>-</button>
              <button className='border rounded w-[80px] text-[18px] tracking-[1px] py-[2px] duration-200 cursor-pointer hover:bg-orange-700'
                onClick={() => {
                  setCount(0)
                }}>Reset</button>
              <button className='border rounded w-[70px] text-[20px] duration-200 cursor-pointer hover:bg-green-700'
                onClick={() => {
                  setCount(count + 1)
                }}>+</button>
            </div>
          </div>
          {/* isActive div */}
          <div className='flex items-center flex-col w-[300px] gap-[20px]'>
            <h1 className={`${!isActive ? 'text-gray-500' : 'text-green-500'} font-[700] text-[40px]`}>{!isActive ? 'Offline' : 'Active'}</h1>
            <button onClick={() => {
              setIsActive(!isActive)
            }}
              className={`bg-black cursor-pointer px-[20px] py-[5px] rounded tracking-[2px]`}>Change</button>
          </div>
      </div>
      {/* result text */}
      <h1 className={`${result === 'High activity' ? 'text-green-500' : result === 'Low activity' ? 'text-red-500' : 'text-gray-500'} text-[50px] font-[600] tracking-[2px]`}>{result}</h1>
    </div>
  )
}

export default App
