import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actualTime: 0,
      btnPlayPause: 'Play',
    }

    this.counter = null
    this.initTimer = this.initTimer.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.secondsToString = this.secondsToString.bind(this)
  }

  initTimer() {
    if (this.counter) {
      this.pauseTimer()
      this.setState({ btnPlayPause: 'Play' })
    } else {
      this.counter = setInterval(() => {
        this.setState({ actualTime: this.state.actualTime + 1 })
      }, 1000)
      this.setState({ btnPlayPause: 'Pause' })
    }
  }

  pauseTimer() {
    clearInterval(this.counter)
    this.counter = null
  }

  clearTimer() {
    this.setState({ actualTime: 0 })
    clearInterval(this.counter)
    this.counter = null
    this.setState({ btnPlayPause: 'Play' })
  }

  secondsToString(seconds) {
    var hour = Math.floor(seconds / 3600)
    hour = hour < 10 ? '0' + hour : hour
    var minute = Math.floor((seconds / 60) % 60)
    minute = minute < 10 ? '0' + minute : minute
    var second = seconds % 60
    second = second < 10 ? '0' + second : second
    return hour + ':' + minute + ':' + second
  }

  componentDidMount() {
    this.initTimer()
  }

  render() {
    return (
      <div className="timer">
        <div className="time">
          <h2 className="text-center">
            Tu tiempo es de{' '}
            {this.secondsToString(this.state.actualTime.toFixed(0))}
          </h2>
        </div>
        {/* <div className="btns">
          <input
            type="button"
            value={this.state.btnPlayPause}
            onClick={this.initTimer}
          />
          <input type="button" value="Clean" onClick={this.clearTimer} />
        </div> */}
      </div>
    )
  }
}

export default Timer
