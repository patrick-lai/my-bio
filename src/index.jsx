/**
 * Entry page
 */

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import _debounce from 'lodash/debounce';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Spring, config } from 'react-spring';
import { getUrl, makeStars } from './_helpers';
import Timeline from './components/Timeline';
import SpaceDebris from './components/SpaceDebris';
import myBio from './myBio.js';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const BG_STYLES = {
  background: `radial-gradient(circle at center, #0f2027, #274e60, #0f2027) 0 0 / 120%`,
};

// Magic number seems to work
const _determinePages = () => {
  try {
    const { clientWidth, clientHeight } = document.documentElement;
    console.log(clientWidth, clientWidth / clientHeight);
    // if (clientWidth > 1169) return 3;
    if (clientWidth > 768) return 3;
    if (clientHeight / clientWidth > 0.7) return 3;
    return 4;
  } catch (e) {
    return 3;
  }
};

const determinePages = _debounce(_determinePages, 800);

class App extends React.PureComponent {
  state = { pages: _determinePages() };

  debris = (
    <React.Fragment>
      <SpaceDebris />
      <SpaceDebris />
      <SpaceDebris />
      <SpaceDebris />
      <SpaceDebris />
    </React.Fragment>
  );

  // The makeStars function does some randomization, we dont want to keep regenerating per render
  stars1 = makeStars({ speed: 1 });
  stars2 = makeStars({ speed: 2, style: { backgroundSize: '200%' } });
  stars3 = makeStars({
    speed: 5,
    style: { backgroundSize: '500%', pointerEvents: 'none' },
  });

  componentDidMount = () => {
    determinePages();
    window.addEventListener('resize', this.updateDimensions);
  };

  // Depends on screen ratio
  updateDimensions = () => this.setState({ pages: determinePages() });

  render = () => (
    <Parallax ref={ref => (this.parallax = ref)} pages={this.state.pages} config={config.molasses} style={BG_STYLES}>
      {/* Main gradient background*/}
      <ParallaxLayer speed={0} factor={this.state.pages} style={BG_STYLES}>
        {this.debris}
      </ParallaxLayer>

      {/* Parallaxed Stars in the background */}
      {/* {this.stars1} */}
      {this.stars2}

      {/* Content */}
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

      {/* Timeline */}
      <ParallaxLayer offset={0.5}>
        <Timeline items={myBio} />
      </ParallaxLayer>

      {/* Adding some foreground for immersive feel */}
      {this.stars3}
    </Parallax>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
