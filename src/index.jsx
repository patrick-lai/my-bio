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
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

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
      <ParallaxLayer speed={0} factor={5} style={BG_STYLES} />

      {makeStars({ speed: 2, offset: 0, factor: 5 })}
      {makeStars({ speed: 2, offset: 1.5, factor: 6 })}
      {makeStars({ speed: 3, offset: 0, factor: 9 })}

      <ParallaxLayer>
        <section className="jumbotron">
          <div>
            <h1>Patrick Lai</h1>
            <i>full stack software engineer</i>
            <div className="contact-details">
              <a href="mailto:mrphlai@gmail.com">
                <IoMdMail />
              </a>
              <a href="https://github.com/" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={0.5}>
        <Timeline items={myBio} />
      </ParallaxLayer>

      {/* Adding some foreground gives the page a bit more dimension feel */}
      {makeStars({ speed: 13, factor: 30, style: { pointerEvents: 'none' } })}
    </Parallax>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
