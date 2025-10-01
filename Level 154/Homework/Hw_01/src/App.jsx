/* 
1) შექმენით Toast კომპონენტი.
მას პროპსებად უნდა გადაეცეს content(ტექსტი/შიგთავსი), expiresIn(მილიწამებში) და background(ფერი Hex სისტემაში).
--> მიღებული პროპსების გათვალისწინებით ეკრანზე უნდა გამოაჩინოთ Toast, რომელიც გარკვეული დროის შემდეგ თავად გაქრება
P.S ეს კომპონენტი გააკეთეთ, შემდგომ დავალებებში დაგჭირდებათ
*/

import Toast from './Toast.jsx'
import { useState } from 'react'

function App() {
  let [isOpen, setOpen] = useState(true)
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-950'>
      {isOpen ?
        <Toast content='this is text content' expiresIn={10000} colors={{background: 'rgb(100, 255, 100)', color: 'rgb(0, 166, 62)'}} funct={setOpen} /> :
        null
        }
    </div>
  )
}

export default App
