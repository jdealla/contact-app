import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import './people.css';
import Contact from './contact/contact';
import InfiniteScroll from 'react-infinite-scroll-component';
import HeaderRow from './header_row/header_row';
import Skeleton from 'react-loading-skeleton';

const PRIMARY_API_URL = 'https://s3.amazonaws.com/exercise.realmagic.ai/mock-contact-data/contacts_0.json';

const loader = (<div className="lds-container"><div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>);

const People = () => {
  const [contacts, setContacts] = useState([]);
  const [nextLink, setNextLink] = useState(PRIMARY_API_URL);

  const getContactData = async (url) => {
    let data = await fetch(url);
    data = await data.json();
    return data;
  };

  const refreshContactData = async () => {
    if (typeof nextLink === 'undefined' || !nextLink) {
      return;
    }
    const data = await getContactData(nextLink);
    setContacts([...contacts, ...data.value]);
    setNextLink(data.nextLink);
  };

  useEffect(() => {
    refreshContactData();
  }, []);

  return (
    <div className="people">
      <HeaderRow />
      <div className="contact-list-container">
        {contacts.length > 0 ? (
          <InfiniteScroll
            dataLength={contacts.length}
            next={refreshContactData}
            refreshFunction={refreshContactData}
            hasMore={nextLink}
            loader={loader}
            scrollThreshold={'10px'}>
            {contacts.map((contact) => {
              return <Contact {...contact} key={contact.id} />;
            })}
          </InfiniteScroll>
        ) : (
          <Skeleton className={'skeleton-loader'} count={15} />
        )}
      </div>
    </div>
  );
}

export default hot(module)(People);
