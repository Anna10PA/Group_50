import { useReducer } from 'react'

function App() {

  let Counter = (state, type) => {
    switch (type) {
      case '-':
        return { count: state.count-- }
        break
      case '+':
        return { count: state.count++ }
        break
      case 'reset':
        return { count: 0 }
        break
    }
  }

  let [number, setOperation] = useReducer(Counter, { count: 0 })
  console.log(number.count)


  return (
    <div className='h-screen bg-gray-950 flex items-center justify-center flex-col gap-[30px]'>
      <h1 className='text-[50px] text-white font-[700]'>{number.count}</h1>
      <div className='flex items-center text-white gap-[20px]'>
        <button onClick={() => {
          setOperation('-')
        }}
        className='h-[40px] px-[20px] font-[900] rounded cursor-pointer bg-red-500 duration-200 hover:bg-[#f00]'>-</button>
        <button onClick={() => {
          setOperation('reset')
        }}
        className='h-[40px] px-[20px] font-[700] tracking-[1px] rounded cursor-pointer bg-orange-500 duration-300 hover:bg-[#FF3000]'>reset</button>
        <button onClick={() => {
          setOperation('+')
        }} 
        className='h-[40px] px-[20px] font-[700] tracking-[1px] rounded cursor-pointer bg-green-500 duration-300 hover:bg-[#30FF00]'>+</button>
      </div>
    </div>
  )
}

export default App
