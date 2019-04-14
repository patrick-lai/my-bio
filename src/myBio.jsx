/**
 * Configuration driven timeline
 */

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import React from 'react';
import dayjs from 'dayjs'; // Moment waaay tooo big
import { setItemsType, getUrl } from './_helpers';
import IPhone from './components/iPhone';

// Logos
import iagLogo from './assets/iag-logo.jpg';
import nphLogo from './assets/nph-logo.jpeg';
import koorongLogo from './assets/koorong-logo.jpeg';
import reactLogo from './assets/react-logo.png';
import reactNativeLogo from './assets/react-native-logo.png';
import nodeLogo from './assets/node-logo.png';
import secureWarriorLogo from './assets/secure-warrior-logo.jpeg';

// Images
import mm0 from './assets/mangoManga/0.jpg';
import mm1 from './assets/mangoManga/1.jpg';
import mm2 from './assets/mangoManga/2.jpg';
import mm3 from './assets/mangoManga/3.jpg';

const MySwal = withReactContent(Swal);

const work = [
  {
    title: 'Senior developer',
    subtitle: (
      <a
        href="https://www.iag.com.au/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
      <a
        href="https://nextpracticehealth.com/become-a-partner"
        target="_blank"
        rel="noopener noreferrer"
      >
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
      <a
        href="https://nextpracticehealth.com/become-a-partner"
        target="_blank"
        rel="noopener noreferrer"
      >
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
      <a
        href="https://nextpracticehealth.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
    subtitle: (
      <a
        href="https://audio-ripple.firebaseapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Webaudio api
      </a>
    ),
    from: dayjs('2016-02'),
    monogram: getUrl(reactLogo)
  },
  {
    title: 'Mobile manga reader',
    subtitle: (
      <a
        onClick={() =>
          MySwal.fire(
            <div>React native app on iOS/Android</div>,
            <div
              className="flex-row-images"
              style={{ width: '100%', transform: 'scale(0.8)' }}
            >
              <IPhone>
                <img src={mm0} />
              </IPhone>
              <IPhone>
                <img src={mm1} />
              </IPhone>
              <IPhone>
                <img src={mm2} />
              </IPhone>
              <IPhone>
                <img src={mm3} />
              </IPhone>
            </div>
          )
        }
        target="_blank"
      >
        React native
      </a>
    ),
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
      <a
        href="https://securecodewarrior.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Secure code warrior
      </a>
    ),
    from: dayjs('2018-06'),
    monogram: getUrl(secureWarriorLogo)
  },
  {
    title: 'First place IAG Hackathon',
    subtitle: (
      <a
        href="https://www.iag.com.au/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Insurance Australia Group
      </a>
    ),
    from: dayjs('2018-07'),
    monogram: getUrl(iagLogo)
  },
  {
    title: 'First Clinic launched',
    subtitle: (
      <a
        href="https://nextpracticehealth.com/locations/wa-cloverdale"
        target="_blank"
        rel="noopener noreferrer"
      >
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
