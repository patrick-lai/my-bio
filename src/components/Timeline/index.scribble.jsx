/**
 * Timeline basically my CV
 */

import React from 'react';
import { Timeline as ReactTimeline, Event } from 'react-timeline-scribble';
import { FaBeer } from 'react-icons/fa';
import { getUrl } from '../../_helpers';

const Monogram = ({ backgroundImage, children, ...rest }) => (
  <div className="monogram-bg">
    <div className="pattern" style={{ backgroundImage }} />
    <div className="content" {...rest}>
      {children}
    </div>
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
  <Monogram backgroundImage={monogram}>
    <Event interval={`${from} – ${to}`} title={title} subtitle={subtitle}>
      <div>{content}</div>
    </Event>
  </Monogram>
);

export default class Timeline extends React.PureComponent {
  // TODO: Implement filters
  state = { omit: [] };
  render = () => {
    const { items } = this.props;
    if (!items) return null;
    return <ReactTimeline>{items.map(makeElement)}</ReactTimeline>;
  };
}
