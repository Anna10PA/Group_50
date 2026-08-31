import { useEffect, useState } from "react"

function App() {
  let [data, setData] = useState([])
  let [product, setProduct] = useState('')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  let submit = (e) => {
    e.preventDefault()
    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: product })
    })

  }
  useEffect(()=> {
    console.log(product)
  }, [product])

  let deleteText = (id) => {
    fetch(`http://127.0.0.1:8000/delete/${id}`, {
      method: 'DELETE'
    })
  }


  return <>
    <div>
      {data.map((i, id) => (
        <div>
          <p key={id}>{i.text}</p>
          <button onClick={()=> {deleteText(i.id)}}>Delete</button>
        </div>
      ))}
    </div>
    <form onSubmit={submit}>
      <input type="text" placeholder="text . . . " onChange={(e) => {
        setProduct(e.target.value)
      }} />
      <button type='submit'>submit</button>
    </form>
  </>
}

export default App 