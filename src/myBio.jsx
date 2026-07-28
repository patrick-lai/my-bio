/**
 * Configuration driven timeline
 */

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import React from 'react';
import dayjs from 'dayjs'; // Moment waaay tooo big
import { setItemsType, getUrl } from './_helpers';
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

const openPreview = ({ title, content }) =>
  MySwal.fire({
    title,
    html: content,
    background: 'rgba(18, 24, 38, 0.96)',
    showConfirmButton: false,
    width: 'min(960px, 92vw)',
    customClass: {
      popup: 'preview-modal'
    }
  });

const PreviewLink = ({ children, title, content }) => (
  <button className="inline-link-button" type="button" onClick={() => openPreview({ title, content })}>
    {children}
  </button>
);

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
);

const previewWebsite = href => (
  <Browser url={href}>
    {/* By pass x-frame-options, https://github.com/niutech/x-frame-bypass */}
    <iframe title={href} is="x-frame-bypass" src={href} />
  </Browser>
);

const work = [
  {
    title: 'Senior developer',
    subtitle: <PreviewLink title="Insurance Australia Group" content={previewWebsite('https://www.iag.com.au/')}>Insurance Australia Group</PreviewLink>,
    from: dayjs('2018-05'),
    to: 'present',
    monogram: getUrl(iagLogo),
    summary: 'Shipped customer-facing software across policy, claims, and internal delivery platforms.',
    highlights: ['Led full-stack delivery', 'Improved release confidence', 'Partnered with product and design'],
    skills: ['React', 'Node.js', 'APIs']
  },
  {
    title: 'Technical lead',
    subtitle: <PreviewLink title="Next Practice Health" content={previewWebsite('https://nextpracticehealth.com/become-a-partner')}>Next Practice Health</PreviewLink>,
    from: dayjs('2017-11'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
    summary: 'Owned product direction and delivery for digital tools used by modern healthcare clinics.',
    highlights: ['Set technical direction', 'Coordinated roadmap delivery', 'Mentored engineers'],
    skills: ['Leadership', 'Product delivery', 'Architecture']
  },
  {
    title: 'Full stack developer',
    subtitle: <PreviewLink title="Next Practice Health" content={previewWebsite('https://nextpracticehealth.com/become-a-partner')}>Next Practice Health</PreviewLink>,
    from: dayjs('2016-01'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
    summary: 'Built patient and clinic experiences spanning frontend, backend, and integrations.',
    highlights: ['Delivered booking flows', 'Built clinic management features', 'Worked across the stack'],
    skills: ['JavaScript', 'React', 'Integrations']
  },
  {
    title: 'Frontend developer',
    subtitle: <PreviewLink title="Koorong Books" content={previewWebsite('https://www.koorong.com/')}>Koorong Books</PreviewLink>,
    from: dayjs('2013-04'),
    to: dayjs('2015-12'),
    monogram: getUrl(koorongLogo),
    summary: 'Focused on ecommerce experiences and responsive interfaces for a large retail catalogue.',
    highlights: ['Improved storefront UX', 'Delivered responsive pages', 'Collaborated with marketing'],
    skills: ['Frontend', 'Ecommerce', 'Performance']
  }
];

const projects = [
  {
    title: 'Realtime audio visualization',
    subtitle: <ExternalLink href="http://chill-tones.surge.sh/">Webaudio API demo</ExternalLink>,
    from: dayjs('2016-02'),
    monogram: getUrl(reactLogo),
    summary: 'Experimented with motion and audio-reactive visuals to create an immersive browser experience.',
    highlights: ['Rendered realtime visual effects', 'Explored browser audio APIs'],
    skills: ['Web Audio API', 'Animation']
  },
  {
    title: 'Mobile manga reader',
    subtitle: (
      <PreviewLink
        title="Mobile manga reader"
        content={`
          <h3 style="color:white;margin-bottom:1rem;">React Native app on iOS/Android</h3>
          <div class="flex-row-images preview-gallery">
            <div class="phone-frame"><img src="${mm0}" alt="Manga reader library screen" /></div>
            <div class="phone-frame"><img src="${mm1}" alt="Manga reader discovery screen" /></div>
            <div class="phone-frame"><img src="${mm2}" alt="Manga reader reading experience" /></div>
            <div class="phone-frame"><img src="${mm3}" alt="Manga reader settings" /></div>
          </div>
        `}
      >
        React Native showcase
      </PreviewLink>
    ),
    from: dayjs('2018-06'),
    monogram: getUrl(reactNativeLogo),
    summary: 'Designed a native reading experience with image-heavy navigation and mobile-first performance constraints.',
    highlights: ['Built for iOS and Android', 'Optimized image-heavy screens'],
    skills: ['React Native', 'Mobile UX']
  },
  {
    title: 'iPhone sniper',
    subtitle: 'SMS alerts for hard-to-find stock drops',
    from: dayjs('2017-08'),
    monogram: getUrl(nodeLogo),
    summary: 'Automated stock monitoring and notifications to remove the need for manual refresh loops.',
    highlights: ['Automated alerts', 'Integrated messaging notifications'],
    skills: ['Node.js', 'Automation']
  }
];

const achievements = [
  {
    title: 'First place security tournament',
    subtitle: <PreviewLink title="Secure Code Warrior" content={previewWebsite('https://securecodewarrior.com/')}>Secure Code Warrior</PreviewLink>,
    from: dayjs('2018-06'),
    monogram: getUrl(secureWarriorLogo),
    summary: 'Placed first in a competitive security challenge focused on secure engineering practices.'
  },
  {
    title: 'First place IAG Hackathon',
    subtitle: <PreviewLink title="Insurance Australia Group" content={previewWebsite('https://www.iag.com.au/')}>Insurance Australia Group</PreviewLink>,
    from: dayjs('2018-07'),
    monogram: getUrl(iagLogo),
    summary: 'Won an internal hackathon by rapidly shaping and delivering a promising product idea.'
  },
  {
    title: 'Mensa membership',
    subtitle: <PreviewLink title="Australian Mensa" content={previewWebsite('https://www.mensa.org.au/')}>Australian Mensa</PreviewLink>,
    from: dayjs('2018-08'),
    monogram: getUrl(mensaLogo),
    summary: 'Recognized through membership in Australian Mensa.'
  },
  {
    title: 'First clinic launched',
    subtitle: (
      <PreviewLink
        title="Next Practice Health Cloverdale"
        content={previewWebsite('https://nextpracticehealth.com/locations/wa-cloverdale')}
      >
        Next Practice Health Cloverdale
      </PreviewLink>
    ),
    from: dayjs('2018-03'),
    monogram: getUrl(nphLogo),
    summary: 'Helped launch the first clinic backed by the digital platform built at Next Practice Health.'
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
