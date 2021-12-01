import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect} from 'react-router-dom';
import './App.css';
import WeatherHome from './pages/WeatherHome';
import About from './pages/About';
import Login from './components/Login';
import TodoAdd from './components/TodoAdd';
import Register from './components/Register';
import firebase from 'firebase/compat/app';
// import firebase from './firebase'
import {auth} from './firebase'

class App extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     authenticated: false,
  //     loading: true,
  //   }
  // }

  // componentDidMount() {
  //   this.state.firebaseInitialized.isInitialized().then(val => {
  //     if(val){
  //       this.setState({
  //         firebaseInitialized:true,
  //         loading:false
  //       })
  //     }else{
  //       this.setState({
  //         authenticated:false,
  //         loading:false
  //       })
  //     }
	// 	})
  // }
  render() {
    // return this.state.loading === true ? <h2>Loading...</h2> : (
      return(
      <Router>
        <div>
          {JSON.parse(localStorage.getItem("token")) ? (
            <div>
          <Route exact path="/weatherhome" component={WeatherHome}/>
          <Route exact path="/about" component={About}/>
          </div>
          ):(
            <Redirect from="main" to="/" />
            )}
          <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/todoadd" component={TodoAdd}/>
        </div>
      </Router>
    ) 
  }
}

export default App;
