import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Weather from '../components/Weather';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      city: '' 
    };
  }

  changeTitle = (e) => {
    this.setState({ city: e.target.value });
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
      data
    } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container d-flex justify-content-center pt-3">
          <button type="button" className="btn btn-default text-primary">CELSIUS</button>
        </div>
        <div className="container d-flex justify-content-center  pt-2">
          <div className="bgColor pt-2">
            <input
              type="text"
              className="search-bar"
              placeholder="Search city"
              onChange={this.changeTitle}
              value={this.state.city}
            />
          </div>
          <button className="search" onClick={this.onSearch}>Search</button>
        </div>
        {data ? (

        <div className="container d-flex justify-content-center">
        <Weather data={data} />
        </div>
        ) : null}
      </div>
    );
  }
}

export default Home
