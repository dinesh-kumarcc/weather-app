import React, { Component } from "react";
import Navbar from './Navbar.jsx';
import {
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount(){
        if(JSON.parse(localStorage.getItem("token"))){
            this.props.history.push("/weatherhome"); 
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    async handleLogin(event) {
        event.preventDefault();
        await signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(userCredential.user)
                if (userCredential.user.accessToken) {
                    localStorage.setItem('token', JSON.stringify(userCredential.user.accessToken));
                    this.props.history.push("/weatherhome");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    render() {
        return (
            <div className="main-div">
                <Navbar />
                <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <h4>Login</h4>

                    <div className="container">
                        <form className="mt-5 py-5 px-5" autoComplete="off" onSubmit={this.handleLogin}>

                            <p className="lead">Fill in the form below to Login an weather account.</p>
                            {/* <div className="form-group">
                                <input className="form-control" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}></input>
                            </div> */}
                            <div className="form-group">
                                <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                            </div>
                            <div className="form-group">
                                {/* {this.state.error ? <p className="text-danger">{this.state.error}</p> : null} */}
                                <button className="btn btn-primary rounded-pill px-5">Login</button>
                                <span> <Link className="nav-link text-primary" to="/register">Register</Link> </span>
                            </div>
                            <hr></hr>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login