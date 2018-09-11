import React, { Component } from 'react';

class ConditionalJsx extends Component {

    state = {
        toggleBox: false
    }

    toggleBoxHandler = () => {
        this.setState({toggleBox: !this.state.toggleBox})
    }

    renderBox = () => {
        let renderBox = null;
        if ( this.state.toggleBox ) {
            renderBox = (
                <div 
                    style={{ 'height': '50px', 'width': '50px', 'border': '1px solid green' }}
                > Green Box 
                </div>
            )
        } else {
            renderBox = (
                <div 
                    style={{ 'height': '50px', 'width': '50px', 'border': '1px solid red' }}
                > Red Box 
                </div>
            )
        }
        return renderBox;
    }

    render() {
        return (
            <div>
                <h3>Have 2 boxes toggle on and off based on condition</h3>
                <button 
                    style={{'padding': '10px'}}
                    onClick={this.toggleBoxHandler}
                > Toggle Box 
                </button>
                <br /><br />
                {this.renderBox()}
            </div>
        )
    }

}

export default ConditionalJsx;