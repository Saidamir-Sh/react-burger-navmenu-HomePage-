import React from 'react'
import Logo from '../assets/react-burger.png'
import { Button, Jumbotron } from 'react-bootstrap'

function HomePage() {
  return (
    <Jumbotron className='bg-dark d-flex flex-column align-items-center justify-content-center border-0'>
        <img src={Logo} width='15%'/>
        <h1 className='text-white font-weight-bold'>React Burger</h1>
        <p className='text-white w-50 text-center font-weight-light' style={{fontSize: '1.5rem'}}>
            Simple menu components for React. 
        </p>
        <p>
          <Button variant="primary" className='px-5'>Get Started</Button>
        </p>
    </Jumbotron>
  )
}

export default HomePage