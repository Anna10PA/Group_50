// level 181:
//  1) შექმენით ინფუთი რომელშიც ინფორმაციის შეტანის დროს ეგ ინფორმაცია გამოჩნდება სხვა პარაგრაფში, პლიუს ერთი ქაუნთერიც გააკეთეთ გვერძე, ორივეში გამოიყენეთ useRef

import { useEffect, useState, useRef } from "react"

function App() {

  let h1 = useRef(0)
  let h2 = useRef('')
  let h3 = useRef(h2)

  console.log(h1.current.textContent)
  return (
    <div>
      {/* classwork 01 */}
      <h1 ref={h1}>{h1.current}</h1>
      <div>
        <button onClick={() => {
          h1.current.textContent = Number(h1.current.textContent) - 1
        }}>-</button>
        <button onClick={() => {
          h1.current.textContent = 0
        }}>reset</button>
        <button onClick={() => {
          h1.current.textContent = Number(h1.current.textContent) + 1
        }}>+</button>
      </div>

      {/* classwork 02 */}
      <h2 ref={h2}>{h2.current.textContent}</h2>
      <input ref={h3} type="text" onChange={() => {
        h3.current.textContent = h2.current.textContent
        console.log(h2.current.textContent)

      }} />

    </div>
  )
}

export default App
