import { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Count = () => {
    const [count, setCount] = useState(1)
    const refRender = useRef(0)

    useEffect(() => {
        console.log(`El componente se renderizo ${refRender.current}`)
        refRender.current = refRender.current + 1
    }, [count])

    return (
        <Container>
            <Button variant="light" onClick={() => setCount(count > 1 && count - 1)}>-</Button>
            <p> {count}</p>
            <Button variant="light" onClick={() => setCount(count + 1)}>+</Button>{' '}
        </Container>
    )
}

export default Count