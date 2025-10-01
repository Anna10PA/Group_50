import { useState } from 'react'

function Toast({ content, expiresIn, colors, funct }) {
  let [time, setTime] = useState(expiresIn)

  if (time) {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1000)
      }
    }, 1000)
  } else {
    setTimeout(()=> {
      funct(false)
    }, 3000)
  }

  return (
    <div className={`w-[50%] min-w-[250px] max-w-[400px] h-[200px] rounded border px-10 py-5 absolute flex justify-between flex-col`} style={{ backgroundColor: colors.background, color: colors.color }}>
      <p className='text-[20px] tracking-[1px] font-[500] mt-[10px]'>{content[0].toUpperCase() + content.slice(1).toLowerCase()}</p>

      {!time ?
        <i className="fa-solid fa-xmark absolute top-3 right-5 text-[25px] cursor-pointer duration-200 hover:text-red-600" onClick={() => {
          funct(false)
        }}
        ></i> : null
      }

      <h1 className={`text-center text-[30px] font-[700] ${time <= 3000 ? 'text-red-600' : 'text-black'}`}>{String(time).slice(0, (String(time).length - 3))}</h1>


    </div>
  )
}

export default Toast
