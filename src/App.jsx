import NavBar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import Home from './components/home/home'
import NotFound from './components/notFound/notFound'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/*' element={<NotFound />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='products' element={<ItemListContainer />} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
