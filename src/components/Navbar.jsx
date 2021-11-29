import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component {
  render() {
    return (
      <div className="style">
        <div className="style1">
          <button className="home-icon">
            <FontAwesomeIcon icon={faHome} />
          </button>
          <div className="style2">
            <Link className="navbar-brand font-weight-bold" to="/">Weather </Link>
          </div>
          <button className="about-button" type="button">
            <span> <Link className="nav-link text-primary" to="/about">About</Link> </span>
          </button>
        </div>
      </div>

      // <nav className="navbar navbar-toggleable-md card bg-dark">
      //   <div className="container">
      //    <h2> <Link className="navbar-brand font-weight-bold" to="/">Weather </Link></h2>
      //     <div className="collapse navbar-collapse" id="navbarCollapse">
      //       <ul className="navbar-nav ml-auto">

      //         <li className="nav-item">
      //           <Link className="nav-link text-primary" to="/about">About</Link>
      //         </li>

      //       </ul>
      //     </div>
      //   </div>
      // </nav>

    );
  }
}

export default Navbar;
