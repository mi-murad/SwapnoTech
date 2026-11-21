import React, { useEffect, useState } from 'react';
import { BN_COPY } from './translations.js';
import { resolveRoute } from './routes.js';
import { projects, workCategories, workCategoryDetails, caseStudyTemplateSections } from './work-content.js';
import { serviceFamilies, aboutContent } from './service-content.js';
import { engagementOptions, engagementPrinciples, engagementFaqs } from './package-content.js';
import { insights, insightCategories, insightReadingTime } from './insights-content.js';


function tx(lang, value) {
  if (lang !== 'BN' || typeof value !== 'string') return value;
  const key = value.trim();
  const translated = Object.prototype.hasOwnProperty.call(BN_COPY, key) ? BN_COPY[key] : BN_COPY[value];
  if (typeof translated !== 'string') return value;
  const leadingLength = value.length - value.trimStart().length;
  const trailingLength = value.length - value.trimEnd().length;
  return value.slice(0, leadingLength) + translated + (trailingLength ? value.slice(-trailingLength) : '');
}
function Localize({ lang = 'EN', children }) {
  if (lang !== 'BN') return children;
  const walk = (node) => {
    if (typeof node === 'string') return tx(lang, node);
    if (Array.isArray(node)) return node.map(walk);
    if (!React.isValidElement(node)) return node;
    const props = {};
    ['aria-label', 'placeholder', 'title', 'alt'].forEach((key) => {
      if (typeof node.props[key] === 'string') props[key] = tx(lang, node.props[key]);
    });
    const children = React.Children.map(node.props.children, walk);
    return React.cloneElement(node, props, children);
  };
  return <>{React.Children.map(children, walk)}</>;
}

const routes = [
  ['Home','/'],['Services','/services'],['Packages','/packages'],['Work','/work'],
  ['Insights','/insights'],['About','/about'],['Contact','/contact']
];
const products = [
  {name:'Website Solution',tag:'Launch your digital home',desc:'Build a polished, mobile-ready website from guided structures. Choose a starting point, shape your pages and publish with confidence.',href:'/products/website-solution',number:'01'},
  {name:'Creator Platform',tag:'Make your work discoverable',desc:'A professional home for creators to present their skills, projects and experience—and connect with the right opportunities.',href:'/products/creator-platform',number:'02'},
  {name:'Hosting',tag:'A reliable place to begin',desc:'Compare suitable hosting options and get help coordinating setup, migration and ongoing support.',href:'/products/hosting',number:'03'}
];
const services = [
  ['01','Brand & identity','Positioning, visual identity and brand systems that make a business recognizable.'],
  ['02','Content & campaigns','Creative direction, social content, motion and campaigns built around a clear objective.'],
  ['03','Websites & platforms','Responsive websites, landing pages and practical digital products.'],
  ['04','Growth & marketing','Research-led strategy, channel planning and ongoing digital marketing support.'],
  ['05','Creative production','Graphic design, video editing, animation and product-focused storytelling.'],
  ['06','Business technology','Automation, integrations and digital workflows that reduce friction.']
];
const serviceDetails={
 '/services/brand-identity':['Brand & identity','Build a recognizable foundation.','Positioning, visual direction, logo systems, typography, colour and practical brand applications.'],
 '/services/content-campaigns':['Content & campaigns','Give every message a clear purpose.','Creative direction, content planning, campaign concepts, social assets and motion-led storytelling.'],
 '/services/websites-platforms':['Websites & platforms','Make your digital presence work harder.','Responsive websites, landing pages, product interfaces and practical platform experiences.'],
 '/services/growth-marketing':['Growth & marketing','Connect the plan to measurable action.','Research, channel planning, campaign setup, content systems and ongoing optimization.'],
 '/services/creative-production':['Creative production','Turn ideas into engaging content.','Graphic design, video editing, animation, product visuals and digital-first creative assets.'],
 '/services/business-technology':['Business technology','Make everyday workflows more useful.','Automation planning, integrations, CRM workflows and custom technology coordination.']
};
const pageCopy = {
  '/about':['A team for what comes next','We bring creative thinking and practical technology together to help ideas become useful, visible and ready to grow.'],
  '/services':['Make the next move meaningful','A connected set of creative, digital and growth services—planned around the real needs of your business.'],
  '/packages':['A clearer way to get started','Choose a starting scope. We’ll shape the details around your goals, timeline and available resources.'],
  '/portfolio':['Selected work & explorations','A growing collection of brand, content and digital work. Detailed case studies will be added as each project is approved for publication.'],
  '/blog':['Ideas for building forward','Notes on business, creative work, technology and the decisions behind better digital experiences.'],
  '/contact':['Tell us what you’re building','Share the goal, the challenge or the early idea. We’ll help you find a practical next step.'],
  '/products/website-solution':['A website you can shape yourself','Start with a considered structure, customize the content and publish a responsive website—without starting from a blank page.'],
  '/products/creator-platform':['Let your work speak clearly','Build a professional profile, organize your portfolio and become easier to discover for relevant opportunities.'],
  '/products/hosting':['Hosting, without the guesswork','Explore suitable hosting options and get human support with selection, setup and coordination.'],
  '/founders':['A space for people building businesses','Swapno Founders brings aspiring entrepreneurs, founders and business owners together to learn, exchange ideas and find opportunities.'],
 '/privacy':['Privacy & data principles','A plain-language draft explaining how Swapno Tech intends to handle information across its website and future services.'],
 '/terms':['Terms of use','A draft framework for using the Swapno Tech website, products and services. Final terms require review before launch.'],
 '/community-guidelines':['Community guidelines','A shared standard for respectful, useful and safe participation in Swapno Founders.'],
 '/login':['Your Swapno account','Account access is being prepared. No sign-in or account creation is active in this preview.'],
 '/register':['Create your Swapno account','Registration will open when the account and privacy workflows are ready.']
};
function Arrow({diagonal=false}) { return <span aria-hidden="true" className="arrow">{diagonal?'↗':'→'}</span>; }
function Brand({light=false}) { return <a className={'brand '+(light?'brand-light':'')} href="/" aria-label="Swapno Tech home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SWAPNO<span>TECH</span></span></a>; }
function Header({theme,setTheme,lang,setLang}) {
  const [open,setOpen]=useState(false);
  return <Localize lang={lang}><header className="header"><div className="nav-wrap"><Brand />
    <nav className={open?'nav nav-open':'nav'} aria-label="Main navigation">
      {routes.map(([name,path])=><a key={path} href={path} onClick={()=>setOpen(false)}>{tx(lang,name)}</a>)}
      <a href="/community/founders" className="nav-founders" onClick={()=>setOpen(false)}>Founders ↗</a>
    </nav>
    <div className="nav-actions"><button type="button" className="text-control language-toggle" aria-label={lang==='EN'?'Switch to Bangla':'Switch to English'} onClick={()=>setLang(lang==='EN'?'BN':'EN')}>{lang==='EN'?'বাংলা':'EN'}</button><button className="theme-toggle" aria-label="Toggle colour theme" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?'☼':'◐'}</button><a className="button button-small button-orange nav-cta" href="/contact">{lang==='BN'?'প্রজেক্ট শুরু করুন':'Start a project'} <Arrow diagonal /></a><button className="menu-toggle" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button></div>
  </div></header></Localize>;
}
function Footer({lang='EN'}) {
  const bn=lang==='BN';
  return <Localize lang={lang}><footer className="footer"><div className="footer-top"><div><Brand light/><p className="footer-note">{bn?<>সম্ভাবনা থেকে অগ্রযাত্রা।<br/>বর্ধনশীল ভাবনার জন্য সৃজনশীল প্রযুক্তি।</>:<>Possibilities into progress.<br/>Creative technology for growing ideas.</>}</p></div><div className="footer-links"><div><b>Explore</b><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/about">About</a></div><div><b>Products</b><a href="/products/website-solution">Website Solution</a><a href="/products/creator-platform">Creator Platform</a><a href="/products/hosting">Hosting</a><a href="/community/founders">Swapno Founders</a></div><div><b>Connect</b><a href="/contact">Start a conversation</a><a href="/contact">Contact us</a><a href="/login">Account</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Swapno Tech</span><span>Built around possibility.</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/community-guidelines">Community</a></div></div></footer></Localize>;
}
function SectionHeading({eyebrow,title,copy,lang='EN'}) { return <Localize lang={lang}><div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div></Localize>; }
function WorkGallery({featured=false,lang='EN',initialCategory='All'}) {
 const [active,setActive]=useState(initialCategory);
 const visible=projects.filter(p=>active==='All'||p.category===active);
 return <Localize lang={lang}><div className={featured?'work-gallery work-gallery-featured':'work-gallery'}>
  <div className="work-filters" role="group" aria-label="Filter portfolio categories">{workCategories.map(c=><button type="button" key={c} className={active===c?'filter-chip active':'filter-chip'} aria-pressed={active===c} onClick={()=>setActive(c)} >{tx(lang,c)}</button>)}</div>
  {visible.length>0?<div className="work-grid">{visible.map((p,i)=><article className={'work-card work-'+p.visual} key={p.id}>
   <div className="work-visual"><span className="visual-index">0{projects.indexOf(p)+1}</span><div className="visual-shape"></div><span className="visual-caption">{tx(lang,p.kind).toUpperCase()}</span><span className="visual-category">{tx(lang,p.type)}</span></div>
   <div className="work-meta"><div><h3>{tx(lang,p.name)}</h3><p>{tx(lang,p.desc)}</p></div><span className="eyebrow">CONCEPT SHOWCASE</span></div>
  </article>)}</div>:<div className="work-empty"><span className="eyebrow">PUBLICATION IN PROGRESS</span><h3>{tx(lang,workCategoryDetails[active]?.emptyTitle||'No published work in this category yet.')}</h3><p>{tx(lang,workCategoryDetails[active]?.emptyCopy||'Approved work will appear here when it is ready to share.')}</p><a className="text-link" href="/contact">Discuss a project <Arrow diagonal/></a></div>}
  <p className="note">These visuals are concept and presentation studies—not published client projects, testimonials or claims of commercial results. Verified work will be added only after publication approval.</p>
 </div></Localize>;
}
function CollaborationSection(){return <section className="section collaboration-section"><div className="section-split"><SectionHeading lang={lang} eyebrow="09 / HOW WE COLLABORATE" title="A team around the work." copy="The right people, skills and learning paths come together around each project—without pretending every project needs the same team."/></div><div className="collaboration-grid"><article><span>01 / ALIGN</span><h3>Shared direction</h3><p>Agree on the goal, audience, responsibilities and definition of done before production begins.</p></article><article><span>02 / CONTRIBUTE</span><h3>Skills in action</h3><p>Bring skilled contributors and learners into clearly scoped tasks with review and support.</p></article><article><span>03 / IMPROVE</span><h3>Learn as we build</h3><p>Review progress, share feedback and document what the next person needs to know.</p></article></div></section>}
function Home({lang='EN'}) {
  const bn = lang === 'BN';
  const [storyActive, setStoryActive] = useState(0);

  useEffect(() => {
    const steps = [...document.querySelectorAll('[data-story-step]')];
    if (!steps.length || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setStoryActive(Number(entry.target.dataset.storyStep));
      });
    }, { rootMargin: '-38% 0px -38% 0px', threshold: 0 });
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const story = [
    { number: '01', title: 'See the possibility.', copy: 'Every meaningful project starts with a better question. We look at the business, the people it serves and the opportunity in front of it.', label: 'START WITH UNDERSTANDING', visual: 'DISCOVER' },
    { number: '02', title: 'Make it tangible.', copy: 'Strategy becomes a clear direction. Creative ideas become a visual language. Technology becomes an experience people can actually use.', label: 'TURN THINKING INTO MAKING', visual: 'CREATE' },
    { number: '03', title: 'Move it forward.', copy: 'The work connects across channels and touchpoints—so every part has a purpose and the next step feels clear.', label: 'BUILD MOMENTUM', visual: 'CONNECT' },
  ].map(item => ({...item,title:tx(lang,item.title),copy:tx(lang,item.copy),label:tx(lang,item.label),visual:tx(lang,item.visual)}));

  return <Localize lang={lang}>
    <section className="apex-hero" id="top">
      <div className="apex-hero-grid" aria-hidden="true" />
      <div className="apex-hero-glow" aria-hidden="true" />
      <div className="apex-hero-copy">
        <span className="eyebrow eyebrow-line"><span /> INDEPENDENT CREATIVE & TECHNOLOGY PARTNER</span>
        <h1>{bn?<>সম্ভাবনা থেকে<br/><em>অগ্রযাত্রা।</em></>:<>Possibilities<br />into <em>progress.</em></>}</h1>
        <p>{bn?'আমরা কৌশল, সৃজনশীল চিন্তা ও প্রযুক্তিকে একত্র করে ব্যবসাকে এগিয়ে নিতে সাহায্য করি।':'We connect strategy, creative thinking and technology to help businesses build what comes next.'}</p>
        <div className="hero-actions">
          <a className="button button-orange" href="/contact">{bn?'প্রজেক্ট শুরু করুন':'Start a project'} <Arrow diagonal /></a>
          <a className="button button-ghost" href="#story">{bn?'আমাদের কাজের ধরন দেখুন':'Explore our approach'} <Arrow /></a>
        </div>
      </div>
      <div className="apex-hero-art" aria-hidden="true">
        <div className="hero-art-frame"><div className="hero-art-core"><svg className="swapno-mascot" viewBox="0 0 520 620" role="img" aria-label="Swapno Explorer astronaut engineer"><defs><linearGradient id="suit" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#F4F6F8"/><stop offset=".48" stop-color="#8795A4"/><stop offset="1" stop-color="#263442"/></linearGradient><linearGradient id="visor" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#9BCAD8"/><stop offset=".42" stop-color="#294052"/><stop offset="1" stop-color="#101923"/></linearGradient></defs><ellipse cx="260" cy="586" rx="168" ry="18" fill="#000" opacity=".24"/><path d="M105 605c9-105 60-164 155-176 96 12 147 71 155 176H105Z" fill="url(#suit)" stroke="#E8EDF2" stroke-width="3"/><path d="M150 605c12-72 48-115 110-125 62 10 98 53 110 125" fill="#202B37" stroke="#FF6300" stroke-width="5"/><path d="M211 446h98l27 94-76 48-76-48 27-94Z" fill="#344352" stroke="#B8C4CF" stroke-width="3"/><path d="M231 472h58l18 47-47 29-47-29 18-47Z" fill="#101A24" stroke="#FF6300" stroke-width="3"/><circle cx="260" cy="499" r="12" fill="#FF6300"/><path d="M194 103c15-51 53-79 105-79 54 0 93 32 105 86l8 94c4 76-53 139-130 139s-134-63-130-139l8-101Z" fill="url(#suit)" stroke="#E8EDF2" stroke-width="5"/><path d="M174 164c9-61 44-96 100-102 63-6 109 29 122 89l-6 63c-7 57-51 98-113 98-61 0-104-41-111-98l8-50Z" fill="url(#visor)" stroke="#FF8738" stroke-width="7"/><path d="M191 158c25-43 58-65 102-69 37-4 69 8 90 34-41 7-75 26-103 58-25 28-54 42-89 43v-66Z" fill="#D9F2FA" opacity=".16"/><path d="M190 225c42-4 79-24 112-59 22-23 45-38 72-46" fill="none" stroke="#A6D8E6" stroke-opacity=".6" stroke-width="5" stroke-linecap="round"/><circle cx="168" cy="199" r="16" fill="#344352" stroke="#FF6300" stroke-width="4"/><circle cx="352" cy="199" r="16" fill="#344352" stroke="#FF6300" stroke-width="4"/><path d="M183 101c25-38 61-57 108-57 47 0 84 22 107 64" fill="none" stroke="#FFF" stroke-opacity=".65" stroke-width="5"/><path d="M144 391c-4 27 3 49 24 66l40 26 24-38-31-36-57-18Zm232 0c4 27-3 49-24 66l-40 26-24-38 31-36 57-18Z" fill="#536272" stroke="#C4CED7" stroke-width="3"/><path d="M135 421l35 15m215-15-35 15" stroke="#FF6300" stroke-width="8" stroke-linecap="round"/></svg></div><div className="hero-art-ribbon ribbon-one" /><div className="hero-art-ribbon ribbon-two" /><div className="hero-art-orbit orbit-a" /><div className="hero-art-orbit orbit-b" /></div>
        <span className="hero-art-note note-top">IDEAS / IN MOTION</span><span className="hero-art-note note-bottom">SWAPNO TECH — 2026</span>
      </div>
      <div className="apex-hero-footer"><span>STRATEGY / CREATIVE / TECHNOLOGY</span><a href="#story">SCROLL TO DISCOVER <b>↓</b></a></div>
      <div className="apex-hero-index">01 <i /> 04</div>
    </section>

    <section className="brand-story section" id="about">
      <div className="brand-story-top"><span className="eyebrow">01 / THE SWAPNO APPROACH</span><span className="brand-story-side">ONE CONNECTED TEAM<br />FOR THE WHOLE PICTURE</span></div>
      <div className="brand-story-grid">
        <h2>Good work<br />starts with <em>clarity.</em></h2>
        <div><p className="brand-story-lead">Growing a business takes more than a good-looking post or a website on its own.</p><p>It takes a clear offer, a recognisable brand, useful content, thoughtful marketing and digital tools that work together. Swapno Tech brings those capabilities into one connected process—from the first conversation to the work people see and use.</p><a className="text-link" href="/about">Discover Swapno Tech <Arrow diagonal /></a></div>
      </div>
      <div className="brand-story-ribbon"><span>STRATEGY BEFORE OUTPUT</span><i /><span>CREATIVE WITH CONTEXT</span><i /><span>TECHNOLOGY WITH PURPOSE</span></div>
    </section>

    <section className="story-section" id="story" data-active={storyActive}>
      <div className="story-stage-wrap">
        <div className="story-stage">
          <div className="story-stage-grid" />
          <div className="story-stage-art">
            <div className="story-art-ring ring-one" /><div className="story-art-ring ring-two" />
            <div className="story-art-panel panel-back" /><div className="story-art-panel panel-front" />
            <div className="story-art-word">{story[storyActive].visual}</div>
            <span className="story-art-index">0{storyActive + 1} — 03</span>
          </div>
          <div className="story-stage-caption"><span>THE SWAPNO METHOD</span><b>THINK / MAKE / MOVE</b></div>
        </div>
      </div>
      <div className="story-steps">
        <div className="story-intro"><span className="eyebrow">02 / A CONNECTED WAY OF WORKING</span><h2>From first thought<br />to <em>real momentum.</em></h2><p>Different disciplines. One shared direction. Follow the thinking behind the work.</p></div>
        {story.map((item, index) => <article className={'story-step' + (storyActive === index ? ' is-active' : '')} data-story-step={index} key={item.number}>
          <span className="story-step-number">{item.number} / {item.label}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="story-step-line"><i /></span>
        </article>)}
      </div>
    </section>

    <section className="section services-preview" id="services"><div className="section-split"><SectionHeading lang={lang} eyebrow="03 / WHAT WE DO" title="A connected<br/>creative engine." copy="Choose the capability you need, or bring us the bigger challenge. We’ll shape the right combination of creative and technology work."/><a className="text-link" href="/services">All services <Arrow diagonal /></a></div><div className="service-list">{serviceFamilies.map(item=><a href={item.path} className="service-row" key={item.key}><span>{item.number}</span><h3>{bilingual(lang,item.title)}</h3><p>{bilingual(lang,item.summary)}</p><Arrow diagonal /></a>)}</div></section>

    <section className="section work-preview" id="work"><div className="section-split"><SectionHeading lang={lang} eyebrow="04 / SELECTED WORK" title="Work made<br/><em>with intent.</em>" copy="A growing collection of brand, content and digital explorations. Published case studies will include verified project context and outcomes."/><a className="text-link" href="/work">Explore the work <Arrow diagonal /></a></div><WorkGallery lang={lang} featured /></section>

    <section className="process-band" id="process"><div className="process-band-inner"><span className="eyebrow">05 / HOW WE WORK</span><div className="process-heading"><h2>Clear thinking.<br/><em>Thoughtful making.</em></h2><p>You know what we’re solving, what we’re making and what needs your review before work moves forward.</p></div><div className="process-steps"><div><b>01</b><h3>Understand</h3><p>Learn the business, audience, challenge and desired outcome.</p></div><div><b>02</b><h3>Shape</h3><p>Research the brief, agree priorities and set a focused direction.</p></div><div><b>03</b><h3>Create</h3><p>Build, test and refine the approved creative or digital experience.</p></div><div><b>04</b><h3>Improve</h3><p>Review together, learn from the work and define the next step.</p></div></div></div></section>

    <section className="section packages-preview" id="packages"><div className="section-split"><SectionHeading lang={lang} eyebrow="06 / WAYS TO WORK TOGETHER" title="Start where<br/><em>you are.</em>" copy="Not every business needs everything at once. Start with the work that matters now, then build from there."/><a className="text-link" href="/packages">Explore packages <Arrow diagonal /></a></div><div className="package-grid">{engagementOptions.map(option=><article className="package-card" key={option.key}><span className="eyebrow">OPTION {option.number}</span><h3>{bilingual(lang,option.title)}</h3><h4>{bilingual(lang,option.descriptor)}</h4><p>{bilingual(lang,option.bestFor)}</p><a className="text-link" href="/packages">Explore option <Arrow diagonal /></a></article>)}</div></section>

    <section className="section products-preview" id="products"><SectionHeading lang={lang} eyebrow="07 / THE SWAPNO ECOSYSTEM" title="Useful tools.<br/><em>Better connections.</em>" copy="Alongside agency services, Swapno is building three core products to make digital business, creative discovery and getting online more accessible."/><div className="product-grid">{products.map(p=><a href={p.href} className="product-card" key={p.number}><span className="product-no">{p.number}</span><span className="product-icon">{p.number==='01'?'⌘':p.number==='02'?'◈':'⌁'}</span><div><span className="eyebrow">{p.tag}</span><h3>{tx(lang,p.name)}</h3><p>{tx(lang,p.desc)}</p></div><span className="card-link">Discover product <Arrow diagonal /></span></a>)}</div></section>

    <section className="team-story section" id="team"><div><span className="eyebrow">08 / THE PEOPLE BEHIND THE WORK</span><h2>Good work is<br/>made <em>together.</em></h2></div><div className="team-story-copy"><p>Swapno is built around skilled contributors and people learning through real work. We value shared responsibility, practical learning and clear communication—not a distant hand-off between departments.</p><a className="text-link" href="/about">How our team works <Arrow diagonal /></a></div><div className="team-story-mark" aria-hidden="true">S<span>.</span></div></section>

    <section className="section insight-preview" id="insights"><div className="section-split"><SectionHeading lang={lang} eyebrow="09 / INSIGHTS & IDEAS" title="Keep learning.<br/><em>Keep moving.</em>" copy="Practical thinking on brand, content, marketing and digital systems—grounded in the questions businesses face while growing."/><a className="text-link" href="/insights">All insights <Arrow diagonal /></a></div><div className="article-grid">{articles.map((a,i)=><a className="article-card" href={['/blog/clearer-digital-foundation','/blog/design-that-earns-attention','/blog/from-idea-to-useful-product'][i]} key={a[0]}><span className="article-index">0{i+1} / {tx(lang,a[1])}</span><h3>{tx(lang,a[0])}</h3><p>{tx(lang,a[2])}</p><span className="card-link">Read insight <Arrow diagonal /></span></a>)}</div></section>

    <section className="newsletter-story"><div><span className="eyebrow">10 / NOTES FROM SWAPNO</span><h2>Ideas worth<br/><em>keeping close.</em></h2></div><p>Occasional notes on creative work, business and useful technology. Our newsletter is being prepared; in the meantime, explore the latest insights.</p><a className="button button-ghost" href="/insights">Explore insights <Arrow diagonal /></a></section>
    <section className="final-cta"><span className="eyebrow">11 / HAVE SOMETHING IN MIND?</span><h2>Let’s make<br/><em>it matter.</em></h2><p>Tell us what you’re building, what needs to change or where you want to go next. We’ll find a practical way to begin.</p><a className="button button-orange" href="/contact">Start a conversation <Arrow diagonal /></a><span className="cta-orbit" /></section>
  </Localize>;
}

function WorkIndexPage({lang='EN'}) {
 const categories=workCategories.filter(category=>category!=='All');
 const paths={'Case Studies':'/work/case-studies','Video':'/work/video','Graphics & Posters':'/work/graphics','Branding':'/work/branding','Websites & Technology':'/work/websites'};
 return <Localize lang={lang}><main className="inner-page work-index-page">
  <PageHero lang={lang} eyebrow="SELECTED WORK / CREATIVE × TECHNOLOGY" title="Work made with a reason." desc="Explore the thinking, visual systems and digital experiences behind the work. We separate concept studies from verified client projects—and publish case studies only with approval."/>
  <section className="section work-intro-section"><div className="work-intro-copy"><span className="eyebrow">A BODY OF WORK, NOT A WALL OF THUMBNAILS</span><h2>Different challenges.<br/><em>Connected thinking.</em></h2><p>Every format has a job. We begin with the message and the people it needs to reach, then choose the right creative and technical approach.</p></div><div className="work-index-aside"><b>01 — DISCOVER</b><b>02 — MAKE</b><b>03 — MOVE FORWARD</b><span>STRATEGY / CREATIVE / TECHNOLOGY</span></div></section>
  <section className="section work-category-section"><div className="section-split"><SectionHeading lang={lang} eyebrow="EXPLORE BY DISCIPLINE" title="Choose the kind of work." copy="Move through each discipline to see its own focus, visual language and selected concept studies."/></div><div className="work-category-grid">{categories.map((category,index)=>{const detail=workCategoryDetails[category];return <a className={'work-category-card work-category-'+detail.scene} href={paths[category]} key={category}><span className="eyebrow">0{index+1} / {category.toUpperCase()}</span><div className="work-category-art"><span>{String(index+1).padStart(2,'0')}</span></div><div><h3>{tx(lang,detail.title)}</h3><p>{tx(lang,detail.description)}</p><span className="card-link">Explore category <Arrow diagonal/></span></div></a>;})}</div></section>
  <section className="section work-selected-section"><div className="section-split"><SectionHeading lang={lang} eyebrow="SELECTED CONCEPT STUDIES" title="A direction takes shape." copy="These studies demonstrate the visual and creative territory. They are not presented as completed client engagements."/></div><WorkGallery lang={lang}/></section>
  <section className="work-cta-band"><span className="eyebrow">HAVE A CHALLENGE IN MIND?</span><h2>Let’s make the<br/><em>right thing next.</em></h2><p>Tell us what you are trying to achieve. We’ll help shape a practical creative or technology approach.</p><a className="button button-orange" href="/contact">Start a project <Arrow diagonal/></a></section>
 </main></Localize>;
}
function CaseStudyFramework({lang='EN'}) {
 return <section className="section case-study-framework"><div className="section-split"><SectionHeading lang={lang} eyebrow="THE CASE STUDY STANDARD" title="Show the work. Explain the why. Prove the outcome." copy="Every published case study should be useful, accurate and permission-safe. This is the structure we will use when approved project material is ready."/></div><div className="case-study-steps">{caseStudyTemplateSections.map((item,index)=><article key={item}><span>0{index+1}</span><h3>{item}</h3></article>)}</div><p className="note">Outcome claims must include a verified source and timeframe. Client names, assets, quotations and identifying details require publication approval.</p></section>;
}
function WorkCategoryPage({category,lang='EN'}) {
 const detail=workCategoryDetails[category];
 const other=workCategories.filter(item=>item!=='All'&&item!==category);
 const paths={'Case Studies':'/work/case-studies','Video':'/work/video','Graphics & Posters':'/work/graphics','Branding':'/work/branding','Websites & Technology':'/work/websites'};
 return <Localize lang={lang}><main className={'inner-page work-category-page work-category-page-'+detail.scene}>
  <PageHero lang={lang} eyebrow={detail.eyebrow} title={detail.title} desc={detail.description}/>
  <section className="section work-chapter-section"><div className="work-chapter-visual"><span className="eyebrow">{category.toUpperCase()} / SWAPNO TECH</span><div className="work-chapter-mark">{category==='Video'?'▶':category==='Branding'?'S.':category==='Websites & Technology'?'[ ]':category==='Graphics & Posters'?'Aa':'01'}</div><span className="work-chapter-caption">{detail.chapter}</span></div><div className="work-chapter-copy"><span className="eyebrow">THE CREATIVE INTENT</span><h2>{detail.chapter}</h2><p>{detail.story}</p><ul>{detail.focus.map(item=><li key={item}>{item}</li>)}</ul></div></section>
  <section className="section work-category-gallery"><div className="section-split"><SectionHeading lang={lang} eyebrow="SELECTED EXPLORATIONS" title={category==='Case Studies'?'Evidence before embellishment.':'Explore the visual direction.'} copy={category==='Case Studies'?'Real project stories require accurate context, approved assets and verified outcomes.':detail.description}/></div><WorkGallery lang={lang} initialCategory={category}/></section>
  {category==='Case Studies'&&<CaseStudyFramework lang={lang} />}
  <section className="section work-related-section"><span className="eyebrow">KEEP EXPLORING</span><div className="work-related-links">{other.map(item=><a href={paths[item]} key={item}>{item}<Arrow diagonal/></a>)}</div><a className="button button-orange" href="/contact">Discuss a project <Arrow diagonal/></a></section>
 </main></Localize>;
}

const bilingual = (lang, value) => value?.[lang === 'BN' ? 'bn' : 'en'] || value?.en || '';
function ServiceOverviewPage({lang='EN'}) {
  const bn=lang==='BN';
  const journey=bn
    ? [['01','বোঝা','ব্যবসা, গ্রাহক ও প্রয়োজন বুঝে নেওয়া।'],['02','পরিকল্পনা','অগ্রাধিকার, কাজের পরিধি ও দিকনির্দেশনা ঠিক করা।'],['03','তৈরি','সম্মত সৃজনশীল বা ডিজিটাল কাজ বাস্তবায়ন।'],['04','পর্যালোচনা','কাজ যাচাই, পরিমার্জন ও পরবর্তী পদক্ষেপ নির্ধারণ।']]
    : [['01','Understand','Learn the business, audience and actual need.'],['02','Shape','Agree priorities, scope and direction.'],['03','Create','Deliver the approved creative or digital work.'],['04','Improve','Review, refine and define the next step.']];
  return <main className="inner-page services-page">
    <PageHero lang={lang} eyebrow={bn?'সেবা / আমাদের সক্ষমতা':'SERVICES / WHAT WE DO'} title={bn?'ব্যবসার প্রয়োজন থেকে সঠিক কাজ।':'The right work for the need in front of you.'} desc={bn?'ব্র্যান্ড, কনটেন্ট, মার্কেটিং ও প্রযুক্তিকে একসঙ্গে সাজাই—যাতে প্রতিটি কাজের উদ্দেশ্য ও পরবর্তী পদক্ষেপ স্পষ্ট থাকে।':'We connect brand, content, marketing and technology around your business priorities—so every deliverable has a purpose and a clear next step.'}/>
    <section className="section service-overview-intro">
      <div><span className="eyebrow">{bn?'একটি সমন্বিত পদ্ধতি':'ONE CONNECTED APPROACH'}</span><h2>{bn?<>শুধু কাজ নয়।<br/><em>কাজের সঠিক সমন্বয়।</em></>:<>More than separate tasks.<br/><em>A connected direction.</em></>}</h2></div>
      <div><p>{bn?'একটি ব্যবসার পরিচিতি, যোগাযোগ, প্রচার ও ডিজিটাল অভিজ্ঞতা একে অপরের সঙ্গে যুক্ত। আমরা প্রথমে প্রয়োজন বুঝি, তারপর প্রয়োজনীয় সেবাগুলো একত্র করি—সবকিছু একসঙ্গে নেওয়ার চাপ না দিয়ে।':'A business identity, its communication, promotion and digital experience influence one another. We start by understanding the need, then bring together only the capabilities that make sense—without asking every business to do everything at once.'}</p><a className="text-link" href="/contact">{bn?'আপনার প্রয়োজন নিয়ে কথা বলুন':'Talk through your needs'} <Arrow diagonal/></a></div>
    </section>
    <section className="section service-family-section">
      <div className="section-split"><SectionHeading lang={lang} eyebrow={bn?'চারটি মূল সেবা পরিবার':'FOUR CORE SERVICE FAMILIES'} title={bn?'আপনার প্রয়োজন অনুযায়ী বেছে নিন।':'Choose the capability you need.'} copy={bn?'প্রতিটি সেবার নিজস্ব কাজের পরিধি, প্রক্রিয়া ও ডেলিভারেবল রয়েছে। বিস্তারিত জানতে একটি বিভাগ খুলুন।':'Each family has a defined scope, process and set of deliverables. Open a discipline to understand what is included.'}/></div>
      <div className="service-family-grid">{serviceFamilies.map(item=><a className={'service-family-card service-scene-'+item.scene} href={item.path} key={item.key}>
        <div className="service-family-top"><span>{item.number} / {bilingual(lang,item.title).toUpperCase()}</span><b>{item.number}</b></div>
        <div className="service-family-art"><i/><i/><i/></div>
        <h3>{bilingual(lang,item.title)}</h3><p>{bilingual(lang,item.summary)}</p>
        <ul>{item.deliverables.slice(0,3).map(x=><li key={x.en}>{bilingual(lang,x)}</li>)}</ul>
        <span className="card-link">{bn?'সেবার বিস্তারিত':'Explore this service'} <Arrow diagonal/></span>
      </a>)}</div>
    </section>
    <section className="section service-journey-section">
      <div className="section-split"><SectionHeading lang={lang} eyebrow={bn?'কাজের ধাপ':'HOW THE WORK MOVES'} title={bn?'স্পষ্ট ধাপ। যৌথ পর্যালোচনা।':'Clear stages. Shared review.'} copy={bn?'কাজ শুরুর আগে লক্ষ্য ও পরিধি ঠিক হয়। প্রতিটি গুরুত্বপূর্ণ ধাপে আপনি জানেন কী হচ্ছে এবং কোথায় আপনার মতামত প্রয়োজন।':'We agree on the goal and scope before production. At each important stage, you know what is happening and where your review is needed.'}/></div>
      <div className="service-journey-grid">{journey.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>
    <section className="service-scope-note"><span className="eyebrow">{bn?'কাজের স্বচ্ছতা':'SCOPE BEFORE PROMISES'}</span><h2>{bn?'আগে কাজের পরিধি ঠিক করি।':'Agree the work before promising the outcome.'}</h2><p>{bn?'ডেলিভারেবল, দায়িত্ব, সময় ও রিভিউয়ের ধাপ প্রকল্পভেদে নিশ্চিত করা হয়। ব্যবসায়িক ফলাফল নিশ্চিত করার দাবি আমরা করি না।':'Deliverables, responsibilities, timing and review points are confirmed for each project. We do not guarantee business outcomes.'}</p><a className="button button-orange" href="/contact">{bn?'প্রজেক্ট নিয়ে কথা বলুন':'Discuss a project'} <Arrow diagonal/></a></section>
    <ProductStrip lang={lang}/>
  </main>;
}
function ServiceDetailPage({family,lang='EN'}) {
  const bn=lang==='BN';
  const related=family.related.map(key=>serviceFamilies.find(item=>item.key===key)).filter(Boolean);
  return <main className={'inner-page service-detail-page service-detail-'+family.scene}>
    <PageHero lang={lang} eyebrow={bn?'স্বপ্নো টেক / সেবা':'SWAPNO TECH / SERVICE'} title={bilingual(lang,family.title)} desc={bilingual(lang,family.tagline)}/>
    <section className="section service-detail-lead">
      <div className="service-detail-lead-copy"><span className="eyebrow">{bn?'এই সেবার উদ্দেশ্য':'THE PURPOSE'}</span><h2>{bilingual(lang,family.summary)}</h2><p>{bn?'কাদের জন্য':'WHO THIS IS FOR'}</p><div className="service-best-for">{bilingual(lang,family.bestFor)}</div></div>
      <div className="service-detail-index"><span>{family.number}</span><b>{bilingual(lang,family.title).toUpperCase()}</b><i/><small>{bn?'প্রয়োজন থেকে বাস্তবায়ন':'FROM NEED TO DELIVERY'}</small></div>
    </section>
    <section className="section service-detail-scope">
      <div className="section-split"><SectionHeading lang={lang} eyebrow={bn?'কাজের অন্তর্ভুক্তি':'WHAT THE WORK CAN INCLUDE'} title={bn?'পরিষ্কার কাজের পরিধি।':'A clear, practical scope.'} copy={bn?'চূড়ান্ত তালিকা আপনার প্রয়োজন, সময় ও সম্মত বাজেট অনুযায়ী নির্ধারিত হবে।':'The final scope is agreed around your needs, timeline and available budget.'}/></div>
      <div className="service-deliverable-grid">{family.deliverables.map((item,i)=><article key={item.en}><span>0{i+1}</span><p>{bilingual(lang,item)}</p></article>)}</div>
    </section>
    <section className="section service-output-section"><div className="service-output-heading"><span className="eyebrow">{bn?'আপনি যা পাবেন':'WHAT YOU CAN EXPECT TO RECEIVE'}</span><h2>{bn?'শুধু কাজ নয়, ব্যবহারযোগ্য হস্তান্তর।':'Useful outputs, ready for the next step.'}</h2></div><div className="service-output-list">{family.outputs.map((item,i)=><div key={item.en}><b>0{i+1}</b><span>{bilingual(lang,item)}</span></div>)}</div></section>
    <section className="section service-process-section"><div className="section-split"><SectionHeading lang={lang} eyebrow={bn?'আমাদের প্রক্রিয়া':'OUR PROCESS'} title={bn?'ধাপে ধাপে এগোনো।':'Move forward in clear stages.'}/></div><div className="service-process-grid">{family.process.map((step,i)=><article key={step.title.en}><span>{family.number}.{i+1}</span><h3>{bilingual(lang,step.title)}</h3><p>{bilingual(lang,step.copy)}</p></article>)}</div></section>
    <section className="section service-related-section"><span className="eyebrow">{bn?'সম্পর্কিত সেবা':'RELATED CAPABILITIES'}</span><div className="service-related-grid">{related.map(item=><a href={item.path} key={item.key}><span>{item.number}</span><div><h3>{bilingual(lang,item.title)}</h3><p>{bilingual(lang,item.summary)}</p></div><Arrow diagonal/></a>)}</div><div className="service-detail-cta"><div><h2>{bn?'আপনার প্রকল্পের জন্য সঠিক সমন্বয় খুঁজুন।':'Let’s shape the right scope for your project.'}</h2><p>{bn?'আপনার লক্ষ্য ও প্রয়োজন জানালে আমরা বাস্তবসম্মত পরবর্তী পদক্ষেপ সাজাতে পারব।':'Share the goal and constraints. We’ll help identify a practical combination of work.'}</p></div><a className="button button-orange" href={'/contact?service='+encodeURIComponent(bilingual(lang,family.title))}>{bn?'আলোচনা শুরু করুন':'Discuss this service'} <Arrow diagonal/></a></div></section>
  </main>;
}
function AboutPage({lang='EN'}) {
  const bn=lang==='BN', c=aboutContent;
  return <main className="inner-page about-page">
    <PageHero lang={lang} eyebrow={bilingual(lang,c.hero.eyebrow)} title={bilingual(lang,c.hero.title)} desc={bilingual(lang,c.hero.description)}/>
    <section className="section about-belief-section"><div><span className="eyebrow">{bilingual(lang,c.belief.eyebrow)}</span><h2>{bilingual(lang,c.belief.title)}</h2></div><p>{bilingual(lang,c.belief.body)}</p></section>
    <section className="section about-audience-section"><div className="section-split"><SectionHeading lang={lang} eyebrow={bilingual(lang,c.audience.eyebrow)} title={bilingual(lang,c.audience.title)}/></div><div className="about-audience-grid">{c.audience.items.map((item,i)=><article key={item.title.en}><span>0{i+1}</span><h3>{bilingual(lang,item.title)}</h3><p>{bilingual(lang,item.body)}</p></article>)}</div></section>
    <section className="section about-model-section"><div className="about-model-heading"><span className="eyebrow">{bilingual(lang,c.model.eyebrow)}</span><h2>{bilingual(lang,c.model.title)}</h2><p>{bilingual(lang,c.model.body)}</p></div><div className="about-model-steps">{c.model.steps.map((step,i)=><article key={step.title.en}><span>0{i+1}</span><h3>{bilingual(lang,step.title)}</h3><p>{bilingual(lang,step.body)}</p></article>)}</div></section>
    <section className="section about-principles-section"><div className="section-split"><SectionHeading lang={lang} eyebrow={bn?'আমাদের নীতিমালা':'OUR PRINCIPLES'} title={bn?'যে মানদণ্ডে কাজ করি।':'Principles behind the work.'}/></div><div className="about-principles-grid">{c.principles.map((item,i)=><article key={item.title.en}><span>0{i+1}</span><h3>{bilingual(lang,item.title)}</h3><p>{bilingual(lang,item.body)}</p></article>)}</div></section>
    <section className="about-boundary-band"><span className="eyebrow">{bilingual(lang,c.boundary.eyebrow)}</span><h2>{bilingual(lang,c.boundary.title)}</h2><p>{bilingual(lang,c.boundary.body)}</p><a className="button button-orange" href="/contact">{bn?'চলুন কথা বলি':'Let’s talk'} <Arrow diagonal/></a></section>
  </main>;
}


function PackagesPage({lang='EN'}) {
  const bn=lang==='BN';
  return <main className="inner-page packages-page">
    <PageHero lang={lang} eyebrow={bn?'একসঙ্গে কাজের ধরন':'WAYS TO WORK TOGETHER'} title={bn?'আপনার প্রয়োজন থেকে কাজের পরিধি ঠিক করি।':'Choose the way of working that fits your need.'} desc={bn?'একটি নির্দিষ্ট প্রজেক্ট, নিয়মিত সহযোগিতা অথবা বড় কাস্টম উদ্যোগ—প্রতিটি কাজের পরিধি, সময় ও ফি আগে থেকেই স্পষ্ট করা হয়।':'A focused project, an ongoing partnership or a larger custom engagement. Every scope, timeline and fee is clarified before work begins.'}/>
    <section className="section package-intro">
      <div><span className="eyebrow">{bn?'সঠিক জায়গা থেকে শুরু':'START WITH THE RIGHT SCOPE'}</span><h2>{bn?<>সবকিছু একসঙ্গে নয়।<br/><em>যেটি এখন প্রয়োজন।</em></>:<>Not everything at once.<br/><em>Just what matters now.</em></>}</h2></div>
      <div><p>{bn?'আপনার ব্যবসার বর্তমান লক্ষ্য, টিমের সক্ষমতা ও বাজেট বুঝে আমরা কাজের ধরন সাজাই। নিচের তিনটি পদ্ধতি হলো সহযোগিতার কাঠামো—নির্দিষ্ট মূল্য বা একরকম ডেলিভারেবলের প্রতিশ্রুতি নয়।':'We shape the engagement around your current goal, team capacity and budget. These three paths describe how we can work together—not fixed-price tiers or a promise that every project includes the same deliverables.'}</p><a className="text-link" href="/contact">{bn?'আপনার প্রয়োজন জানাতে যোগাযোগ করুন':'Tell us what you need'} <Arrow diagonal/></a></div>
    </section>
    <section className="section engagement-options-section">
      <div className="section-split"><SectionHeading lang={lang} eyebrow={bn?'তিনটি সহযোগিতার ধরন':'THREE WAYS TO ENGAGE'} title={bn?'আপনার কাজের সঙ্গে মানানসই পথ বেছে নিন।':'Choose the path that fits the work.'} copy={bn?'প্রতিটি বিকল্পে কাজের পরিধি আলোচনা ও লিখিত অনুমোদনের মাধ্যমে চূড়ান্ত হয়।':'Each option is finalized through a conversation and written scope approval.'}/></div>
      <div className="engagement-option-grid">{engagementOptions.map(option=><article className={'engagement-option engagement-'+option.key} key={option.key}>
        <div className="engagement-option-top"><span>{option.number} / {bn?'সহযোগিতার ধরন':'ENGAGEMENT TYPE'}</span><b>{option.key==='focused'?'↗':option.key==='ongoing'?'∞':'＋'}</b></div>
        <h3>{bilingual(lang,option.title)}</h3><h4>{bilingual(lang,option.descriptor)}</h4>
        <div className="engagement-best"><span className="eyebrow">{bn?'কার জন্য উপযোগী':'BEST FOR'}</span><p>{bilingual(lang,option.bestFor)}</p></div>
        <div className="engagement-includes"><span className="eyebrow">{bn?'কাজে যা থাকতে পারে':'WHAT IT MAY INCLUDE'}</span><ul>{option.mayInclude.map(item=><li key={item.en}>{bilingual(lang,item)}</li>)}</ul></div>
        <p className="engagement-close">{bilingual(lang,option.close)}</p>
        <a className="button button-ghost" href={'/contact?service='+encodeURIComponent(option.contactValue)}>{bn?'এই ধরন নিয়ে আলোচনা করুন':'Discuss this option'} <Arrow diagonal/></a>
      </article>)}</div>
    </section>
    <section className="section engagement-principles-section">
      <div className="section-split"><SectionHeading lang={lang} eyebrow={bn?'প্রস্তাব তৈরির ভিত্তি':'WHAT DEFINES YOUR SCOPE'} title={bn?'কাজ শুরুর আগে যা স্পষ্ট হবে।':'Know what is agreed before work starts.'} copy={bn?'কাজের পরিধি ও প্রত্যাশা দুই পক্ষের কাছে পরিষ্কার রাখতে প্রস্তাবে এই বিষয়গুলো নির্দিষ্ট থাকবে।':'Your proposal will make these practical details clear to both sides.'}/></div>
      <div className="engagement-principles-grid">{engagementPrinciples.map((item,i)=><article key={item.title.en}><span>0{i+1}</span><h3>{bilingual(lang,item.title)}</h3><p>{bilingual(lang,item.body)}</p></article>)}</div>
    </section>
    <section className="engagement-start-section">
      <div><span className="eyebrow">{bn?'যোগাযোগ থেকে কাজ শুরু':'FROM ENQUIRY TO KICKOFF'}</span><h2>{bn?'আলোচনা। প্রস্তাব। অনুমোদন। তারপর কাজ।':'A conversation. A proposal. Approval. Then the work.'}</h2></div>
      <div className="engagement-start-steps">{(bn?[['01','প্রয়োজন বুঝি','আপনার লক্ষ্য, প্রেক্ষাপট ও সীমাবদ্ধতা জানি।'],['02','পরিধি প্রস্তাব করি','ডেলিভারেবল, সময়, দায়িত্ব ও ফি লিখিতভাবে দিই।'],['03','অনুমোদন নিয়ে শুরু','সম্মতির পর কাজের সূচনা ও যোগাযোগের ধাপ ঠিক করি।']]:[['01','Understand','Learn the goal, context and constraints.'],['02','Propose','Set out deliverables, timing, responsibilities and fee in writing.'],['03','Approve & begin','Start only after the scope is agreed by both sides.']]).map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>
    <section className="section engagement-faq-section">
      <div className="section-split"><SectionHeading lang={lang} eyebrow={bn?'সাধারণ প্রশ্ন':'GOOD TO KNOW'} title={bn?'সিদ্ধান্ত নেওয়ার আগে।':'Before you decide.'}/></div>
      <div className="engagement-faq-list">{engagementFaqs.map((faq,i)=><details key={faq.question.en}><summary><span>0{i+1}</span>{bilingual(lang,faq.question)}<b>＋</b></summary><p>{bilingual(lang,faq.answer)}</p></details>)}</div>
    </section>
    <section className="engagement-final-cta"><span className="eyebrow">{bn?'আপনার পরবর্তী পদক্ষেপ':'YOUR NEXT STEP'}</span><h2>{bn?'আপনার কাজের কথা বলুন।':'Tell us what you want to move forward.'}</h2><p>{bn?'আপনার লক্ষ্য ও প্রয়োজন জানালে আমরা উপযুক্ত সহযোগিতার ধরন এবং বাস্তবসম্মত কাজের পরিধি নিয়ে আলোচনা করতে পারব।':'Share your goal and requirements. We’ll discuss the right engagement model and a practical scope of work.'}</p><a className="button button-orange" href="/contact">{bn?'প্রজেক্ট নিয়ে কথা বলুন':'Discuss your project'} <Arrow diagonal/></a>
    </section>
  </main>;
}


function InsightsPage({lang='EN'}) {
  const bn = lang === 'BN';
  const [activeCategory,setActiveCategory] = useState('all');
  const [search,setSearch] = useState('');
  const t = value => value?.[bn?'bn':'en'] || '';
  const query = search.trim().toLocaleLowerCase();
  const filtered = insights.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.categoryId === activeCategory;
    const searchable = [t(item.title),t(item.summary),t(item.category)].join(' ').toLocaleLowerCase();
    return categoryMatch && (!query || searchable.includes(query));
  });
  const featured = insights[0];
  const showFeatured = activeCategory === 'all' && !query;
  const listing = showFeatured ? filtered.filter(item=>item.slug!==featured.slug) : filtered;
  return <main className="inner-page insights-page">
    <PageHero lang={lang} eyebrow={bn?'INSIGHTS / ভাবনা ও ব্যবহারিক দিকনির্দেশনা':'INSIGHTS / IDEAS INTO PRACTICE'} title={bn?'ভাবনা, যা কাজে এগিয়ে নেয়।':'Ideas for building forward.'} desc={bn?'ব্যবসা, সৃজনশীলতা ও প্রযুক্তি নিয়ে বাস্তবভিত্তিক দৃষ্টিভঙ্গি—যা পরবর্তী সিদ্ধান্তকে আরও স্পষ্ট করতে সাহায্য করে।':'Practical perspectives on business, creative work and technology—made to bring more clarity to the decisions that move work forward.'}/>
    <section className="section inner-section insights-feature-section">
      <div className="insights-section-heading"><div><span className="eyebrow">{bn?'সম্পাদকের পছন্দ':'EDITOR’S PICK'}</span><h2>{bn?'শুরু করুন সঠিক প্রশ্ন দিয়ে।':'Start with a better question.'}</h2></div><p>{bn?'প্রতিটি ভালো সিদ্ধান্তের আগে প্রয়োজন সমস্যাটি বোঝা। এই লেখাগুলো সেই বোঝাপড়ার জন্য তৈরি।':'Good decisions begin with understanding the problem. These field notes are here to help make that thinking more deliberate.'}</p></div>
      {showFeatured && <a className="insight-featured" href={'/insights/'+featured.slug}>
        <div className="insight-featured-art" aria-hidden="true"><span>01</span><i/><b>{bn?'স্পষ্টতা':'CLARITY'}</b></div>
        <div className="insight-featured-copy"><span className="article-index">{t(featured.category).toUpperCase()} / {insightReadingTime(featured,lang)}</span><h3>{t(featured.title)}</h3><p>{t(featured.summary)}</p><span className="card-link">{bn?'ফিচার্ড লেখা পড়ুন':'Read the featured insight'} <Arrow diagonal/></span><small>{t(featured.featuredNote)}</small></div>
      </a>}
    </section>
    <section className="section inner-section insights-library">
      <div className="insights-section-heading"><div><span className="eyebrow">{bn?'লাইব্রেরি':'THE LIBRARY'}</span><h2>{bn?'আপনার প্রয়োজনীয় বিষয় খুঁজুন।':'Explore the thinking.'}</h2></div><p>{bn?'কৌশল, সৃজনশীলতা ও প্রযুক্তি—বিষয় অনুযায়ী লেখা বেছে নিন অথবা সরাসরি খুঁজুন।':'Browse by discipline or search for a topic. Each article is designed to be useful on its own.'}</p></div>
      <div className="insights-controls">
        <div className="insight-category-list" aria-label={bn?'লেখার বিভাগ':'Insight categories'}>
          {insightCategories.map(category=><button type="button" key={category.id} className={'filter-chip'+(activeCategory===category.id?' is-active':'')} aria-pressed={activeCategory===category.id} onClick={()=>setActiveCategory(category.id)}>{t(category.label)}</button>)}
        </div>
        <label className="insight-search"><span className="sr-only">{bn?'লেখা খুঁজুন':'Search insights'}</span><input type="search" value={search} onChange={event=>setSearch(event.target.value)} placeholder={bn?'বিষয় বা শব্দ দিয়ে খুঁজুন':'Search by topic or keyword'}/><span aria-hidden="true">⌕</span></label>
      </div>
      <p className="insights-result-count" aria-live="polite">{bn?`${filtered.length}টি লেখা পাওয়া গেছে`:`${filtered.length} insights`}</p>
      {listing.length ? <div className="insight-library-grid">{listing.map((item,index)=><a className="insight-library-card" href={'/insights/'+item.slug} key={item.slug}>
        <div className="insight-card-top"><span>{String(index+1).padStart(2,'0')}</span><span>{t(item.category)}</span></div>
        <div className="insight-card-mark" aria-hidden="true"><i/><b>{item.categoryId==='strategy'?'01':item.categoryId==='creative'?'02':'03'}</b></div>
        <h3>{t(item.title)}</h3><p>{t(item.summary)}</p>
        <div className="insight-card-bottom"><span>{insightReadingTime(item,lang)}</span><span>{bn?'পড়ুন':'Read insight'} <Arrow diagonal/></span></div>
      </a>)}</div> : <div className="insights-empty"><h3>{bn?'এই খোঁজে কোনো লেখা পাওয়া যায়নি':'No insights found'}</h3><p>{bn?'অন্য শব্দ দিয়ে খুঁজুন অথবা সব বিভাগ দেখুন।':'Try another keyword or return to all categories.'}</p><button type="button" className="button button-ghost" onClick={()=>{setSearch('');setActiveCategory('all')}}>{bn?'সব লেখা দেখুন':'Show all insights'}</button></div>}
    </section>
    <section className="section insights-editorial-note"><span className="eyebrow">{bn?'আমাদের দৃষ্টিভঙ্গি':'A NOTE ON OUR APPROACH'}</span><h2>{bn?'কম জটিলতা। বেশি স্পষ্টতা।':'Less noise. More useful thinking.'}</h2><p>{bn?'এই লেখাগুলো সাধারণ নির্দেশনা ও কাজের অভিজ্ঞতাভিত্তিক দৃষ্টিভঙ্গি। এগুলো কোনো নির্দিষ্ট ফলাফলের নিশ্চয়তা বা ক্লায়েন্ট কেস স্টাডি নয়।':'These articles are practical editorial perspectives, not guarantees of outcomes or substitutes for project-specific advice. We will publish client case studies separately, with approved context and verified details.'}</p><a className="text-link" href="/contact">{bn?'আপনার চ্যালেঞ্জ নিয়ে কথা বলুন':'Discuss a challenge with us'} <Arrow diagonal/></a></section>
  </main>;
}

function InsightArticlePage({article,lang='EN'}) {
  const bn = lang === 'BN';
  const t = value => value?.[bn?'bn':'en'] || '';
  const index = insights.findIndex(item=>item.slug===article.slug);
  const previous = index>0 ? insights[index-1] : null;
  const next = index<insights.length-1 ? insights[index+1] : null;
  const related = (article.related||[]).map(slug=>insights.find(item=>item.slug===slug)).filter(Boolean);
  const sectionId = number => 'insight-section-'+number;
  return <main className="inner-page insight-article-page">
    <PageHero lang={lang} eyebrow={bn?'ভাবনা ও ব্যবহারিক দিকনির্দেশনা / '+t(article.category):'FIELD NOTES / '+t(article.category).toUpperCase()} title={t(article.title)} desc={t(article.summary)}/>
    <div className="insight-article-meta"><a href="/insights">← {bn?'সব লেখা':'All insights'}</a><span>{t(article.category)}</span><span>{insightReadingTime(article,lang)}</span></div>
    <section className="section inner-section insight-reading-layout">
      <aside className="insight-reading-aside">
        <span className="eyebrow">{bn?'এই লেখায়':'IN THIS ARTICLE'}</span>
        <nav aria-label={bn?'লেখার বিষয়সূচি':'Article contents'}>
          {article.sections.map((section,i)=><a href={'#'+sectionId(i)} key={sectionId(i)}>{String(i+1).padStart(2,'0')} <span>{t(section.heading)}</span></a>)}
          <a href="#insight-takeaways">{bn?'মূল বিষয়':'Key takeaways'}</a>
        </nav>
        <div className="insight-aside-note"><span className="eyebrow">{bn?'মূল ভাবনা':'THE IDEA'}</span><p>{t(article.featuredNote)}</p></div>
      </aside>
      <article className="insight-prose">
        <p className="insight-lead">{t(article.summary)}</p>
        {article.sections.map((section,i)=><section className="insight-prose-section" id={sectionId(i)} key={sectionId(i)}>
          <span className="insight-section-number">{String(i+1).padStart(2,'0')} / {String(article.sections.length).padStart(2,'0')}</span>
          <h2>{t(section.heading)}</h2>
          {section.paragraphs.map((paragraph,j)=><p key={j}>{t(paragraph)}</p>)}
          {section.bullets?.length>0&&<ul>{section.bullets.map((item,j)=><li key={j}>{t(item)}</li>)}</ul>}
        </section>)}
        <section className="insight-takeaways" id="insight-takeaways"><span className="eyebrow">{bn?'মনে রাখুন':'TAKE IT WITH YOU'}</span><h2>{t(article.takeaway.heading)}</h2><ul>{article.takeaway.items.map((item,i)=><li key={i}><span>0{i+1}</span>{t(item)}</li>)}</ul></section>
      </article>
    </section>
    <section className="section insight-related-section">
      <div className="insights-section-heading"><div><span className="eyebrow">{bn?'আরও পড়ুন':'KEEP EXPLORING'}</span><h2>{bn?'সম্পর্কিত আরও ভাবনা।':'More ideas worth exploring.'}</h2></div><a className="text-link" href="/insights">{bn?'সব লেখা':'All insights'} <Arrow diagonal/></a></div>
      <div className="insight-related-grid">{related.map(item=><a className="insight-related-card" href={'/insights/'+item.slug} key={item.slug}><span className="article-index">{t(item.category).toUpperCase()} / {insightReadingTime(item,lang)}</span><h3>{t(item.title)}</h3><p>{t(item.summary)}</p><span className="card-link">{bn?'পড়ুন':'Read insight'} <Arrow diagonal/></span></a>)}</div>
      <div className="insight-sequence-nav">
        {previous?<a href={'/insights/'+previous.slug}><span>← {bn?'আগের লেখা':'PREVIOUS'}</span><b>{t(previous.title)}</b></a>:<span/>}
        {next?<a href={'/insights/'+next.slug}><span>{bn?'পরের লেখা':'NEXT'} →</span><b>{t(next.title)}</b></a>:<span/>}
      </div>
    </section>
    <section className="section insight-article-cta"><span className="eyebrow">{bn?'আপনার পরবর্তী পদক্ষেপ':'YOUR NEXT STEP'}</span><h2>{bn?'এখন যে ভাবনাটি কাজে লাগাতে চান, সেটি নিয়ে কথা বলি।':'Have a challenge you want to put into motion?'}</h2><p>{bn?'আপনার ব্যবসা বা ডিজিটাল অভিজ্ঞতার প্রয়োজনটি জানান। আমরা বাস্তবসম্মত পরবর্তী পদক্ষেপ খুঁজে নিতে সাহায্য করব।':'Tell us what you are working through. We can help shape a practical next step around your business and digital needs.'}</p><a className="button button-orange" href="/contact">{bn?'আলোচনা শুরু করুন':'Start a conversation'} <Arrow diagonal/></a>
    </section>
  </main>;
}

function GenericPage({path,lang='EN'}) {
  const [title,desc]=(pageCopy[path]||['Page coming into focus','We are shaping this experience with the same care as the rest of the Swapno ecosystem.']).map(v=>tx(lang,v));
  const [sent,setSent]=useState(''); const [draft,setDraft]=useState(''); const [submitting,setSubmitting]=useState(false);
  if(path==='/services') return <ServiceOverviewPage lang={lang}/>;
  const serviceFamily=serviceFamilies.find(item=>item.renderPath===path);
  if(serviceFamily) return <ServiceDetailPage family={serviceFamily} lang={lang}/>;
  if(path==='/packages') return <PackagesPage lang={lang}/>;
  if(path==='/portfolio') return <WorkIndexPage lang={lang}/>;
  const workCategoryRoutes={'/work/case-studies':'Case Studies','/work/video':'Video','/work/graphics':'Graphics & Posters','/work/branding':'Branding','/work/websites':'Websites & Technology'};
  if(workCategoryRoutes[path]) return <WorkCategoryPage category={workCategoryRoutes[path]} lang={lang}/>;
  if(path==='/blog') return <InsightsPage lang={lang}/>;
  const insightArticle=insights.find(item=>path==='/blog/'+item.slug);
  if(insightArticle) return <InsightArticlePage article={insightArticle} lang={lang}/>;
    if(path==='/contact') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="START A CONVERSATION" title={title} desc={desc}/><section className="section inner-section contact-layout"><div><span className="eyebrow">A GOOD PLACE TO BEGIN</span><h2>Tell us a little<br/>about the idea.</h2><p>Share what you want to achieve, what is getting in the way and what kind of support you are looking for.</p><a className="text-link" href="#enquiry-form">Use the enquiry form <Arrow diagonal/></a></div><form id="enquiry-form" className="contact-form" onSubmit={async e=>{e.preventDefault();if(submitting)return;setSubmitting(true);setSent('');const form=e.currentTarget;const data=new FormData(form);const selectedService=data.get('service')||null;const engagementTypes=['Focused project','Ongoing partnership','Custom engagement'];const payload={name:data.get('name'),email:data.get('email'),service_interest:selectedService,engagement_type:engagementTypes.includes(selectedService)?selectedService:null,message:data.get('message'),locale:lang,source_path:window.location.pathname,consent:data.get('consent')==='on',website:data.get('website')||''};try{const response=await fetch('https://djpceifjuzymqlhiakkn.supabase.co/functions/v1/submit-contact-enquiry',{method:'POST',headers:{'Content-Type':'application/json','apikey':'sb_publishable_09yGaOjNSCpt3YYLUb1YOw_Bs6fr9Lf'},body:JSON.stringify(payload)});const result=await response.json();if(!response.ok||result.ok!==true)throw new Error(result.error||'We could not submit your enquiry. Please try again.');setSent(lang==='BN'?'ধন্যবাদ। আপনার বার্তা সফলভাবে জমা হয়েছে।':'Thank you. Your enquiry has been submitted successfully.');form.reset();}catch(error){setSent(error instanceof Error?error.message:'We could not submit your enquiry. Please try again.');}finally{setSubmitting(false);}}}>
<label>Your name<input required minLength="2" maxLength="120" name="name" autoComplete="name" placeholder="How should we address you?"/></label>
<label>Email address<input required type="email" maxLength="254" name="email" autoComplete="email" placeholder="you@example.com"/></label>
<label>What do you need help with?<select name="service" defaultValue={new URLSearchParams(window.location.search).get('service')||''}><option value="" disabled>Select an area</option><option>Brand & identity</option><option>Content & campaigns</option><option>Websites & platforms</option><option>Growth & marketing</option><option>Creative production</option><option>Business technology</option><option>Website Solution</option><option>Creator Platform</option><option>Hosting</option><option>Focused project</option><option>Ongoing partnership</option><option>Custom engagement</option><option>Something else</option></select></label>
<label>Tell us about your project<textarea required minLength="10" maxLength="5000" rows="4" name="message" placeholder="A little context helps us give you a useful response."/></label>
<label className="contact-consent"><input required type="checkbox" name="consent"/> <span>I agree that Swapno Tech may use these details to respond to my enquiry. See our <a href="/privacy">Privacy Policy</a>.</span></label>
<div className="contact-honeypot" aria-hidden="true"><label>Leave this field empty<input tabIndex="-1" autoComplete="off" name="website"/></label></div>
<button className="button button-orange" type="submit" disabled={submitting}>{submitting?'Submitting…':'Submit enquiry'} <Arrow diagonal/></button>
{sent&&<p className="form-feedback" role="status">{sent}</p>}
</form></section></main></Localize>;
  if(path==='/about') return <AboutPage lang={lang}/>;
  if(path.startsWith('/products/')) { const item=products.find(p=>p.href===path); return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow={"SWAPNO PRODUCT / " + (item?.number || '')} title={title} desc={desc}/><section className="section inner-section product-detail"><div className="product-detail-visual"><span className="eyebrow">DESIGNED TO MAKE THE NEXT STEP EASIER</span><div className="product-orbit"><span>{item?.number}</span></div></div><div><span className="eyebrow">HOW IT WORKS</span><div className="detail-steps">{(path.includes('website')?[['Choose a foundation','Start with a template and page structure.'],['Shape your pages','Edit content and reorder supported sections.'],['Preview & publish','Check the responsive result before going live.']]:path.includes('creator')?[['Create a profile','Introduce your skills, focus and experience.'],['Show your work','Organize projects into a clear portfolio.'],['Get discovered','Be found through relevant categories and search.']]:[['Explore verified options','Review available plans and key terms.'],['Share your requirements','Tell us about your site, traffic and support needs.'],['Coordinate setup','Get help with the next steps and provider coordination.']]).map((s,i)=><div className="detail-step" key={s[0]}><b>0{i+1}</b><div><h3>{tx(lang,s[0])}</h3><p>{tx(lang,s[1])}</p></div></div>)}</div><a className="button button-orange" href="/contact">Enquire about {item?.name||'this product'} <Arrow diagonal/></a><p className="note">Product preview and enquiry journey. Account, publishing, creator discovery and provider integrations are not connected in this first frontend milestone.</p></div></section></main></Localize>; }
  if(path==='/privacy'||path==='/terms'||path==='/community-guidelines') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SWAPNO TECH / POLICY" title={title} desc={desc}/><section className="section inner-section legal-content">
    {path==='/privacy'?<><h2>What this draft covers</h2><p>This page is a working policy draft, not a final legal notice. Before public launch, Swapno Tech must confirm its operating entity, contact details, analytics, hosting, data retention and any third-party processors.</p><h3>Information you choose to provide</h3><p>When enquiry or account features are connected, we will explain what information is collected, why it is needed, who can access it and how long it is retained. Do not submit passwords, payment details or sensitive personal information through this preview.</p><h3>Future products and accounts</h3><p>Creator profiles, community membership, website publishing and notifications will require clear privacy settings, access controls and retention rules before activation.</p><h3>Your choices</h3><p>Final contact and data-request procedures will be published here once the responsible contact channel and backend are confirmed.</p></>:path==='/terms'?<><h2>Using this website</h2><p>This is a draft framework. Service agreements, payment terms, cancellation rules, intellectual property ownership and liability wording must be reviewed and approved before launch.</p><h3>Project scope</h3><p>Any paid work should begin only after deliverables, timing, responsibilities, review rounds and fees are confirmed in writing.</p><h3>Products and availability</h3><p>Product pages describe intended direction and may not represent live or purchasable services. Availability, provider terms and technical limits must be confirmed before commitment.</p><h3>Content and accuracy</h3><p>Do not rely on preview content as a guarantee of results, pricing, timelines or feature availability.</p></>:<><h2>Our community standard</h2><p>Swapno Founders should be a respectful, useful space for aspiring entrepreneurs, founders and business owners.</p><h3>Be constructive</h3><p>Share relevant context, respect different experience levels and challenge ideas without attacking people.</p><h3>No spam or misleading claims</h3><p>Do not flood groups with promotions, impersonate others, share deceptive offers or publish private information without permission.</p><h3>Protect privacy</h3><p>Ask before sharing another person's contact details, work or private conversations. Report concerns to moderators instead of escalating conflict.</p><h3>Moderation and access</h3><p>Group permissions, reporting, appeals and founder verification must be implemented before community access opens. Membership does not automatically mean verified-founder status.</p></>}
    <p className="note">Draft content for internal review. Not a substitute for jurisdiction-specific legal advice.</p></section></main></Localize>;
  if(path==='/login'||path==='/register') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SWAPNO ACCOUNT" title={title} desc={desc}/><section className="section inner-section account-preview"><div className="account-status"><span className="eyebrow">NOT YET ACTIVE</span><h2>Account access is part of the next connected build.</h2><p>We are keeping sign-in and registration unavailable until the correct Swapno Tech backend, permissions and privacy workflows are configured.</p><a className="button button-orange" href="/contact">Ask about access <Arrow diagonal/></a></div></section></main></Localize>;
  if(path==='/founders') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SWAPNO FOUNDERS" title={title} desc={desc}/><section className="section inner-section"><div className="founder-groups">{[['01','Founder Announcements','Updates and important information from moderators.'],['02','Open Discussion','Introductions, questions, learning and networking.'],['03','Founders’ Circle','A focused space for business challenges and thoughtful problem-solving.'],['04','Opportunities & Collaboration','Partnerships, projects, referrals and events—with community moderation.']].map(g=><article key={g[0]}><b>{g[0]}</b><div><h3>{tx(lang,g[1])}</h3><p>{tx(lang,g[2])}</p></div></article>)}</div><div className="founder-note"><h2>Built on trust.<br/><em>Guided by contribution.</em></h2><p>Membership, founder verification and access permissions are separate. Applications, privacy controls and moderation will be part of the connected community build.</p><a className="button button-orange" href="/contact">Ask about joining <Arrow diagonal/></a></div></section></main></Localize>;
  return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SWAPNO TECH" title={title} desc={desc}/><section className="section inner-section"><p>This page is being prepared. Contact us if you need information in the meantime.</p><a className="button button-orange" href="/contact">Contact Swapno Tech <Arrow diagonal/></a></section></main></Localize>;
}
function NotFoundPage({lang='EN'}) {
  const bn = lang === 'BN';
  return <main className="inner-page not-found-page">
    <PageHero lang={lang} eyebrow="404 / PAGE NOT FOUND" title={bn ? 'এই পৃষ্ঠাটি পাওয়া যায়নি।' : 'This page isn’t here.'} desc={bn ? 'লিংকটি পুরোনো হতে পারে, অথবা ঠিকানাটি ভুল হয়েছে। Swapno Tech-এর মূল পৃষ্ঠায় ফিরে যান বা আমাদের সঙ্গে যোগাযোগ করুন।' : 'The link may be outdated, or the address may be incorrect. Return to the Swapno Tech homepage or get in touch.'}/>
    <section className="section inner-section">
      <span className="eyebrow">LET’S GET YOU BACK ON TRACK</span>
      <div className="not-found-actions">
        <a className="button button-orange" href="/">{bn ? 'হোমপেজে ফিরুন' : 'Back to homepage'} <Arrow diagonal/></a>
        <a className="button button-ghost" href="/contact">{bn ? 'যোগাযোগ করুন' : 'Contact Swapno Tech'} <Arrow diagonal/></a>
      </div>
    </section>
  </main>;
}
function PageHero({eyebrow,title,desc,lang='EN'}) { return <Localize lang={lang}><section className="page-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{desc}</p><div className="page-hero-mark">S<span>.</span></div></section></Localize>; }
function ProductStrip({lang='EN'}) { return <Localize lang={lang}><section className="section products-preview"><SectionHeading lang={lang} eyebrow="THE ECOSYSTEM" title="More ways to move forward."/><div className="product-grid">{products.map(p=><a href={p.href} className="product-card" key={p.number}><span className="product-no">{p.number}</span><h3>{tx(lang,p.name)}</h3><p>{tx(lang,p.desc)}</p><span className="card-link">Explore <Arrow diagonal/></span></a>)}</div></section></Localize>; }
function IntroGate({lang='EN'}) {
  const [visible,setVisible] = useState(false);
  useEffect(() => {
    if (window.location.pathname !== '/') return;
    const forcePreview = new URLSearchParams(window.location.search).get('intro') === '1';
    const storageKey = 'swapno-intro-seen-v1';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    try {
      if (!forcePreview && window.localStorage.getItem(storageKey) === '1') return;
    } catch {}
    setVisible(true);
    let finished = false;
    let revealTimer;
    const finish = () => {
      if (finished) return;
      finished = true;
      try { window.localStorage.setItem(storageKey,'1'); } catch {}
      revealTimer = window.setTimeout(() => setVisible(false), 600);
    };
    const onMessage = event => {
      if (event.origin === window.location.origin && event.data?.type === 'SWAPNO_INTRO_DONE') finish();
    };
    window.addEventListener('message',onMessage);
    const fallback = window.setTimeout(finish,9000);
    return () => {
      window.removeEventListener('message',onMessage);
      window.clearTimeout(fallback);
      window.clearTimeout(revealTimer);
    };
  },[]);
  if (!visible) return null;
  return <div className="intro-gate" style={{position:'fixed',inset:0,zIndex:2000,background:'transparent',transition:'opacity .55s ease'}}>
    <iframe title="Swapno Tech cinematic introduction" src={'/intro.html?lang='+lang} style={{width:'100%',height:'100%',border:0,display:'block'}} />
  </div>;
}
export default function App() {
  const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('swapno-theme')||'dark'}catch{return 'dark'}});
  const [lang,setLang]=useState(()=>{try{return localStorage.getItem('swapno-lang')||'EN'}catch{return 'EN'}});
  const route=resolveRoute(window.location.pathname);
  const path=route.renderPath;
  useEffect(()=>{if(route.isAlias){const next=route.canonicalPath+window.location.search+window.location.hash;window.history.replaceState(null,'',next);}},[route.canonicalPath,route.isAlias]);
  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('swapno-theme',theme)}catch{}},[theme]);
  useEffect(()=>{document.documentElement.lang=lang==='BN'?'bn':'en';try{localStorage.setItem('swapno-lang',lang)}catch{}},[lang]);
  useEffect(()=>{const serviceMeta=serviceFamilies.find(item=>item.renderPath===path);const aboutMeta=path==='/about'?aboutContent.hero:null;const serviceOverviewMeta=path==='/services'?{title:{en:'The right work for the need in front of you.',bn:'ব্যবসার প্রয়োজন থেকে সঠিক কাজ।'},description:{en:'We connect brand, content, marketing and technology around your business priorities.',bn:'আপনার ব্যবসার অগ্রাধিকার অনুযায়ী ব্র্যান্ড, কনটেন্ট, মার্কেটিং ও প্রযুক্তিকে একত্র করি।'}}:null;const packageMeta=path==='/packages'?{title:{en:'Choose the way of working that fits your need.',bn:'আপনার প্রয়োজন থেকে কাজের পরিধি ঠিক করি।'},description:{en:'Focused projects, ongoing partnerships and custom engagements with agreed scope, timing and fees.',bn:'নির্দিষ্ট প্রজেক্ট, নিয়মিত সহযোগিতা ও কাস্টম কাজ—সম্মত পরিধি, সময় ও ফিসহ।'}}:null;const insightMeta=path==='/blog'?{title:{en:'Ideas for building forward.',bn:'ভাবনা, যা কাজে এগিয়ে নেয়।'},description:{en:'Practical perspectives on business, creative work and technology from Swapno Tech.',bn:'ব্যবসা, সৃজনশীলতা ও প্রযুক্তি নিয়ে Swapno Tech-এর বাস্তবভিত্তিক দৃষ্টিভঙ্গি।'}}:insights.find(item=>path==='/blog/'+item.slug);const title=route.isKnown?(serviceMeta?bilingual(lang,serviceMeta.title):aboutMeta?bilingual(lang,aboutMeta.title):serviceOverviewMeta?bilingual(lang,serviceOverviewMeta.title):packageMeta?bilingual(lang,packageMeta.title):insightMeta?bilingual(lang,insightMeta.title):tx(lang,pageCopy[path]?.[0]||serviceDetails[path]?.[0]||workCategoryDetails[path]?.title||'Build what comes next')):(lang==='BN'?'পৃষ্ঠাটি পাওয়া যায়নি':'Page not found');const description=route.isKnown?(serviceMeta?bilingual(lang,serviceMeta.summary):aboutMeta?bilingual(lang,aboutMeta.description):serviceOverviewMeta?bilingual(lang,serviceOverviewMeta.description):packageMeta?bilingual(lang,packageMeta.description):insightMeta?bilingual(lang,insightMeta.summary):tx(lang,pageCopy[path]?.[1]||serviceDetails[path]?.[2]||workCategoryDetails[path]?.description||'Swapno Tech — creative technology and digital business solutions.')):(lang==='BN'?'অনুরোধ করা পৃষ্ঠাটি পাওয়া যায়নি।':'The requested page could not be found.');document.title=title+' — Swapno Tech';document.documentElement.lang=lang==='BN'?'bn':'en';const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content',description);window.scrollTo(0,0)},[path,lang,route.isKnown]);
  useEffect(()=>{
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets=[...document.querySelectorAll('.section, .intro-band, .process-band, .final-cta, .page-hero, .footer')];
    if(reduce || !('IntersectionObserver' in window)){targets.forEach(el=>el.classList.add('is-visible'));return;}
    targets.forEach(el=>el.classList.add('reveal-ready'));
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
    },{threshold:0.12,rootMargin:'0px 0px -5% 0px'});
    targets.forEach(el=>observer.observe(el));
    return ()=>observer.disconnect();
  },[path]);
  useEffect(()=>{
    const bar=document.querySelector('.scroll-progress');
    if(!bar)return;
    const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;bar.style.transform='scaleX('+(max>0?window.scrollY/max:0)+')';};
    update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
    return ()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);};
  },[path]);
  useEffect(()=>{
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce)return;
    const depthRules=[
      // Homepage layers: measured, subtle movement that follows the scroll.
      ['.apex-hero-art',0.055],['.brand-story-grid h2',0.025],
      ['.brand-story-grid > div',0.018],['.story-stage-art',0.045],
      ['.story-art-ring',0.025],['.story-art-panel.panel-back',0.018],
      ['.story-art-panel.panel-front',0.032],['.service-row h3',0.012],
      ['.work-visual .visual-shape',0.065],['.process-steps > div',0.025],
      ['.package-card',0.018],['.product-icon',0.035],
      ['.team-story-mark',0.025],['.article-card h3',0.015],
      ['.newsletter-story h2',0.02],['.cta-orbit',0.055],
      // Shared detail-page depth.
      ['.page-hero-mark',0.025],['.product-detail-visual .product-orbit',0.06],
      ['.detail-step',0.015],['.founder-groups article',0.015]
    ];
    const layers=[];
    depthRules.forEach(([selector,depth])=>{
      document.querySelectorAll(selector).forEach(el=>{
        el.dataset.motionDepth=String(depth);
        layers.push({el,depth});
      });
    });
    let frame=0;
    const paint=()=>{
      frame=0;
      const height=window.innerHeight||1;
      layers.forEach(({el,depth})=>{
        const rect=el.getBoundingClientRect();
        if(rect.bottom < -120 || rect.top > height+120)return;
        const offset=(rect.top+rect.height/2-height/2)/height;
        const y=Math.max(-34,Math.min(34,-offset*depth*height));
        el.style.setProperty('--motion-y',y.toFixed(1)+'px');
      });
    };
    const requestPaint=()=>{if(!frame)frame=window.requestAnimationFrame(paint);};
    requestPaint();
    window.addEventListener('scroll',requestPaint,{passive:true});
    window.addEventListener('resize',requestPaint);
    const hero=document.querySelector('.apex-hero');
    const artwork=document.querySelector('.hero-art-core');
    const finePointer=window.matchMedia('(pointer:fine)').matches;
    const onPointerMove=e=>{
      if(!hero||!artwork)return;
      const rect=hero.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      artwork.style.setProperty('--tilt-x',(x*5).toFixed(2)+'deg');
      artwork.style.setProperty('--tilt-y',(-y*5).toFixed(2)+'deg');
      hero.style.setProperty('--pointer-x',(x*9).toFixed(1)+'px');
      hero.style.setProperty('--pointer-y',(y*9).toFixed(1)+'px');
    };
    const onPointerLeave=()=>{
      if(!artwork||!hero)return;
      artwork.style.setProperty('--tilt-x','0deg');
      artwork.style.setProperty('--tilt-y','0deg');
      hero.style.setProperty('--pointer-x','0px');
      hero.style.setProperty('--pointer-y','0px');
    };
    if(hero&&artwork&&finePointer){
      hero.addEventListener('pointermove',onPointerMove,{passive:true});
      hero.addEventListener('pointerleave',onPointerLeave);
    }
    return ()=>{
      window.removeEventListener('scroll',requestPaint);
      window.removeEventListener('resize',requestPaint);
      if(frame)window.cancelAnimationFrame(frame);
      if(hero&&artwork&&finePointer){
        hero.removeEventListener('pointermove',onPointerMove);
        hero.removeEventListener('pointerleave',onPointerLeave);
      }
    };
  },[path]);
  return <div className="app-shell"><div className="scroll-progress" aria-hidden="true"/>{route.isKnown&&<IntroGate lang={lang}/>}<Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang}/>{!route.isKnown?<NotFoundPage lang={lang}/>:path==='/'?<Home lang={lang}/>:<GenericPage path={path} lang={lang}/>}<Footer lang={lang}/></div>;
}