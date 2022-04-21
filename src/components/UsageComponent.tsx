import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Row, Col, ListGroup } from 'react-bootstrap'
import '../style/usageComponent.scss'
import Example from '../assets/example.jpg'

function UsageComponent() {

 
  return (
    <section>
        <NavbarComponent />
        <Row>
            <Col md={3} style={{position: 'fixed', marginTop : '5%'}}>
                <ListGroup className="doc-tabs" variant="flush">
                    <ListGroup.Item><a href='#'>Introduction</a></ListGroup.Item>
                    <ListGroup.Item><a href='#introduction'>Installation</a></ListGroup.Item>
                    <ListGroup.Item><a href='#installation'>Importing components</a></ListGroup.Item>
                    <ListGroup.Item><a href='#importing_components'>Usage</a></ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={8} className="position-absolute" style={{right: '5%', marginTop : '5%'}}>
                <div id='introduction'>
                    <h1>Introduction</h1>
                    <p>Use ready menu components for your React app.</p>
                </div>
                <div id='installation'>
                    <h2>Installation</h2>
                    <p>You can use this package by installing it via npm. In order to install run this command on your command line</p>
                    <div className='code-container'>
                        <p className='text-white py-2 px-2'>npm i react-burger-navimenu</p>
                    </div>
                </div>
                <div id='importing_components'>
                    <h2>Importing components</h2>
                    <p>You only need to import Menu component. After installing you can import the components as below</p>
                    <div className='code-container'>
                        <p className='text-white py-2 px-2'>import Menu from 'react-burger-navimenu';</p>
                    </div>
                </div>
                <div id='usage'>
                    <h2>Usage</h2>
                    <p>After importing menu component, you can use in the way shown below</p>
                    <div className='code-container py-3' style={{backgroundColor : '#1E1E1E'}}>
                        <img src={Example} />
                    </div>
                    <p>You can customize position of menu component by setting <b>position</b> properity to <i>"left"</i> or <i>"right"</i>.You can set width by giving classname "width-(20, 30, 40, etc)"</p>
                </div>
            </Col>
        </Row>
    </section>
  )
}

export default UsageComponent

/*
        <div className='mx-auto py-5' style={{width: "70%"}}>
            <div>
                <h1>Introduction</h1>
                <p>Use ready menu components for your React app.</p>
            </div>
            <div>
                <h2>Installation</h2>
                <p>You can use this package by installing it via npm. In order to install run this command on your command line</p>
                <div className='code-container'>
                    <p className='text-white py-2 px-2'>npm i react-burger-navimenu</p>
                </div>
            </div>
            <div>
                <h2>Importing components</h2>
                <p>You only need to import Menu component. After installing you can import the components as below</p>
                <div className='code-container'>
                    <p className='text-white py-2 px-2'>import Menu from 'react-burger-navimenu';</p>
                </div>
            </div>
            <div>
                <h2>Usage</h2>
                <p>After importing menu component, you can use in the way shown below</p>
                <div className='code-container py-3' style={{backgroundColor : '#1E1E1E'}}>
                    <img src={Example} />
                </div>
                <p>You can customize position of menu component by setting <b>position</b> properity to <i>"left"</i> or <i>"right"</i>.You can set width by giving classname "width-(20, 30, 40, etc)"</p>
            </div>
        </div>
 */