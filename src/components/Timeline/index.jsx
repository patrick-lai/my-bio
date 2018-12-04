/**
 * Timeline basically my CV
 */

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { FaBeer } from 'react-icons/fa';
import { getUrl } from '../../_helpers';

const Monogram = ({ backgroundImage, children }) => (
  <div className="monogram-bg">
    <div className="pattern" style={{ backgroundImage }} />
    <div className="content">{children}</div>
  </div>
);

const makeElement = ({
  title,
  subtitle,
  content,
  from,
  to,
  icon = {},
  monogram
}) => (
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
    <div className="item-content">
      <Monogram backgroundImage={monogram}>
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
        <p>{content}</p>
      </Monogram>
    </div>
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
