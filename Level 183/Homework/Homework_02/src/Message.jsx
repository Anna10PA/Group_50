import { useEffect, useRef } from 'react'

function Message({ winner, info }) {
    console.log(winner)
    let time = useRef(10)
    let h3 = useRef()

    useEffect(() => {

        h3.current.textContent = time.current

        let timer = setInterval(() => {
            time.current -= 1
            h3.current.textContent = time.current

            if (time.current <= 0) {
                clearInterval(timer)
            }
        }, 1000)

        return () => {
            clearInterval(timer)
        }

    }, [])

    return (
        <div className='h-screen absolute backdrop-blur-[20px] z-10 top-0 w-full flex items-center justify-center flex-col duration-300'>
            <h1 className='text-orange-400 font-[Science_Gothic] text-[35px] text-shadow-[0px_0px_5px]' >{winner}</h1>
            <h3 ref={h3} className='text-white text-[30px] font-[Science_Gothic] '></h3>
            <button className='text-white bg-orange-500 text-[30px] w-[60px] h-[60px] rounded-[40px]'>
                <i className="fa-solid fa-arrow-rotate-left"></i>
            </button>
            <div>
                <h1>X: {info.X.score}</h1>
                <h1>O: {info.O.score}</h1>
            </div>
        </div>
    )
}

export default Message
