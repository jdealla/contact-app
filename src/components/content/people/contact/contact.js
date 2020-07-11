import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import {
  TabletLandscapeAndLarger,
  TabletPortraitAndLarger,
} from '../../../breakpoints';
import Lock from '../../../../img/lock.svg';
import Unlock from '../../../../img/unlock.svg';
import ContactModal from './contact_modal/contact_modal';
import './contact.css';

const Contact = ({ connections, email, firstName, id, lastName, tags }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [locked, setLocked] = useState(true);

  const handleModal = () => setModalOpen(!modalOpen);
  const handleLocked = () => setLocked(!locked);

  const cleanName = (firstName, lastName) => {
    return `${firstName ? firstName : ''}${firstName && lastName ? ' ' : ''}${
      lastName ? lastName : ''
    }`;
  };

  const cleanedConnections = connections ? connections.reduce((acc, { firstName, lastName }) => {
    if (firstName || lastName) {
      acc.push(cleanName(firstName, lastName))
    }
    return acc;
  }, []) : null;

  const cleanedName = cleanName(firstName, lastName);
  
  const avatar = `${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`;
  
  return (
    <div className="contact">
      
      {modalOpen ? (
        <ContactModal
          handleModal={handleModal}
          tags={tags}
          avatar={avatar}
          cleanedName={cleanedName}
          connections={cleanedConnections}
          email={email}
        />
      ) : null}

      <input className="checkbox" type="checkbox" />

      <div className="visibility" onClick={handleLocked}>
        {locked ? <Lock /> : <Unlock />}
      </div>

      <div onClick={handleModal} className="avatar">
        <span>{avatar}</span>
      </div>

      <div onClick={handleModal} className="name">
        {cleanedName}
      </div>

      <TabletPortraitAndLarger>
        <div onClick={handleModal} className="tags">
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
        <div onClick={handleModal} className="connections">
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

export default hot(module)(Contact);
