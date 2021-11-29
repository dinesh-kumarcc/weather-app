import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import WeatherHome from './pages/WeatherHome';
import About from './pages/About';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={WeatherHome}/>
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App;
