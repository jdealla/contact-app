import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import LogoIcon from './logo_icon/logo_icon';
import {
  TabletLandscapeAndLarger,
  MobileWideAndTabletPortrait
} from '../../breakpoints';
import './logo.css';

 
const Logo = () => (
    <Fragment>
      <TabletLandscapeAndLarger>
        <LogoIcon logoClass={"logo-wrapper"}/>      
      </TabletLandscapeAndLarger>
      <MobileWideAndTabletPortrait>
        <LogoIcon logoClass={"icon32"} />
      </MobileWideAndTabletPortrait>
    </Fragment>
  ); 

export default hot(module)(Logo);
