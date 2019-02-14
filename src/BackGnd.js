import React, { Component } from 'react';
import logo from './logo.svg';
import './BackGnd.css';

class BackGnd extends Component {
  render() {
    return (
      <div className="BackGnd">
        <header className="BackGnd-header">
          <h1>Hi, {this.props.name}</h1>
          <img src={logo} className="BackGnd-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="BackGnd-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default BackGnd;
