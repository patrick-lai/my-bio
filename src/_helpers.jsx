/**
 * Helpers
 */

import React from 'react';
import { ParallaxLayer } from 'react-spring/dist/addons';
import './assets/stars.svg';
import { FaBeer } from 'react-icons/fa';

// Parceljs needs better support for inline urls:
// NOTE: Seems like you also have to import it for this to work
export const getUrl = relativePath => `url(${require(relativePath)})`;

export const makeStars = (speed, props = {}) => (
  <React.Fragment>
    {/* We need to start from -1 to cater for overscrolling */}
    {[-1, 0, 1, 2].map((offset, index) => (
      <ParallaxLayer
        key={index}
        offset={offset}
        speed={speed * Math.abs(offset ? offset * 0.5 : 0.2)}
        factor={speed * 2}
        style={{
          backgroundImage: getUrl('./assets/stars.svg'),
          // Add some randomness
          backgroundPostiion: speed % 2 ? 'right' : 'center',
          backgroundSize: speed % 2 ? 'cover' : 'contain',
          ...props.style
        }}
      />
    ))}
  </React.Fragment>
);

// Easily add Icons and type
const ICONS = {
  work: {
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    icon: <FaBeer />
  }
};

export const setItemsType = type => items =>
  items.map(item => ({ ...item, type, icon: ICONS[type] }));
