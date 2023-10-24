import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h4>{product.title}</h4>
                <p>Price: USD ${product.price}</p>
                <p>Category: {product.category}</p>
                <Link to={`/item/${product.id}`}>See More</Link>
                </Col>
                <Col></Col>
                <Col></Col>
                
            </Row>
        </Container>
        <Link /> 
    </>
    )
}

export default Item