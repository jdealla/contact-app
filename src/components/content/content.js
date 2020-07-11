import React from 'react';
import { hot } from 'react-hot-loader';
import './content.css';
import People from './people/people';

const views = {
  people: People,
};

const Content = ({ view }) => {
  let CurrentView = views[view];
  return (
    <div className="content">
      <div className="content-title">
        <span>{view}</span>
      </div>
      <CurrentView />
    </div>
  );
};

export default hot(module)(Content);
