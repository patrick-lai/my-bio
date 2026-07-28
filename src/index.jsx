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
import { FaGithub, FaBriefcase, FaCode, FaAward } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const BG_STYLES = {
  background: `radial-gradient(circle at center, #0f2027, #274e60, #0f2027) 0 0 / 120%`
};

const FILTERS = [
  { key: 'all', label: 'Everything' },
  { key: 'work', label: 'Work', icon: FaBriefcase },
  { key: 'project', label: 'Projects', icon: FaCode },
  { key: 'achievement', label: 'Achievements', icon: FaAward }
];

const TYPE_COPY = {
  work: 'Roles and experience',
  project: 'Selected builds and experiments',
  achievement: 'Highlights outside day-to-day delivery'
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
  const [pages, setPages] = useState(_determinePages());
  const [activeFilter, setActiveFilter] = useState('all');
  const parallaxRef = useRef(null);

  const updateDimensions = useCallback(() => {
    determinePages.cancel();
    determinePages(() => {});
    setPages(_determinePages());
  }, []);

  // The makeStars function does some randomization, we dont want to keep regenerating per render
  const stars = useMemo(
    () => ({
      stars1: makeStars({ speed: 1 }),
      stars2: makeStars({ speed: 2, style: { backgroundSize: '200%' } })
    }),
    []
  );

  const stats = useMemo(() => {
    const workItems = myBio.filter(item => item.type === 'work');
    const firstRole = [...workItems].sort((a, b) => a.from.valueOf() - b.from.valueOf())[0];
    const yearsExperience = Math.max(new Date().getFullYear() - firstRole.from.year(), 1);

    return [
      { label: 'Years building products', value: `${yearsExperience}+` },
      { label: 'Roles', value: `${workItems.length}` },
      { label: 'Projects & wins', value: `${myBio.length - workItems.length}` }
    ];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return myBio;
    return myBio.filter(item => item.type === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const onResize = () => setPages(_determinePages());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <Parallax ref={parallaxRef} pages={pages} config={config.molasses} style={BG_STYLES}>
      {stars.stars1}
      {stars.stars2}

      <ParallaxLayer>
        <section className="jumbotron">
          <div className="hero-card">
            <p className="eyebrow">Software engineer • product-minded builder</p>
            <h1>Patrick Lai</h1>
            <p className="hero-copy">
              I build customer-facing products, lead delivery, and enjoy turning complex ideas into calm,
              polished experiences.
            </p>

            <div className="hero-actions">
              <a className="action-button primary" href="mailto:mrphlai@gmail.com">
                <IoMdMail />
                <span>Email Patrick</span>
              </a>
              <a className="action-button secondary" href="https://github.com/patrick-lai" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                <span>View GitHub</span>
              </a>
              <button
                type="button"
                className="action-button ghost"
                onClick={() => parallaxRef.current && parallaxRef.current.scrollTo(0.7)}
              >
                Explore timeline
              </button>
            </div>

            <div className="hero-stats">
              {stats.map(stat => (
                <div className="hero-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={0.55}>
        <section className="timeline-shell">
          <div className="timeline-header">
            <div>
              <p className="eyebrow">Career snapshot</p>
              <h2>Scan the work by what matters to you</h2>
              <p className="timeline-copy">
                Filter between professional experience, side projects, and achievements to get a faster read on
                Patrick’s background.
              </p>
            </div>

            <div className="timeline-filters" aria-label="Filter timeline items">
              {FILTERS.map(filter => {
                const Icon = filter.icon;
                const isActive = filter.key === activeFilter;
                return (
                  <button
                    key={filter.key}
                    type="button"
                    className={`filter-chip ${isActive ? '--active' : ''}`.trim()}
                    onClick={() => setActiveFilter(filter.key)}
                    aria-pressed={isActive}
                  >
                    {Icon ? <Icon /> : null}
                    <span>{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <Timeline
            items={filteredItems}
            activeFilter={activeFilter}
            title={activeFilter === 'all' ? 'Everything in one view' : TYPE_COPY[activeFilter]}
          />
        </section>
      </ParallaxLayer>
    </Parallax>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
