import Count from '../count/count'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <Container>
                <Row>
                    <Col><h3 className="greeting">{greeting}</h3> </Col>
                </Row>
                <Count></Count>
            </Container>
        </>
    )
}

export default ItemListContainer