/**
 * A Fake osx browser (css)
 */

import React from 'react';
import styles from './styles.scss';

export default ({
  address = 'https://patrick-lai.herokuapp.com/',
  children,
  height = 'auto'
}) => (
  <div className="browser-wrapper" style={{ height }}>
    <div className="browser-navigation-bar">
      <i />
      <i />
      <i />
      <input value={address} disabled />
    </div>

    <div className={'browser-container'}>{children}</div>
  </div>
);
