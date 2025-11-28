/* 
2) შექმენით input ველი და button. როცა  button დააჭერ, input-ის მნიშვნელობა console-ში დაიბეჭდოს.
გამოიყენეთ useRef  input-ის წვდომისთვის
*/

import { useRef } from "react"

function App() {
  let value = useRef()
  let h1Value = useRef()
  let valueLength = useRef()

  return (
    <main className="bg-gray-950 h-screen flex items-center justify-center text-white flex-col gap-[50px]">
      <div className="flex items-center gap-[10px] justify-between">
        <div className="relative">
          <input type="text" ref={value} className="border-[1px] border-white outline-none rounded px-[20px] py-[10px] peer focus:text-white text-gray-950 " />
          <label className="absolute left-6 top-2.5 peer-focus:translate-x-[-10px] peer-focus:translate-y-[-40px] duration-300 peer-focus:tracking-[2px] text-gray-800 peer-focus:text-white peer-focus:left-3">Smile</label>
        </div>
        <button onClick={() => {
          console.log(value.current.value)

          h1Value.current.textContent = value.current.value.length > 1 ? value.current.value : 'Smile 🫡'
          valueLength.current.textContent = `Length: ${value.current.value.length}`

          value.current.value =  ''

        }} className="bg-black px-[20px] py-[10px] rounded font-[800] tracking-[2px] border-[1px] border-white cursor-pointer">Click</button>
      </div>
      <div className="flex flex-col items-center gap-[10px] ">
        <h1 className="text-white font-[700] text-[50px]" ref={h1Value}>Smile 🫡</h1>
        <p ref={valueLength}>Length: 7</p>
      </div>
    </main>
  )
}

export default App
