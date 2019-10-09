// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
    // constructor(props) {
    //     super(props);
        state = { secondsLeft: this.props.initialCount };
    // };

    boom = () => {
        console.log(this.state.secondsLeft)
        return (this.state.secondsLeft !== 0)?<div>{this.state.secondsLeft} seconds left before I go boom!</div>:<div>Boom!</div>
    }

    render() {
        return this.boom();    
    }

};

export default Bomb;