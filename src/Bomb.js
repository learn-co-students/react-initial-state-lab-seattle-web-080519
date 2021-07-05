import React, { Component } from "react"; //rcc

export default class Bomb extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    secondsLeft: this.props.initialCount
  };

  // tickCounter = () => {
  //   if (this.state.secondsLeft > 0) {
  //     this.setState({ secondsLeft: this.state.secondsLeft - 1 });
  //   } else {
  //     return <h1>BOOM!</h1>;
  //   }
  // };

  render() {
    if (this.state.secondsLeft != 0) {
      return (
        <div>
          {this.state.secondsLeft} seconds left before I go boom!
          {/* <button onClick={() => this.tickCounter()} className="Ticker">
            Start Timer
          </button> */}
        </div>
      );
    } else {
      return <div>Boom!</div>;
    }
  }
}
