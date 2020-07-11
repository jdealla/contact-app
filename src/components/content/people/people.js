import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './people.css';
import Visibility from '../../../img/visibility.svg';
import Contact from './contact/contact';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  TabletLandscapeAndLarger,
  TabletPortraitAndLarger,
  Default,
} from '../../../components/breakpoints';
import Skeleton from 'react-loading-skeleton';

const PRIMARY_API_URL =
  'https://s3.amazonaws.com/exercise.realmagic.ai/mock-contact-data/contacts_0.json';

const HEADER_ROW_DATA = [
  {
    id: 'checkbox',
    data: null,
    type: 'string',
  },
  {
    id: 'visibility',
    Data: Visibility,
    type: 'image',
  },
  {
    id: 'avatar',
    Data: null,
    type: 'string',
  },
  {
    id: 'name',
    Data: 'Name',
    type: 'string',
  },
  {
    id: 'tags',
    Data: 'Tags',
    type: 'string',
  },
  {
    id: 'connections',
    Data: 'Connections',
    type: 'string',
  },
];

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      nextLink: null,
    };
  }

  getContactData() {
    const { nextLink } = this.state;
    if (typeof nextLink === 'undefined') {
      return;
    }
    const URL = nextLink ? nextLink : PRIMARY_API_URL;
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          const { value, nextLink } = result;
          this.setState((state) => {
            const contacts = [...state.contacts, ...value];
            return {
              contacts,
              nextLink,
            };
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.getContactData(PRIMARY_API_URL);
  }

  render() {
    return (
      <div className="people">
        <div className="header-row">
          {HEADER_ROW_DATA.map(({ id, Data, type }) => {
            let Breakpoint = Default;
            if (id === 'connections') {
              Breakpoint = TabletLandscapeAndLarger;
            }
            if (id === 'tags') {
              Breakpoint = TabletPortraitAndLarger;
            }
            if (type === 'string') {
              return (
                <Breakpoint key={id}>
                  <div className={id}>{Data}</div>
                </Breakpoint>
              );
            } else {
              return (
                <Breakpoint key={id}>
                  <Data className={id} />
                </Breakpoint>
              );
            }
          })}
        </div>
        <div className="contact-list-container">
          {this.state.contacts.length > 0 ? (
            <InfiniteScroll
              dataLength={this.state.contacts.length}
              next={this.getContactData.bind(this)}
              refreshFunction={() => this.getContactData.bind(this)}
              hasMore={this.state.nextLink}
              loader={
                <div className="lds-container">
                  <div className="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              }
              scrollThreshold={'10px'}>
              {this.state.contacts.map((contact) => {
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
}

export default hot(module)(People);
