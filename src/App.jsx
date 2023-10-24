import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>

      <Routes>
        {/* <Route exact path='/*' element={<NotFound/>}/>
        <Route exact path='/' element={<Home/>} /> */}
        <Route exact path="/" element={<ItemListContainer />} />
        {/* TODO */}
        <Route path='/category/:id' element={<ItemListContainer />} /> 
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
