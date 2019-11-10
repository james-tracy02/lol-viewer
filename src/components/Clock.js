import React, { Component } from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
   clearInterval(this.interval);
 }

  tick() {
    this.setState({
      time: this.state.time + 1000
    });
  }

  formatTime(time) {
    if(time < 0) {
      return "Game not started";
    }
    const seconds = Math.floor(time/1000);
    let res = "";
    res = res + Math.floor(seconds/60) + ":";
    if(seconds%60 < 10) {
      res = res + "0";
    }
    res = res + (seconds%60);
    return res;
  }

  render() {
    return <span className="clock">{this.formatTime(this.state.time)}</span>;
  }
}
