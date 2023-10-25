import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                <Row>
                    <Col>
                        <h3> Soy el producto {product?.title}</h3>
                        <p> Description {product?.description}</p>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemDetailsContainer