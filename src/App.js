import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchData} from './actions/fetchData';
import DataComponent from './shopify/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to a sample App</h2>
        </div>
        <div className="App-intro">
          <DataComponent />
        </div>
      </div>
    );
  }
}

export default App;
