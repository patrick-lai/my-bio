/**
 * Fake iPhone
 */

import React from 'react';

export default ({ children }) => (
  <div className="iphone-x">
    <div className="side">
      <div className="screen">{children}</div>
    </div>
    <div className="line" />
    <div className="header">
      <div className="sensor-1" />
      <div className="sensor-2" />
      <div className="sensor-3" />
    </div>
    <div className="volume-button" />
    <div className="power-button" />
  </div>
);
