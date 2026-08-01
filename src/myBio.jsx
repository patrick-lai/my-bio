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

const stopNavigation = e => e.preventDefault();

const IframeLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    onClick={e => {
      stopNavigation(e);
      MySwal.fire(
        <Browser url={href}>
          {/* By pass x-frame-options, https://github.com/niutech/x-frame-bypass */}
          <iframe title={href} is="x-frame-bypass" src={href} />
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
    content: 'Leading and shipping customer-facing insurance experiences across a large product surface.'
  },
  {
    title: 'Technical lead',
    subtitle: <IframeLink href="https://nextpracticehealth.com/become-a-partner">Next Practice Health</IframeLink>,
    from: dayjs('2017-11'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
    content: 'Took product ideas from concept to launch and helped define the engineering direction for a growing health platform.'
  },
  {
    title: 'Full stack developer',
    subtitle: <IframeLink href="https://nextpracticehealth.com/become-a-partner">Next Practice Health</IframeLink>,
    from: dayjs('2016-01'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
    content: 'Built the web platform, partner tooling, and operational features needed to open new clinics quickly.'
  },
  {
    title: 'Frontend developer',
    subtitle: <IframeLink href="https://www.koorong.com/">Koorong Books</IframeLink>,
    from: dayjs('2013-04'),
    to: dayjs('2015-12'),
    monogram: getUrl(koorongLogo),
    content: 'Focused on ecommerce UX, storefront polish, and the details that make online shopping feel dependable.'
  }
];

const projects = [
  {
    title: 'Realtime audio visualization',
    subtitle: (
      <a href="http://chill-tones.surge.sh/" target="_blank" rel="noreferrer">
        Webaudio api
      </a>
    ),
    from: dayjs('2016-02'),
    monogram: getUrl(reactLogo),
    content: 'An experiment in turning sound into fluid visuals with a playful, highly interactive front end.'
  },
  {
    title: 'Mobile manga reader',
    subtitle: (
      <a
        href="#manga-reader"
        onClick={e => {
          stopNavigation(e);
          MySwal.fire(
            <h3 style={{ color: 'white' }}>React native app on iOS/Android</h3>,
            <div className="flex-row-images" style={{ width: '100%', transform: 'scale(0.8)' }}>
              <IPhone>
                <img alt="Mango Manga screenshot 1" src={mm0} />
              </IPhone>
              <IPhone>
                <img alt="Mango Manga screenshot 2" src={mm1} />
              </IPhone>
              <IPhone>
                <img alt="Mango Manga screenshot 3" src={mm2} />
              </IPhone>
              <IPhone>
                <img alt="Mango Manga screenshot 4" src={mm3} />
              </IPhone>
            </div>
          );
        }}
      >
        React native
      </a>
    ),
    from: dayjs('2018-06'),
    monogram: getUrl(reactNativeLogo),
    content: 'A polished reading experience for long-form content, designed for fast browsing and comfortable mobile sessions.'
  },
  {
    title: 'iPhone sniper',
    subtitle: 'Just SMSed me when the iphone was in stock',
    from: dayjs('2017-08'),
    monogram: getUrl(nodeLogo),
    content: 'A lightweight automation tool that watched stock levels and turned a tedious manual task into a notification.'
  }
];

const achievements = [
  {
    title: 'First place security tournament',
    subtitle: <IframeLink href="https://securecodewarrior.com/">Secure code warrior</IframeLink>,
    from: dayjs('2018-06'),
    monogram: getUrl(secureWarriorLogo),
    content: 'Won a hands-on security competition by finding and fixing vulnerabilities under pressure.'
  },
  {
    title: 'First place IAG Hackathon',
    subtitle: <IframeLink href="https://www.iag.com.au/">Insurance Australia Group</IframeLink>,
    from: dayjs('2018-07'),
    monogram: getUrl(iagLogo),
    content: 'Built and pitched a product concept quickly enough to win a cross-team hackathon.'
  },
  {
    title: 'Mensa Membership',
    subtitle: <IframeLink href="https://www.mensa.org.au/">Australian Mensa Group</IframeLink>,
    from: dayjs('2018-08'),
    monogram: getUrl(mensaLogo),
    content: 'A personal milestone that adds some character alongside the professional story.'
  },
  {
    title: 'First Clinic launched',
    subtitle: (
      <IframeLink href="https://nextpracticehealth.com/locations/wa-cloverdale">
        Next Practice Health Cloverdale
      </IframeLink>
    ),
    from: dayjs('2018-03'),
    monogram: getUrl(nphLogo),
    content: 'Helped deliver the software foundations behind the first clinic launch for the brand.'
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
