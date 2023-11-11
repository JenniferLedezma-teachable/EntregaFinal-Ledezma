import Container from 'react-bootstrap/Container'
import skinglowImage from '../../assets/skinglow.png';

const Home = () => {
    return (
         <Container className="d-flex flex-column align-items-center" style={{marginTop: '10rem' }}>
            <h2>Welcome to Skin Glow CR site</h2>
            <p> Where skin glows energy flows </p>
            <img src={skinglowImage} alt="Descripción de la imagen" style={{ width: '30rem' }} />

        </Container>
    )
}

export default Home