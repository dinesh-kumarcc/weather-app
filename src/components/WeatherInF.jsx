import React, { Component } from "react";

class WeatherInF extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     data: city
        // };
    }

    render() {
        const data = this.props;
        let tempInCelsius = (((data.data.main.temp)-273.15) * 9/5 + 32).toFixed(2) ;

        const myStyle = {
            backgroundImage:
                "url('data:image/jpeg;base64,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')",
            height: '40vh',
            width: '60vh',
            marginTop: '170px',
            fontSize: '50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <div className="container d-flex justify-content-center pt-300">
                {data.data.name || data.data.sys.country || data.data.weather[0].main || data.data.main.humidity || data.data.wind.speed ? (

                    <div style={myStyle}>
                        <h3 className="pt-2 pl-2 text-white">Weather in {data.data.name},{data.data.sys.country} </h3>
                        <h5 className="pt-2 pl-2 text-white">{tempInCelsius}<span>&deg;</span></h5>
                        <h4 className="weather text-white pl-2"><span>☁</span>{data.data.weather[0].main}</h4>
                        <h5 className="weather1 pl-2 text-white">Humidity:{data.data.main.humidity} %</h5>
                        <h5 className="pt-2 pl-2 text-white">Wind Speed {data.data.wind.speed}meters/sec </h5>
                    </div>
                ) : null}
            </div>

        )
    }
}
export default WeatherInF






