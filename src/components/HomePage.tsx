import React from 'react'
import Logo from '../assets/react-burger.png'
import { Button, Jumbotron } from 'react-bootstrap'

function HomePage() {
  return (
    <Jumbotron className='d-flex flex-column align-items-center justify-content-center'>
        <img src={Logo} width='15%'/>
        <h1>React Burger</h1>
        <p className='text-primary'>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Get Started</Button>
        </p>
    </Jumbotron>
  )
}

export default HomePage