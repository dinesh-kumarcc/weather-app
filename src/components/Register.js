import React, { Component } from "react";
import Navbar from '../components/Navbar.jsx';
import firebase from "../firebase.js";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="main-div">
                <Navbar />
                <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <h4>Register</h4>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        password:
                        <input
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label><br />
                    <input onClick={onRegister} type="submit" value="Submit" />
                </div>
            </div>
        )
        async function onRegister() {
            try {
                await firebase.register(this.state.name, this.state.email, this.state.password)
                console.log('name', this.state.name)
            } catch (error) {
                alert(error.message)
            }
        }

    }
}

export default Register