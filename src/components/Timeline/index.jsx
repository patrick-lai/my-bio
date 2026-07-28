/**
 * Timeline basically my CV
  * NOTE: The react-vertical-timeline-component lib is way too non-performant
 */

import React, { useMemo, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Atv from '../Atv';

const FILTERS = [
  { key: 'all', label: 'Everything' },
  { key: 'work', label: 'Work' },
  { key: 'project', label: 'Projects' },
  { key: 'achievement', label: 'Achievements' }
];

const TYPE_LABELS = {
  work: 'Work',
  project: 'Project',
  achievement: 'Achievement'
};

const Monogram = ({ backgroundImage, children }) => (
  <div className="monogram-bg">
    <div className="pattern" style={{ backgroundImage }} />
    <div className="content">{children}</div>
  </div>
);

const makeElement = ({ title, subtitle, content, summary, highlights = [], skills = [], from, to, icon = {}, monogram, type }) => (
  <VerticalTimelineElement
    key={title + from}
    className="vertical-timeline-element--work"
    date={[from, to]
      .filter(item => !!item)
      .map(maybeString => {
        if (typeof maybeString === 'string') return maybeString;
        return maybeString.format('MMMM YYYY');
      })
      .join(' - ')}
    {...icon}
  >
    <Atv style={{ width: '100%', minHeight: 220 }}>
      <Monogram backgroundImage={monogram}>
        <div className="item-content">
          <div className="item-type">{TYPE_LABELS[type]}</div>
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          {summary && <p className="item-summary">{summary}</p>}
          {highlights.length > 0 && (
            <ul className="item-highlights">
              {highlights.map(highlight => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
          {skills.length > 0 && (
            <div className="item-skills">
              {skills.map(skill => (
                <span key={skill} className="item-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          )}
          <div>{content}</div>
        </div>
      </Monogram>
    </Atv>
  </VerticalTimelineElement>
);

export default ({ items = [] }) => {
  const [filter, setFilter] = useState('all');
  const filteredItems = useMemo(
    () => (filter === 'all' ? items : items.filter(item => item.type === filter)),
    [filter, items]
  );

  return (
    <div className="timeline-shell">
      <div className="timeline-toolbar">
        <div>
          <p className="timeline-eyebrow">Selected work</p>
          <h2>Career timeline</h2>
          <p className="timeline-copy">Browse by role, side project, or milestone to quickly understand the shape of Patrick's experience.</p>
        </div>
        <div className="timeline-filters" aria-label="Filter timeline items">
          {FILTERS.map(option => (
            <button
              key={option.key}
              type="button"
              className={`filter-chip${filter === option.key ? ' is-active' : ''}`}
              onClick={() => setFilter(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <VerticalTimeline>{filteredItems.map(makeElement)}</VerticalTimeline>
    </div>
  );
};
