import Badge from 'react-bootstrap/Badge'
import { BsCart2 } from 'react-icons/bs'
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cartLength } = useContext(CartContext)

    return (
      <Link to="/cart">
          <Badge bg='secondary' ><BsCart2 /> { cartLength() }</Badge>          
      </Link>
    )
}

export default CartWidget
