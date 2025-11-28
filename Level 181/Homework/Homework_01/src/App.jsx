/*  1) შექმენით button და ტექსტი. როცა ღილაკს დააწვები, ტექსტის ფერი შეიცვალოს.
გამოიყენეთ useRef-ი ტექსტის ელემენტზე წვდომისთვის.
*/

import { useRef } from "react"

function App() {
  let bgColor = useRef()
  let color = useRef()

  let randomColorGenerator = () => {
    const colorItem = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let result = '#'

    for (let i = 0; i < 6; i++) {
      result += colorItem[Math.floor(Math.random() * colorItem.length)]
      console.log(result)
    }
    color.current.textContent = result
    console.log(color.current.textContent)
    color.current.style.color = result

    console.log(color.current.textContent)
    bgColor.current.style.backgroundColor = result
  }

  return (
    <main className={`flex items-center justify-center flex-col gap-5 h-screen`} ref={bgColor}>
      <h1 className={`text-[30px] bg-black text-white px-[30px] rounded font-[800] tracking-[2px]`} ref={color} >
        #FFFFFF
      </h1>
      <button onClick={randomColorGenerator} className="px-[30px] rounded py-[10px] font-[500] tracking-[0.5px] cursor-pointer bg-black text-white">Click</button>
    </main>
  )
}

export default App
