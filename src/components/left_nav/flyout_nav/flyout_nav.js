import React from 'react';
import { hot } from 'react-hot-loader';
import './flyout_nav.css';
import LogoIcon from '../logo/logo_icon/logo_icon';

const FlyoutNav = ({ view, flyoutOpen, renderNavItems, overlayClick }) => {
  return (
    <div className={`flyout_nav ${ flyoutOpen ? 'flyout-open' : 'flyout-closed'}`}>
      <LogoIcon logoClass="logo-wrapper" />
      {renderNavItems({ navClassName: 'flyout_nav-item-container', view, isMobile: false })}
      <div className="flyout_nav-overlay" onClick={overlayClick}></div>
    </div>
  );
};

export default hot(module)(FlyoutNav);
