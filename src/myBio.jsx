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

const IframeLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={event => {
      event.preventDefault();
      MySwal.fire(
        <Browser url={href}>
          {/* By pass x-frame-options, https://github.com/niutech/x-frame-bypass */}
          <iframe title={typeof children === 'string' ? children : 'Preview'} is="x-frame-bypass" src={href} />
        </Browser>
      );
    }}
  >
    {children}
  </a>
);

const work = [
  {
    title: 'Senior developer',
    subtitle: <IframeLink href="https://www.iag.com.au/">Insurance Australia Group</IframeLink>,
    from: dayjs('2018-05'),
    to: 'present',
    monogram: getUrl(iagLogo),
    summary: 'Shipping customer-facing products and internal platforms across a large enterprise environment.',
    highlights: ['Led end-to-end delivery across frontend, backend, and integration work.', 'Balanced product quality, delivery pace, and maintainability inside a complex domain.'],
    tags: ['React', 'Node.js', 'APIs', 'Delivery']
  },
  {
    title: 'Technical lead',
    subtitle: <IframeLink href="https://nextpracticehealth.com/become-a-partner">Next Practice Health</IframeLink>,
    from: dayjs('2017-11'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
    summary: 'Helped shape a modern digital experience for clinics launching under a new healthcare brand.',
    highlights: ['Worked closely with stakeholders to turn product ideas into launched experiences.', 'Owned technical direction while still staying hands-on with product development.'],
    tags: ['Leadership', 'Product thinking', 'Healthcare']
  },
  {
    title: 'Full stack developer',
    subtitle: <IframeLink href="https://nextpracticehealth.com/become-a-partner">Next Practice Health</IframeLink>,
    from: dayjs('2016-01'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
    summary: 'Built features across the stack during a fast-moving product buildout phase.',
    highlights: ['Delivered web product features that supported new clinic launches.', 'Moved comfortably between frontend experiences and backend implementation.'],
    tags: ['JavaScript', 'Full stack', 'Startup pace']
  },
  {
    title: 'Frontend developer',
    subtitle: <IframeLink href="https://www.koorong.com/">Koorong Books</IframeLink>,
    from: dayjs('2013-04'),
    to: dayjs('2015-12'),
    monogram: getUrl(koorongLogo),
    summary: 'Focused on ecommerce user experience and polished customer-facing interfaces.',
    highlights: ['Improved the shopping experience with practical, user-centered frontend work.', 'Built a strong foundation in UI craft, performance, and browser behavior.'],
    tags: ['Frontend', 'Ecommerce', 'UX']
  }
];

const projects = [
  {
    title: 'Realtime audio visualization',
    subtitle: (
      <a href="http://chill-tones.surge.sh/" target="_blank" rel="noopener noreferrer">
        Web Audio API demo
      </a>
    ),
    from: dayjs('2016-02'),
    monogram: getUrl(reactLogo),
    summary: 'An experiment in interactive visuals driven by live audio data in the browser.',
    highlights: ['Explored animation, rendering, and sound analysis in a playful interface.', 'Used the browser as a creative platform instead of just an application shell.'],
    tags: ['Web Audio', 'Animation', 'Creative coding']
  },
  {
    title: 'Mobile manga reader',
    subtitle: (
      <a
        href="#mango-manga"
        onClick={event => {
          event.preventDefault();
          MySwal.fire(
            <h3 style={{ color: 'white' }}>React native app on iOS/Android</h3>,
            <div className="flex-row-images" style={{ width: '100%', transform: 'scale(0.8)' }}>
              <IPhone>
                <img src={mm0} alt="Mango Manga home screen" />
              </IPhone>
              <IPhone>
                <img src={mm1} alt="Mango Manga library screen" />
              </IPhone>
              <IPhone>
                <img src={mm2} alt="Mango Manga reader screen" />
              </IPhone>
              <IPhone>
                <img src={mm3} alt="Mango Manga browsing screen" />
              </IPhone>
            </div>
          );
        }}
      >
        React Native concept
      </a>
    ),
    from: dayjs('2018-06'),
    monogram: getUrl(reactNativeLogo),
    summary: 'A mobile reading experience designed around discovery and comfortable long-form reading.',
    highlights: ['Designed for native mobile interaction instead of porting a web mental model.', 'Focused on browsing, reading flow, and visual clarity.'],
    tags: ['React Native', 'Mobile UX', 'Side project']
  },
  {
    title: 'iPhone sniper',
    subtitle: 'An SMS alert tool for hard-to-find stock drops',
    from: dayjs('2017-08'),
    monogram: getUrl(nodeLogo),
    summary: 'A pragmatic automation project built to solve a real purchasing problem quickly.',
    highlights: ['Monitored availability and sent timely alerts when stock appeared.', 'Turned a frustrating manual process into a simple notification flow.'],
    tags: ['Node.js', 'Automation', 'Scraping']
  }
];

const achievements = [
  {
    title: 'First place security tournament',
    subtitle: <IframeLink href="https://securecodewarrior.com/">Secure Code Warrior</IframeLink>,
    from: dayjs('2018-06'),
    monogram: getUrl(secureWarriorLogo),
    summary: 'Recognition for fast problem solving and secure engineering instincts under pressure.',
    tags: ['Security', 'Competition']
  },
  {
    title: 'First place IAG hackathon',
    subtitle: <IframeLink href="https://www.iag.com.au/">Insurance Australia Group</IframeLink>,
    from: dayjs('2018-07'),
    monogram: getUrl(iagLogo),
    summary: 'Built and presented a standout prototype in a time-boxed team environment.',
    tags: ['Innovation', 'Hackathon']
  },
  {
    title: 'Mensa membership',
    subtitle: <IframeLink href="https://www.mensa.org.au/">Australian Mensa Group</IframeLink>,
    from: dayjs('2018-08'),
    monogram: getUrl(mensaLogo),
    summary: 'A fun personal milestone that rounds out the more formal career story.',
    tags: ['Personal']
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
    summary: 'A visible launch milestone tied directly to the product and platform work behind it.',
    tags: ['Launch', 'Impact']
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
