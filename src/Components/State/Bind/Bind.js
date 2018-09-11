// * using .bind to pass arguments to methods

import React, { Component } from 'react';

class Bind extends Component {
    state = {
        title: 'Hello'
    }

    changeTitleHandler = (newTitle) => {
        this.setState({title: newTitle})
    }

    render() {
        return (
            <div>
                <h1>This is an example of .bind</h1>
                <p>How to pass props to methods</p>
                <h1>{this.state.title}</h1>
                <button
                    onClick={this.changeTitleHandler.bind(this, 'New Title')}
                >
                Change title
                </button>
            </div>
        )
    }
}

export default Bind;