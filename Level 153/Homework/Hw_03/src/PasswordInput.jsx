import { useState } from 'react'

function PasswordInput() {
    let [isShow, setShow] = useState(false)
    let [value, setValue] = useState('')
    let [star, setStar] = useState('')
    
    return (
        <div className='h-screen w-full flex items-center justify-center bg bg-gray-950'>
            <div className='bg-gray-800 flex items-center gap-3 px-[20px] py-[10px] rounded text-white tracking-[3px] font-[600]'>
                <input type="text" className='focus:outline-none' name='Input' onChange={(e)=> {
                    setValue(e.target.value)
                    setStar('*'.repeat(e.target.value.length))
                }}
                value={isShow ? value : '*'.repeat(value.length)}/>
                <button className='cursor-pointer' onClick={()=> {
                    setShow(!isShow)
                    // if (isShow) {
                    //     setValue(value)
                    // }else {
                    //     setStar(star)
                    // }
                }}>
                    <i class="fa-solid fa-eye"></i>
                </button>
            </div>
        </div>
    )
}

export default PasswordInput
