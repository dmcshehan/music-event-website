import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class TimeUnit extends Component {
  state = {
    deadline: "Dec, 16, 2022",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  };

  addZeros(val) {
    return val.toString().length === 1 ? `0${val}` : val;
  }

  gettime(deadline) {
    const endDate = new Date(deadline);
    const now = new Date();
    const daysDiff = endDate - now;
    const daysDiffInSec = daysDiff / 1000;

    let seconds = this.addZeros(Math.floor(daysDiffInSec % 60));
    let minutes = this.addZeros(Math.floor((daysDiffInSec / 60) % 60));
    const hours = this.addZeros(Math.floor((daysDiffInSec / (60 * 60)) % 24));
    const days = this.addZeros(Math.floor(daysDiffInSec / (3600 * 24)));

    this.setState({
      ...this.state,
      days,
      hours,
      minutes,
      seconds,
    });

    // if seconds are divided by 60 it gives minutes if you use % it gives the remainder after divided into minutes which is remaining reconds
  }

  componentDidMount() {
    setInterval(() => {
      this.gettime(this.state.deadline);
    }, 1000);
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className='countdown_wrapper'>
          <div className='countdown_top'>Event Starts In</div>
          <div className='countdown_bottom'>
            <div className='countdown_item'>
              <div className='countdown_time'>{this.state.days}</div>
              <div className='countdown_tag'>Days</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{this.state.hours}</div>
              <div className='countdown_tag'>hrs</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{this.state.minutes}</div>
              <div className='countdown_tag'>Min</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{this.state.seconds}</div>
              <div className='countdown_tag'>Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TimeUnit;
