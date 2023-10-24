import Count from '../count/count'
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
        <>
            <Container>
                <Row>
                    <Col>
                        <h3 className="greeting">{greeting}</h3>
                        {products.length > 0 ? (
                            products.map((prod) => (
                                <Item key={prod.id} product={prod} />
                            ))

                        ) : (
                            <Spinner animation="border" />
                        )}

                    </Col>

                </Row>
                <Count></Count>
            </Container>
        </>
    )
}

export default ItemListContainer