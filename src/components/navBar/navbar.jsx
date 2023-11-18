import CartWidget from '../cartWidget/cartWidget'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand as={Link}><Link to='/'> Skin Glow CR </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='products'>All Products</Nav.Link>
            <NavDropdown title='Categories' id='collapsible-nav-dropdown'>
              <NavDropdown.Item as={Link} to='category/serum'>Serums</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='category/sunscreen'>Sunscreens</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='category/hair'>Hair</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='category/makeup'>Makeup</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
