//  Level 159:  
// შექმენით ორი state ერთი, name და age
// მომხმარებელს მოთხოვეთ შემოიყვანოს თავისი სახელი და ასაკი
// შექმენით ერთი useEffect და ორივე state უთვალთვალეთ
// თუ name შეიცავს მინიმუმ 12 სიმბოლოს დააკონსოლოგეთ correct Name
// თუ age მეტია ან ტოლი 18 დააკონსოლოგეთ correct age
// სხვა შემთხვევაში invalid name or value 

import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  let [name, setName] = useState('')
  let [age, setAge] = useState('')

  useEffect(()=> {
    if (name.length >= 12) {
      console.log('correct Name')
    }
    if (age >= 18) {
      console.log('correct age')
    } 

    return ()=> {
      console.log('invalid name or value')
    }
  }, [name, age])

  return (
    <form onSubmit={(e)=> {
      e.preventDefault()
      setName(e.target.name.value)
      setAge(e.target.age.value)
    }}>
      <input type="text" placeholder='Enter name: ' name='name' />
      <input type="number" placeholder='Enter age: ' name='age' />
      <button>Submit</button>
    </form>
  )
}

export default App
