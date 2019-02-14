import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return React.createElement('div', {classname: 'App'},
    //     React.createElement('h1', "111"),
    //     React.createElement('h2', "222")
    // );
    return React.createElement(
      'div', 
      {classname: 'App'},
      React.createElement("h1", null, "Shopping List for ", this.props.name),
      React.createElement('div', {classname: 'BackGnd'}),
      // React.createElement('div', {classname: 'MyComponent1'})
    );

    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <h1>Hi, {this.props.name}</h1>
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
  }
}

export default App;
