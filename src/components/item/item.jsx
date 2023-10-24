import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Item = ({ product }) => {
    return (
        <>
            <Container>
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            Price: USD ${product.price}
                        </Card.Text>
                        <Link to={`/item/${product.id}`}>See More</Link>
                    </Card.Body>
                </Card>
            </Container>
            <Link />
        </>
    )
}

export default Item