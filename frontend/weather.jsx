import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      temp: 0,
    }
  }
  
  componentDidMount() {
    const that = this;
    navigator.geolocation.getCurrentPosition(pos => {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      // The API request
      const request = new XMLHttpRequest();
      request.responseType = "json";

      request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
          if (request.status == 200) {
             that.setState({
              city: request.response.name,
              temp: request.response.main.temp   
             });
          }
        }
      };

      request.open(
        "GET",
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=280d8cc64c35cad6e50e87b3fbeb7a54&units=imperial`
      );
      request.send();
    });
  }
  
  render() {
    return (
      <div className="weather">
        <div>
          <h2>City:</h2>
          <h2>Temperature:</h2>
        </div>

        <div>
          <h2>{this.state.city}</h2>
          <h2>{this.state.temp} deg F</h2>
        </div>
      </div>
    );
  }
}

export default Weather;