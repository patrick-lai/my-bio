/**
 * Configuration driven timeline
 */

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import React from 'react';
import dayjs from 'dayjs'; // Moment waaay tooo big
import { setItemsType, getUrl } from './_helpers';
import IPhone from './components/iPhone';
import Browser from './components/Browser';

// Logos
import iagLogo from './assets/iag-logo.jpg';
import nphLogo from './assets/nph-logo.jpeg';
import koorongLogo from './assets/koorong-logo.jpeg';
import reactLogo from './assets/react-logo.png';
import reactNativeLogo from './assets/react-native-logo.png';
import nodeLogo from './assets/node-logo.png';
import secureWarriorLogo from './assets/secure-warrior-logo.jpeg';
import mensaLogo from './assets/mensa-logo.png';

// Images
import mm0 from './assets/mangoManga/0.jpg';
import mm1 from './assets/mangoManga/1.jpg';
import mm2 from './assets/mangoManga/2.jpg';
import mm3 from './assets/mangoManga/3.jpg';

const MySwal = withReactContent(Swal);

const LinkButton = ({ children, ...props }) => (
  <button type="button" className="inline-link-button" {...props}>
    {children}
  </button>
);

const IframeLink = ({ href, children }) => (
  <LinkButton
    onClick={() =>
      MySwal.fire(
        <Browser url={href}>
          {/* By pass x-frame-options, https://github.com/niutech/x-frame-bypass */}
          <iframe title={typeof children === 'string' ? children : 'Linked preview'} is="x-frame-bypass" src={href} />
        </Browser>
      )
    }
  >
    {children}
  </LinkButton>
);

const work = [
  {
    title: 'Senior developer',
    subtitle: <IframeLink href="https://www.iag.com.au/">Insurance Australia Group</IframeLink>,
    from: dayjs('2018-05'),
    to: 'present',
    monogram: getUrl(iagLogo),
  },
  {
    title: 'Technical lead',
    subtitle: <IframeLink href="https://nextpracticehealth.com/become-a-partner">Next Practice Health</IframeLink>,
    from: dayjs('2017-11'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
  },
  {
    title: 'Full stack developer',
    subtitle: <IframeLink href="https://nextpracticehealth.com/become-a-partner">Next Practice Health</IframeLink>,
    from: dayjs('2016-01'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
  },
  {
    title: 'Frontend developer',
    subtitle: <IframeLink href="https://www.koorong.com/">Koorong Books</IframeLink>,
    from: dayjs('2013-04'),
    to: dayjs('2015-12'),
    monogram: getUrl(koorongLogo),
  },
];

const projects = [
  {
    title: 'Realtime audio visualization',
    subtitle: (
      <a href="http://chill-tones.surge.sh/" target="_blank" rel="noopener noreferrer">
        Webaudio API demo
      </a>
    ),
    from: dayjs('2016-02'),
    monogram: getUrl(reactLogo),
  },
  {
    title: 'Mobile manga reader',
    subtitle: (
      <LinkButton
        onClick={() =>
          MySwal.fire(
            <h3 style={{ color: 'white' }}>React Native app on iOS and Android</h3>,
            <div className="flex-row-images" style={{ width: '100%', transform: 'scale(0.8)' }}>
              <IPhone>
                <img src={mm0} alt="Manga reader home screen" />
              </IPhone>
              <IPhone>
                <img src={mm1} alt="Manga reader library screen" />
              </IPhone>
              <IPhone>
                <img src={mm2} alt="Manga reader detail screen" />
              </IPhone>
              <IPhone>
                <img src={mm3} alt="Manga reader reading screen" />
              </IPhone>
            </div>
          )
        }
      >
        React Native preview
      </LinkButton>
    ),
    from: dayjs('2018-06'),
    monogram: getUrl(reactNativeLogo),
  },
  {
    title: 'iPhone sniper',
    subtitle: 'SMS stock alert experiment',
    from: dayjs('2017-08'),
    monogram: getUrl(nodeLogo),
  },
];

const achievements = [
  {
    title: 'First place security tournament',
    subtitle: <IframeLink href="https://securecodewarrior.com/">Secure Code Warrior</IframeLink>,
    from: dayjs('2018-06'),
    monogram: getUrl(secureWarriorLogo),
  },
  {
    title: 'First place IAG Hackathon',
    subtitle: <IframeLink href="https://www.iag.com.au/">Insurance Australia Group</IframeLink>,
    from: dayjs('2018-07'),
    monogram: getUrl(iagLogo),
  },
  {
    title: 'Mensa membership',
    subtitle: <IframeLink href="https://www.mensa.org.au/">Australian Mensa</IframeLink>,
    from: dayjs('2018-08'),
    monogram: getUrl(mensaLogo),
  },
  {
    title: 'First clinic launched',
    subtitle: (
      <IframeLink href="https://nextpracticehealth.com/locations/wa-cloverdale">
        Next Practice Health Cloverdale
      </IframeLink>
    ),
    from: dayjs('2018-03'),
    monogram: getUrl(nphLogo),
  },
];

export default [
  ...setItemsType('work')(work),
  ...setItemsType('project')(projects),
  ...setItemsType('achievement')(achievements),
].sort((a, b) => {
  const isBefore = b.from.isBefore(a.from);
  return isBefore ? -1 : 1;
});
