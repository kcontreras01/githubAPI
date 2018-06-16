import React, { Component } from 'react';
import logo from './logo.svg';
import Top6Today from './components/Top6Today';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <Top6Today />    
        </div>

      </div>
    );
  }
}

export default App;
