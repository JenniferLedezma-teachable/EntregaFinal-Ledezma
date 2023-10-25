import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Item from '../item/item'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState('All products')
    const {categoryName} = useParams()
    const url = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : 'https://fakestoreapi.com/products/'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                categoryName ? setTitle(categoryName) : setTitle('All products')
                console.log(json)
            })
            .catch(error => console.error(error))
    }, [categoryName])

    return (
        <Container>
            <Row>
                <h3 className="greeting">{greeting}</h3>
                <h2 style={{ textTransform: 'capitalize' }}>{title}</h2>
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
