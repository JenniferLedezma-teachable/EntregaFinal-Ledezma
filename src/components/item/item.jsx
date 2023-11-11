import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const Item = ({ product }) => {
    return (
        <Container>
            <Card style={{ width: '22rem', marginBottom: '3rem' }}>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                    <Card.Title className="d-flex flex-column align-items-center">{product.title}</Card.Title>
                    <Card.Text>
                        Price: USD ${product.price}
                    </Card.Text>
                    <Link to={`/item/${product.id}`} className="btn btn-primary d-flex flex-column align-items-center" style={{ backgroundColor: '#E7C5CA', borderColor: '#D4A3A7' }}>
                        See More
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Item
