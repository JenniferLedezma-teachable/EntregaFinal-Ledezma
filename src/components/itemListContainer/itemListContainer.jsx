import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react'
import Item from '../item/item'
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const url = 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                console.log(json)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <Container>
            <Row>
                <h3 className="greeting">{greeting}</h3>
            </Row>
            <Row>
                {products.length > 0 ? (
                    products.map((prod) => (
                        <Col key={prod.id} md={4}>
                            <Item product={prod} />
                        </Col>
                    ))
                ) : (
                    <Spinner animation="border" />
                )}
            </Row>
        </Container>
    )
}

export default ItemListContainer
