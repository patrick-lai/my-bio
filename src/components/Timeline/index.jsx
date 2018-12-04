/**
 * Timeline basically my CV
 */

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { FaBeer } from 'react-icons/fa';

const makeElement = ({ title, subtitle, content, from, to, icon = {} }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={[from, to].filter(item => !!item).join(' - ')}
    {...icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
    <p>{content}</p>
  </VerticalTimelineElement>
);

export default class Timeline extends React.PureComponent {
  state = { omit: [] };

  render = () => (
    <VerticalTimeline>
      {this.props.items && this.props.items.map(makeElement)}
    </VerticalTimeline>
  );
}
