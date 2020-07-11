import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';
import LeftNav from '../left_nav/left_nav.js';
import Content from '../content/content.js';

const App = () => {
  const [view, setView] = useState('people');

  return (
    <div className="app">
      <LeftNav setView={setView} view={view} />
      <Content view={view} />
    </div>
  );
}

export default hot(module)(App);
