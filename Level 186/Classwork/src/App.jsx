/*
გააკეთეთ 2 ქაუნთერ ფუნქცია. 
1  შეეძლოს მხოლოდ COUNT  მნიშვნელობის გაზრდა,
2 ფუნქციას შეეძლოს მხოლოდ RESULT მნიშვნელობის გაზრდ 
ერთ-ერთის გაზრდის დროს მეორე არ დარენდერდეს, მხოლოდ ერთი.
გამოიყენეთ useMemo 
*/
import { useMemo, useState } from 'react'

function App() {
  function calculator(num) {
    console.log('This is Calculate Function')
    let result = 0
    let count = 0
    for (let i = 0; i <= num; i++) {
      result += i
      count++
    }
    return result / count
  }
  const [count, setCount] = useState(0)
  const [result, setRestlt] = useState(0)

  const pluss1 = () => {
    setCount((value) => value + 1)
    console.log(count + 1)
    return count
  }

  const gamravleba = () => {
    setRestlt(count * 2)
  }

  const calculationFunc = useMemo(() => calculator(count), [count])

  return (
    <div className='bg-gray-950 min-h-screen flex items-center flex-col justify-center gap-[30px] '>
      <h2 className='bg-gray-900 px-[100px] text-white py-[20px] rounded'>
        Result: {calculationFunc}
      </h2>
      <div className='flex items-center text-white justify-center gap-[30px] '>
        <div className='bg-gray-900 h-[300px] w-[300px] flex items-center justify-center flex-col gap-[20px] rounded'>
          <h1>count: <span>
            {count}
          </span>
          </h1>
          <button onClick={pluss1} className='px-[30px] bg-black cursor-pointer rounded py-[3px]'>Increment</button>
        </div>

        <div>
          <div className='bg-gray-900 h-[300px] w-[300px]  flex items-center justify-center flex-col gap-[20px] rounded'>
            <h2>
              Result: {result}</h2>
            <button onClick={gamravleba} className='px-[30px] bg-black cursor-pointer rounded py-[3px]'>Result</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
