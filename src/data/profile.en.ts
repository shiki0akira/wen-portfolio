// English version of profile.ts. Keep the same exports and shapes; only the wording differs.
import type { Job, AboutSection } from './profile';
import { profile as zh } from './profile';

export const profile = {
  ...zh,
  tagline: 'From fuzzy ideas to shipped products.',
  location: 'Remote-friendly',
  status: 'Open for projects',
  proofs: [
    { ability: 'Product experience across industries', value: 6, suffix: '', unit: 'years', desc: 'E-commerce, B2B SaaS, AI, fintech and industrial equipment', href: '/experience/', cta: 'See experience' },
    { ability: 'Projects delivered', value: 'works', suffix: '', unit: 'projects', desc: 'In-house products, side projects, freelance and competitions', href: '/work/', cta: 'See work' },
    { ability: 'Owning product results', value: 500, suffix: '+', unit: 'stores', desc: 'E-commerce clients on BIRSE, NT$1M+ in annual revenue', href: '/work/birse/', cta: 'Read case' },
    { ability: 'Shipping fast with AI', value: 800, suffix: '+', unit: 'users', desc: 'On Web100, six products I built with AI', href: '/work/web100/', cta: 'Read case' },
  ],
};

export const experience: Job[] = [
  {
    period: '2026/6 — Present',
    title: 'UI/UX Designer & Indie Product Builder',
    company: 'Freelance',
    meta: 'Remote',
    summary: 'Taking on UI/UX projects while running my own product, Web100.',
    projects: [
      {
        name: 'Side project: Web100 party games',
        work: 'web100',
        points: [
          'Built six interactive party web apps on my own with Claude Code, available in 8 languages',
          '800+ users since launch; I run play-tests in person and keep improving them',
        ],
      },
    ],
  },
  {
    period: '2023/3 — 2026/6',
    duration: '3 yrs 4 mos',
    title: 'UX Designer',
    company: 'BigGo',
    meta: 'Software',
    summary: 'Owned flows, specs and UI for B2B and B2C products. Specs lived in Figma, and engineers built and tested against them.',
    projects: [
      {
        name: 'BIRSE: Shopify visual search app (lead)',
        work: 'birse',
        points: [
          'Proposed and secured the official Built for Shopify certification, reworking the product to meet the requirements',
          'Designed image search for fashion and furniture stores, so shoppers find what they want faster',
          'Later owned the product end to end, including back-office settings and customer issues',
          '500+ e-commerce clients and NT$1M+ in annual revenue',
        ],
      },
      {
        name: 'BigGo PMS: price monitoring system',
        work: 'pms',
        points: [
          'Designed data charts and enterprise features that save brands hours of manual price checks',
          'Adopted by enterprise clients including LG, Carrefour Taiwan, Chunghwa Post and Quaker',
        ],
      },
      {
        name: 'OAPhub: AI tools platform',
        work: 'oaphub',
        points: ['Competitor research showed "too much clutter" was the main problem, so I restructured the whole platform'],
      },
      {
        name: 'Dive: open-source AI desktop app',
        work: 'dive',
        points: ['Reviewed user flows and helped align Dive and OAPhub on one design system'],
      },
    ],
    tags: ['Figma', 'SaaS', 'Competitor analysis', 'AI'],
  },
  {
    period: '2022/9 — 2023/2',
    duration: '6 mos',
    title: 'UI/UX Designer',
    company: 'Rong Xing Automation',
    meta: 'Industrial automation',
    summary: 'Led the redesign of a warehouse management system.',
    projects: [
      {
        name: 'WMS redesign',
        work: 'wms',
        points: [
          'Redesigned a system that had been in development for a year, in just 2 months, now usable on desktop and mobile',
          'Built a design system and component library from scratch, speeding up later updates',
        ],
      },
    ],
  },
  {
    period: '2020/8 — 2022/5',
    duration: '1 yr 10 mos',
    title: 'UI/UX Designer',
    company: 'AI Art',
    meta: 'Software · fully remote',
    summary: 'Fully remote; built most projects from scratch on my own.',
    projects: [
      {
        name: 'AI Hedge.finance: crypto investment platform',
        work: 'aihedge-dapp',
        points: [
          'Designed the web and mobile apps solo, from flows and prototypes to the design system',
          'Turned complex steps like trading and wallet connection into flows beginners can complete',
        ],
      },
      {
        name: 'AI Hedge: website and brand',
        work: 'aihedge-brand',
        points: ['Designed the official website and brand identity, and produced product videos'],
      },
    ],
  },
  {
    period: '2019/8 — 2020/4',
    duration: '9 mos',
    title: 'Product Designer',
    company: 'Chi Jin Kiln',
    meta: 'Ceramics',
    summary: 'Physical product design and large-scale art installations.',
    projects: [
      { name: 'Art installations', points: ['Coordinated between designers, manufacturers and the on-site team'] },
      { name: 'Product design', points: ['Designed products in 3D and validated details with 3D printing'] },
    ],
  },
];

export const education = [
  { school: 'National Cheng Kung University', dept: 'M.S. in Industrial Design (in-service program, in progress)', period: '2026/9 — 2028/6' },
  { school: 'National Taipei University of Technology', dept: 'B.S. in Industrial Design, Product Design', period: '2015/9 — 2019/6' },
  { school: 'Kaohsiung Commercial High School', dept: 'Advertising Design', period: '2012/9 — 2015/6' },
];

export const skills = [
  {
    name: 'Product planning',
    desc: 'Interviews, competitor research, user flows and specs. I turn fuzzy ideas into documents engineers can build from.',
    tags: ['Competitor analysis', 'Specs', 'User testing'],
  },
  {
    name: 'UI/UX design',
    desc: 'From wireframes and prototypes to design systems, with a focus on B2B tools, e-commerce and fintech.',
    tags: ['Figma', 'Prototype', 'Design System'],
  },
  {
    name: 'Building with AI',
    desc: 'I work out the rules with AI, write a spec, have Claude Code build it, then test and sign off myself. I also use NotebookLM and Gemini for research.',
    tags: ['Claude Code', 'Gemini', 'NotebookLM', 'MCP'],
  },
  {
    name: 'Data & SEO',
    desc: 'GA4 for user behaviour, Search Console for rankings and multilingual pages.',
    tags: ['GA4', 'Search Console', 'SEO'],
  },
  {
    name: 'Technical know-how',
    desc: 'I write HTML and CSS, deploy sites myself, and can talk implementation with engineers.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
  {
    name: 'Collaboration',
    desc: 'Tracking work in GitHub Issues; comfortable with Scrum.',
    tags: ['Scrum', 'JIRA', 'GitHub'],
  },
];

export const awards = [
  { year: '2022', name: 'THE F2E 4th Hackathon (team)', result: 'Two projects shortlisted' },
  { year: '2019', name: 'Home Appliance Design Competition', result: 'Honorable Mention' },
  { year: '2019', name: 'Taipei Tech Industrial Design Week', result: 'Bronze Award (sponsored by Tsann Kuen)' },
  { year: '2018', name: '6th Ergonomic Design for Seniors', result: '2nd Place' },
  { year: '2018', name: 'Lexus Workshop, Taipei', result: 'Best Creative Design Award' },
  { year: '2016', name: 'NYHI Ocean Protection T-shirt Design Contest', result: 'Honorable Mention' },
  { year: '2016', name: 'Health Tech App Innovation Competition', result: '3rd Place; 2nd Place for Dashboard Design' },
];

export const about: AboutSection[] = [
  {
    heading: 'About me',
    body: [
      "I'm Pin Wen Zhang (Wen), a UI/UX designer and product planner with 6 years of experience. I've worked on products in e-commerce, B2B SaaS, AI, fintech and industrial equipment. From shaping requirements and designing the interface to shipping the site with AI, I can take on the whole journey with you.",
    ],
  },
  {
    heading: 'Products I have built',
    body: [
      'At BigGo I led BIRSE, a Shopify app that earned the official Built for Shopify certification and grew to 500+ e-commerce clients. I also designed a price monitoring system adopted by LG and Carrefour Taiwan, and redesigned a warehouse system in 2 months after a year of development.',
    ],
  },
  {
    heading: 'What you can expect',
    points: [
      { title: 'Understand first, then design', text: 'I start by clarifying your users and the problem to solve, so every screen has a reason to exist.' },
      { title: 'Designs engineers can build right away', text: 'Flows, specs and components are clearly documented to cut back-and-forth. I know front-end too, so I can talk directly with your engineers.' },
      { title: 'Faster with AI', text: 'With Claude Code I take projects from spec to launch; my first product shipped in 4 evenings. Great for testing ideas quickly.' },
      { title: 'Smooth remote collaboration', text: 'Nearly two years of fully remote work. I collaborate in Figma and GitHub, share regular updates and iterate on feedback.' },
    ],
  },
];

export const services = [
  {
    name: 'UI/UX design',
    desc: 'Interfaces for websites, apps, admin panels and dashboards, with clickable prototypes.',
    tags: ['B2B tools', 'Admin panels', 'E-commerce'],
  },
  {
    name: 'AI-assisted websites',
    desc: 'From spec to launch with Claude Code, delivering a working website fast.',
    tags: ['Campaign sites', 'MVPs'],
  },
  {
    name: 'Design systems',
    desc: 'A consistent visual language and component library that makes future updates faster.',
    tags: ['Redesigns', 'Component libraries'],
  },
  {
    name: 'Product planning & specs',
    desc: 'Turn your idea into clear flows and specs that engineers can build from.',
    tags: ['New products', 'Requirements', 'Specs'],
  },
];

export const process = [
  { step: 'Discuss', desc: 'Understand your goals and timeline' },
  { step: 'Proposal', desc: 'Agree on scope and deliverables' },
  { step: 'Design & build', desc: 'Regular check-ins, iterate on feedback' },
  { step: 'Deliver', desc: 'Hand off design files or launch the site' },
];
