import React, { Component } from "react";
import Navbar from './Navbar.jsx';
import { auth } from "../firebase.js";
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // error: null,
            // name: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async handleSubmit(event) {
        event.preventDefault();

        await createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                console.log(userCredential, 'user s')
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
                    <h4>Register</h4>

                    <div className="container">
                        <form className="mt-5 py-5 px-5" autoComplete="off" onSubmit={this.handleSubmit}>

                            <p className="lead">Fill in the form below to create an weather account.</p>
                           
                            <div className="form-group">
                                <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary rounded-pill px-5">Sign up</button>
                            </div>
                            <hr></hr>

                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

export default Register