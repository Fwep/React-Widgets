import React from 'react'

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
    }

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let day = this.state.time.getDay();
    let month = this.state.time.getMonth();
    let date = this.state.time.getDate();
    let year = this.state.time.getFullYear();
    let weekDays = [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];
    let months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'  
    ]

    return (
      <div className="clock">
        <div className="headers">
          <h2>Time:</h2>
          <h2>Date:</h2>
        </div>

        <div className="times">
          <h2>{hours}:{minutes}:{seconds}</h2>
          <h2>{weekDays[day]}, {months[month]} {date}, {year}</h2>
        </div>
      </div>
    );
  }
};


export default Clock;