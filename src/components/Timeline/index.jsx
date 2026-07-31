/**
 * Timeline basically my CV
 * NOTE: The react-vertical-timeline-component lib is way too non-performant
 */

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Atv from '../Atv';

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

const makeElement = ({ title, subtitle, content, from, to, type, icon = {}, monogram }) => (
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
    <Atv style={{ width: '100%', minHeight: 190 }}>
      <Monogram backgroundImage={monogram}>
        <div className="item-content">
          <span className="item-type">{TYPE_LABELS[type]}</span>
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          {content ? <div className="timeline-copy">{content}</div> : null}
        </div>
      </Monogram>
    </Atv>
  </VerticalTimelineElement>
);

export default ({ items = [] }) => <VerticalTimeline>{items.map(makeElement)}</VerticalTimeline>;
