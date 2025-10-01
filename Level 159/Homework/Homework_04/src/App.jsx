/* 
4) შექმენით ორი state: email და password
შექმენით ორი input -> ერთი მეილის მეორე პაროლის
შექმენით useEffect, რომელიც ორიცე state ს თვალს ადევნებს
თუ email შეიცავს "@" და password.length >= 6 -> console.log("Valid Credentials")
სხვა შემთხვევაში -> console.log("Invalid email or password")
*/

import { useState, useEffect, use } from 'react'

function App() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [text, setText] = useState('')
  let [start, setStart] = useState(false)

  useEffect(() => {
    setText(email.includes('@') && password.length >= 6 ? 'Valid Credentials' : !start ? '' : 'Invalid email or password')
    console.log(email.includes('@') && password.length >= 6 ? 'Valid Credentials' : 'Invalid email or password')
  }, [email, password])

  return (
    <div className='bg-gray-950 h-screen w-full flex items-center justify-center flex-col text-white'>
      <form onSubmit={(e) => {
        e.preventDefault()
        setEmail(e.target.Email.value)
        setPassword(e.target.Password.value)
        setStart(e.target.Email.value && e.target.Password.value)
      }}
        className='bg-gray-900 px-[30px] py-[50px] flex flex-col gap-[30px] items-center rounded'>
        <div className='flex gap-[50px]'>
          <div className='relative'>
            <input type="text" id='Email' className='peer rounded outline-none border px-[10px] py-[5px] tracking-[2px] focus:text-white text-gray-800 focus:border-blue-500 border-white border-[2px]' name='Email' />
            <label htmlFor="Email" className='absolute duration-200 top-[5px] left-[10px] transition peer-focus:translate-x-[-10px] peer-focus:translate-y-[-28px] peer-focus:text-[12px] tracking-[2px] font-[500] peer-focus:text-blue-500'>Email</label>
          </div>
          <div className='relative'>
            <input type="text" id='Password' className='peer rounded outline-none border px-[10px] py-[5px] tracking-[2px] focus:text-white text-gray-800 focus:border-blue-500 border-white border-[2px]' name='Password' />
            <label htmlFor="Password" className='absolute duration-200 top-[5px] left-[10px] transition peer-focus:translate-x-[-10px] peer-focus:translate-y-[-28px] peer-focus:text-[12px] tracking-[2px] font-[500] peer-focus:text-blue-500'>Password</label>
          </div>
        </div>
        <p className={`${email.includes('@') && password.length >= 6 ? 'text-[#0f0]' : 'text-[#f00]'} h-[30px] font-[500] tracking-[2px]`}>{text}</p>
        <div className='flex items-center gap-[10px]'>
          <button className='bg-[#0f0] cursor-pointer px-[20px] py-[5px] rounded text-black font-[700] tracking-[1px] hover:bg-[#0a0] duration-200' type='submit'>Submit</button>
          <button className='bg-[#f00] cursor-pointer px-[20px] py-[5px] rounded text-black font-[700] tracking-[1px] hover:bg-[#a00] duration-200' type='reset' onClick={() => {
            setEmail('')
            setPassword('')
            setStart(false)
          }}>Reset</button>
        </div>
      </form>

    </div>
  )
}

export default App
