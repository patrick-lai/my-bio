/**
 * Entry page
 */

import React, { useEffect, useCallback, useState, useMemo } from 'react';
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
  { key: 'all', label: 'All' },
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
  const updateDimensions = useCallback(() => setState({ pages: determinePages() }), []);

  // The makeStars function does some randomization, we dont want to keep regenerating per render
  const stars = useMemo(
    () => ({
      stars1: makeStars({ speed: 1 }),
      stars2: makeStars({ speed: 2, style: { backgroundSize: '200%' } })
    }),
    []
  );

  const filteredItems = useMemo(
    () => (activeFilter === 'all' ? myBio : myBio.filter(item => item.type === activeFilter)),
    [activeFilter]
  );

  const stats = useMemo(
    () => [
      { label: 'Years shipping products', value: `${new Date().getFullYear() - 2013}+` },
      { label: 'Featured roles', value: `${myBio.filter(item => item.type === 'work').length}` },
      { label: 'Side projects', value: `${myBio.filter(item => item.type === 'project').length}` }
    ],
    []
  );

  useEffect(() => {
    determinePages();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  return (
    <Parallax pages={state.pages} config={config.molasses} style={BG_STYLES}>
      {stars.stars1}
      {stars.stars2}

      <ParallaxLayer>
        <section className="jumbotron page-shell">
          <div className="hero-card">
            <p className="eyebrow">Product-minded engineer</p>
            <h1>Patrick Lai</h1>
            <p className="hero-copy">
              I build polished web and mobile experiences, from ecommerce and healthcare platforms to
              experiments that turn ideas into something people can actually use.
            </p>

            <div className="hero-actions">
              <a className="cta-link" href="mailto:mrphlai@gmail.com">
                <IoMdMail />
                <span>Email me</span>
              </a>
              <a className="cta-link" href="https://github.com/patrick-lai" target="_blank" rel="noreferrer">
                <FaGithub />
                <span>View GitHub</span>
              </a>
            </div>

            <div className="hero-stats">
              {stats.map(stat => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <p className="scroll-hint">Browse the timeline to see work, projects, and highlights.</p>
          </div>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={0.5}>
        <section className="timeline-section page-shell">
          <div className="timeline-toolbar">
            <div>
              <p className="eyebrow">Career timeline</p>
              <h2>Selected experience and experiments</h2>
              <p className="timeline-summary">Showing {filteredItems.length} entries.</p>
            </div>

            <div className="filter-pills" aria-label="Filter timeline items">
              {FILTERS.map(filter => (
                <button
                  key={filter.key}
                  type="button"
                  className={`filter-pill ${activeFilter === filter.key ? '--active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <Timeline filter={activeFilter} items={myBio} />
        </section>
      </ParallaxLayer>
    </Parallax>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
