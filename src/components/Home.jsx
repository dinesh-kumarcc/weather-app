import React, { Component } from "react";
import Navbar from '../components/Navbar.jsx';

class Home extends Component {

    
    render() {
        return (
            <div className="main-div">
                <Navbar />
                <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <h4>Home</h4>
                </div>
            </div>
        )
    }
}

export default Home