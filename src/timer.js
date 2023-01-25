'use strict'

import React, { Component } from "react";

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: 0,
        }
        this.timer;
    }
    componentDidMount() {
        // this.timer = setInterval(() => {

        //     setTimeout(() => this.setState({ time: this.state.time + 1 }))
        // }, 1000);
    }
    componentWillReceiveProps(nextProps) {
        console.log('component will receive props timer', this.props, nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('shouldcomponentUpdate timer', this.props, nextProps)
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate timer', this.props, nextProps);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>Timer: {this.state.time}</div>)
    }
}

export default Timer;