// 3) შექმენით ტექსტი და button. ღილაკზე დაჭერისას ტექსტი გაჩნდეს და გაქრეს. გამოიყენეთ useRef

import { useRef } from "react"

function App() {
  let nameArray = ['Ana', 'Nikoloz', 'Saba', 'Gio', 'Alexsandre', 'Lui', 'Nini', 'Goga', 'Andria', 'Gabrieli', 'Dato', 'Leo', 'Mano', 'Mari' , "Ele", 'Tata', 'Nana', 'Kako', 'Lali', 'Dachi', 'Tekla', 'Vaxo', 'Luka', 'Shahabasi', 'demetre', 'irakli', 'rezo', 'ivane' ]

  let name = useRef()
  let visible = useRef(false)
  
  let renderInfo = () => {
    if (visible.current) {
      name.current.textContent = '🤫'
      visible.current = false
    } else {
      let curentName = nameArray[Math.floor(Math.random() * nameArray.length)]
      console.log(curentName)
      name.current.textContent = curentName
      visible.current = true
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-950 text-white flex-col gap-[60px]">
      <h1 ref={name} className="text-[40px] font-[800]">🤫</h1>
      <button onClick={()=> {
        renderInfo()
      }} className="bg-black text-white font-[800] px-[30px] py-[10px] rounded tracking-[1px] cursor-pointer">Click</button>
    </div>
  )
}

export default App
