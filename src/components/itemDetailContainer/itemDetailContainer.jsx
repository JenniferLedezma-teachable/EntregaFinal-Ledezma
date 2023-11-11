// ItemDetailsContainer.jsx
import  { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Count from '../count/count';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/client'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailsContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = doc(db, 'products', id);
                const docSnap = await getDoc(productRef);

                if (docSnap.exists()) {
                    setProduct({ ...docSnap.data(), id: docSnap.id });
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <Container className="d-flex flex-column align-items-center">
            {product && (
                <Card style={{ width: '30rem', marginTop: '2rem' }}>
                    <Card.Img variant="top" src={product.image} alt={product.title} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Description: {product.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                        <ListGroup.Item>Category: {product.category}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link><Count /></Card.Link>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default ItemDetailsContainer;
