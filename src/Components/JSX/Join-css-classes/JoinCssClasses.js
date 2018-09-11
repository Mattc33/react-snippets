import React, { Component } from 'react';
import './JoinCssClasses.css';

class JoinCssClasses extends Component {

    state = {
        boxes: [
            {name: 'box1', id: 1},
            {name: 'box2', id: 2},
            {name: 'box3', id: 3}
        ]
    }

    render() {

        const classes = ['greenText', 'greenBorder'].join(' ');

        return (
            <div>
                <h1>Have Boxes be a different color based on array position</h1>
                <h2>Come back to this later</h2>

                <div style={{'height': '50px', 'width': '50px'}} className={classes} id={this.state.boxes[0].id}>
                    Box 1
                </div>

                <div style={{'height': '50px', 'width': '50px'}} id={this.state.boxes[1].id}>
                    Box 2
                </div>

                <div style={{'height': '50px', 'width': '50px'}} id={this.state.boxes[2].id}>
                    Box 3
                </div>
            </div>
        )
    }

}

export default JoinCssClasses;
