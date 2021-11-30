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
  // constructor(){
  //   super();
  //   // this.state = {

  //   // }
  //   this.handleLogout = this.handleLogout.bind(this);
  // }

//   async handleLogout() {
//       await signOut(auth);
//       localStorage.removeItem("token");
//       if(!localStorage.getItem("token")){
//         this.props.history.push("/")
//       }
// }

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
          {/* <button className="about-button" type="button">
            <span> <Link className="nav-link text-primary" to="/register">Register</Link> </span>
          </button> */}
          {/* <button className="about-button" type="button" onClick={this.handleLogout}>
           Logout
          </button> */}
        </div>
      </div>
    );
  }
}

export default Navbar;
