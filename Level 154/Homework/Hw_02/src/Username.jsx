import Toast from './Toast.jsx'
import { useState } from 'react'

function Username() {
  let [isOpen, setOpen] = useState(false)
  let [isCorrect, setMessage] = useState(false)
  let [text, setText] = useState('')

  return (
    <div className='h-screen w-full bg-gray-950 flex items-center justify-center flex-col gap-10'>
      <form onSubmit={(e) => {
        e.preventDefault()
        for (let alpa of e.target.username.value) {
          console.log(alpa)
          if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ].includes(alpa)) {
            setText('type 0')
            setMessage(false)
            break
          }
        }
        console.log(text)
        if (e.target.username.value.trim() == '') {
          setMessage(false)
          setText('type 1')
        } else if (text === 'type 1'){
          setMessage(false)
        } else {
          setMessage(true)
        }
         setOpen(true)
      }}
        className='bg-gray-700 text-white px-6 py-5 rounded flex items-center gap-[20px]'>
        <input type="text" name='username' className='focus:outline-none font-[600] tracking-[2px]' placeholder='Enter' />
        <button className='bg-green-500 text-gray-950 font-[700] tracking-[1px] px-[10px] py-[5px] rounded cursor-pointer'>Submit</button>
      </form>
      <div className='w-full flex justify-center h-[300px]'>
        {!isCorrect && isOpen && text === 'type 0' ?
          <Toast content='Must not contain numbers' expiresIn={10000} colors={{ background: 'rgb(255, 100, 100)', color: 'rgb(166, 0, 62)' }} funct={setOpen} /> :
          !isCorrect && isOpen && text === 'type 1' ?
            <Toast content='There should be no empty spaces.' expiresIn={10000} colors={{ background: 'rgb(255, 100, 100)', color: 'rgb(166, 0, 62)' }} funct={setOpen} /> :
            isCorrect && isOpen ?
              <Toast content='Good' expiresIn={10000} colors={{ background: 'rgb(100, 255, 100)', color: 'rgb(0, 166, 62)' }} funct={setOpen} /> :
              null}
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Username
