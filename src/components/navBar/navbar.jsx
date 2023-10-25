import React from 'react'
import CartWidget from '../cartWidget/cartWidget'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom"

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
              <NavDropdown.Item><NavLink to="category/electronics">Electronics</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="category/jewelery">Jewelery</NavLink></NavDropdown.Item>
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