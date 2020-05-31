import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Historias from './components/Historias';
import Organizaciones from './components/Organizaciones';
import Quiz from './components/Quiz';
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import Route from 'react-router-dom/Route'
import { BrowserRouter, Link } from 'react-router-dom'
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import Result from './components/Result';
import Main from './components/Main';
import Quizapp from './components/Quizapp';


class App extends Component {

  render() {
    return (

      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Historias" component={Historias} />
            <Route path="/Organizaciones" component={Organizaciones} />
            <Route path="/Quiz" component={Quizapp} />
          </div>
        </BrowserRouter>
        <Footer />

      </div >

    );
  }
}

export default App;
