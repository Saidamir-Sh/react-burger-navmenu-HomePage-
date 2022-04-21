import React from 'react'
import Logo from '../assets/react-burger.png'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NavbarComponent = () => {

  const navigate = useNavigate()

    return (
        <Navbar className='w-100 fixed-top' bg="gray-dark" variant="dark">
           <Container className='container-100'>
             <Navbar.Brand onClick={() => navigate('/')} style={{cursor:'pointer'}}>
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
                <Nav.Link onClick={() => navigate('/usage')} >Usage</Nav.Link>
                <Nav.Link href='https://www.npmjs.com/package/react-burger-navimenu' >NPM</Nav.Link>
              </Nav>
           </Container>
        </Navbar>
    )
}

export default NavbarComponent