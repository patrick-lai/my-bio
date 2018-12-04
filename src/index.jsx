/**
 * Entry page
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Spring, config } from 'react-spring';
import { getUrl, makeStars } from './_helpers';
import Timeline from './components/Timeline';
import myBio from './myBio.js';

const BG_STYLES = {
  background: `radial-gradient(circle at center, #0f2027, #274e60, #0f2027) 0 0 / 120%`
};

class App extends React.PureComponent {
  render = () => (
    <Parallax
      ref={ref => (this.parallax = ref)}
      pages={3}
      config={config.molasses}
      style={BG_STYLES}
    >
      <ParallaxLayer speed={0} factor={5} style={BG_STYLES}>
        <section className="jumbotron">
          <div>
            <h1>Patrick Lai</h1>
            <i>full stack software engineer</i>
          </div>
        </section>
      </ParallaxLayer>

      {[2, 3].map(makeStars)}

      <ParallaxLayer offset={0.5}>
        <Timeline items={myBio} />
      </ParallaxLayer>

      {/* Adding some foreground gives the page a bit more dimension feel */}
      {/* {[7].map(speed => makeStars(speed, { style: { pointerEvents: 'none' } }))} */}
    </Parallax>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
