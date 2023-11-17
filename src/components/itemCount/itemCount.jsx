import { useState, useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemCount = ( {productStock, addToCart} ) => {
    const [count, setCount] = useState(1)
    const refRender = useRef(0)

    const substractProduct = () => {
        count > 1 && setCount(count - 1)
    }

    const addProduct = () => {
        count < productStock && setCount(count + 1)
    }

    useEffect(() => {
        console.log(`El componente se renderizo ${refRender.current}`)
        refRender.current = refRender.current + 1
    }, [count])

    return (
        <Container className='d-flex flex-column align-items-center' style={{ textDecoration: 'none' }}>
            <Row>
                <Col xs='auto'>
                    <Button variant='light' onClick={substractProduct}>-</Button>
                </Col>
                <Col xs='auto'>
                <p>{count}</p>
                </Col>
                <Col xs='auto'>
                    <Button variant='light' onClick={addProduct}>+</Button>
                </Col>
            </Row>
            <Row className='d-flex flex-column align-items-center'> 
                <Button
                    className='btn btn-primary d-flex flex-column'
                    style={{
                        backgroundColor: '#E7C5CA',
                        borderColor: '#D4A3A7',
                        marginTop: '4%',
                      }}
                    onClick={addToCart}
                >
                    Agregar al carrito
                </Button>
            </Row>
        </Container>
    )
}

export default ItemCount
