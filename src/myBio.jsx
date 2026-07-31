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
import mensaLogo from './assets/mensa-logo.png';

// Images
import mm0 from './assets/mangoManga/0.jpg';
import mm1 from './assets/mangoManga/1.jpg';
import mm2 from './assets/mangoManga/2.jpg';
import mm3 from './assets/mangoManga/3.jpg';

const MySwal = withReactContent(Swal);

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const PreviewButton = ({ label, title, children }) => (
  <button
    type="button"
    className="inline-preview"
    onClick={() =>
      MySwal.fire({
        html: <div className="preview-gallery">{children}</div>,
        title,
        showConfirmButton: false,
        showCloseButton: true,
        width: 'min(960px, 92vw)'
      })
    }
  >
    {label}
  </button>
);

const TimelinePoints = ({ points = [] }) => (
  <ul className="timeline-points">
    {points.map(point => (
      <li key={point}>{point}</li>
    ))}
  </ul>
);

const TimelineTags = ({ tags = [] }) => (
  <div className="timeline-tags" aria-label="Skills and focus areas">
    {tags.map(tag => (
      <span key={tag}>{tag}</span>
    ))}
  </div>
);

const work = [
  {
    title: 'Senior developer',
    subtitle: <ExternalLink href="https://www.iag.com.au/">Insurance Australia Group</ExternalLink>,
    from: dayjs('2018-05'),
    to: 'present',
    monogram: getUrl(iagLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'Built customer-facing insurance experiences with an emphasis on clarity, trust, and faster completion.',
            'Improved internal engineering workflows so teams could ship product changes with less friction.',
            'Worked across frontend and backend delivery, balancing reliability with polished UX.'
          ]}
        />
        <TimelineTags tags={['React', 'Node.js', 'Design systems', 'DX']} />
      </>
    )
  },
  {
    title: 'Technical lead',
    subtitle: <ExternalLink href="https://nextpracticehealth.com/become-a-partner">Next Practice Health</ExternalLink>,
    from: dayjs('2017-11'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'Led product delivery for a digital healthcare experience used by clinics and patients.',
            'Aligned technical decisions with a smoother onboarding journey for new practices.',
            'Shaped team direction while keeping execution practical and fast.'
          ]}
        />
        <TimelineTags tags={['Product leadership', 'Healthcare UX', 'Delivery']} />
      </>
    )
  },
  {
    title: 'Full stack developer',
    subtitle: <ExternalLink href="https://nextpracticehealth.com/become-a-partner">Next Practice Health</ExternalLink>,
    from: dayjs('2016-01'),
    to: dayjs('2018-05'),
    monogram: getUrl(nphLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'Built the foundations of a patient and clinic platform from frontend flows through backend integrations.',
            'Focused on making complex healthcare operations feel approachable to everyday users.',
            'Partnered closely with the business to turn product ideas into usable software quickly.'
          ]}
        />
        <TimelineTags tags={['Full stack', 'Integrations', 'Product discovery']} />
      </>
    )
  },
  {
    title: 'Frontend developer',
    subtitle: <ExternalLink href="https://www.koorong.com/">Koorong Books</ExternalLink>,
    from: dayjs('2013-04'),
    to: dayjs('2015-12'),
    monogram: getUrl(koorongLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'Delivered ecommerce interfaces that helped customers browse, evaluate, and buy with less friction.',
            'Improved front-end quality while supporting a fast-moving retail environment.',
            'Learned how small visual and interaction details can meaningfully affect conversion.'
          ]}
        />
        <TimelineTags tags={['Ecommerce', 'Frontend architecture', 'Conversion UX']} />
      </>
    )
  }
];

const projects = [
  {
    title: 'Realtime audio visualization',
    subtitle: (
      <ExternalLink href="http://chill-tones.surge.sh/">Interactive Web Audio experiment</ExternalLink>
    ),
    from: dayjs('2016-02'),
    monogram: getUrl(reactLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'Explored how motion and sound feedback can make a simple browser experience feel alive.',
            'Used visual responsiveness as the core interaction, inviting people to play rather than just read.',
            'A good example of turning a technical API into something instantly understandable.'
          ]}
        />
        <TimelineTags tags={['Web Audio API', 'Interaction design', 'Creative coding']} />
      </>
    )
  },
  {
    title: 'Mobile manga reader',
    subtitle: (
      <div className="timeline-link-group">
        <span>React Native side project</span>
        <PreviewButton label="Open app gallery" title="Mobile manga reader">
          <div className="flex-row-images preview-phones">
            <IPhone>
              <img src={mm0} alt="Library view" />
            </IPhone>
            <IPhone>
              <img src={mm1} alt="Reading view" />
            </IPhone>
            <IPhone>
              <img src={mm2} alt="Discover view" />
            </IPhone>
            <IPhone>
              <img src={mm3} alt="Detail view" />
            </IPhone>
          </div>
        </PreviewButton>
      </div>
    ),
    from: dayjs('2018-06'),
    monogram: getUrl(reactNativeLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'Designed for a lean-back reading flow where discovery, continuation, and immersion mattered most.',
            'Focused on touch-first navigation and a clean visual hierarchy for long-form reading.',
            'The gallery shows the app screens directly instead of hiding them behind an unexpected link interaction.'
          ]}
        />
        <TimelineTags tags={['React Native', 'Mobile UX', 'Reader experience']} />
      </>
    )
  },
  {
    title: 'iPhone sniper',
    subtitle: 'Stock alert side project',
    from: dayjs('2017-08'),
    monogram: getUrl(nodeLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'Built a focused utility that watched availability and sent a text when action was needed.',
            'Optimised for one user moment: seeing a scarce item in stock before it disappeared again.',
            'Shows a bias for shipping simple products that solve a real problem well.'
          ]}
        />
        <TimelineTags tags={['Node.js', 'Automation', 'SMS notifications']} />
      </>
    )
  }
];

const achievements = [
  {
    title: 'First place security tournament',
    subtitle: <ExternalLink href="https://securecodewarrior.com/">Secure Code Warrior</ExternalLink>,
    from: dayjs('2018-06'),
    monogram: getUrl(secureWarriorLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'Demonstrated practical security problem-solving under pressure.',
            'Reflects an engineering style that values safe defaults as part of product quality.',
            'Security thinking influences both implementation and end-user trust.'
          ]}
        />
        <TimelineTags tags={['Application security', 'Problem solving', 'Quality']} />
      </>
    )
  },
  {
    title: 'First place IAG Hackathon',
    subtitle: <ExternalLink href="https://www.iag.com.au/">Insurance Australia Group</ExternalLink>,
    from: dayjs('2018-07'),
    monogram: getUrl(iagLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'Turned ideas into a compelling prototype quickly enough to stand out in a competitive environment.',
            'Highlights speed, collaboration, and the ability to communicate product value clearly.',
            'Hackathon work is often where strong UX instincts show up fastest.'
          ]}
        />
        <TimelineTags tags={['Rapid prototyping', 'Collaboration', 'Product thinking']} />
      </>
    )
  },
  {
    title: 'Mensa membership',
    subtitle: <ExternalLink href="https://www.mensa.org.au/">Australian Mensa</ExternalLink>,
    from: dayjs('2018-08'),
    monogram: getUrl(mensaLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'A signal of curiosity and comfort with complex problem spaces.',
            'Best paired with the practical delivery record shown throughout the rest of the portfolio.'
          ]}
        />
        <TimelineTags tags={['Analytical thinking', 'Curiosity']} />
      </>
    )
  },
  {
    title: 'First clinic launched',
    subtitle: (
      <ExternalLink href="https://nextpracticehealth.com/locations/wa-cloverdale">
        Next Practice Health Cloverdale
      </ExternalLink>
    ),
    from: dayjs('2018-03'),
    monogram: getUrl(nphLogo),
    content: (
      <>
        <TimelinePoints
          points={[
            'A concrete milestone showing software turned into a live customer experience.',
            'Represents the moment product design, implementation, and operational reality came together.',
            'Outcome-focused work like this gives the timeline more credibility than titles alone.'
          ]}
        />
        <TimelineTags tags={['Launch', 'Operations', 'Outcome driven']} />
      </>
    )
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
