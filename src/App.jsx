import NavBar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import Home from './components/home/home'
import NotFound from './components/notFound/notFound'
import Cart from './components/cart/cart'
import Checkout from './components/checkout/checkout'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartComponentContext from './context/cartContext'

function App() {
  return (
    <CartComponentContext>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path='/*' element={<NotFound />} />
              <Route exact path='/' element={<Home />} />
              <Route exact path='products' element={<ItemListContainer />} />
              <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route exact path="/checkout" element={<Checkout />}></Route>
            </Routes>
          </BrowserRouter>
    </CartComponentContext>
  )
}

export default App
