import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarLogo from "../Assets/logo-hta.png"

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      {/* <Link to="/" className="navbar-logo"> */}
          <img src={NavbarLogo} alt="logo-hta" height="30" width="35" />
        {/* </Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="justify">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sevices">Services</Nav.Link>
            <Nav.Link href="#Orderan">Orderan</Nav.Link>
            <Nav.Link href="#history">History</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;