import { useEffect, useState } from 'react'
import Card from './Card'

function App() {
  let [info, setInfo] = useState([])
  let [editId, setEditId] = useState(null)
  let [productsInfo, setProductsInfo] = useState({
    price: '',
    name: '',
    image: null
  })

  // ( add || edit ) product 
  let submit = (e) => {
    e.preventDefault()
    if (!productsInfo.name || !productsInfo.price) return

    let formData = new FormData()
    formData.append('name', productsInfo.name)
    formData.append('price', productsInfo.price)

    if (productsInfo.image) {
      formData.append('image', productsInfo.image)
    }
    let method
    if (editId) {
      method = 'PUT'
      formData.append('id', editId)
    } else {
      method = 'POST'
    }

    fetch('http://127.0.0.1:8000/', {
      method: method,
      body: formData
    })

      .then((res) => res.json())
      .then((data) => {
        if (editId) {
          setInfo((prevData) => prevData.map((item) => (item.id === editId ? data : item)))
          setEditId(null)
        } else {
          setInfo((prevData) => [data, ...prevData])
        }
        setProductsInfo({ price: '', name: '', image: null })
        e.target.reset()
      })
  }


  // delete product
  let deleteProduct = (id) => {
    fetch(`http://127.0.0.1:8000/delete/${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((e) => {
        setInfo(e)
      }).catch((e) => {
        console.error(e)
      })
  }


  // edit product
  let editProduct = (name, price) => {
    if (!editId) {
      setProductsInfo({
        name: name,
        price: price,
        image: null
      })
    } else {
      setProductsInfo({
        name: '',
        price: '',
        image: null
      })
    }
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then((res) => res.json())
      .then((res) => setInfo(res))
  }, [])

  return (
    <div className='bg-gray-950 min-h-screen w-full flex flex-row-reverse items-center gap-5 justify-center px-20 max-lg:flex-col py-15'>
      <div className='flex flex-col items-center gap-10 text-white w-[30%] max-lg:w-full'>
        <h1 className='font-bold text-4xl'>New Product!</h1>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input
            type="text"
            className='border border-gray-800 rounded bg-gray-900/60 px-4 py-2'
            placeholder='Product name'
            name='productName'
            value={productsInfo.name}
            onChange={(e) => setProductsInfo({ ...productsInfo, name: e.target.value })}
          />
          <input
            type="text"
            className='border border-gray-800 rounded bg-gray-900/60 px-4 py-2'
            placeholder='Product price'
            name='productPrice'
            value={productsInfo.price}
            onChange={(e) => setProductsInfo({ ...productsInfo, price: e.target.value })}
          />
          <input
            type="file"
            name='productImage'
            onChange={(e) => setProductsInfo({ ...productsInfo, image: e.target.files[0] })}
          />
          {productsInfo.image && (
            <img
              src={URL.createObjectURL(productsInfo.image)}
              alt="Preview"
              className="h-40 w-full object-cover rounded mt-2"
            />
          )}
          <button type="submit" className='bg-green-600 duration-100 hover:bg-green-500 rounded py-3 font-semibold cursor-pointer'>
            Submit
          </button>
        </form>
      </div>
      <div className='h-[70vh] w-[65%] overflow-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 justify-items-center max-lg:w-full max-lg:justify-items-start'>
        {
          info?.length > 0 ?
            info.map((item) => {
              return <Card
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                editId={editId}
                setEdit={setEditId}
                edit={() => {
                  editProduct(item.name, item.price, item.image)
                }}
                delProduct={deleteProduct} />
            })
            : <p className='text-white'>No info</p>
        }
      </div>
    </div>
  )
}

export default App