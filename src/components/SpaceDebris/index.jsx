/**
 * Bunch of debris to randomly render
 */

import React from 'react';
import _values from 'lodash/values';
import _sample from 'lodash/sample';
import _rnd from 'lodash/random';
import { Spring, config } from 'react-spring';
import * as debris from './debris';

const X = [[-10, 110], [110, -10]];

export default class Debris extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.randomState();
  }

  randomState = () => {
    const key1 = _rnd(0, 1);
    const key2 = _rnd(0, 1);
    return {
      from: { left: X[key1][0], top: _rnd(-120, 120), rotation: _rnd(-30, 30) },
      to: { left: X[key1][1], top: _rnd(-120, 120), rotation: _rnd(-30, 30) },
      config: { tension: _rnd(1, 2), friction: _rnd(10, 50), clamp: true },
      fontSize: _rnd(15, 50),
      Icon: _sample(_values(debris))
    };
  };

  randomize = () => this.setState(this.randomState());

  render = () => {
    const { from, to, config, fontSize, rotation, Icon } = this.state;
    return (
      <Spring reset from={from} to={to} config={config} onRest={this.randomize}>
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
}
