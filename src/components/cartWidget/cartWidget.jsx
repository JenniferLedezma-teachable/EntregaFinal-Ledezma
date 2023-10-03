import Badge from 'react-bootstrap/Badge';
import { BsCart2 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <>
           <BsCart2 /> <Badge bg="secondary">3 </Badge>          
        </>
    )
}

export default CartWidget