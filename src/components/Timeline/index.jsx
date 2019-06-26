/**
 * Timeline basically my CV
 * NOTE: The react-vertical-timeline-component lib is way too non-performant
 */

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBeer } from 'react-icons/fa';
import { getUrl } from '../../_helpers';
import Atv from '../Atv';

const Monogram = ({ backgroundImage, children }) => (
  <div className="monogram-bg">
    <div className="pattern" style={{ backgroundImage }} />
    <div className="content">{children}</div>
  </div>
);

const makeElement = ({ title, subtitle, content, from, to, icon = {}, monogram }) => (
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
    <Atv style={{ width: 468, height: 190 }}>
      <Monogram backgroundImage={monogram}>
        <div className="item-content">
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          <div>{content}</div>
        </div>
      </Monogram>
    </Atv>
  </VerticalTimelineElement>
);

// TODO: Implement filters
export default ({ filter = [], items = [] }) => <VerticalTimeline>{items.map(makeElement)}</VerticalTimeline>;
