import { useState } from 'react'
import dog1 from '../public/image02.png'
import dog2 from '../public/image01.png'

function Message({ Text, Cross }) {
  let image = [dog1, dog2]

  let [index, setImage] = useState(0)

  let changeImage = () => {
    setTimeout(() => {
      setImage( (index + 1) % image.length)
      changeImage()
    }, 200)
  }
  changeImage()
  return (
    <div className='w-full h-screen absolute z-2 backdrop-blur-[15px] top-0 left-0 flex items-center justify-center flex-col-reverse'>
      <button className='bg-black text-white py-2 px-5 cursor-pointer text-1xl rounded tracking-[2px] mt-5' onClick={Cross}>Got it!</button>
      <h1 className='text-gray-600 font-bold text-[45px] text-center px-[10px] mx-[10px]'>{Text}</h1>
      <img src={image[index]} alt='dog' className='max-w-[300px] w-[90%]' />

    </div>
  )
}

export default Message