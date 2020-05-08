// your ImageSlider code here!
import React from 'react'

class ImageSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = { currentSlideIndex: 0 }
    }

    render() {
        return (
            <div>
                <div>I am on slide ${this.state.currentSlideIndex}</div><br></br>
            </div>
        )
    }
}

export default ImageSlider