const entries = [
  {
    type: 'work',
    title: 'Senior developer',
    organization: { label: 'Insurance Australia Group', href: 'https://www.iag.com.au/' },
    date: 'May 2018 — Present',
    summary: 'Building digital experiences and internal platforms at enterprise scale.',
    highlights: [
      'Shipped customer-facing improvements across insurance journeys.',
      'Worked across frontend, backend, and delivery with cross-functional teams.',
      'Balanced polish, performance, and maintainability in long-lived products.'
    ],
    tags: ['React', 'Node.js', 'Design systems', 'Delivery']
  },
  {
    type: 'achievement',
    title: 'Mensa membership',
    organization: { label: 'Australian Mensa', href: 'https://www.mensa.org.au/' },
    date: 'August 2018',
    summary: 'A fun datapoint alongside a career centered on building useful products.',
    tags: ['Recognition']
  },
  {
    type: 'achievement',
    title: 'First place IAG Hackathon',
    organization: { label: 'Insurance Australia Group', href: 'https://www.iag.com.au/' },
    date: 'July 2018',
    summary: 'A fast-turnaround win built around strong execution and experimentation.',
    tags: ['Hackathon', 'Innovation']
  },
  {
    type: 'project',
    title: 'Mobile manga reader',
    organization: { label: 'Featured preview below', href: '#projects' },
    date: 'June 2018',
    summary: 'A mobile reading experience built around fast browsing and comfortable consumption.',
    highlights: [
      'Designed for repeat engagement with a content-heavy interface.',
      'Optimized around mobile-first gestures and reading ergonomics.'
    ],
    tags: ['React Native', 'Mobile UX', 'Consumer app']
  },
  {
    type: 'achievement',
    title: 'First place security tournament',
    organization: { label: 'Secure Code Warrior', href: 'https://securecodewarrior.com/' },
    date: 'June 2018',
    summary: 'Recognition for practical security problem-solving under pressure.',
    tags: ['Security', 'Competition']
  },
  {
    type: 'work',
    title: 'Technical lead',
    organization: { label: 'Next Practice Health', href: 'https://nextpracticehealth.com/become-a-partner' },
    date: 'November 2017 — May 2018',
    summary: 'Led product delivery for a modern healthcare startup scaling its clinic experience.',
    highlights: [
      'Coordinated engineers and product priorities as the platform evolved quickly.',
      'Helped turn operational workflows into usable digital tools.',
      'Supported launches tied to real-world clinic openings.'
    ],
    tags: ['Leadership', 'Product thinking', 'Healthcare', 'Rapid iteration']
  },
  {
    type: 'project',
    title: 'iPhone sniper',
    organization: { label: 'Personal automation project' },
    date: 'August 2017',
    summary: 'Stock alerts that sent an SMS the moment inventory appeared.',
    highlights: ['Monitored stock changes and notified instantly.', 'A pragmatic solution to a real purchase problem.'],
    tags: ['Node.js', 'Automation', 'SMS']
  },
  {
    type: 'work',
    title: 'Full stack developer',
    organization: { label: 'Next Practice Health', href: 'https://nextpracticehealth.com/become-a-partner' },
    date: 'January 2016 — May 2018',
    summary: 'Built the product foundations behind patient and clinic experiences.',
    highlights: [
      'Delivered features across the stack for both internal staff and external users.',
      'Supported experiments needed by a fast-moving early-stage team.'
    ],
    tags: ['JavaScript', 'React', 'Node.js', 'Startups']
  },
  {
    type: 'project',
    title: 'Realtime audio visualization',
    organization: { label: 'Web Audio API demo', href: 'http://chill-tones.surge.sh/' },
    date: 'February 2016',
    summary: 'An interactive browser experiment pairing sound with reactive visuals.',
    highlights: [
      'Explored animation, rendering, and audio processing in the browser.',
      'Designed to feel playful and immediate for first-time visitors.'
    ],
    tags: ['Web Audio API', 'React', 'Creative coding']
  },
  {
    type: 'work',
    title: 'Frontend developer',
    organization: { label: 'Koorong Books', href: 'https://www.koorong.com/' },
    date: 'April 2013 — December 2015',
    summary: 'Focused on storefront UX and frontend implementation for ecommerce.',
    highlights: ['Improved customer-facing pages and purchasing flows.', 'Built polished interfaces where clarity and speed mattered.'],
    tags: ['Frontend', 'Ecommerce', 'UX', 'Performance']
  }
];

const timeline = document.getElementById('timeline');
const resultsMeta = document.getElementById('results-meta');
const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));

function badgeLabel(type) {
  if (type === 'work') return 'Work';
  if (type === 'project') return 'Project';
  return 'Achievement';
}

function linkMarkup(organization) {
  if (!organization.href) return organization.label;
  return `<a href="${organization.href}" ${organization.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${organization.label}</a>`;
}

function renderTimeline(filter = 'all') {
  const visibleEntries = filter === 'all' ? entries : entries.filter(entry => entry.type === filter);

  resultsMeta.textContent = `Showing ${visibleEntries.length} ${visibleEntries.length === 1 ? 'entry' : 'entries'}.`;

  timeline.innerHTML = visibleEntries
    .map(
      entry => `
        <article class="timeline-card">
          <div class="timeline-meta-row">
            <span class="type-badge type-${entry.type}">${badgeLabel(entry.type)}</span>
            <span class="timeline-date">${entry.date}</span>
          </div>
          <h3>${entry.title}</h3>
          <h4>${linkMarkup(entry.organization)}</h4>
          <p class="timeline-summary">${entry.summary}</p>
          ${
            entry.highlights
              ? `<ul class="timeline-highlights">${entry.highlights.map(item => `<li>${item}</li>`).join('')}</ul>`
              : ''
          }
          <div class="tag-list">${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        </article>
      `
    )
    .join('');
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('is-active'));
    button.classList.add('is-active');
    renderTimeline(button.dataset.filter);
  });
});

renderTimeline();
