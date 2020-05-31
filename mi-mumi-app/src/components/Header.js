import React from 'react';
import '../App.css';
import logo1 from "../img/logo1.png";
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';


function Header() {
    return (
        <header>
            <div className="navegacion" >
                <Navbar bg="light" expand="lg">
                    <img className="logoPrincipal" src={logo1} alt="logo" />
                    <Navbar.Brand href="/Home">MUMI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href='/About'>NOSOTROS</Nav.Link>
                            <Nav.Link href="/Historias">TESTIMONIOS</Nav.Link>
                            <Nav.Link href="/Organizaciones">RECOMENDACIONES</Nav.Link>
                            <Button variant="outline-light">INICIO</Button>
                            <Button variant="outline-light">LOGIN</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header >

    );

}

export default Header;



