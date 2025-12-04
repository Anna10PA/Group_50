import React from 'react'

let Decrement = React.memo(({ onClick }) => {

    console.log('This Message Is From Decrement Component')

    return (
        <button className='bg-red-600 px-[20px] py-[10px] rounded text-white font-[700] tracking-[1px] duration-200 hover:bg-red-950 cursor-pointer' onClick={onClick}>Decrement</button>

    )
})

export default Decrement
