import Home from './Page/Home'
import Header from './Components/Header'
import Product from './Page/Product'
import Category from './Page/Category'
import Cart from './Page/Cart'

// import TopSell from "./Components/TopSell"
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:type/:name' element={<Product />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
