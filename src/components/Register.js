import React, { Component } from "react";
import Navbar from '../components/Navbar.jsx';
// import firebase from "../firebase.js";
import { signup } from '../helpers/auth';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            name: '',
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
        this.setState({ error: '' });
        try {
            await signup(this.state.name, this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <div className="main-div">
                <Navbar />
                <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <h4>Register</h4>

                    <div className="container">
                        <form className="mt-5 py-5 px-5" autoComplete="off" onSubmit={this.handleSubmit}>

                            <p className="lead">Fill in the form below to create an account.</p>
                            <div className="form-group">
                                <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                            </div>
                            <div className="form-group">
                                {/* {this.state.error ? <p className="text-danger">{this.state.error}</p> : null} */}
                                <button className="btn btn-primary rounded-pill px-5">Sign up</button>
                            </div>
                            <hr></hr>

                        </form>
                    </div>
                </div>
            </div>
        )
        // async function onRegister() {
        //     try {
        //         await firebase.register(this.state.name, this.state.email, this.state.password)
        //         console.log('name', this.state.name)
        //     } catch (error) {
        //         alert(error.message)
        //     }
        // }

    }
}

export default Register