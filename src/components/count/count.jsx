import { useState, useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Count = () => {
    const [count, setCount] = useState(1)
    const refRender = useRef(0)

    useEffect(() => {
        console.log(`El componente se renderizo ${refRender.current}`)
        refRender.current = refRender.current + 1
    }, [count])

    return (
        <Container>
            <Row>
                <Col xs='auto'>
                    <Button variant='light' onClick={() => setCount(count > 0 ? count - 1 : count)}>-</Button>
                </Col>
                <Col xs='auto'>
                    <p>{count}</p>
                </Col>
                <Col xs='auto'>
                    <Button variant='light' onClick={() => setCount(count + 1)}>+</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Count
