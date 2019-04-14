/**
 * Bunch of debris to randomly render
 */

import React, { useEffect, useState, useCallback } from 'react';
import _values from 'lodash/values';
import _sample from 'lodash/sample';
import _rnd from 'lodash/random';
import { Spring, config } from 'react-spring';
import * as debris from './debris';

// From a bit off the screen left (-10) to a bit off the screen right (110)
const X = [[-10, 110], [110, -10]];

export default ({ delay = 100 }) => {
  // Start with nothing
  const [state, setState] = useState(null);

  // Function to reset the state
  const randomize = useCallback(() => {
    const key1 = _rnd(0, 1);
    const icon = _sample(_values(debris));
    setState({
      from: { left: X[key1][0], top: _rnd(-120, 120), rotation: _rnd(-60, 60) },
      to: { left: X[key1][1], top: _rnd(-120, 120), rotation: _rnd(-60, 60) },
      config: {
        tension: _rnd(0.01, 0.1),
        friction: _rnd(0, 0.1),
        clamp: true
      },
      fontSize: _rnd(60, 120),
      color: icon.color || '#FFFFFF',
      Icon: icon
    });
  }, []);

  // Initialize the state after some delay
  useEffect(() => {
    const timeout = setTimeout(randomize, delay);
    return () => clearTimeout(timeout);
  }, []);

  if (!state) return null;

  const { from, to, config, fontSize, rotation, Icon, color } = state;

  return (
    <Spring reset from={from} to={to} config={config} onRest={randomize}>
      {styles => (
        <Icon
          style={{
            position: 'absolute',
            left: `${styles.left}%`,
            top: `${styles.top}%`,
            fontSize: `${fontSize}pt`,
            transoform: `rotate(${rotation}deg)`,
            color: `${color}`
          }}
        />
      )}
    </Spring>
  );
};
