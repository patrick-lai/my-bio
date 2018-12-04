/**
 * Root container
 */

import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Spring, config } from 'react-spring';
import { getUrl, makeStars } from './_helpers';

export default class App extends React.Component {
  state = { bgPos: 0 };

  render() {
    const { bgPos } = this.state;

    return (
      <Parallax
        ref={ref => (this.parallax = ref)}
        pages={3}
        config={config.wobbly}
      >
        <ParallaxLayer
          speed={0}
          factor={5}
          style={{
            background: `radial-gradient(circle at center, #0f2027, #1f3e4c, #0f2027) 0 0 / 200%`
          }}
        />
        {[2, 3].map(makeStars)}

        <ParallaxLayer className="page __title">
          <div>
            <h1>Patrick Lai</h1>
            <p>Full stack software engineer</p>
          </div>

          {/* <h1>WebAudio api</h1>
          <Browser height={500}>
            <iframe
              src="https://audio-ripple.firebaseapp.com/"
              frameBorder={0}
            />
          </Browser>

          <hr />

          <h1>WebAudio api</h1>
          <Browser height={500}>
            <iframe
              src="https://audio-ripple.firebaseapp.com/"
              frameBorder={0}
            />
          </Browser> */}
        </ParallaxLayer>
      </Parallax>
    );
  }
}
