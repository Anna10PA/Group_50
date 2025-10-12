import {useState, useEffect} from 'react'

function App() {
  let [user, setUser] = useState({
    cardNumber: '0000 0000 0000 0000',
    name: 'Ana puturidze',
    date: '00/00'
  })

  return (
    <div className='w-full h-screen font-family tracking-[1px]'>
      <img src='/bg-main-desktop.png' alt="" className='' />
      <div className='absolute z-[1] left-[12%] top-[200px] '>
        <img src="/bg-card-front.png" alt="" className='' />
        <img src="/card-logo.svg" alt="" className='absolute top-[25px] left-[25px]' />
        <h1 className='absolute bottom-[80px] left-[25px] text-white text-[28px] tracking-[3px]'>{user.cardNumber}</h1>
        <div className='flex items-center justify-between w-[88%] text-white relative left-[25px] bottom-[30px] text-[14px]'>
          <h1 className=''>
            {user.name.toUpperCase()}
          </h1>
          <h1>
            {user.date}
          </h1>
        </div>
        <img src="/bg-card-back.png" alt="" />
      </div>
    </div>
  )
}

export default App
