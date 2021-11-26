import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
    
      <nav className="navbar navbar-toggleable-md card bg-dark">
        <div className="container">
         <h2> <Link className="navbar-brand font-weight-bold" to="/">Weather </Link></h2>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
             
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/about">About</Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
