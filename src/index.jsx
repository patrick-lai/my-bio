/**
 * Entry page
 */

import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import _debounce from 'lodash/debounce';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { config } from 'react-spring';
import { makeStars } from './_helpers';
import Timeline from './components/Timeline';
import myBio from './myBio';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const BG_STYLES = {
  background: `radial-gradient(circle at center, #0f2027, #274e60, #0f2027) 0 0 / 120%`
};

const PROFILE = {
  name: 'Patrick Lai',
  role: 'Full stack software engineer',
  intro:
    'I build polished product experiences end to end, from interface detail to backend delivery. This site now highlights the shape of that work instead of just listing it.',
  email: 'mrphlai@gmail.com',
  github: 'https://github.com/patrick-lai'
};

// Magic number seems to work
const _determinePages = () => {
  try {
    const { clientWidth, clientHeight } = document.documentElement;
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

  const timelineRef = useRef(null);
  const experienceYears = new Date().getFullYear() - 2013;
  const workCount = myBio.filter(item => item.type === 'work').length;
  const projectCount = myBio.filter(item => item.type === 'project').length;

  useEffect(() => {
    determinePages();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const scrollToTimeline = () => {
    if (timelineRef.current && timelineRef.current.scrollIntoView) {
      timelineRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Parallax pages={state.pages} config={config.molasses} style={BG_STYLES}>
      {stars.stars1}
      {stars.stars2}

      <ParallaxLayer>
        <section className="jumbotron">
          <div className="hero-card">
            <p className="hero-eyebrow">Product-minded engineer</p>
            <h1>{PROFILE.name}</h1>
            <p className="hero-role">{PROFILE.role}</p>
            <p className="hero-copy">{PROFILE.intro}</p>
            <div className="hero-actions">
              <button type="button" className="primary-action" onClick={scrollToTimeline}>
                Explore timeline
              </button>
              <a href={`mailto:${PROFILE.email}`} className="secondary-action">
                <IoMdMail />
                Email
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer noopener" className="secondary-action">
                <FaGithub />
                GitHub
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>{experienceYears}+</strong>
                <span>years building on the web</span>
              </div>
              <div className="hero-stat">
                <strong>{workCount}</strong>
                <span>featured roles</span>
              </div>
              <div className="hero-stat">
                <strong>{projectCount}</strong>
                <span>side projects highlighted</span>
              </div>
            </div>
          </div>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={0.52} speed={0.15}>
        <div ref={timelineRef}>
          <Timeline items={myBio} />
        </div>
      </ParallaxLayer>

      {stars.stars3}
    </Parallax>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
