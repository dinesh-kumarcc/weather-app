import React, { Component } from "react";

class Weather extends Component {
    constructor(props) {
        super(props);
       
        // this.state = {
        //     data: city
        // };
    }

    render() {
        const data  = this.props;
        const myStyle = {
            backgroundImage:
                "url('https://media.istockphoto.com/photos/blue-sky-with-scattered-clouds-picture-id106577335?b=1&k=20&m=106577335&s=170667a&w=0&h=3NES7-jtxtE-L2qlrSY0ucmQNjfolKmmPK5wFMShG-Y=')",
            height: '40vh',
            width:'60vh',
            marginTop: '170px',
            fontSize: '50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <div className="container d-flex justify-content-center pt-300">
            <div style={myStyle}>
                <h4 className="pt-2 pl-2">Weather in {data.data.name},{data.data.sys.country} </h4>
                <h4 className="pt-2 pl-2">{data.data.main.temp}</h4>
                <h5 style={{paddingTop:'130px'}}>Humidity:{data.data.main.humidity} %</h5>
                <h5>Wind Speed {data.data.wind.speed}meters/sec </h5>
                <h5>Max Temp{data.data.main.temp_max}<span>Min Temp{data.data.main.temp_min}</span></h5>
            </div>
            </div>
            
        )
    }
}
export default Weather






