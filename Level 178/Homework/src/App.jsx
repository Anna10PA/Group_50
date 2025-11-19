import Home from './Page/Home'
import Header from './Components/Header'
import Product from './Page/Product'
import Cart from './Page/Cart'
import PageAll from './Page/PageAll'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'


export let ProductInfos = createContext()

function App() {
  const [List, setList] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/data.json")
        const data = await response.json()
        setList(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <ProductInfos.Provider value={List}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Sale' element={<PageAll />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:type/:name' element={<Product />} />
            <Route path='/:CategoryType' element={<PageAll />} />
          </Routes>
        </BrowserRouter>
      </ProductInfos.Provider>
    </>
  )
}

export default App
