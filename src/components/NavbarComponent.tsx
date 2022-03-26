import React from 'react'
import Logo from '../assets/react-burger.png'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar className='w-100' bg="gray-dark" variant="dark">
           <Container className='container-100'>
             <Navbar.Brand>
               <img
                 alt=""
                 src={Logo}
                 width="30"
                 height="30"
                 className="d-inline-block align-top"
               /> 
             <p className='d-inline ml-2'>React Burger</p>
             </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link >v0.1.0</Nav.Link>
                <Nav.Link >Usage</Nav.Link>
                <Nav.Link >Showcase</Nav.Link>
                <Nav.Link >NPM</Nav.Link>
              </Nav>
           </Container>
        </Navbar>
    )
}

export default NavbarComponent