import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Weather from '../components/Weather';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './WeatherHome.css';
import WeatherInF from '../components/WeatherInF';

class WeatherHome extends Component {
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

  changeTemChange = (e) => {
    this.setState({ converter: true });
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
    // console.log(data, 'data')
    return (
      <div className="main-div">
        <Navbar />
        {converter ? (
          <button className="button" onClick={this.changeTem} type="button">
            CELSIUS
          </button>
        ) : (
          <button className="button" onClick={this.changeTemChange} type="button">
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


      </div>
    );
  }
}

export default WeatherHome
