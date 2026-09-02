import { useEffect, useState } from "react"

function App() {
  let [data, setData] = useState([])
  let [product, setProduct] = useState('')
  let [edit, setEdit] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])


  // submit
  let submit = (e) => {
    e.preventDefault()
    if (!product.trim()) return

    fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: product })
    })
      .then((res) => res.json())
      .then((newProduct) => {
        setData((prevData) => [...prevData, newProduct])
        setProduct('')
      })
      .catch((err) => console.error("Error adding product:", err))
  }


  // delete
  let deleteText = (id) => {
    fetch(`http://127.0.0.1:8000/delete/${id}`, {
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) {
          setData((prevData) => prevData.filter((item) => item.id !== id))
        }
      })
      .catch((err) => console.error("Error deleting product:", err))
  }


  // edit
  let editItem = (id) => {
    let valu = prompt('Enter text')
    if (!valu || !valu.trim()) return

    fetch(`http://127.0.0.1:8000/edit/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: valu })
    })
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error("Validation or server error")
      })
      .then((updatedList) => {
        setData(updatedList)
      })
      .catch((err) => console.error("Error editing product:", err))
  }


  return (
    <div class='w-full h-screen bg-gray-950 flex items-center justify-center flex-col gap-5'>
      <div class='bg-gray-700 p-5 rounded max-w-125 w-full flex flex-col items-center gap-3 max-h-100 overflow-auto'>
        {data.map((i) => (
          <div key={i.id} class='flex items-center justify-between w-full'>
            <p class='text-white'>{i.text}</p>
            <div class='flex items-center gap-2.5'>
              <button onClick={() => deleteText(i.id)} class='text-white bg-red-500 px-3 py-2 '>Delete</button>
              <button onClick={() => editItem(i.id)} class='text-white bg-orange-500 px-3 py-2 '>Edit</button>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={submit} class='bg-gray-600 w-full max-w-125 flex items-center gap-2.5'>
        <input
          type="text"
          placeholder="text . . . "
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          class='w-full px-3 py-2 outline-none border-none rounded '
        />
        <button type="submit" class='bg-green-500 px-4 py-2 rounded text-white'>submit</button>
      </form>
    </div>
  )
}

export default App