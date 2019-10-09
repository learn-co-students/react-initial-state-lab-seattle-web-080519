import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super() 

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
      const blahBlah = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"
    return (
      <h1>{blahBlah}</h1>
    )
  }
}

export default Bomb;