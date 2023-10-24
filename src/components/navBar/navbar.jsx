import React from 'react';
import CartWidget from '../cartWidget/cartWidget'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';  
import { Link, NavLink } from "react-router-dom";


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
              <NavDropdown.Item href="#aging">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#makeup">Jewelery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#hair">Men's clothing</NavDropdown.Item>
              <NavDropdown.Item href="#hair">Women's clothing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#sale">Sale</Nav.Link>
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