// ItemDetailsContainer.jsx
import { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ItemCount from '../itemCount/itemCount'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { db } from '../../firebase/client'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const { addProduct } = useContext(CartContext)
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [productNotFound, setProductNotFound] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = doc(db, 'products', id)
                const snapshot = await getDoc(productRef)

                if (snapshot.exists()) {
                    setProduct({ ...snapshot.data(), id: snapshot.id })
                } else {
                    setProductNotFound(true)
                    console.log('No such document!')
                }
            } catch (error) {
                console.error('Error fetching document:', error)
            }
        }

        fetchProduct()
    }, [id])

    const helperAdd = (quantity) => {
        const { id: productId, title, price, categoryId } = product

        const productCart = {
            productId,
            title,
            price,
            categoryId,
            quantity,
        }

        addProduct(productCart)
        setShowSuccessModal(true)
        setTimeout(() => {
            setShowSuccessModal(false)
        }, 3000)
    }

    const handleCloseModal = () => {
        setShowSuccessModal(false)
    }

    return (
        <Container className='d-flex flex-column align-items-center' style={{ marginBottom: '10rem' }}>
            { productNotFound ? (
                
                <h2>Product Not Found</h2>
            ) : product && (
                <Card style={{ width: '30rem', marginTop: '2rem', marginBottom: '10rem' }}>
                    <Card.Img variant='top' src={product.image} alt={product.title} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Description: {product.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className='list-group-flush'>
                        <ListGroup.Item>Price: USD ${product.price}</ListGroup.Item>
                        <ListGroup.Item>Category: {product.categoryId}</ListGroup.Item>
                        <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link>
                            <ItemCount productStock={product.stock} addToCart={helperAdd} />
                            <SuccessModal show={showSuccessModal} handleClose={handleCloseModal} />
                        </Card.Link>
                    </Card.Body>
                </Card>
            )}
        </Container>
    )
}

const SuccessModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Added to cart successfully!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ItemDetailContainer
