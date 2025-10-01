/* 
 Level 155:  
შექმენით რაღაცა form ტეგი, რომელშიც იქნება 4 ინფუთი და ერთი submit ღილაკი.
თქვენი დავალებაა გამოიყენოთ ერთი state ამ ოთხივე ინფუთთან მუშაობისათვის
submit ღილაკზე დაჭერით დააკონსოლ ლოგეთ ამ ინფუთების მნიშვნელობები.
არ დაგავიწყდეთ label ტეგები 
*/
import { useState } from "react"

function App() {
  let [values, setValue] = useState(
    {
      Name: '',
      Lastname: '',
      Age: '',
      Email: ''
    }
  )
  let changeValues = (e) => {
    e.preventDefault()
    setValue({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log(values)
    }}>
      <label htmlFor="Name">Name</label><br />
      <input type="text" id='Name' name='Name' value={values.Name} onChange={changeValues}/><br /><br />

      <label htmlFor="Lastname">Last name</label><br />
      <input type="text" id='Lastname' name='Lastname' value={values.Lastname} onChange={changeValues}/><br /><br />

      <label htmlFor="Age">Age</label><br />
      <input type="text" id='Age' name='Age' value={values.Age} onChange={changeValues} /><br /><br />

      <label htmlFor="Email">Email</label><br />
      <input type="email" id='Email' name='Email' value={values.Email} onChange={changeValues} /><br /><br />
      <button>Submit</button>
    </form>
  )
}

export default App
