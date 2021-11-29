import React, { Component } from "react";
import Navbar from '../components/Navbar.jsx';
// import firebase from 'firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // async login(){
    //     try{
    //         await firebase.login(this.state.email,this.state.password)
    //     }catch(error){
    //         alert(error.message)
    //     }
    // }


    // // Import the functions you need from the SDKs you need
    // import { initializeApp } from "firebase/app";
    // import { getAnalytics } from "firebase/analytics";
    // // TODO: Add SDKs for Firebase products that you want to use
    // // https://firebase.google.com/docs/web/setup#available-libraries

    // // Your web app's Firebase configuration
    // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //   apiKey: "AIzaSyCPJ7hOVCU6dXGyfrLlGVhu0L0ukVQNKfA",
    //   authDomain: "login-to-weather.firebaseapp.com",
    //   projectId: "login-to-weather",
    //   storageBucket: "login-to-weather.appspot.com",
    //   messagingSenderId: "725217149992",
    //   appId: "1:725217149992:web:83f2fa79794cf91a9c611d",
    //   measurementId: "G-LNG5Z4BFVH"
    // };

    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    render() {
        return (
            <div className="main-div">
                <Navbar />
                <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <h4>Login</h4>
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
                        Password:
                        <input
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label><br />
                    <input type="submit" value="Submit" />
                </div>
            </div>
        )
    }
}

export default Login