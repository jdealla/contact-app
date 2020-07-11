import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
  TabletLandscapeAndLarger,
  TabletPortraitAndLarger,
} from '../../../breakpoints';
import Lock from '../../../../img/lock.svg';
import Unlock from '../../../../img/unlock.svg';
import ContactModal from './contact_modal/contact_modal';
import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locked: true,
      modalOpen: false,
    };
  }

  toggleModal() {
    this.setState((state) => ({ modalOpen: !state.modalOpen }));
  }

  toggleVisibility() {
    this.setState((state) => ({ locked: !state.locked }));
  }

  cleanName(firstName, lastName) {
    return `${firstName ? firstName : ''}${firstName && lastName ? ' ' : ''}${
      lastName ? lastName : ''
    }`;
  }

  render() {
    const { firstName, lastName, tags, connections, email } = this.props;
    const cleanedConnections = connections
      ? connections.map(({ firstName, lastName }) =>
          this.cleanName(firstName, lastName)
        )
      : null;
    const cleanedName = this.cleanName(firstName, lastName);
    const avatar = `${firstName ? firstName[0] : ''}${
      lastName ? lastName[0] : ''
    }`;
    return (
      <div className="contact">
        {this.state.modalOpen ? (
          <ContactModal
            toggleModal={this.toggleModal.bind(this)}
            tags={tags}
            avatar={avatar}
            cleanedName={cleanedName}
            connections={cleanedConnections}
            email={email}
          />
        ) : null}

        <input className="checkbox" type="checkbox" />
        <div className="visibility" onClick={this.toggleVisibility.bind(this)}>
          {this.state.locked ? <Lock /> : <Unlock />}
        </div>
        <div onClick={this.toggleModal.bind(this)} className="avatar">
          <span>{avatar}</span>
        </div>
        <div onClick={this.toggleModal.bind(this)} className="name">
          {cleanedName}
        </div>

        <TabletPortraitAndLarger>
          <div onClick={this.toggleModal.bind(this)} className="tags">
            {tags
              ? tags.map((tag, i) => {
                  return (
                    <div className="tag" key={'tag' + i}>
                      {tag}
                    </div>
                  );
                })
              : ''}
          </div>
        </TabletPortraitAndLarger>

        <TabletLandscapeAndLarger>
          <div onClick={this.toggleModal.bind(this)} className="connections">
            {connections
              ? cleanedConnections.reduce((acc, name, index) => {
                  if (index === 0) {
                    acc += name;
                  }
                  if (index === 1) {
                    acc += `, ${name}`;
                    if (connections.length > 2) {
                      acc += ` and ${connections.length - 2} more`;
                    }
                  }
                  return acc;
                }, '')
              : ''}
          </div>
        </TabletLandscapeAndLarger>
      </div>
    );
  }
}

export default hot(module)(Contact);
