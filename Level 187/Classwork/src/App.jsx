import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


function App() {
  const {register, handelSubmit} = useForm()
  return (
    <form onSubmit={handelSubmit((data)=> {
      console.log(data)
    })}>
      <input type="text" {...register('name')} placeholder='name' />
      <button type='submit'>submit</button>
    </form>
  )
}

export default App
