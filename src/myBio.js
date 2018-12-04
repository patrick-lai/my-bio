/**
 * Configuration driven timeline
 */

import _sortBy from 'lodash/sortBy';
import React from 'react';
import { setItemsType, getUrl } from './_helpers';
import dayjs from 'dayjs'; // Moment waaay tooo big

// Logos
import iagLogo from './assets/iag-logo.jpg';
import nphLogo from './assets/nph-logo.jpeg';
import koorongLogo from './assets/koorong-logo.jpeg';
import reactLogo from './assets/react-logo.png';
import reactNativeLogo from './assets/react-native-logo.png';
import nodeLogo from './assets/node-logo.png';
import secureWarriorLogo from './assets/secure-warrior-logo.jpeg';

const work = [
  {
    title: 'Senior developer',
    subtitle: (
      <a href="https://www.iag.com.au/" target="_blank">
        Insurance Australia Group
      </a>
    ),
    from: dayjs('2018-05'),
    to: 'present',
    monogram: getUrl(iagLogo)
  },
  {
    title: 'Technical lead',
    subtitle: (
      <a href="https://www.koorong.com/" target="_blank">
        Next Practice Health
      </a>
    ),
    from: dayjs('2017-11'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo)
  },
  {
    title: 'Full stack developer',
    subtitle: (
      <a href="https://nextpracticehealth.com/" target="_blank">
        Next Practice Health
      </a>
    ),
    from: dayjs('2016-01'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo)
  },
  {
    title: 'Frontend developer',
    subtitle: (
      <a href="https://nextpracticehealth.com/" target="_blank">
        Koorong Books
      </a>
    ),
    from: dayjs('2013-04'),
    to: dayjs('2015-12'),
    monogram: getUrl(koorongLogo)
  }
];

const projects = [
  {
    title: 'Realtime audio visualization',
    subtitle: 'Webaudio api',
    from: dayjs('2016-02'),
    monogram: getUrl(reactLogo)
  },
  {
    title: 'Mobile manga reader',
    subtitle: 'React native',
    from: dayjs('2018-06'),
    monogram: getUrl(reactNativeLogo)
  },
  {
    title: 'iPhone sniper',
    subtitle: 'Notification service',
    from: dayjs('2017-08'),
    monogram: getUrl(nodeLogo)
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
    from: dayjs('2018-06'),
    monogram: getUrl(secureWarriorLogo)
  },
  {
    title: 'First place IAG Hackathon',
    subtitle: 'Koorong Books',
    from: dayjs('2018-07'),
    monogram: getUrl(iagLogo)
  },
  {
    title: 'First Clinic launched',
    subtitle: (
      <a href="https://nextpracticehealth.com/locations/wa-cloverdale" target="_blank">
        Next Practice Health Cloverdale
      </a>
    ),
    from: dayjs('2018-03'),
    monogram: getUrl(nphLogo)
  }
];

export default [
  ...setItemsType('work')(work),
  ...setItemsType('project')(projects),
  ...setItemsType('achievement')(achievements)
].sort((a, b) => {
  const isBefore = b.from.isBefore(a.from);
  return isBefore ? -1 : 1;
});
