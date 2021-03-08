import React from 'react';
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Container, Image, FormControl, Form, Button } from 'react-bootstrap'
import logo from '../../imagens/fullpet_logo2.png'
import './menu.css';


function Menu(props) {
    return (
        <>
  <Navbar className="nav-logo" bg="light">
    <Navbar.Brand  href="/"><Image className="logo" src={logo} alt="Logo Full Pet"/> </Navbar.Brand>
        <Form className="ml-auto" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Pesquisar</Button>
        </Form>
  </Navbar>
 

    <Navbar className="nav-links" bg="Dark">    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-5 links">
          <Nav.Link href="/produtos">Produtos</Nav.Link>
          <Nav.Link href="/pedidos">Pedidos</Nav.Link>
          <Nav.Link href="/cadastro">Cadasatro</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</>
    );
}

export default Menu;