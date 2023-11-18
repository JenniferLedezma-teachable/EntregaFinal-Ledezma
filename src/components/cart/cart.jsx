import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Card, Modal } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { CartContext } from '../../context/cartContext'

const Cart = () => {
  const { cart, emptyCart, finalPrice } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)

  const handleEmptyCart = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    emptyCart()
  }

  return (
    <Container
      className='d-flex flex-column align-items-center'
      style={{ marginTop: '2rem' }}
    >
      { cart.length > 0 ? (
        <Container>
           <Row style={{ marginTop: '2rem' }}>
            <h2>Final Price: ${finalPrice()}</h2>
          </Row>
          
          <Row style={{ marginTop: '2rem' }}>
            <Col xs='auto'>
              <Link to='/products' className='btn btn-primary d-flex flex-column align-items-center' style={{ backgroundColor: '#E7C5CA', borderColor: '#D4A3A7' }}>
                Continue Buying
              </Link>
            </Col>
            <Col xs='auto'>
              <Button
                className='btn btn-primary d-flex flex-column align-items-center'
                style={{ backgroundColor: '#E7C5CA', borderColor: '#D4A3A7' }}
                onClick={handleEmptyCart}
              >
                Empty Cart
              </Button>
            </Col>
            <Col xs='auto'>
              <Link to='/checkout' className='btn btn-primary d-flex flex-column align-items-center' style={{ backgroundColor: '#E7C5CA', borderColor: '#D4A3A7' }}>
                Checkout
              </Link>
            </Col>
          </Row>
        </Container>
       
      ) : (
        <Row style={{ marginTop: '2rem' }}>
           <h2>The cart is empty</h2>
          <Col xs='auto'>
            <Link to='/' className='btn btn-primary d-flex flex-column align-items-center' style={{ backgroundColor: '#E7C5CA', borderColor: '#D4A3A7' }}>
              The cart is empty, Go to Home
            </Link>
          </Col>
        </Row>
      )}

      <div className='cart-products'>
        { cart.map((product) => (
            <div className='cart-products' key={product.id}>
              <Card
                key={product.id}
                style={{
                  width: '22rem',
                  marginTop: '2rem',
                  marginBottom: '2rem',
                }}
              >
                <Card.Img variant='top' src={product.product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.product.title}</Card.Title>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <Card.Text>Unit Price: USD {product.product.price}</Card.Text>
                  <Card.Text>Quantity: {product.quantity}</Card.Text>
                  <Card.Text>
                    Total Price: USD {product.product.price * product.quantity}
                  </Card.Text>
                </ListGroup>
              </Card>
            </div>
        ))}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This action will empty your cart. Do you want to continue?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant='secondary' onClick={handleCloseModal}>
            Yes, empty cart
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Cart
