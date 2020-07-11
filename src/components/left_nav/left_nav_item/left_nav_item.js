import React from 'react';
import { hot } from 'react-hot-loader';
import './left_nav_item.css';
import { ExcludeTabletPortraitAndMobileWide } from '../../breakpoints';

const LeftNavItem = ({ Img, title, id, isMobile, isActive, setView }) => (
    <div onClick={() => setView(id)}
      className={`left-nav-item left-nav-item-${id}${
        isActive ? ' active-nav' : ''
      }${isMobile ? ' mobile-item' : ''}`}>
      <Img />
      <ExcludeTabletPortraitAndMobileWide>
        <span>{title}</span>
      </ExcludeTabletPortraitAndMobileWide>
    </div>
  );

export default hot(module)(LeftNavItem);
