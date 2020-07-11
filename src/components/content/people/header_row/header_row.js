import React from 'react';
import { hot } from 'react-hot-loader';
import {
  TabletLandscapeAndLarger,
  TabletPortraitAndLarger,
  Default,
} from '../../../breakpoints';
import Visibility from '../../../../img/visibility.svg';

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

const HeaderRow = () => (
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
);

export default hot(module)(HeaderRow);
