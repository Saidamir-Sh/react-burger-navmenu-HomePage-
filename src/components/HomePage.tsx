import React from 'react'
import '../style/Jumbotron.scss'
import Logo from '../assets/react-burger.png'
import { Button, Jumbotron } from 'react-bootstrap'
import Menu from '../lib/components/Menu'
import { useNavigate } from 'react-router'
//import Menu from 'react-burger-navimenu'

function HomePage() {

  const navigate = useNavigate()

  return (
    <Jumbotron className='bg-dark d-flex flex-column align-items-center justify-content-center border-0' style={{overflow: 'hidden'}}>
        <img src={Logo} width='15%'/>
        <h1 className='text-white font-weight-bold'>React Burger</h1>
        <p className='text-white w-50 text-center font-weight-light' style={{fontSize: '1.5rem'}}>
            Simple menu components for React. 
        </p>
        <p>
          <Button variant="primary" onClick={() => navigate('/usage')} className='px-5'>Get Started</Button>
        </p>

{/* 
         <Menu position='right' className='width-30'>
            <Menu.Header>
              
            </Menu.Header>
            <Menu.Body>
                
            </Menu.Body>
        </Menu> */}


    </Jumbotron>
  )
}

export default HomePage