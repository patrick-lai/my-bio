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

const FILTERS = [
  { key: 'all', label: 'Everything' },
  { key: 'work', label: 'Work' },
  { key: 'project', label: 'Projects' },
  { key: 'achievement', label: 'Achievements' }
];

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
  const [activeFilter, setActiveFilter] = useState('all');
  const parallaxRef = useRef(null);
  const updateDimensions = useCallback(() => setState({ pages: determinePages() }), []);

  // The makeStars function does some randomization, we dont want to keep regenerating per render
  const stars = useMemo(
    () => ({
      stars1: makeStars({ speed: 1 }),
      stars2: makeStars({ speed: 2, style: { backgroundSize: '200%' } })
    }),
    []
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return myBio;
    return myBio.filter(item => item.type === activeFilter);
  }, [activeFilter]);

  const stats = useMemo(
    () => [
      { label: 'Career timeline', value: '10+ years' },
      { label: 'Current focus', value: 'Full stack product engineering' },
      { label: 'Strengths', value: 'UX, delivery, leadership' }
    ],
    []
  );

  useEffect(() => {
    determinePages();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  return (
    <Parallax ref={parallaxRef} pages={state.pages} config={config.molasses} style={BG_STYLES}>
      {stars.stars1}
      {stars.stars2}

      <ParallaxLayer>
        <section className="jumbotron page-shell">
          <div className="hero-card">
            <p className="eyebrow">Sydney-based software engineer</p>
            <h1>Patrick Lai</h1>
            <p className="hero-copy">
              I build polished digital products across frontend, backend, and product delivery, with a soft spot for
              interfaces that feel thoughtful.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-cta" onClick={() => parallaxRef.current.scrollTo(0.55)}>
                Explore experience
              </button>
              <a href="mailto:mrphlai@gmail.com" className="secondary-cta" aria-label="Email Patrick Lai">
                <IoMdMail />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/patrick-lai"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-cta"
                aria-label="View Patrick Lai on GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
            <div className="hero-stats">
              {stats.map(stat => (
                <div key={stat.label} className="hero-stat">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={0.5}>
        <section className="page-shell timeline-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Experience, projects, and achievements</h2>
              <p>Browse the full story or jump to the slice that matters most.</p>
            </div>
            <div className="filter-pills" role="tablist" aria-label="Filter timeline items">
              {FILTERS.map(filter => (
                <button
                  key={filter.key}
                  type="button"
                  className={['filter-pill', activeFilter === filter.key ? 'is-active' : ''].join(' ').trim()}
                  onClick={() => setActiveFilter(filter.key)}
                  aria-pressed={activeFilter === filter.key}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <Timeline items={filteredItems} />
        </section>
      </ParallaxLayer>
    </Parallax>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
