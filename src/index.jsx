/**
 * Entry page
 */

import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { config } from 'react-spring';
import { makeStars } from './_helpers';
import Timeline from './components/Timeline';
import myBio from './myBio';
import { FaArrowDown, FaGithub } from 'react-icons/fa';
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

const FOCUS_AREAS = ['Product-minded engineering', 'Frontend craft', 'Fast iteration', 'Clear UX'];

const determinePages = () => {
  try {
    const { clientWidth, clientHeight } = document.documentElement;
    if (clientWidth > 768) return 3;
    if (clientHeight / clientWidth > 0.7) return 3;
    return 4;
  } catch (e) {
    return 3;
  }
};

const App = () => {
  const [pages, setPages] = useState(determinePages());
  const [activeFilter, setActiveFilter] = useState('all');

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

  const counts = useMemo(
    () =>
      myBio.reduce(
        (result, item) => ({
          ...result,
          [item.type]: (result[item.type] || 0) + 1
        }),
        { all: myBio.length }
      ),
    []
  );

  const filteredItems = useMemo(
    () => (activeFilter === 'all' ? myBio : myBio.filter(item => item.type === activeFilter)),
    [activeFilter]
  );

  useEffect(() => {
    const handleResize = () => setPages(determinePages());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Parallax pages={pages} config={config.molasses} style={BG_STYLES}>
      {stars.stars1}
      {stars.stars2}

      <ParallaxLayer>
        <section className="jumbotron">
          <div className="hero-card">
            <span className="eyebrow">Portfolio</span>
            <h1>Patrick Lai</h1>
            <p className="hero-summary">
              Full stack software engineer building customer-facing products with a bias for usable,
              polished experiences.
            </p>
            <div className="hero-focus" aria-label="Focus areas">
              {FOCUS_AREAS.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="contact-details">
              <a href="mailto:mrphlai@gmail.com" aria-label="Email Patrick Lai">
                <IoMdMail />
                <span>Email</span>
              </a>
              <a href="https://github.com/patrick-lai" target="_blank" rel="noreferrer" aria-label="Patrick Lai on GitHub">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
            <div className="hero-highlights" aria-label="Portfolio highlights">
              <div>
                <strong>{counts.work || 0}</strong>
                <span>roles</span>
              </div>
              <div>
                <strong>{counts.project || 0}</strong>
                <span>projects</span>
              </div>
              <div>
                <strong>{counts.achievement || 0}</strong>
                <span>achievements</span>
              </div>
            </div>
            <div className="hero-proof">
              <div>
                <strong>Built for real users</strong>
                <p>From ecommerce and insurance to healthcare, the work centers on practical user journeys.</p>
              </div>
              <div>
                <strong>Shows the why behind the work</strong>
                <p>The timeline now explains intent, interaction, and outcomes instead of listing titles only.</p>
              </div>
            </div>
            <a href="#timeline" className="scroll-cta">
              <FaArrowDown />
              <span>Browse timeline</span>
            </a>
          </div>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={0.48} speed={0.2}>
        <section className="timeline-shell" id="timeline">
          <div className="timeline-toolbar">
            <div>
              <span className="eyebrow">Explore</span>
              <h2>Career timeline</h2>
              <p>
                Filter the timeline to scan work history, side projects, or achievements without digging through unrelated items.
              </p>
            </div>
            <div className="timeline-filters" role="tablist" aria-label="Timeline filters">
              {FILTERS.map(filter => {
                const count = filter.key === 'all' ? counts.all : counts[filter.key] || 0;
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    className={`filter-pill${isActive ? ' is-active' : ''}`}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    aria-pressed={isActive}
                  >
                    <span>{filter.label}</span>
                    <strong>{count}</strong>
                  </button>
                );
              })}
            </div>
          </div>
          <Timeline items={filteredItems} />
        </section>
      </ParallaxLayer>
    </Parallax>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
