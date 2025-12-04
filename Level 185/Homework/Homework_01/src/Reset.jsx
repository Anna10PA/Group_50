import React from 'react'

let Reset = React.memo(({ onClick }) => {

    console.log('This message Is From Reset Component')
    return (
        <button className='bg-orange-600 px-[20px] py-[10px] rounded text-white font-[700] tracking-[1px] duration-200 hover:bg-orange-950 cursor-pointer' onClick={onClick}>Reset</button>
    )
})

export default Reset
