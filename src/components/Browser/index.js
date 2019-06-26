/**
 * A Fake osx browser (css)
 */

import React from 'react';
import styles from './styles.less';

export default ({ url = 'https://patrick-lai.herokuapp.com/', children, width = '70vw', height = '70vh' }) => (
  <div className="browser-wrapper" style={{ width, height }}>
    <div className="browser-navigation-bar">
      <i />
      <i />
      <i />
      <input value={url} disabled />
    </div>

    <div className={'browser-container'}>{children}</div>
  </div>
);
