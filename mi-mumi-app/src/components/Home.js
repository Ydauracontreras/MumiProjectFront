import React, { Component } from 'react';
import logo1 from '../img/logo1.png';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About'
import Historias from './Historias'
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import Route from 'react-router-dom/Route'
import { BrowserRouter, Link } from 'react-router-dom'


function Home() {
    return (
        <div className="App">
            <div class="text-center" class="home">
            </div >
            <div class='About'>
                <About />
            </div>

            <div class='Historias'>
                <Historias />
            </div>

        </div >

    );
}

export default Home;
