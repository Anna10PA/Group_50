
import {useState} from 'react'
function NumberGuesser() {
    let [isOpen, setOpen] = useState(false)
    
    let randomNumber = () => {
        let result = Math.floor(Math.random() * 10) + 1
        console.log(result)
        return result
    }
    randomNumber()
    return (
        <div className='h-screen w-full flex items-center justify-center flex-col bg-gray-950 gap-10'>
            <form className='bg-gray-700 flex items-center gap-[15px] px-[15px] py-[5px]' onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input type="number" className='focus:outline-none text-white tracking-[2px] font-[700]' name='number' placeholder="1-10" />
                <button type='submit' className='px-[10px] py-[5px] bg-[#0f0] text-gray-900 font-[700] trucking-[2px] rounded cursor-pointer'>Submit</button>
                <button type='reset' className='px-[10px] py-[5px] bg-[#f00] text-gray-950 font-[700] trucking-[2px] rounded cursor-pointer'>Reset</button>
            </form>
        </div>
    )
}

export default NumberGuesser
