import React, { Component } from 'react'
import { Divider, Button } from 'antd';

import Auxx from '../../../Auxx/Auxx'
import ChildXParentToChild from './Child/ChildXParentToChild'

class ParentXParentToChild extends Component {

    state = {
        testMessage: ''
    }

    passToChildViaState = () => {
        this.setState({testMessage: 'pass to child'})
    }

    passToChildViaRef = () => {
        const x = this.foo.myFunc('Hi')
        console.log(x)
    }

    render() {
        return (
            <Auxx>
                <h1>Parent to Child</h1>
                <img src="https://www.javascriptstuff.com/static/parent-to-child-fc4c68730b003da3f9d20dd57cf52d20-8aa1a.png" alt=""/>
                <Divider orientation="left">Using Props</Divider>
                <h3>Parent Component:</h3>
                <Button type="primary" onClick={this.passToChildViaState}>Pass Msg To Child State</Button>
                <ChildXParentToChild 
                    msgFromParent = {this.state.testMessage}
                />
                <Divider orientation="left">Instance method using refs</Divider>
                {/* 
                1. Write a class method in the child component. e.g. myFunc()
                2. Add a ref attribute that creates a reference to the child component in the parent component. e.g. ref={(foo) => { this.foo = foo; }}
                3. Call the child component method from the parent. e.g. this.foo.myFunc(). 
                */}
                <h3>Parent Component:</h3>
                <Button type="primary" onClick={this.passToChildViaRef}>Pass Msg To Child Ref</Button>
                <ChildXParentToChild 
                    ref={foo => {
                        this.foo = foo;
                    }}
                />
            </Auxx>
        )
    }
}

export default ParentXParentToChild