import React, { Component } from 'react';
import logo1 from '../img/logo1.png';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import Route from 'react-router-dom/Route'
import { BrowserRouter, Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div className="App">
                <div id="">
                    <div className="Home" >
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={logo1}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h2>MUJERES UNIDAS MUJERES INVENCIBLES</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={logo1}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h2>MUJERES UNIDAS MUJERES INVENCIBLES</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src={logo1}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h2>MUJERES UNIDAS MUJERES INVENCIBLES</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <Footer />
            </div>


        );
    }
}

export default Home;
