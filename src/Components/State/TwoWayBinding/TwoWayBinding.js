import React, { Component } from 'react';

class TwoWayBinding extends Component {

    state = {
        text: 'Title'
    }

    inputChangeHandler = (e) => {
        this.setState({text: e.target.value})
    }

    render = () => {
        return (
            <div>
                <h1>This is an example of Two-way Data Binding</h1>
                <h1>{this.state.text}</h1>
                <input type='text' onChange={this.inputChangeHandler} value={this.state.text}/>
            </div>
        )
    }



}

export default TwoWayBinding;
