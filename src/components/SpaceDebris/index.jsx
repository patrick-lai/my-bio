/**
 * Bunch of debris to randomly render
 */

import React, { useMemo, useState, useCallback } from 'react';
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
    setState({
      from: { left: X[key1][0], top: _rnd(-120, 120), rotation: _rnd(-60, 60) },
      to: { left: X[key1][1], top: _rnd(-120, 120), rotation: _rnd(-60, 60) },
      config: {
        tension: _rnd(0.1, 0.2),
        friction: _rnd(0.1, 0.2),
        clamp: true
      },
      fontSize: _rnd(60, 120),
      Icon: _sample(_values(debris))
    });
  }, []);

  // Initialize the state after some delay
  useMemo(() => setTimeout(randomize, delay), []);

  if (!state) return null;

  const { from, to, config, fontSize, rotation, Icon } = state;

  return (
    <Spring reset from={from} to={to} config={config} onRest={randomize}>
      {styles => (
        <Icon
          style={{
            position: 'absolute',
            left: `${styles.left}%`,
            top: `${styles.top}%`,
            fontSize: `${fontSize}pt`,
            transoform: `rotate(${rotation}deg)`
          }}
        />
      )}
    </Spring>
  );
};
