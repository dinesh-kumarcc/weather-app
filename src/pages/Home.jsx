import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Weather from '../components/Weather';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css';
import WeatherInF from '../components/WeatherInF';
// import { FaSistrix } from "react-icons/fa";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      city: '',
      converter: true
    };
  }

  changeTitle = (e) => {
    this.setState({ city: e.target.value });
  }

  changeTem = (e) => {
    this.setState({ converter: false });
  }

  onSearch = () => {
    fetch(`https://v1.nocodeapi.com/savreentiwana/ow/FvCjBqjFsGmwAIzT/byCityName?q=${this.state.city}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ data: result })
      })
      .catch(() => {
        alert('failed to fetch');
      });
  };


  render() {
    const {
      data,
      converter
    } = this.state;
    console.log(data, 'data')
    return (
      <div className="main-div">
        <Navbar />
        {converter ? (
          <button className="button" onClick={this.changeTem} type="button">
            CELSIUS
          </button>
        ) : (
          <button className="button" onClick={this.changeTem} type="button">
            FARENHEIT
          </button>
        )}

        <div className="div">
          <div className="form">
            <input
              type="text"
              className="input"
              placeholder="Search city"
              onChange={this.changeTitle}
              value={this.state.city}
            />
            <button className="button1">
              <FontAwesomeIcon className="button11" onClick={this.onSearch} icon={faSearch} />
            </button>
          </div>

        </div>
        {data && converter ? (

          <div className="container d-flex justify-content-center">
            <Weather data={data} />
          </div>
        ) : null

        }

        {data && !converter ? (

          <div className="container d-flex justify-content-center">
            <WeatherInF data={data} />
          </div>
        ) : null

        }

        {/* <div style={{width:'100%'}}>
        <Navbar />
        </div>
        <div style={{width:190,height:600,paddingLeft:600,paddingRight:600}}>
          
          <div className="container d-flex justify-content-start pt-3">
            <button type="button" className="btn btn-default text-primary">CELSIUS</button>
          </div>
          
          <div className="container d-flex justify-content-start  pt-2">
            <div>
              <input
                type="text"
                className="search-bar"
                placeholder="Search city"
                onChange={this.changeTitle}
                value={this.state.city}
              />
            </div>
            <button className="search" onClick={this.onSearch}><FontAwesomeIcon style={{ color: 'white' }} icon={faSearch} /></button>
            
          </div>

          {data ? (

            <div className="container d-flex justify-content-center">
              <Weather data={data} />
            </div>
          ) : null}
        </div> */}
      </div>
    );
  }
}

export default Home
