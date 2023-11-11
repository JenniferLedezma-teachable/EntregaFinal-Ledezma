import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Item from '../item/item'
import { db } from '../../firebase/client'
import { collection, getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [title, setTitle] = useState('All products')
  const category = useParams().categoryId
  const [loading, setLoading] = useState(true)

  const createQuery = (category) => {
    const productsRef = collection(db, 'products')
    return category
      ? query(productsRef, where('categoryId', '==', category))
      : productsRef
  }

  useEffect(() => {
    const productsFilterRef = createQuery(category)

    getDocs(productsFilterRef)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        )
        setTitle('All products')
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))

    const timeoutId = setTimeout(() => {
      console.error('Request timed out')
      setLoading(false)
    }, 10000)

    return () => clearTimeout(timeoutId)
  }, [category])

  return (
    <Container>
      <Row>
        <h3 className='greeting'>{greeting}</h3>
        <h2 style={{ textTransform: 'capitalize' }}>{title}</h2>
      </Row>
      <Row>
        {loading ? (
          <Spinner animation='border' />
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
