import { useContext, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import skinglowImage from '../../assets/skinglow.png'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { db } from '../../firebase/client'
import { collection, addDoc } from 'firebase/firestore'
import { CartContext } from '../../context/cartContext'

const Checkout = () => {
  const [orderId, setOrderId] = useState('')
  const { cart, emptyCart, finalPrice, cartLength } = useContext(CartContext)
  const { register, handleSubmit, formState: { errors }} = useForm()

  const showForm = cartLength() > 0
  const showThankYouPage = orderId && !showForm

  const buy = (data) => {
    const order = {
      client: data,
      products: cart,
      totalAmount: finalPrice(),
    }

    const pedidosRef = collection(db, 'orders')
    addDoc(pedidosRef, order).then((doc) => {
      setOrderId(doc.id)
      emptyCart()
    })
  }

  if (showThankYouPage) {
    return (
      <Container
        className='d-flex flex-column align-items-center'
        style={{ marginTop: '2rem' }}
      >
        <Card
          style={{
            width: '22rem',
            marginTop: '2rem',
            marginBottom: '2rem',
          }}
        >
          <Card.Img
            src={skinglowImage}
            alt='Descripción de la imagen'
            style={{ width: '20rem' }}
          />

          <Card.Body>
            <Card.Title>Thank you for your order!</Card.Title>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <Card.Text>You will received your order soon.</Card.Text>
            <Card.Text>Tracking number: {orderId}</Card.Text>
          </ListGroup>
        </Card>
        <Link
          to='/products'
          className='btn btn-primary d-flex flex-column align-items-center'
          style={{ backgroundColor: '#E7C5CA', borderColor: '#D4A3A7' }}
        >
          Continue Buying
        </Link>
      </Container>
    )
  }

  return (
    showForm && (
      <Container
        className='d-flex flex-column align-items-center'
        style={{ margin: '2rem' }}
      >
        <h2>Complete your personal info to proceed with your order</h2>
        <Card
          style={{
            width: '22rem',
            heigh: '50rem',
            margin: '2rem',
          }}
        >
          <form
            className='form'
            onSubmit={handleSubmit(buy)}
            style={{ margin: '2rem' }}
          >
            <ListGroup className='list-group-flush'>
              <Card.Text>
                <input
                  type='fullname'
                  className='form-control'
                  placeholder='Fullname'
                  {...register('name')}
                  required
                />
              </Card.Text>
              <Card.Text>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  {...register('email')}
                  required
                />
              </Card.Text>
              <Card.Text>
                <input
                  type='phone'
                  className='form-control'
                  placeholder='Phone Number'
                  {...register('phone')}
                  required
                />
              </Card.Text>
              <Card.Text>
                <input
                  type='cardNumber'
                  className='form-control'
                  placeholder="Enter your 16-digit card number"
                  style={{
                    borderColor: errors.cardNumber ? 'red' : 'initial',
                  }}
                  {...register('cardNumber', {
                    required: 'Card number is required',
                    pattern: {
                      value: /^[0-9]{16}$/,
                      message: 'Please enter a valid 16-digit card number',
                    },
                  })}
                  required
                />
              </Card.Text>
            </ListGroup>

            {errors.cardNumber && <p>{errors.cardNumber.message}</p>}

            <button
              className='btn btn-primary d-flex flex-column align-items-center'
              type='submit'
              style={{
                backgroundColor: '#E7C5CA',
                borderColor: '#D4A3A7',
                margin: '2rem',
              }}
            >
              Send my Order
            </button>
            
          </form>
        </Card>
      </Container>
    )
  )
}

export default Checkout
