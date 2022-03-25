import React from 'react'
import Logo from '../assets/react-burger.png'
import { Button, Jumbotron } from 'react-bootstrap'

function HomePage() {
  return (
    <Jumbotron className='d-flex flex-column'>
        <img src={Logo} width='15%'/>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
  )
}

export default HomePage