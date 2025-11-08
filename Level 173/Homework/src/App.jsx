import Home from './Page/Home'
import Header from './Components/Header'
import Product from './Page/Product'
import Cart from './Page/Cart'
import Category from './Page/Category'
import PageAll from './Page/PageAll'

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
          <Route path='/:CategoryType' element={<PageAll />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
