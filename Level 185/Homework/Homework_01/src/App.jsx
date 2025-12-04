// Homework 01   -   Mini counter (: 

import { useCallback, useState } from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Reset from './Reset'

function App() {
  const [count, setCounter] = useState(0)

  // increment Function ( +1 )
  let incrementFunction = useCallback(() => {
    setCounter(prev => {
      console.log(prev + 1)
      return prev + 1
    })
  }, [])

  // decrement Function ( -1 )
  let decrementFunction = useCallback(() => {
    setCounter(prev => {
      console.log(prev - 1)
      return prev - 1
    })
  }, [])

  // reset Function ( 0 )
  let resetFunction = useCallback(() => {
    setCounter(prev => {
      console.log(0)
      return 0
    })
  }, [])

  // Number type function
  let numType = useCallback(() => {
    return count === 0 ? 'Neutral number' : count > 0 ? 'Positive number' : 'Negative number'
  }, [count])

  return (
    <main className='min-h-screen bg-gray-950 flex items-center justify-center flex-col gap-[20px]'>
      <h1 className='text-white text-[40px] font-[700]'>{count}</h1>
      <div className='flex items-center gap-[20px] flex-wrap justify-center'>
        <Decrement onClick={decrementFunction} />
        <Reset onClick={resetFunction} />
        <Increment onClick={incrementFunction} />
      </div>
      <h1 className='text-white text-[30px] font-[700] tracking-[1px]'>{numType()}</h1>
    </main>
  )
}

export default App
