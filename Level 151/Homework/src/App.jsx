/* იმუშავეთ დღეს მიერ დაწყებულ ToDo აპლიკაციაზე React და Tailwind გამოყენებით. მინიმუმ Task ების დამატება უნდა შეიძლებოდეს.
*/

import { useState } from 'react'
import Element from './Element.jsx'
import Message from './Message.jsx'
import Diagram from './Diagram.jsx'

function App() {
  // Task 000 - state-ების შექმნა
  let [content, setContent] = useState([])
  let [message, setMessage] = useState('')
  let [mood, setMood] = useState('none')
  let [sorted, setSorted] = useState('All')
  let [isOpenDiagram, setDiagrama] = useState(false)

  // Task 001 - ფილტრაცია
  let filterTasks = () => {
    if (sorted === 'All') {
      return content
    } else if (sorted === 'Completed') {
      return content.filter(item => item.Completed)
    } else if (sorted === 'Unfulfilled') {
      return content.filter(item => !item.Completed)
    }
    return content
  }

  return (
    <div className='h-screen flex items-center justify-center flex-col gap-[20px] bg-gray-900'>
      <h1 className='text-[40px] font-[700] text-white'>To Do App</h1>
      <form className='w-full max-w-[600px] grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 px-5' onSubmit={
        (event) => {
          event.preventDefault()
          if (
            event.target.task.value.trim() !== '' &&
            event.target.taskName.value.trim() !== '' &&
            mood !== 'none'
          ) {
            let newTask = {
              Task: event.target.task.value,
              Title: event.target.taskName.value,
              Mood: mood,
              Completed: false
            }
            setContent([...content, newTask])
            event.target.task.value = ''
            event.target.taskName.value = ''
            setMood('none')
            setMessage('')
          } else {
            setMessage('Must not be empty value')
          }
        }
      }>
        <input type="text" className='border rounded px-[15px] py-[10px] font-[600] tracking-[2px] text-gray-100' name='taskName' placeholder='Title' />
        <input type="text" className='border px-[15px] py-[10px] font-[600] tracking-[2px] rounded text-white' name='task' placeholder='Task' />
        <select
          name="Mood"
          value={mood}
          onChange={
            (e) => setMood(e.target.value)
          }
          className="border px-[10px] py-[8px] text-gray-100 pr-5 tracking-[1px] cursor-pointer rounded"
        >
          <option value="none" disabled className='bg-gray-900 hover:bg-gray-950 cursor-pointer'>Select mood</option>
          <option value="Happy" className='bg-gray-900 hover:bg-gray-950 cursor-pointer'>Happy 😊</option>
          <option value="Lovely" className='bg-gray-900 hover:bg-gray-950 cursor-pointer'>Lovely 💝</option>
          <option value="Normal" className='bg-gray-900 hover:bg-gray-950 cursor-pointer'>Normal 🙂</option>
          <option value="Think" className='bg-gray-900 hover:bg-gray-950 cursor-pointer'>Think 🤔</option>
          <option value="Sad" className='bg-gray-900 hover:bg-gray-950 cursor-pointer'>Sad 😢</option>
          <option value="Scary" className='bg-gray-900 hover:bg-gray-950 cursor-pointer'>Scary 😓</option>
        </select>
        <button className='bg-green-500 px-[15px] py-[10px] font-[700] rounded duration-100 cursor-pointer hover:bg-green-600'>Submit</button>
      </form>

      {message ? <div> <Message Text={message} Cross={() => {
        setMessage('')
      }} /></div> : null
      }
      <ul className="h-[300px] w-[90%] max-w-[563px] min-w-[250px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 overflow-y-auto">
        {
          filterTasks().map((item, index) => {
            console.log(item)
            return <Element key={index} taskIndex={index} Title={item.Title} Task={item.Task} mood={item.Mood} Completed={item.Completed} allTasks={content} update={setContent} />
          })
        }
      </ul>
      <ul className='flex w-[80%] items-center justify-center gap-[20px] max-w-[550px] font-[500] flex-wrap '>
        <li className={`cursor-pointer tracking-[2px] px-[15px] py-[5px] rounded ${sorted === 'All' ? 'text-black bg-green-500' : ' text-white'}`} onClick={() => {
          setSorted('All')
        }}>All</li>
        <li className={`cursor-pointer tracking-[2px] px-[15px] py-[5px] rounded ${sorted === 'Completed' ? 'text-black bg-green-500' : ' text-white'}`} onClick={() => {
          setSorted('Completed')
        }}>Completed</li>
        <li className={`cursor-pointer tracking-[2px] px-[15px] py-[5px] rounded ${sorted === 'Unfulfilled' ? 'text-black bg-green-500' : ' text-white'}`} onClick={() => {
          setSorted('Unfulfilled')
        }}>Unfulfilled</li>
        <li className='text-3xl cursor-pointer' onClick={() => {
          setDiagrama(true)
        }}>
          ℹ️
        </li>
        {isOpenDiagram ? <Diagram Tasks={content} isOpen={() => {
          setDiagrama(false)
        }} /> :
          null
        }
      </ul>
    </div>
  )
}

export default App