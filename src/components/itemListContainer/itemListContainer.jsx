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
    const { categoryName } = useParams()
    const [loading, setLoading] = useState(true) // Add loading state
    const url = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : 'https://fakestoreapi.com/products/'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const json = await response.json()
                setProducts(json)
                categoryName ? setTitle(categoryName) : setTitle('All products')
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        const timeoutId = setTimeout(() => {
            console.error('Request timed out')
            setLoading(false)
        }, 10000)

        fetchData()

        return () => clearTimeout(timeoutId)
    }, [categoryName])

    return (
        <Container>
            <Row>
                <h3 className="greeting">{greeting}</h3>
                <h2 style={{ textTransform: 'capitalize' }}>{title}</h2>
            </Row>
            <Row>
                {loading ? (
                    <Spinner animation="border" />
                ) : (
                    products.map((prod) => (
                        <Col key={prod.id} md={4}>
                            <Item product={prod} />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    )
}

export default ItemListContainer
