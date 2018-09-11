import React, { Component } from 'react';
import PropsChildrenChild from './props-children-child'

class PropsChildrenParent extends Component {

    render() {
        return (
            <PropsChildrenChild title="This is an example of props.children">
                <h2>This is some HTML content to be rendered by props.children in child component</h2>
                <p>This also demonstrates how props can be passed to another component to be rendered</p>
                <p> props.children is a special declaration from react it returns the content between element tags
                It can return html, react components, ect...
                https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891
                </p>
            </PropsChildrenChild>
        )
    }
}

export default PropsChildrenParent