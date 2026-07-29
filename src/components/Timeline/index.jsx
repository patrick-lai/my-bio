/**
 * Timeline basically my CV
  * NOTE: The react-vertical-timeline-component lib is way too non-performant
  */

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Atv from '../Atv';

const Monogram = ({ backgroundImage, children }) => (
  <div className="monogram-bg">
    <div className="pattern" style={{ backgroundImage }} />
    <div className="content">{children}</div>
  </div>
);

const makeElement = ({ title, subtitle, content, summary, highlights = [], tags = [], from, to, icon = {}, monogram }) => (
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
    <Atv style={{ width: '100%', height: '100%' }}>
      <Monogram backgroundImage={monogram}>
        <div className="item-content">
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          {summary ? <p className="timeline-summary">{summary}</p> : null}
          {highlights.length ? (
            <ul className="timeline-highlights">
              {highlights.map(highlight => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
          {content ? <div>{content}</div> : null}
          {tags.length ? (
            <div className="timeline-tags" aria-label="Technologies and themes">
              {tags.map(tag => (
                <span key={tag} className="timeline-tag">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </Monogram>
    </Atv>
  </VerticalTimelineElement>
);

export default ({ items = [] }) => <VerticalTimeline>{items.map(makeElement)}</VerticalTimeline>;
