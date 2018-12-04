/**
 * Configuration driven timeline
 */

import React from 'react';
import { setItemsType } from './_helpers';

const work = [
  {
    title: 'Senior developer',
    subtitle: 'Insurance Australia Group',
    from: 'May 2018',
    to: 'present'
  },
  {
    title: 'Technical lead',
    subtitle: 'Next Practice Health',
    from: 'November 2017',
    to: 'May 2018'
  },
  {
    title: 'Full stack developer',
    subtitle: 'Next Practice Health',
    from: 'Jan 2016',
    to: 'May 2018'
  },
  {
    title: 'Frontend developer',
    subtitle: 'Koorong Books',
    from: 'April 2013',
    to: 'Dec 2015'
  }
];

const projects = [
  {
    title: 'Realtime audio visualization',
    subtitle: 'Webaudio api',
    from: 'Feb 2016'
  },
  {
    title: 'Mobile manga reader',
    subtitle: 'React native',
    from: 'May 2017'
  },
  {
    title: 'iPhone sniper',
    subtitle: 'Notification service',
    from: 'August 2017'
  }
];

const achievements = [
  {
    title: 'First place security tournament',
    subtitle: (
      <a href="https://securecodewarrior.com/" target="_blank">
        Secure code warrior
      </a>
    ),
    from: 'April 2013',
    to: 'Dec 2015'
  },
  {
    title: 'First place IAG Hackathon',
    subtitle: 'Koorong Books',
    from: 'April 2013',
    to: 'Dec 2015'
  }
];

export default [
  ...setItemsType('work')(work),
  ...setItemsType('project')(projects),
  ...setItemsType('achievement')(achievements)
];

{
  /* <VerticalTimelineElement
className="vertical-timeline-element--work"
date="2011 - present"
iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
icon={<FaBeer />}
>
<h3 className="vertical-timeline-element-title">Creative Director</h3>
<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
<p>
  Creative Direction, User Experience, Visual Design, Project
  Management, Team Leading
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
icon={<FaBeer />}
/> */
}
