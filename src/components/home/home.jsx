import Container from 'react-bootstrap/Container'
import skinglowImage from '../../assets/skinglow.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
         <Container className='d-flex flex-column align-items-center' style={{marginTop: '10rem' }}>
            <h2>Welcome to Skin Glow CR site</h2>
            <p> Where skin glows energy flows </p>
            <img src={skinglowImage} alt='Descripción de la imagen' style={{ width: '30rem' }} />

            <Link to='/products' className='btn btn-primary d-flex flex-column align-items-center' style={{ backgroundColor: '#E7C5CA', borderColor: '#D4A3A7' }}>
              All the products
            </Link>

        </Container>
    )
}

export default Home
