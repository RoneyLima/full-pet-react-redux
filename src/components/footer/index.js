import React from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import pagto from '../../../src/imagens/formas_pagamento.jpg'
import './footer.css'


export default function Footer(props) {
    return (
        <>
        <div className="footer-container " fluid>
            
            <Row>
                <Col>
                <img className="pagto" src={pagto} alt="formas de pagamento" />
                </Col>

            <Col>
                <Nav defaultActiveKey="/home" className="flex-column" >
                <Navbar.Brand>Mapa do site</Navbar.Brand>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/home">Produtos</Nav.Link>
                    <Nav.Link href="/home">Pedidos</Nav.Link>

                </Nav>
            </Col>
            </Row>
         
                
        </div>
        <div className="copyright">
            <Navbar className="fixed-bottom" bg="light">    
                <Nav className="mx-auto">
                <Nav.Link eventKey="disabled" disabled> &copy; Copyright. FullPet 2021</Nav.Link>
                </Nav>
            </Navbar>
        </div>
</>
    )
}