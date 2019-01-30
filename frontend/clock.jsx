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

    return (
      <div>
        <h1>Clock</h1>
        <h2>{hours}:{minutes}:{seconds}</h2>
      </div>
    );
  }
};


export default Clock;