import React from 'react';
import { hot } from 'react-hot-loader';
import './contact_modal.css';

const ContactModal = ({ cleanedName, avatar, tags, email, connections, handleModal }) => {
  return (
    <div className="contact-modal-container">
      <div className="contact-modal-overlay" onClick={handleModal}></div>
      <div onClick={(e) => e.stopPropagation()} className="contact-modal-body">
        <div className="detail-header">
          <div className="avatar">
            <span>{avatar}</span>
          </div>
          <div className="info">
            <div className="cleaned-name">{cleanedName}</div>
            <div className="email">{email}</div>
          </div>
        </div>

        <div className="detail-body">
          {tags && tags.length > 0 ? (
            <div>
              <div className="title">Tags</div>
              <div className="tags">
                {tags.map((tag, i) => {
                  return (
                    <div className="tag" key={'tag' + i}>
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          {connections && connections.length > 0 ? (
            <div>
              <div className="title">Connections</div>
              <div className="connections">
                {connections
                  ? connections.map((connection, i) => {
                      return (
                        <div className="connection" key={'connection' + i}>
                          {connection}
                        </div>
                      );
                    })
                  : ''}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default hot(module)(ContactModal);
