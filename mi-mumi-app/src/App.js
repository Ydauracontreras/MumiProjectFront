import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Quiz from './components/Quiz'
import { Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>

          <BrowserRouter>
            <BrowserRouter>
              <div>
                <Header />
                <Route path="/" component={Quiz} />
              </div>
            </BrowserRouter>
            <div>

              <Route path="/" component={Quiz} />
            </div>
          </BrowserRouter>
        </div>
      </div>

    );
  }
}

export default App;
