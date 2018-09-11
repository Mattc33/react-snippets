import React, { Component } from 'react'

import Auxx from '../../../../Auxx/Auxx'

class ChildXParentToChild extends Component {
    
    myFunc = (value) => value

    render() {
        return (
            <Auxx>
                <h3>Child Component:</h3> 
                <p>{this.props.msgFromParent}</p>
            </Auxx>
        )
    }
}

export default ChildXParentToChild