import React from 'react';
import CartWidget from '../cartWidget/cartWidget'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><NavLink to="/"> Skin Glow CR </NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to="products">All Products</NavLink></Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#jewelries">Jewelery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#men">Men's clothing</NavDropdown.Item>
              <NavDropdown.Item href="#women">Women's clothing</NavDropdown.Item>
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