import { useState } from 'react'

function MyForm() {
    let [changeValue, setChange] = useState('')
    let [result, setResult] = useState('')
    return (
        <form onSubmit={
            (e)=> {
                e.preventDefault()
                setResult(changeValue)
            }
        }>
            <input
                type="text"
                placeholder='Enter your favorite car'
                onChange={
                    (e) => {
                        e.preventDefault()
                        setChange(e.target.value)
                    }}
                value={changeValue}
            />
            <button>Submit</button>
            <p>{result}</p>
        </form>
    )
}

export default MyForm
