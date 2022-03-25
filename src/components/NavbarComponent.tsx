import React from 'react'
import Logo from '../assets/react-burger.png'
import { Navbar, Container } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar className='w-100' bg="dark" variant="dark">
           <Container className='container-100'>
             <Navbar.Brand href="#home">
               <img
                 alt=""
                 src={Logo}
                 width="30"
                 height="30"
                 className="d-inline-block align-top"
               /> 
             React Bootstrap
             </Navbar.Brand>
           </Container>
        </Navbar>
    )
}

export default NavbarComponent