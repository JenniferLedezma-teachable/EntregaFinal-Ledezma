import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Count from '../count/count'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemDetailsContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const url = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProduct(json)
                console.log(json)
            })
            .catch(error => console.error(error))
    }, [id])

    return (
        <>
            <Container>
                <Card style={{ width: '20rem', marginTop: '2rem' }}>
                    <Card.Body>
                        <Card.Title>{product?.title}</Card.Title>
                        <Card.Text>
                            Description: {product?.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Price: {product?.price}</ListGroup.Item>
                        <ListGroup.Item>Category: {product?.category}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link><Count /></Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ItemDetailsContainer