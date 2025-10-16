import Home from './Page/Home'
import Header from './Components/Header'
import Product from './Page/Product'
import Category from './Page/Category'
import Cart from './Page/Cart'
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom'

function App() {
  let allProduct = [
    {
      Name: 'One Life Graphic T-shirt',
      Price: 260,
      OldPrice: 300,
      Info: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
      imgs: {
        image01: '/image-000-1.png',
        image02: '/image-000-2.png',
        image03: '/image-000-3.png'
      }
    }
  ]
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route Path='/Category' element={<Category />} />
          <Route path='/Product' element={<Product />} />
          <Route Path='/Cart' element={<Cart />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
