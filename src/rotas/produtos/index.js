import React from 'react';
import { Navbar } from 'react-bootstrap';
import { View } from 'react-native';

// import { Container } from './styles';

function Produtos() {

  return (

    <div>
        <div>
        <Nav defaultActiveKey="/home" className="flex-column" >
            <Navbar.Brand>Mapa do site</Navbar.Brand>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/home">Produtos</Nav.Link>
                <Nav.Link href="/home">Pedidos</Nav.Link>
        </Nav>

        </div>
    </div>
    

  )
}

export default Produtos;