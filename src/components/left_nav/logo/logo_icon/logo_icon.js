import React from 'react';
import { hot } from 'react-hot-loader';
import Icon from '../../../../img/logo.svg';

const LogoIcon = ({ logoClass }) => (
  <div className={logoClass}>
    <Icon className="logo" />
    <span className="logo-text">Connections</span>
  </div>
);

export default hot(module)(LogoIcon);
