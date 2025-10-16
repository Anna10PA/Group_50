import { useState } from 'react'

function AgeChecker() {
    let [age, setAge] = useState()
    let [message, setMessage] = useState('')

    return (
        <>
            <form onSubmit={(e)=> {
                e.preventDefault()
                age > 18 ? setMessage('You are adult') : setMessage("You are kid")
            }}>
                <input type="number" value={age} onChange={(e) => {
                    setAge(e.target.value)
                }} />
                <button type='submit'>Submit</button>
            </form>
            <h1>{message}</h1>
        </>
    )
}

export default AgeChecker
