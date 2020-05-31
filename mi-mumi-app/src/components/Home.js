import React, { Component } from 'react';
import '../App.css';
import { Navbar, Button } from 'react-bootstrap';


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
