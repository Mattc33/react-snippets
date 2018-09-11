import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './Container/App';
import registerServiceWorker from './Container/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
