import React, { Component } from "react"; //rcc

export default class ImageSlider extends Component {
  state = {
    currentSlideIndex: 0
  };

  render() {
    return <div>I am on slide {this.state.currentSlideIndex}</div>;
  }
}
