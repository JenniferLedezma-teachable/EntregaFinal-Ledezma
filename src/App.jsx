import NavBar from './components/navBar/navBar'
import CartWidget from './components/cartWidget/cartWidget'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
     <NavBar />
     <ItemListContainer greeting="Welcome to our ecommerce"/>
    </>
  )
}

export default App
