import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const AppNavbar = () => {
  const allItemsCart = useSelector((state)=>state.carts.carts)
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  fixed="top">
      <Container>
        <Link to="/" className="navbar-brand"> Cart App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/products" className="nav-link"> Products</Link>
            <Link to="/cart" className="nav-link"> Cart {allItemsCart.length > 0 ? (<Badge style={{marginLeft: '4px'}} bg="danger">{allItemsCart?.length}</Badge>): ''}</Link>
            <Link to="/gallery" className="nav-link"> Gallery</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar