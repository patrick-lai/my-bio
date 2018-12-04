/**
 * Helpers
 */

import React from 'react';
import { ParallaxLayer } from 'react-spring/dist/addons';
import starsSvg from './assets/stars.svg';
import { FaSuitcase, FaAward, FaCode } from 'react-icons/fa';

// Parceljs needs better support for inline urls:
// NOTE: Seems like you also have to import it for this to work
export const getUrl = relativePath => `url(${relativePath})`;

export const makeStars = (speed, props = {}, alignments = [-1, 0, 1]) => (
  <React.Fragment>
    {/* We need to start from -1 to cater for overscrolling */}
    {alignments.map((offset, index) => (
      <ParallaxLayer
        key={index}
        offset={offset}
        speed={speed * Math.abs(offset ? offset * 0.5 : 0.2)}
        factor={speed * 2}
        style={{
          backgroundImage: getUrl(starsSvg),
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
    iconStyle: {
      background: 'linear-gradient(to right bottom, #3a6073, #3a7bd5)',
      color: '#fff'
    },
    icon: <FaSuitcase />
  },
  achievement: {
    iconStyle: {
      background: 'linear-gradient(to right bottom, #f7971e, #ffd200)',
      color: '#fff'
    },
    icon: <FaAward />
  },
  project: {
    iconStyle: {
      background: 'linear-gradient(to right bottom, #00b09b, #96c93d)',
      color: '#fff'
    },
    icon: <FaCode />
  }
};

export const setItemsType = type => items =>
  items.map(item => ({ ...item, type, icon: ICONS[type] }));
