/**
 * Helpers
 */

import React from 'react';
import { ParallaxLayer } from 'react-spring/dist/addons';
import './assets/stars.svg';

// Parceljs needs better support for inline urls:
// NOTE: Seems like you also have to import it for this to work
export const getUrl = relativePath => `url(${require(relativePath)})`;

export const makeStars = speed => (
  <React.Fragment>
    {[0, 1, 2].map((offset, index) => (
      <ParallaxLayer
        key={index}
        offset={offset}
        speed={speed}
        factor={speed * 2}
        style={{
          backgroundImage: getUrl('./assets/stars.svg'),
          backgroundPostiion: speed > 2 ? 'right' : 'center',
          backgroundSize: speed > 2 ? 'cover' : 'contain'
        }}
      />
    ))}
  </React.Fragment>
);
