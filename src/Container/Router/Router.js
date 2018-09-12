import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Auxx from '../../Components/Auxx/Auxx'
import ParentXParentToChild from '../../Components/Data-Flow/parentToChild/Parent/ParentXParentToChild'
import ParentXChildToParent from '../../Components/Data-Flow/childToParent/Parent/ParentXChildToParent'
import LocalStateAgeApp from '../../Components/Data-Flow/Redux/LocalStateAgeApp/LocalStateAgeApp'
import ReduxAgeApp from '../../Components/Data-Flow/Redux/ReduxAgeApp/ReduxAgeApp'

class Router extends Component {
    render() {
        return (
            <Auxx>
                <Route path='/' exact render = {
                    () => {
                        return <h1>Home</h1>
                    }
                } />
                <Route path='/dataflow/Parent_parentToChild' exact component={ParentXParentToChild} />
                <Route path='/dataflow/Parent_childToParent' exact component={ParentXChildToParent} />
                <Route path='/dataflow/LocalStateAgeApp' exact component={LocalStateAgeApp} />
                <Route path='/dataflow/ReduxAgeApp' exact component={ReduxAgeApp} />
            </Auxx>
        )
    }
}

export default Router;