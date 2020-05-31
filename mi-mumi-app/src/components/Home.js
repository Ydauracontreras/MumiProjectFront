import React, { Component } from 'react';
import logo1 from '../img/logo1.png';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Quizapp from './Quizapp'
import Quiz from './Quiz'
import Historias from './Historias'
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import Route from 'react-router-dom/Route'
import { BrowserRouter, Link } from 'react-router-dom'


function Home() {
    return (
        <div className="">
            <div class="text-center" class="home">

                <div>

                    <h1 className='home-main-text'>
                        MUJERES UNIDAS, MUJERES INVENCIBLES
                    </h1>

                    <h2 className=''>
                        <b>
                            Te invitamos a tomar este <em>QUIZ</em>, diseñado para evaluar si vives una situacion de violencia de genero
                  </b>  </h2>

                    <Button>
                        <Navbar.Brand href="/Quiz">MUMI</Navbar.Brand>

                    </Button>
                </div>
            </div >



        </div >

    );
}

export default Home;
