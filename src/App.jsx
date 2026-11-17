import React, { useEffect, useState } from 'react';

const routes = [
  ['Home','/'],['Services','/services'],['Packages','/packages'],['Work','/portfolio'],
  ['Insights','/blog'],['About','/about'],['Contact','/contact']
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
const projects = [
  {name:'Brand systems',type:'Branding',desc:'Identity direction, visual language and brand applications.'},
  {name:'Campaign stories',type:'Video',desc:'Short-form creative built around a product or business message.'},
  {name:'Digital experiences',type:'Web & technology',desc:'Website structures and interface concepts for growing businesses.'},
  {name:'Editorial design',type:'Graphics',desc:'Social, promotional and information-led design systems.'}
];
const articles = [
  ['A clearer digital foundation','Strategy','A practical starting point for businesses building their online presence.'],
  ['Design that earns attention','Creative','Why a visual idea needs a clear message and a useful next step.'],
  ['From idea to useful product','Technology','How to turn a business need into a focused digital experience.']
];
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
  '/founders':['A space for people building businesses','Swapno Founders brings aspiring entrepreneurs, founders and business owners together to learn, exchange ideas and find opportunities.']
};
function Arrow({diagonal=false}) { return <span aria-hidden="true" className="arrow">{diagonal?'↗':'→'}</span>; }
function Brand({light=false}) { return <a className={'brand '+(light?'brand-light':'')} href="/" aria-label="Swapno Tech home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SWAPNO<span>TECH</span></span></a>; }
function Header({theme,setTheme,lang,setLang}) {
  const [open,setOpen]=useState(false);
  return <header className="header"><div className="nav-wrap"><Brand />
    <nav className={open?'nav nav-open':'nav'} aria-label="Main navigation">
      {routes.map(([name,path])=><a key={path} href={path} onClick={()=>setOpen(false)}>{name}</a>)}
      <a href="/founders" className="nav-founders" onClick={()=>setOpen(false)}>Founders ↗</a>
    </nav>
    <div className="nav-actions"><span className="text-control" title="Bangla edition is being prepared">EN</span><button className="theme-toggle" aria-label="Toggle colour theme" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?'☼':'◐'}</button><a className="button button-small button-orange nav-cta" href="/contact">Start a project <Arrow diagonal /></a><button className="menu-toggle" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button></div>
  </div></header>;
}
function Footer() {
  return <footer className="footer"><div className="footer-top"><div><Brand light/><p className="footer-note">Possibilities into progress.<br/>Creative technology for growing ideas.</p></div><div className="footer-links"><div><b>Explore</b><a href="/services">Services</a><a href="/portfolio">Work</a><a href="/blog">Insights</a><a href="/about">About</a></div><div><b>Products</b><a href="/products/website-solution">Website Solution</a><a href="/products/creator-platform">Creator Platform</a><a href="/products/hosting">Hosting</a><a href="/founders">Swapno Founders</a></div><div><b>Connect</b><a href="/contact">Start a conversation</a><a href="/contact">Contact us</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Swapno Tech</span><span>Built around possibility.</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div></footer>;
}
function SectionHeading({eyebrow,title,copy}) { return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>; }
function Home() {
  return <>
    <section className="hero"><div className="hero-grid"></div><div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div><div className="hero-content"><div className="eyebrow eyebrow-line"><span></span> CREATIVE TECHNOLOGY · DIGITAL GROWTH</div><h1>Build what<br/>comes <em>next.</em></h1><p className="hero-copy">We turn possibilities into progress through creative thinking, digital experiences and technology that moves businesses forward.</p><div className="hero-actions"><a className="button button-orange" href="/contact">Start a conversation <Arrow diagonal/></a><a className="button button-ghost" href="/services">Explore what we do <Arrow/></a></div><div className="hero-foot"><span>INDEPENDENT CREATIVE & TECHNOLOGY PARTNER</span><span>SCROLL TO EXPLORE ↓</span></div></div><div className="hero-art" aria-hidden="true"><div className="planet planet-main"><div className="planet-shade"></div><div className="planet-ring"></div><div className="planet-glow"></div></div><div className="orbit-label label-top">IDEAS / 01</div><div className="orbit-label label-bottom">POSSIBILITY IN MOTION</div><div className="float-dot"></div></div></section>
    <section className="intro-band"><span className="eyebrow">01 / THE BIGGER PICTURE</span><p>Good ideas deserve more than a launch.<br/><strong>They deserve a system to grow.</strong></p><span className="intro-aside">Strategy. Creativity. Technology.<br/>Connected by purpose.</span></section>
    <section className="section destinations"><SectionHeading eyebrow="02 / OUR EXPERTISE" title="Three directions.<br/>One connected ambition." copy="From the first spark to the next stage of growth, we bring the right capabilities together."/><div className="destination-grid"><a href="/services" className="destination-card mars"><span className="destination-number">01 / CREATE</span><div className="sphere sphere-mars"></div><div><h3>Make it<br/><em>matter.</em></h3><p>Brand, content and creative experiences that make your business clear and memorable.</p><span className="card-link">Explore creative <Arrow diagonal/></span></div></a><a href="/products/website-solution" className="destination-card earth"><span className="destination-number">02 / BUILD</span><div className="sphere sphere-earth"></div><div><h3>Build for<br/><em>tomorrow.</em></h3><p>Websites, platforms and useful technology shaped around real business needs.</p><span className="card-link">Explore technology <Arrow diagonal/></span></div></a><a href="/services" className="destination-card venus"><span className="destination-number">03 / GROW</span><div className="sphere sphere-venus"></div><div><h3>Move with<br/><em>purpose.</em></h3><p>Research-led marketing and connected systems that support sustainable progress.</p><span className="card-link">Explore growth <Arrow diagonal/></span></div></a></div></section>
    <section className="section services-preview"><div className="section-split"><SectionHeading eyebrow="03 / WHAT WE DO" title="A connected<br/>creative engine." copy="One partner across the work that makes a business more visible, useful and ready for what’s next."/><a className="text-link" href="/services">All services <Arrow diagonal/></a></div><div className="service-list">{services.map(([n,t,d])=><a href="/services" className="service-row" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><Arrow diagonal/></a>)}</div></section>
    <section className="section work-preview"><div className="section-split"><SectionHeading eyebrow="04 / SELECTED WORK" title="Ideas made<br/>visible." copy="A selection of creative directions and digital experiences. Verified case studies and project details are added as publication is approved."/><a className="text-link" href="/portfolio">Explore the work <Arrow diagonal/></a></div><div className="work-grid">{projects.slice(0,3).map((p,i)=><a href="/portfolio" className={'work-card work-'+i} key={p.name}><div className="work-visual"><span className="visual-index">0{i+1}</span><div className="visual-shape"></div><span className="visual-caption">{p.type.toUpperCase()}</span></div><div className="work-meta"><div><h3>{p.name}</h3><p>{p.desc}</p></div><Arrow diagonal/></div></a>)}</div></section>
    <section className="process-band"><span className="eyebrow">05 / HOW WE MOVE</span><h2>Clarity before<br/><em>complexity.</em></h2><div className="process-steps"><div><b>01</b><h3>Understand</h3><p>Start with your goal, audience and the real challenge.</p></div><div><b>02</b><h3>Shape</h3><p>Turn insight into a focused direction and practical plan.</p></div><div><b>03</b><h3>Create</h3><p>Build, test and refine the experience with care.</p></div><div><b>04</b><h3>Move forward</h3><p>Launch with a clear next step and room to improve.</p></div></div></section>
    <section className="section products-preview"><SectionHeading eyebrow="06 / THE SWAPNO ECOSYSTEM" title="Tools and connections<br/>for the next step." copy="A growing set of practical digital products—designed to work as part of a bigger journey."/><div className="product-grid">{products.map(p=><a href={p.href} className="product-card" key={p.number}><span className="product-no">{p.number}</span><span className="product-icon">{p.number==='01'?'⌘':p.number==='02'?'◈':'⌁'}</span><div><span className="eyebrow">{p.tag}</span><h3>{p.name}</h3><p>{p.desc}</p></div><span className="card-link">Discover product <Arrow diagonal/></span></a>)}</div></section>
    <section className="section insight-preview"><div className="section-split"><SectionHeading eyebrow="07 / FIELD NOTES" title="Thoughts that<br/>move things forward."/><a className="text-link" href="/blog">All insights <Arrow diagonal/></a></div><div className="article-grid">{articles.map((a,i)=><a className="article-card" href="/blog" key={a[0]}><span className="article-index">0{i+1} / {a[1]}</span><h3>{a[0]}</h3><p>{a[2]}</p><span className="card-link">Read insight <Arrow diagonal/></span></a>)}</div></section>
    <section className="final-cta"><span className="eyebrow">HAVE A POSSIBILITY IN MIND?</span><h2>Let’s make<br/><em>it happen.</em></h2><a className="button button-orange" href="/contact">Start your project <Arrow diagonal/></a><span className="cta-orbit"></span></section>
  </>;
}
function GenericPage({path}) {
  const [title,desc]=pageCopy[path]||['Page coming into focus','We are shaping this experience with the same care as the rest of the Swapno ecosystem.'];
  const [sent,setSent]=useState(false);
  if(path==='/services') return <main className="inner-page"><PageHero eyebrow="WHAT WE DO" title={title} desc={desc}/><section className="section inner-section"><div className="service-list">{services.map(([n,t,d])=><div className="service-row service-static" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><Arrow diagonal/></div>)}</div></section><ProductStrip/></main>;
  if(path==='/packages') return <main className="inner-page"><PageHero eyebrow="WAYS TO WORK TOGETHER" title={title} desc={desc}/><section className="section inner-section"><div className="package-grid">{[['Essentials','A focused starting point','A clear scope for one important business need.'],['Growth','A connected monthly rhythm','Ongoing creative and digital support shaped around agreed priorities.'],['Custom','Built around your brief','A tailored combination of strategy, production and technology.']].map((p,i)=><article className="package-card" key={p[0]}><span className="eyebrow">OPTION 0{i+1}</span><h2>{p[0]}</h2><h3>{p[1]}</h3><p>{p[2]}</p><a className="text-link" href="/contact">Discuss scope <Arrow diagonal/></a></article>)}</div><p className="note">Final scope and pricing are confirmed after understanding your requirements. No unapproved prices or guarantees are displayed.</p></section></main>;
  if(path==='/portfolio') return <main className="inner-page"><PageHero eyebrow="SELECTED WORK" title={title} desc={desc}/><section className="section inner-section"><div className="work-grid">{projects.map((p,i)=><article className={'work-card work-'+i} key={p.name}><div className="work-visual"><span className="visual-index">0{i+1}</span><div className="visual-shape"></div><span className="visual-caption">{p.type.toUpperCase()}</span></div><div className="work-meta"><div><h3>{p.name}</h3><p>{p.desc}</p></div><span className="eyebrow">SHOWCASE</span></div></article>)}</div><p className="note">These are showcase categories, not claims of specific client outcomes. Approved project case studies will replace these panels.</p></section></main>;
  if(path==='/blog') return <main className="inner-page"><PageHero eyebrow="INSIGHTS" title={title} desc={desc}/><section className="section inner-section"><div className="article-grid article-grid-page">{articles.map((a,i)=><article className="article-card" key={a[0]}><span className="article-index">0{i+1} / {a[1]}</span><h3>{a[0]}</h3><p>{a[2]}</p><span className="eyebrow">EDITORIAL PREVIEW</span></article>)}</div><p className="note">Editorial previews only. Full articles, authors and publication dates will be added after review.</p></section></main>;
  if(path==='/contact') return <main className="inner-page"><PageHero eyebrow="START A CONVERSATION" title={title} desc={desc}/><section className="section inner-section contact-layout"><div><span className="eyebrow">A GOOD PLACE TO BEGIN</span><h2>Tell us a little<br/>about the idea.</h2><p>Share what you want to achieve, what is getting in the way and what kind of support you are looking for.</p><a className="text-link" href="#enquiry-form">Use the enquiry form <Arrow diagonal/></a></div><form id="enquiry-form" className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Your name<input required name="name" placeholder="How should we address you?"/></label><label>Email address<input required type="email" name="email" placeholder="you@example.com"/></label><label>What do you need help with?<select name="service" defaultValue=""><option value="" disabled>Select an area</option><option>Brand & creative</option><option>Website & technology</option><option>Marketing & growth</option><option>Website Solution</option><option>Creator Platform</option><option>Hosting</option><option>Something else</option></select></label><label>Tell us about your project<textarea required rows="4" name="message" placeholder="A little context helps us give you a useful response."/></label><button className="button button-orange" type="submit">Prepare enquiry <Arrow diagonal/></button>{sent&&<p className="form-feedback" role="status">Your details are ready in this preview. Sending is not connected yet; please use the email link or contact channel once configured.</p>}</form></section></main>;
  if(path==='/about') return <main className="inner-page"><PageHero eyebrow="WHO WE ARE" title={title} desc={desc}/><section className="section inner-section"><div className="about-statement"><span className="eyebrow">OUR BELIEF</span><h2>Technology should make possibility <em>practical.</em></h2><p>Swapno Tech connects creative services, digital products and hands-on collaboration. We value clear communication, thoughtful work and progress that can be sustained.</p></div><div className="values-grid">{[['Clarity','Make the purpose understandable.'],['Craft','Care about the details and the whole.'],['Collaboration','Work with people, not around them.'],['Progress','Choose useful steps over noise.']].map(v=><div key={v[0]}><span className="eyebrow">OUR VALUE</span><h3>{v[0]}</h3><p>{v[1]}</p></div>)}</div></section></main>;
  if(path.startsWith('/products/')) { const item=products.find(p=>p.href===path); return <main className="inner-page"><PageHero eyebrow={"SWAPNO PRODUCT / " + (item?.number || '')} title={title} desc={desc}/><section className="section inner-section product-detail"><div className="product-detail-visual"><span className="eyebrow">DESIGNED TO MAKE THE NEXT STEP EASIER</span><div className="product-orbit"><span>{item?.number}</span></div></div><div><span className="eyebrow">HOW IT WORKS</span><div className="detail-steps">{(path.includes('website')?[['Choose a foundation','Start with a template and page structure.'],['Shape your pages','Edit content and reorder supported sections.'],['Preview & publish','Check the responsive result before going live.']]:path.includes('creator')?[['Create a profile','Introduce your skills, focus and experience.'],['Show your work','Organize projects into a clear portfolio.'],['Get discovered','Be found through relevant categories and search.']]:[['Explore verified options','Review available plans and key terms.'],['Share your requirements','Tell us about your site, traffic and support needs.'],['Coordinate setup','Get help with the next steps and provider coordination.']]).map((s,i)=><div className="detail-step" key={s[0]}><b>0{i+1}</b><div><h3>{s[0]}</h3><p>{s[1]}</p></div></div>)}</div><a className="button button-orange" href="/contact">Enquire about {item?.name||'this product'} <Arrow diagonal/></a><p className="note">Product preview and enquiry journey. Account, publishing, creator discovery and provider integrations are not connected in this first frontend milestone.</p></div></section></main>; }
  if(path==='/founders') return <main className="inner-page"><PageHero eyebrow="SWAPNO FOUNDERS" title={title} desc={desc}/><section className="section inner-section"><div className="founder-groups">{[['01','Founder Announcements','Updates and important information from moderators.'],['02','Open Discussion','Introductions, questions, learning and networking.'],['03','Founders’ Circle','A focused space for business challenges and thoughtful problem-solving.'],['04','Opportunities & Collaboration','Partnerships, projects, referrals and events—with community moderation.']].map(g=><article key={g[0]}><b>{g[0]}</b><div><h3>{g[1]}</h3><p>{g[2]}</p></div></article>)}</div><div className="founder-note"><h2>Built on trust.<br/><em>Guided by contribution.</em></h2><p>Membership, founder verification and access permissions are separate. Applications, privacy controls and moderation will be part of the connected community build.</p><a className="button button-orange" href="/contact">Ask about joining <Arrow diagonal/></a></div></section></main>;
  return <main className="inner-page"><PageHero eyebrow="SWAPNO TECH" title={title} desc={desc}/><section className="section inner-section"><p>This page is being prepared. Contact us if you need information in the meantime.</p><a className="button button-orange" href="/contact">Contact Swapno Tech <Arrow diagonal/></a></section></main>;
}
function PageHero({eyebrow,title,desc}) { return <section className="page-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{desc}</p><div className="page-hero-mark">S<span>.</span></div></section>; }
function ProductStrip() { return <section className="section products-preview"><SectionHeading eyebrow="THE ECOSYSTEM" title="More ways to move forward."/><div className="product-grid">{products.map(p=><a href={p.href} className="product-card" key={p.number}><span className="product-no">{p.number}</span><h3>{p.name}</h3><p>{p.desc}</p><span className="card-link">Explore <Arrow diagonal/></span></a>)}</div></section>; }
function IntroGate() {
  const [visible,setVisible] = useState(false);
  useEffect(() => {
    if (window.location.pathname !== '/') return;
    // Keep the intro visible on every homepage load while it is being tested.
    // Do not use a first-visit localStorage flag: it can hide the intro after an
    // interrupted preview or after a browser has cached an earlier attempt.
    setVisible(true);
    let finished = false;
    let revealTimer;
    const finish = () => {
      if (finished) return;
      finished = true;
      // Let the intro's final fade complete before revealing the homepage.
      revealTimer = window.setTimeout(() => setVisible(false), 420);
    };
    const onMessage = event => {
      if (event.origin === window.location.origin && event.data?.type === 'SWAPNO_INTRO_DONE') finish();
    };
    window.addEventListener('message',onMessage);
    const fallback = window.setTimeout(() => setVisible(false),15000);
    return () => { window.removeEventListener('message',onMessage); window.clearTimeout(fallback); window.clearTimeout(revealTimer); };
  },[]);
  if (!visible) return null;
  return <div style={{position:'fixed',inset:0,zIndex:2000,background:'#050505'}}>
    <iframe title="Swapno Tech introduction" src="/intro.html" style={{width:'100%',height:'100%',border:0,display:'block'}} />
  </div>;
}

export default function App() {
  const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('swapno-theme')||'dark'}catch{return 'dark'}});
  const [lang,setLang]=useState('EN');
  const path=window.location.pathname.replace(/\/$/,'')||'/';
  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('swapno-theme',theme)}catch{}},[theme]);
  useEffect(()=>{document.title=(pageCopy[path]?.[0]||'Build what comes next')+' — Swapno Tech';window.scrollTo(0,0)},[path]);
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
      ['.intro-band p',0.075],['.intro-aside',0.04],['.section-heading',0.035],
      ['.sphere',0.15],['.destination-card > div:last-child',0.035],
      ['.work-visual .visual-shape',0.12],['.process-steps > div',0.045],
      ['.product-icon',0.09],['.article-card h3',0.035],['.cta-orbit',0.12],
      ['.page-hero-mark',0.04],['.product-detail-visual .product-orbit',0.12],
      ['.detail-step',0.025],['.founder-groups article',0.025]
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
    const hero=document.querySelector('.hero');
    const planet=document.querySelector('.planet-main');
    const finePointer=window.matchMedia('(pointer:fine)').matches;
    const onPointerMove=e=>{
      if(!hero||!planet)return;
      const rect=hero.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      planet.style.setProperty('--tilt-x',(x*7).toFixed(2)+'deg');
      planet.style.setProperty('--tilt-y',(-y*7).toFixed(2)+'deg');
      hero.style.setProperty('--pointer-x',(x*12).toFixed(1)+'px');
      hero.style.setProperty('--pointer-y',(y*12).toFixed(1)+'px');
    };
    const onPointerLeave=()=>{
      if(!planet||!hero)return;
      planet.style.setProperty('--tilt-x','0deg');
      planet.style.setProperty('--tilt-y','0deg');
      hero.style.setProperty('--pointer-x','0px');
      hero.style.setProperty('--pointer-y','0px');
    };
    if(hero&&finePointer){
      hero.addEventListener('pointermove',onPointerMove,{passive:true});
      hero.addEventListener('pointerleave',onPointerLeave);
    }
    return ()=>{
      window.removeEventListener('scroll',requestPaint);
      window.removeEventListener('resize',requestPaint);
      if(frame)window.cancelAnimationFrame(frame);
      if(hero&&finePointer){
        hero.removeEventListener('pointermove',onPointerMove);
        hero.removeEventListener('pointerleave',onPointerLeave);
      }
    };
  },[path]);
  return <div className="app-shell"><div className="scroll-progress" aria-hidden="true"/><IntroGate/><Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang}/>{path==='/'?<Home/>:<GenericPage path={path}/>}<Footer/></div>;
}