import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/customization/_customBootstrap.scss'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Container, Row, Col, NavbarBrand} from 'react-bootstrap'
import NavbarComponent from './components/NavbarComponent';
import HomePage from './components/HomePage';
import UsageComponent from './components/UsageComponent';

function App() {
  return (
    <BrowserRouter>
      <Container fluid={true} className='px-0'>
        <Row>
          <Col md={12}>
            <Routes>
                <Route path='/' element={<NavbarComponent />}/>
            </Routes>
          </Col>
          <Col md={12}>
            <Routes>
              <Route path='/' element={<HomePage />}/>
            </Routes>
          </Col>
          <Col>
            <Routes>
              <Route path='/usage' element={<UsageComponent />}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
