import React from 'react'

let Increment = React.memo(({ onClick }) => {

  console.log('This Message Is From Increment Component')

  return (
    <button className='bg-green-600 px-[20px] py-[10px] rounded text-white font-[700] tracking-[1px] duration-200 hover:bg-green-950 cursor-pointer' onClick={onClick}>Increment</button>
  )
})

export default Increment
