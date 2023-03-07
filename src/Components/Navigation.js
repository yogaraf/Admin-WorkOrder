import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarLogo from "../Assets/logo-hta.png";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={NavbarLogo} alt="logo-hta" height="50" width="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link as={Link} to="/" className='me-5'>Home</Nav.Link>
            <Nav.Link as={Link} to="/Orderan" className='me-5'>Orderan</Nav.Link>
            <Nav.Link as={Link} to="/history" className='me-5'>History</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation

// export default Navigation;

// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css'
// function Navigation() {
//   return (
//     <div>Navigation</div>
//   )
// }

// export default Navigation

