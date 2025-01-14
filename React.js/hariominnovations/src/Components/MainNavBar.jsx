import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./../image/Logo.png"
import Arrow from "./../image/Arrow.png"

const MainNavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='Nav-link' >Home</Nav.Link>
            <Nav.Link className='Nav-link'>AboutUs</Nav.Link>
            <Nav.Link className='Nav-link'>Services</Nav.Link>
            <Nav.Link className='Nav-link'>Careers</Nav.Link>
            <Nav.Link className='Nav-link'>Case Studies</Nav.Link>
            <Nav.Link className='Nav-link'>Testimonial</Nav.Link>
          </Nav>
          <div className="d-flex">
            
            <Button className='Button'>Contactus</Button>
          </div>
          <img src={Arrow} className='Arrow'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MainNavBar
