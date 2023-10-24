import React from 'react';
import CartWidget from '../cartWidget/cartWidget'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> <NavLink to="/"> Skin Glow CR </NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="products">All Products</Link></Nav.Link>
            <Nav.Link href="#brands">Brands</Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#aging">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#makeup">Jewelery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#hair">Men's clothing</NavDropdown.Item>
              <NavDropdown.Item href="#hair">Women's clothing</NavDropdown.Item>
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