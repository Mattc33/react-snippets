import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './Container/App'
import registerServiceWorker from './Container/registerServiceWorker'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Components/Data-Flow/Redux/ReduxAgeApp/store/reducer'

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
