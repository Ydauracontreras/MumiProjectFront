import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Historias from './components/Historias';
import Orientacion from './components/Orientacion';
import Quiz from './components/Quiz';
import { Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Route from 'react-router-dom/Route'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header>
              <Route path="/About" component={About} />
              <Route path="/Historias" component={Historias} />
              <Route path="/Orientacion" component={Orientacion} />
              <Route path="/Quiz" component={Quiz} />
            </Header>
          </div>
        </BrowserRouter>

        <Footer />

      </div>

    );
  }
}

export default App;
