// https://api.github.com/users/{username}
import { useState } from 'react'
import MainCard from './MainCard'

function App() {
  let [value, setValue] = useState('')
  let [user, setUser] = useState('')
  let [isFind, setFind] =useState(false)
  let [isSearch, setSearch] = useState(false)
  
  async function submitFunc(e) {
    e.preventDefault()
    console.log(e.target.username.value.trim())
    apiData(value.trim())
  }

  async function apiData(username) {
    try {
      let response = await fetch(`https://api.github.com/users/${username}`) 
      console.log(response)
      if (response.status == 404) {
        setFind(false)
        return 
      }
      let data = await response.json()
      setFind(true)
      console.log(data)
      setUser(data)
      setSearch(true)
    } catch (error) {
      console.log(error)
      setFind(false)
    }
  }



  return (
    <div className='bg-[#141c2f] w-full h-screen flex items-center justify-center'>

      {/* main div */}
      <div className="min-w-[300px] max-w-[750px] w-full flex flex-col gap-[30px] m-[40px] max-sm:m-[10px]">

        {/* header */}
        <div className='flex w-full items-center justify-between'>
          <h1 className='font-Inconsolata text-white text-[30px]
        font-[600] tracking-[3px]'>devfinder</h1>
          <div className='flex items-center gap-[20px] text-white font-bold'>
            L i g h t
            <i className="fa-solid fa-sun text-white text-[20px] mt-[4px]"></i>
          </div>
        </div>

        {/* search */}
        <form className='bg-[#1f2a48] font-Inconsolata flex items-center gap-[20px] justify-between rounded-[10px] px-[10px] py-[10px] pl-[30px] max-sm:pl-[20px]' onSubmit={(e)=> {
          submitFunc(e)
        }}>
        <div className="flex items-center gap-[25px] w-full">
          <i className="fa-solid fa-magnifying-glass text-blue-600 text-[25px]"></i>
          <input type="text" className='outline-none text-white tracking-[2px] placeholder:text-white w-full ' placeholder='Search github Username' name='username' value={value} onChange={(e)=> {
            setValue(e.target.value)
          }} />
        </div>
        <button className='bg-[#0079fe] px-[15px] py-[10px] text-white rounded-[8px] cursor-pointer duration-200 hover:bg-blue-700' type='submit'>Search</button>
      </form>
     {isFind ? <MainCard user={user}/> : !isSearch ?  null : <h1 className='text-white text-[60px] text-center font-[600] tracking-[2px]'>Not Found 404</h1>}
    </div>
    </div >
  )
}

export default App
