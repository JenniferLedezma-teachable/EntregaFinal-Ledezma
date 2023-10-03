import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';  

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Skin Glow CR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#products">All Products</Nav.Link>
            <Nav.Link href="#brands">Brands</Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#acne">Acne</NavDropdown.Item>
              <NavDropdown.Item href="#aging">Antiaging</NavDropdown.Item>
              <NavDropdown.Item href="#makeup">Makeup</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#hair">Hair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#sale">Sale</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar