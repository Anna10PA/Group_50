import { useState } from 'react'

function ColorPicker() {
    let [bgColor, setBgColor] = useState('#aaa')
    let [result, setResult] = useState(bgColor)

    // random color generator
    let randomColor = () => {
        let Result = '#'
        for (let i = 0; i < 6; i++) {
            let curent = '0123456789abcdef'[Math.floor(Math.random() * 16)]
            Result += curent
        }
        setBgColor(Result)
        console.log(Result)
    }

    return (
        <div className={`h-screen w-full flex items-center justify-center flex-col gap-10`} style={{ backgroundColor: result }}>
            <form className='flex items-center gap-10 flex-col' onSubmit={(e) => {
                e.preventDefault()
                setResult(bgColor)
            }}>
                <input type="text" className='text-white rounded px-[15px] py-[5px] font-[800] tracking-[3px] bg-black focus:outline-none' maxLength={7}
                    value={bgColor}
                    onChange={(e) => {
                        setBgColor(e.target.value)
                    }}
                />
                <div className='flex items-center gap-[5px]'>
                    <button className='px-10 py-1.5 rounded bg-green-600 text-white cursor-pointer font-[800] tracking-[3px]'>Submit</button>
                    <button onClick={randomColor}
                        className='px-10 py-1.5 rounded bg-red-700 text-white cursor-pointer font-[800] tracking-[3px]'>random</button>
                </div>
            </form>
            <h1 className='bg-black text-white font-[700] tracking-[2px] px-[20px] py-[5px] rounded'>
                HEX: {result}
            </h1>
        </div>
    )
}

export default ColorPicker
