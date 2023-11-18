import Badge from 'react-bootstrap/Badge'
import { BsCart2 } from 'react-icons/bs'
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'

const CartWidget = () => {
  const { cartLength } = useContext(CartContext)

    return (
        <>
          <Badge bg='secondary' ><BsCart2 />  {cartLength()} </Badge>          
        </>
    )
}

export default CartWidget
