import Element from './Element.jsx'
import { useState } from 'react'


function App() {
  let [content, setContent] = useState([])
  let count = 0
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-[45px]'>
      <h1 className='text-[40px] font-[700]'>To Do App</h1>
      <form className='flex items-center gap-[10px]' onSubmit={
        (event) => {
          event.preventDefault()
          content.push({
            Task: event.target.task.value,
            Title: event.target.taskName.value
          })
          setContent(content)
          console.log(content)
        }
      }>
        <input type="text" className='border px-[15px] py-[10px] font-[600] tracking-[2px]' name='taskName' placeholder='Title' />
        <input type="text" className='border px-[15px] py-[10px] font-[600] tracking-[2px]' name='task' placeholder='Task' />
        <button className='bg-green-500 px-[15px] py-[10px] font-[700] rounded duration-100 cursor-pointer hover:bg-green-600'>Submit</button>
      </form>
      <ul className='h-[400px]'>
        {
          content.map(item => {
            // count++
            console.log(<Element Task={item.props.Task} Title={item.Title} key={count}/>)
          })
        }
      </ul>
    </div>
  )
}

export default App
