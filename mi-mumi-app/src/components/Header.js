import React from 'react';
import '../App.css';
import logo1 from "../img/logo1.png";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Redirect, Link, NavLink, withRouter } from 'react-router-dom';


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
                            <NavDropdown title="ORGANIZACIONES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Orientacion</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Asesoria Legal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Denuncia</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>

    );

}

export default Header;



