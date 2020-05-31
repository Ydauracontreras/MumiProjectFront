import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Historias from './components/Historias';
import Organizaciones from './components/Organizaciones';
import Route from 'react-router-dom/Route'
import { BrowserRouter } from 'react-router-dom'
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
