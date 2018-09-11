// *

import React from 'react';

const PropsChildrenChild = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.children}</p> 
        </div>
    )
    // * props.children is a special declaration from react it returns the content between element tags
    // * It can return html, react components, ect...
    // * https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891
}

export default PropsChildrenChild;
