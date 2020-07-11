import React from 'react';
import { hot } from 'react-hot-loader';
import './content.css';
import Dashboard from './dashboard/dashboard';
import People from './people/people';
import Companies from './companies/companies';
import Notes from './notes/notes';
import Reminders from './reminders/reminders';
import TagsAndReporting from './tags_and_reporting/tags_and_reporting';

const views = {
  dashboard: Dashboard,
  people: People,
  companies: Companies,
  notes: Notes,
  reminders: Reminders,
  tags_and_reporting: TagsAndReporting,
};

const formatName = (str) => str.split('_').join(' ').replace('and', '&');

const Content = ({ view }) => {
  let CurrentView = views[view];
  return (
    <div className="content">
      <div className="content-title">
        <span>{formatName(view)}</span>
      </div>
      <CurrentView />
    </div>
  );
};

export default hot(module)(Content);
