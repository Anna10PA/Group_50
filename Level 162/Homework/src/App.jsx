import { useEffect, useState } from 'react'

function App() {
  // watch color change 
  let [color, setColor] = useState('#23211f')
  // function type
  let [functionType, setFunctionType] = useState('Time')

  // time
  let [curentTime, setCurentTime] = useState({
    h: '00',
    m: '00',
    s: '00'
  })

  // Time
  // update time
  let updateTime = () => {
    let date = new Date()
    setCurentTime(
      {
        h: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        m: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
        s: date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
      }
    )
  }
  useEffect(() => {
    updateTime()
    setInterval(updateTime, 1000)
  }, [])

  // Heart
  let updateHeart = () => {
    return '❤️'
  }
  let randomPoulse = () => {
    return Math.floor(Math.random() * 40) + 70
  }


  return (
    <>
      <header className='bg-[#212134] h-[100px] flex items-center justify-center'>
        <img src="/Amazon-logo.png" className='w-[125px]' alt="" />
      </header>

      {/* main */}
      <main className='h-[80vh] flex items-center justify-center mt-[30px]'>
        <section className='w-[65%] flex items-center justify-evenly gap-[20px] flex-wrap h-full max-md:text-center'>
          {/* watch */}
          <section className='overflow-hidden flex flex-col items-center'>
            <div className={`w-[120px] h-[100px] rounded-[40%] relative`} style={{ backgroundColor: color }}>
              <div className='bg-white w-[80px] h-[180px] rounded-[100%] absolute bottom-[-7px] left-[-65px]'></div>
              <div className='bg-white w-[80px] h-[180px] rounded-[100%] absolute bottom-[-7px] right-[-65px]'></div>
            </div>
            <div className='w-[150px] h-[160px] bg-[#d4d7d8] rounded-[20px] relative z-1 bottom-[25px] flex justify-center items-center'>
              <div className='bg-black w-[130px] h-[140px] rounded-[15px] flex items-center justify-center'>
                {functionType == 'Time' ?
                  <h1 className='text-white text-[23px] tracking-[1px] font-[700]'>
                    {curentTime.h}:{curentTime.m}:{curentTime.s}
                  </h1> :
                  <h1 className='text-[#fe4370] text-[20px] tracking-[1px] font-[700] flex flex-col items-center gap-[2px]'>
                    <span id='Animation' className='text-[40px]'>
                      {updateHeart()}
                    </span>
                    {randomPoulse()}
                  </h1>
                }
              </div>
            </div>
            <div className='w-[120px] h-[100px] rounded-[40%] relative rotate-[180deg] bottom-[50px]' style={{ backgroundColor: color }}>
              <div className='bg-white w-[80px] h-[180px] rounded-[100%] absolute bottom-[-7px] left-[-65px]'></div>
              <div className='bg-white w-[80px] h-[180px] rounded-[100%] absolute bottom-[-7px] right-[-65px]'></div>
            </div>
          </section>

          {/* info */}
          <section className='flex items-start flex-col gap-[30px]'>
            <div className='flex flex-col gap-[15px]'>
              <h1 className='font-[700] text-[38px] tracking-[1.5px]'>FitBit 19 - The Smartest Watch</h1>
              <p className='text-[#7a7a7a] font-[500]'>Lorem ipsum dolor sit amer consectetur adipisicing <br />elit. Deleniti asperioresbr adipisci cupla rem? A, tenetur veritais</p>
            </div>
            <div className='flex flex-col items-start gap-[15px]'>
              <h2 className='text-[#34363a] font-[700] text-[23px]'>Select Color</h2>
              <div className='flex items-center flex-wrap gap-[20px]'>
                <div className='w-[75px] h-[50px] rounded bg-[#23211f] cursor-pointer' onClick={() => {
                  setColor('#23211f')
                }}></div>
                <div className='w-[75px] h-[50px] rounded bg-[#ca3d22] cursor-pointer' onClick={() => {
                  setColor('#ca3d22')
                }}></div>
                <div className='w-[75px] h-[50px] rounded bg-[#565681] cursor-pointer' onClick={() => {
                  setColor('#565681')
                }}></div>
                <div className='w-[75px] h-[50px] rounded bg-[#8a5362] cursor-pointer' onClick={() => {
                  setColor('#8a5362')
                }}></div>
              </div>
            </div>
            <div className='flex flex-col items-start gap-[30px]'>
              <div className='flex flex-col gap-[15px]'>
                <h2 className='text-[#34363a] font-[700] text-[23px] text-left'>Features</h2>
                <div className='flex items-center gap-[15px]'>
                  <button className='bg-[#edebeb] font-[700] px-[15px] py-[5px] rounded cursor-pointer hover:bg-gray-300 duration-200' onClick={() => {
                    setFunctionType('Time')
                  }}>Time</button>
                  <button className='bg-[#edebeb] font-[700] px-[15px] py-[5px] rounded cursor-pointer hover:bg-gray-300 duration-200' onClick={() => {
                    setFunctionType('Heart')
                  }}>Heart Rate</button>
                </div>
              </div>
              <button className='bg-[#ffa500] px-[20px] rounded py-[10px] font-[700] cursor-pointer  hover:bg-[#f09b00] duration-200'>BUY NOW</button>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
