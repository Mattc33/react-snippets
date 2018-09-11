import React, { Component } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Auxx from '../Components/Auxx/Auxx'
import Router from '../Container/Router/Router'
import Header from './Header/Header'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Auxx>
                <Header />
                <Router />
            </Auxx>
        </BrowserRouter>
    );
  }
}

export default App;
