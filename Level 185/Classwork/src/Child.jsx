import React from 'react'

let Child = React.memo(function Child({ onClick }) {

    console.log('hi')
    

    return (
        <div>
            <button className='bg-black rounded text-white px-[20px] py-[10px]' onClick={onClick}>
                Click
            </button>
        </div>
    )
})

export default Child
