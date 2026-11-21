// Curated Work page content. Concept studies are intentionally separated from
// verified client projects; add client work only after publication approval.
export const workCategories = [
  'All',
  'Case Studies',
  'Video',
  'Graphics & Posters',
  'Branding',
  'Websites & Technology',
];

export const projects = [
  {
    id: 'brand-identity-systems',
    name: 'Brand identity systems',
    type: 'Branding',
    category: 'Branding',
    desc: 'Visual identity explorations, typography, colour and brand applications.',
    kind: 'Identity study',
    visual: 'identity',
  },
  {
    id: 'campaign-films',
    name: 'Campaign films',
    type: 'Video',
    category: 'Video',
    desc: 'Short-form storytelling, motion direction and product-focused film concepts.',
    kind: 'Motion study',
    visual: 'motion',
  },
  {
    id: 'editorial-graphics',
    name: 'Editorial graphics',
    type: 'Graphics & Posters',
    category: 'Graphics & Posters',
    desc: 'Campaign layouts, social systems, posters and information-led design.',
    kind: 'Editorial study',
    visual: 'editorial',
  },
  {
    id: 'digital-experiences',
    name: 'Digital experiences',
    type: 'Websites & Technology',
    category: 'Websites & Technology',
    desc: 'Responsive interfaces, website structures and useful digital product concepts.',
    kind: 'Interface study',
    visual: 'interface',
  },
];

export const workCategoryDetails = {
  'Case Studies': {
    eyebrow: 'WORK / VERIFIED PROJECTS',
    title: 'The thinking behind the work.',
    description: 'A case study should show the real context, decisions, deliverables and evidence behind a project—not just a polished final screen.',
    chapter: 'Proof is part of the craft.',
    story: 'We publish detailed project stories only when the work, client context and supporting evidence are approved. There are no public case studies in this preview yet.',
    focus: ['The challenge and context', 'The approach and key decisions', 'The delivered work and verified outcomes'],
    scene: 'case-studies',
    emptyTitle: 'No case studies published yet.',
    emptyCopy: 'We are preparing project stories with the right context and approvals. Until then, explore the concept studies or talk to us about a project.',
  },
  Video: {
    eyebrow: 'WORK / MOTION & FILM',
    title: 'Ideas that move with meaning.',
    description: 'A video is more than a sequence of shots. It is a guided experience shaped by story, rhythm, sound and a clear message.',
    chapter: 'From first frame to final feeling.',
    story: 'Explore motion and film direction concepts—from product storytelling and campaign films to short-form edits and kinetic typography.',
    focus: ['Story and visual direction', 'Motion, pacing and sound', 'Format-ready content systems'],
    scene: 'video',
  },
  'Graphics & Posters': {
    eyebrow: 'WORK / GRAPHIC DESIGN',
    title: 'Make the message impossible to miss.',
    description: 'Strong graphic communication gives an idea a clear hierarchy, a recognizable voice and a useful next step.',
    chapter: 'Clarity is a visual decision.',
    story: 'Explore editorial layouts, campaign graphics, posters and repeatable social content systems designed around the message.',
    focus: ['Visual hierarchy and composition', 'Campaign and social adaptations', 'Reusable design systems'],
    scene: 'graphics',
  },
  Branding: {
    eyebrow: 'WORK / BRAND IDENTITY',
    title: 'Build a system people can recognize.',
    description: 'A brand identity is a connected language—not a logo in isolation. Every detail should reinforce the same idea.',
    chapter: 'Consistency creates recognition.',
    story: 'Explore identity concepts across typography, colour, graphic language and practical brand applications.',
    focus: ['Positioning translated into design', 'Typography, colour and graphic language', 'Consistent real-world applications'],
    scene: 'branding',
  },
  'Websites & Technology': {
    eyebrow: 'WORK / DIGITAL EXPERIENCES',
    title: 'Turn complex needs into clear experiences.',
    description: 'Useful digital experiences connect the people, information and actions that matter—across every screen.',
    chapter: 'Designed around the next action.',
    story: 'Explore responsive interface and website concepts that make information easier to understand and tasks easier to complete.',
    focus: ['Structure and user journeys', 'Interface systems and responsive layouts', 'Practical interactions and product thinking'],
    scene: 'websites',
  },
};

export const caseStudyTemplateSections = [
  'Project overview and approved context',
  'The challenge and audience need',
  'Research, insight and strategic direction',
  'Creative and technical execution',
  'Deliverables and implementation',
  'Verified outcomes with source and timeframe',
  'Credits, permissions and related work',
];
