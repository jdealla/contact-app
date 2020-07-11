import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './left_nav.css';
import LeftNavItem from '../left_nav/left_nav_item/left_nav_item.js';
import FlyoutNav from './flyout_nav/flyout_nav';
import {
  MobileNarrow
} from '../../components/breakpoints';

import Logo from '../left_nav/logo/logo';
import HamburgerMenu from '../../img/HamburgerMenu.svg';
import { navData } from './navData';

const LeftNav = ({ view, setView }) => {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const handleFlyout = () => setFlyoutOpen(!flyoutOpen);

  const renderNavItems = ({ navClassName, isMobile, view, setView}) => (
    <div className={navClassName}>
      {navData.map(({ id, title, Img }) => (
        <LeftNavItem
          isActive={view === id}
          isMobile={isMobile}
          id={id}
          Img={Img}
          key={id}
          title={title}
          setView={setView}
        />
      ))}
    </div>
);

    return (
      <div className="left_nav_container">

        <div className="left_nav">
          <Logo />
          {renderNavItems({navClassName: 'nav-item-container', view, isMobile: false, setView})}
        </div>

        <MobileNarrow>
          <HamburgerMenu
            className="hamburger_menu"
            src={HamburgerMenu}
            onClick={handleFlyout}
          />
          <FlyoutNav
            view={view}
            flyoutOpen={flyoutOpen}
            overlayClick={handleFlyout}
            renderNavItems={renderNavItems}
            setView={setView}
          />
        </MobileNarrow>

      </div>
    );
  }

export default hot(module)(LeftNav);
