import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';


class About extends Component {
  render() {
    return (
      <div className="main-div">
        <Navbar />
        <div style={{textAlign:'center',justifyContent:'center'}}>
          <h2 className="font-weight-bold mt-4">Weather App</h2>
          <h6 className="mt-4">Developed as requirement for the WIT Software selective process</h6>
          <h2 className="font-weight-bold">Powered by</h2>
          <h6 className="mt-4">React Js</h6>
          <h6 className="mt-4">Recharts</h6>
          <h6 className="mt-4">Material UI</h6>
          <h6 className="mt-4">Styled Components</h6>
          <h6 className="mt-4">Open WeatherMap</h6>
          <h6 className="mt-4">Developed by <span className="font-weight-bold">Rafael Maio</span></h6>
          <Link className="nav-link font-weight-bold mt-2" to="/">E-mail</Link>
          <Link className="nav-link font-weight-bold mt-2" to="/">LinkedIn</Link>
        </div>
      </div>
    );
  }
}

export default About
