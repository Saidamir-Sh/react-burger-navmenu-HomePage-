import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import NavbarComponent from './components/NavbarComponent';


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
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
