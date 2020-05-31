import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      < >
        <div className='home-main'>
          <section className='home-menu'>
            <h1 className='home-main-text'>
              Conoce mas de nuestro espacio
              para apoyarnos mutuamente
              {' '}
            </h1>
            <span>
            </span>
            <Button>
              <Link className='NavBar-link' to='/Quiz'>Hacer Quiz</Link>
            </Button>

          </section>
        </div>
      </>
    );
  };
};
