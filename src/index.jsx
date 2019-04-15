/**
 * Entry page
 */

import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import _debounce from 'lodash/debounce';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Spring, config } from 'react-spring';
import { getUrl, makeStars } from './_helpers';
import Timeline from './components/Timeline';
import SpaceDebris from './components/SpaceDebris';
import myBio from './myBio';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const BG_STYLES = {
  background: `radial-gradient(circle at center, #0f2027, #274e60, #0f2027) 0 0 / 120%`
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

// Performance reasons
const determinePages = _debounce(_determinePages, 800);

const App = () => {
  const [state, setState] = useState({ pages: _determinePages() });
  const updateDimensions = useCallback(() => setState({ pages: determinePages() }), []);

  // Icons floating around
  const debris = useMemo(
    () => (
      <React.Fragment>
        <SpaceDebris delay={0} />
        <SpaceDebris delay={200} />
        <SpaceDebris delay={400} />
        <SpaceDebris delay={600} />
        <SpaceDebris delay={800} />
        <SpaceDebris delay={1000} />
        <SpaceDebris delay={1200} />
        <SpaceDebris delay={1400} />
        <SpaceDebris delay={1600} />
        <SpaceDebris delay={1800} />
        <SpaceDebris delay={2000} />
      </React.Fragment>
    ),
    []
  );

  // The makeStars function does some randomization, we dont want to keep regenerating per render
  const stars = useMemo(
    () => ({
      stars1: makeStars({ speed: 1 }),
      stars2: makeStars({ speed: 2, style: { backgroundSize: '200%' } }),
      stars3: makeStars({
        speed: 5,
        style: { backgroundSize: '500%', pointerEvents: 'none' }
      })
    }),
    []
  );

  let parallaxRef = useRef(null);

  useEffect(() => {
    determinePages();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize');
  }, []);

  return (
    <Parallax ref={ref => (parallaxRef = ref)} pages={state.pages} config={config.molasses} style={BG_STYLES}>
      {/* Main gradient background*/}
      <ParallaxLayer speed={0} factor={state.pages} style={BG_STYLES}>
        {debris}
      </ParallaxLayer>

      {/* Parallaxed Stars in the background */}
      {stars.stars1}
      {stars.stars2}

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
      {/* {stars.stars3} */}
    </Parallax>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
