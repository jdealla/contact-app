import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';
import LeftNav from '../left_nav/left_nav.js';
import Content from '../content/content.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'people',
    };
  }

  render() {
    return (
      <div className="app">
        <LeftNav view={this.state.view} />
        <Content view={this.state.view} />
      </div>
    );
  }
}

export default hot(module)(App);
