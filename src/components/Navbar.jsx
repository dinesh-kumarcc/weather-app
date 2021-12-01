import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.js";

class Navbar extends Component {
  constructor(props){
    super(props);
    // this.state = {

    // }
    this.handleLogout = this.handleLogout.bind(this);
  }

  async handleLogout() {
      await signOut(auth);
      // this.props.history.push("/");
      localStorage.removeItem("token");
}

  render() {
    return (
      <div className="style">
        <div className="style1">
          <button className="home-icon">
            <FontAwesomeIcon icon={faHome} />
          </button>
          <div className="style2">
            <Link className="navbar-brand font-weight-bold" to="/weatherhome">Weather </Link>
          </div>
          <button className="about-button" type="button">
            <span> <Link className="nav-link text-primary" to="/about">About</Link> </span>
            </button>
          <button className="about-button" type="button">
            <span> <Link className="nav-link text-primary" to="/todoadd">TodoAdd</Link> </span>
          </button>
          {JSON.parse(localStorage.getItem("token")) ? (
            <button className="about-button" type="button" onClick={this.handleLogout}>
           Logout
          </button>
          ) : null}
          
        </div>
      </div>
    );
  }
}

export default Navbar;
