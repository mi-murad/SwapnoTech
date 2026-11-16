import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const MEDIA = {
  intro: 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5fc5651c-3b5d-4171-b507-87f7e635d1b4.mp4',
  mars: 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/3c83091e-4046-4fd6-adbb-2edb728be79a.mp4',
  earth: 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc3ded42-e845-41f3-a830-5cab512d79cd.mp4',
  venus: 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/b30f64d9-1637-477a-83df-d0fc6461a422.mp4',
}
const CONTACT_PHONE = '+8801608885865'
const WHATSAPP_URL = 'https://wa.me/8801608885865'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Products', href: '/products/website-solution', menu: true },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

const serviceGroups = [
  {
    id: 'brand',
    number: '01',
    title: 'Brand & design',
    description: 'A clear identity and a consistent visual language—so people recognise your business and understand what it stands for.',
    deliverables: ['Brand identity', 'Graphic design', 'Campaign creatives', 'Social media design'],
    planet: 'mars',
  },
  {
    id: 'content',
    number: '02',
    title: 'Content & production',
    description: 'Content planned and produced with a purpose: to explain, engage and give your brand something worth saying.',
    deliverables: ['Content planning', 'Video editing', 'Short-form video', 'Animation & motion graphics'],
    planet: 'mars',
  },
  {
    id: 'marketing',
    number: '03',
    title: 'Social media & marketing',
    description: 'Consistent communication and campaigns that connect the message, the audience and the next business action.',
    deliverables: ['Social media management', 'Content distribution', 'Campaign planning', 'Digital campaign execution'],
    planet: 'venus',
  },
  {
    id: 'technology',
    number: '04',
    title: 'Web & technology',
    description: 'Useful digital experiences and systems that help a business present itself, serve customers and operate online.',
    deliverables: ['Website design & development', 'Software', 'Digital platforms', 'Website launch support'],
    planet: 'earth',
  },
]

const projects = [
  { slug: 'dhaka-flower-tub', name: 'Dhaka Flower Tub', category: 'Content & campaigns', scope: 'Content production · Social creatives · Campaign execution', summary: 'A connected content and campaign programme for a planter and gardening brand.' },
  { slug: 'dhaka-elagance', name: 'Dhaka Elagance', category: 'Brand communication', scope: 'Content planning · Design · Video', summary: 'Visual communication for an interior, greenery and decor business.' },
  { slug: 'sanpie-mirpur', name: 'SanPie Mirpur', category: 'Brand & content', scope: 'Brand refresh · OVC · Social content', summary: 'A refreshed restaurant brand direction supported by focused video and social content.' },
  { slug: 'hili-spice', name: 'Hili Spice', category: 'Identity & launch', scope: 'Brand direction · Packaging · Launch content', summary: 'A heritage-led spice brand identity and packaging direction for a Bangladesh launch.' },
  { slug: 'avhijatya', name: 'AVHIJATYA', category: 'Brand identity', scope: 'Identity direction · Digital presence · Launch content', summary: 'A premium menswear identity direction built around timeless craft and considered presentation.' },
  { slug: 'inshape-architects', name: 'Inshape Architects', category: 'Web & technology', scope: 'Website rebuild · Digital presence', summary: 'A digital presence and website rebuild direction for an architecture practice.' },
]
const engagementModels = [
  { number: '01', title: 'A focused project', description: 'For a clear business need, launch, campaign or defined creative and technology brief.', label: 'Project-based' },
  { number: '02', title: 'An ongoing partnership', description: 'For teams that need consistent content, design, marketing or technology support over time.', label: 'Ongoing support' },
  { number: '03', title: 'A custom solution', description: 'For connected needs that combine strategy, creative work and a digital build.', label: 'Custom scope' },
]
const productItems = [
  { number: '01', name: 'Website Solution', href: '/products/website-solution', descriptor: 'Build your digital home', description: 'A guided website builder with templates, structured sections, editing and responsive preview.' },
  { number: '02', name: 'Creator Platform', href: '/products/creator-platform', descriptor: 'Find the right people', description: 'Discover designers, editors, creators and technical professionals through profiles and portfolios.' },
  { number: '03', name: 'Hosting Packages', href: '/products/hosting', descriptor: 'Find a place to start', description: 'Explore verified third-party hosting options and request help with setup and coordination.' },
]

function BrandWordmark({ light = false }) {
  return <a className={'brand-wordmark' + (light ? ' brand-wordmark-light' : '')} href="/" aria-label="Swapno Tech home"><span>SWAPNO</span><i>TECH</i></a>
}

function IntroSequence({ onComplete }) {
  const videoRef = useRef(null)
  const doneRef = useRef(false)
  const [phase, setPhase] = useState('loading')
  const [progress, setProgress] = useState(0)

  const finish = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    videoRef.current?.pause()
    setProgress(100)
    setPhase('docking')
    window.setTimeout(onComplete, 1200)
  }, [onComplete])

  useEffect(() => {
    const video = videoRef.current
    const maxTimer = window.setTimeout(finish, 5200)
    if (video) {
      const play = video.play()
      if (play && typeof play.catch === 'function') play.catch(finish)
    }
    return () => window.clearTimeout(maxTimer)
  }, [finish])

  const updateProgress = () => {
    const video = videoRef.current
    if (video && Number.isFinite(video.duration) && video.duration > 0) {
      setProgress(Math.min(99, Math.round((video.currentTime / video.duration) * 100)))
    }
  }

  return (
    <div className={'intro-sequence intro-' + phase} role="status" aria-label="Swapno Tech introduction">
      <video
        ref={videoRef}
        className="intro-video"
        src={MEDIA.intro}
        muted
        playsInline
        autoPlay
        preload="auto"
        onTimeUpdate={updateProgress}
        onEnded={finish}
        onError={finish}
      />
      <div className="intro-shade" />
      <div className="intro-grain" />
      <div className="intro-wordmark"><span>SWAPNO</span><i>TECH</i></div>
      <div className="intro-progress">
        <div className="intro-progress-copy"><span>PREPARING THE EXPERIENCE</span><b>{String(progress).padStart(2, '0')}%</b></div>
        <div className="intro-progress-track"><i style={{ width: progress + '%' }} /></div>
      </div>
      <button className="intro-skip" type="button" onClick={finish}>Skip intro <span>↗</span></button>
      <div className="intro-portal" aria-hidden="true" />
    </div>
  )
}

function SceneMedia({ src, eager = false, className = '' }) {
  const hostRef = useRef(null)
  const videoRef = useRef(null)
  const [enabled, setEnabled] = useState(eager)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (eager || typeof IntersectionObserver === 'undefined') {
      setEnabled(true)
      return undefined
    }
    const node = hostRef.current
    if (!node) return undefined
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setEnabled(true)
        observer.disconnect()
      }
    }, { rootMargin: '320px 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [eager])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !enabled) return undefined
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver((entries) => {
      const visible = entries.some((entry) => entry.isIntersecting)
      if (visible) video.play().catch(() => {})
      else video.pause()
    }, { threshold: 0.08 })
    if (observer) observer.observe(video)
    return () => observer?.disconnect()
  }, [enabled])

  return (
    <div ref={hostRef} className={'scene-media ' + className + (failed ? ' scene-media-failed' : '')} aria-hidden="true">
      {enabled && <video ref={videoRef} src={src} muted playsInline loop autoPlay preload={eager ? 'auto' : 'none'} onError={() => setFailed(true)} />}
      <div className="scene-media-fallback" />
    </div>
  )
}

function SiteHeader({ compact, light, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setProductsOpen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <header className={'site-header' + (compact ? ' is-compact' : '') + (light ? ' header-light' : '')}>
      <div className="header-inner">
        <BrandWordmark light={light} />
        <button className="mobile-menu-button" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={'primary-nav' + (menuOpen ? ' nav-open' : '')} aria-label="Primary navigation">
          {navItems.map((item) => item.menu ? (
            <div className="nav-products" key={item.label}>
              <button type="button" className="nav-product-trigger" aria-expanded={productsOpen} onClick={() => setProductsOpen(!productsOpen)}>{item.label}<span>⌄</span></button>
              <div className={'product-dropdown' + (productsOpen ? ' dropdown-open' : '')}>
                {productItems.map((product) => <a key={product.href} href={product.href} onClick={() => { setProductsOpen(false); setMenuOpen(false) }}>{product.name}<small>{product.descriptor}</small></a>)}
                <a href="/community/founders" onClick={() => { setProductsOpen(false); setMenuOpen(false) }}>Swapno Founders<small>Separate founder community</small></a>
              </div>
            </div>
          ) : <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="mobile-nav-account" href="/contact" onClick={() => setMenuOpen(false)}>Project enquiry ↗</a>
        </nav>
        <div className="header-actions">
          <button className="theme-switch" type="button" onClick={onThemeToggle} aria-label={light ? 'Switch to night theme' : 'Switch to day theme'}><span>{light ? 'Day' : 'Night'}</span><i /></button>
          <a className="header-cta" href="/contact">Let's Talk <span>↗</span></a>
        </div>
      </div>
    </header>
  )
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><b>{number}</b><span>{children}</span></div>
}

function PageIntro({ label, title, description, action }) {
  return (
    <section className="page-intro">
      <div className="page-intro-grid">
        <div>
          <div className="eyebrow">{label}</div>
          <h1>{title}</h1>
        </div>
        <div className="page-intro-side">
          <p>{description}</p>
          {action && <a className="text-action" href={action.href}>{action.label} <span>↗</span></a>}
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  const [workFilter, setWorkFilter] = useState('All')
  const visibleProjects = useMemo(() => {
    if (workFilter === 'All') return projects
    return projects.filter((project) => {
      if (workFilter === 'Branding') return /Brand|Identity|Hili Spice|AVHIJATYA/i.test(project.category + project.name)
      if (workFilter === 'Video & Content') return /Content|Video|campaign/i.test(project.scope + project.category)
      if (workFilter === 'Web & Technology') return /Web|Technology/i.test(project.category + project.scope)
      return true
    })
  }, [workFilter])

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const chapters = [
    { id: 'mars', number: '01', name: 'MARS', heading: <>Create<br />& execute.</>, description: 'Brand identity, design, content and production—made to communicate with clarity and character.', media: MEDIA.mars, label: 'CREATIVE DELIVERY', links: 'Brand · Design · Content · Motion' },
    { id: 'earth', number: '02', name: 'EARTH', heading: <>Build<br />& grow.</>, description: 'Websites, software and digital platforms that turn a business idea into something useful and accessible.', media: MEDIA.earth, label: 'DIGITAL FOUNDATIONS', links: 'Websites · Software · Platforms' },
    { id: 'venus', number: '03', name: 'VENUS', heading: <>Brand<br />& connect.</>, description: 'Social communication and digital campaigns that connect what a business says with the people it wants to reach.', media: MEDIA.venus, label: 'AUDIENCE CONNECTION', links: 'Social · Campaigns · Communication' },
  ]

  return (
    <>
      <section className="hero-scene" id="top">
        <SceneMedia src={MEDIA.mars} eager className="hero-media" />
        <div className="hero-shading" />
        <div className="hero-content content-shell">
          <div className="eyebrow hero-eyebrow"><i /> DIGITAL MARKETING · CREATIVE · TECHNOLOGY</div>
          <h1>Building brands.<br /><em>Growing systems.</em></h1>
          <p>Strategy, creative, marketing and technology—connected to help businesses move forward with purpose.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/contact">Start a project <span>↗</span></a>
            <a className="button button-quiet" href="/work">Explore our work <span>↓</span></a>
          </div>
          <div className="hero-bottomline"><span>SWAPNO TECH / INDEPENDENT CREATIVE & TECHNOLOGY TEAM</span><span>SCROLL TO EXPLORE <i>↓</i></span></div>
        </div>
        <div className="hero-index"><b>01</b><span>—</span><span>03</span></div>
        <div className="hero-side-note">THINK CLEARLY / CREATE WITH PURPOSE / BUILD FOR WHAT'S NEXT</div>
      </section>

      <section className="agency-intro content-shell" id="about" data-reveal>
        <SectionLabel number="01">THE SWAPNO APPROACH</SectionLabel>
        <div className="agency-intro-grid">
          <h2>One team for the<br /><em>whole picture.</em></h2>
          <div className="agency-intro-copy">
            <p>Growing a business takes more than a good-looking post or a website on its own. It takes a clear offer, a recognisable brand, useful content, thoughtful marketing and digital tools that work together.</p>
            <p>Swapno Tech brings those capabilities into one connected process—from the first conversation to the work people see and use.</p>
            <a className="text-action" href="/about">Discover Swapno Tech <span>↗</span></a>
          </div>
        </div>
        <div className="intro-principles"><span>STRATEGY BEFORE OUTPUT</span><span>CREATIVE WITH CONTEXT</span><span>TECHNOLOGY WITH PURPOSE</span></div>
      </section>

      <section className="expertise-story" id="expertise">
        <div className="expertise-heading content-shell" data-reveal>
          <SectionLabel number="02">THREE CONNECTED AREAS OF EXPERTISE</SectionLabel>
          <div className="expertise-heading-grid">
            <h2>Different strengths.<br /><em>One direction.</em></h2>
            <p>Our planetary journey is a way to understand how the work connects. Each destination represents a real capability—not a separate business or a fictional world.</p>
          </div>
        </div>
        {chapters.map((chapter, index) => (
          <article className={'expertise-scene scene-' + chapter.id} key={chapter.id} data-chapter={chapter.id}>
            <SceneMedia src={chapter.media} className="expertise-scene-media" />
            <div className="expertise-scene-shade" />
            <div className="expertise-scene-inner content-shell">
              <div className="scene-overline"><span>{chapter.number} / {chapter.name}</span><i />{chapter.label}</div>
              <div className="expertise-scene-copy">
                <div>
                  <h3>{chapter.heading}</h3>
                  <p>{chapter.description}</p>
                  <a className="scene-link" href="/services">Explore services <span>↗</span></a>
                </div>
                <div className="scene-detail">
                  <span>THE WORK</span>
                  <b>{chapter.links}</b>
                </div>
              </div>
              <div className="scene-progress"><span>{String(index + 1).padStart(2, '0')}</span><i /><span>03</span></div>
            </div>
          </article>
        ))}
      </section>

      <section className="services-section content-shell" id="services" data-reveal>
        <SectionLabel number="03">WHAT WE DO</SectionLabel>
        <div className="split-heading">
          <h2>From the first idea<br />to the next step.</h2>
          <p>Choose the capability you need, or bring us the bigger challenge. We'll help shape the right combination of creative and technology work.</p>
        </div>
        <div className="service-rows">
          {serviceGroups.map((group) => (
            <a className="service-row" href={'/services#' + group.id} key={group.id}>
              <span className="service-number">{group.number}</span>
              <div className="service-main"><h3>{group.title}</h3><p>{group.description}</p></div>
              <div className="service-deliverables">{group.deliverables.map((item) => <span key={item}>{item}</span>)}</div>
              <i className="service-arrow">↗</i>
            </a>
          ))}
        </div>
        <div className="section-tail"><span>FOCUSED SERVICES / CONNECTED EXECUTION</span><a href="/services" className="text-action">Explore all services <span>↗</span></a></div>
      </section>

      <section className="work-section" id="work">
        <div className="content-shell" data-reveal>
          <SectionLabel number="04">SELECTED WORK</SectionLabel>
          <div className="split-heading work-heading">
            <h2>Work made<br /><em>with intent.</em></h2>
            <p>Different businesses, different challenges. The work brings strategy, creative execution and technology together around what each project needs.</p>
          </div>
          <div className="work-filter" role="group" aria-label="Filter projects">
            {['All', 'Branding', 'Video & Content', 'Web & Technology'].map((filter) => <button className={workFilter === filter ? 'active' : ''} key={filter} onClick={() => setWorkFilter(filter)} type="button">{filter}</button>)}
          </div>
          <div className="project-list">
            {visibleProjects.map((project, index) => (
              <a className="project-row" href={'/work/' + project.slug} key={project.slug}>
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="project-title"><h3>{project.name}</h3><p>{project.summary}</p></div>
                <span className="project-category">{project.category}</span>
                <span className="project-scope">{project.scope}</span>
                <i>↗</i>
              </a>
            ))}
          </div>
          <div className="section-tail"><span>SELECTED CLIENT AND BRAND PROJECTS</span><a className="text-action" href="/work">View work archive <span>↗</span></a></div>
        </div>
      </section>

      <section className="process-section content-shell" data-reveal>
        <SectionLabel number="05">HOW WE WORK</SectionLabel>
        <div className="split-heading">
          <h2>Clear thinking.<br /><em>Thoughtful making.</em></h2>
          <p>We keep the process understandable. You know what we're solving, what we're making and what needs your review before work moves forward.</p>
        </div>
        <div className="process-track">
          {[
            ['01', 'Understand', 'We learn about the business, audience, challenge and what a useful outcome looks like.'],
            ['02', 'Shape the plan', 'We research the brief, agree priorities and set a clear direction before production begins.'],
            ['03', 'Create & build', 'The approved direction becomes the brand, content, campaign or digital experience.'],
            ['04', 'Review & improve', 'We review the work together, make refinements and identify the next useful step.'],
          ].map(([number, title, description]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="engagement-section">
        <div className="content-shell engagement-inner" data-reveal>
          <div className="engagement-intro"><SectionLabel number="06">WAYS TO WORK WITH US</SectionLabel><h2>Start where<br /><em>you are.</em></h2><p>Not every business needs everything at once. Start with the work that matters now, then build from there.</p></div>
          <div className="engagement-list">
            {engagementModels.map((model) => <article key={model.number}><div><span>{model.number} / {model.label}</span><h3>{model.title}</h3><p>{model.description}</p></div><a href="/packages" aria-label={'Explore ' + model.title}>↗</a></article>)}
            <a className="text-action" href="/packages">Explore engagement options <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="products-section content-shell" id="products" data-reveal>
        <SectionLabel number="07">THE SWAPNO ECOSYSTEM</SectionLabel>
        <div className="split-heading">
          <h2>Useful tools.<br /><em>Better connections.</em></h2>
          <p>Alongside agency services, Swapno is building three core products to make digital business, creative discovery and getting online more accessible.</p>
        </div>
        <div className="product-lines">
          {productItems.map((product) => <a href={product.href} className="product-line" key={product.number}><span>{product.number}</span><div><small>{product.descriptor}</small><h3>{product.name}</h3><p>{product.description}</p></div><b>Explore <i>↗</i></b></a>)}
        </div>
        <div className="founders-separate">
          <div><small>SEPARATE FOUNDER COMMUNITY</small><h3>Swapno Founders</h3><p>A place for aspiring entrepreneurs, founders and business owners to exchange ideas, discuss real business challenges and find opportunities to collaborate.</p></div>
          <a href="/community/founders">Discover the community <span>↗</span></a>
        </div>
      </section>

      <section className="team-approach-section" data-reveal>
        <div className="content-shell team-approach-inner">
          <div><SectionLabel number="08">THE PEOPLE BEHIND THE WORK</SectionLabel><h2>Good work is<br />made <em>together.</em></h2></div>
          <div className="team-approach-copy"><p>Swapno is built around a team of skilled contributors and people learning through real work. We value shared responsibility, practical learning and clear communication—not a distant hand-off between departments.</p><a className="text-action" href="/about">How our team works <span>↗</span></a></div>
        </div>
      </section>

      <section className="insights-section content-shell" id="insights" data-reveal>
        <SectionLabel number="09">INSIGHTS & IDEAS</SectionLabel>
        <div className="split-heading"><h2>Keep learning.<br /><em>Keep moving.</em></h2><p>Practical thinking on brand, content, marketing and digital systems—grounded in the questions businesses face while growing.</p></div>
        <div className="insight-topics">
          <a href="/insights#brand"><span>01 / BRAND</span><b>Make your business easier to recognise and understand.</b><i>↗</i></a>
          <a href="/insights#content"><span>02 / CONTENT & MARKETING</span><b>Connect what you publish with what your customers need.</b><i>↗</i></a>
          <a href="/insights#technology"><span>03 / DIGITAL SYSTEMS</span><b>Build a digital foundation that helps the business work better.</b><i>↗</i></a>
        </div>
        <div className="section-tail"><span>IDEAS FOR BUILDERS AND BUSINESS OWNERS</span><a className="text-action" href="/insights">Explore insights <span>↗</span></a></div>
      </section>

      <section className="final-cta content-shell" id="contact" data-reveal>
        <SectionLabel number="10">HAVE SOMETHING IN MIND?</SectionLabel>
        <h2>Let's make<br /><em>it matter.</em></h2>
        <div className="final-cta-bottom"><p>Tell us what you're building, what needs to change or where you want to go next. We'll find a practical way to begin.</p><a className="button button-primary" href="/contact">Start a conversation <span>↗</span></a></div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <main className="content-page">
      <PageIntro label="ABOUT SWAPNO TECH" title={<>Building brands.<br /><em>Growing systems.</em></>} description="Swapno Tech brings creative thinking, digital marketing and technology together to help businesses move from ideas to useful, connected execution." action={{ href: '/contact', label: "Let's talk" }} />
      <section className="content-shell page-story"><SectionLabel number="01">WHO WE ARE</SectionLabel><div className="split-heading"><h2>A partner for the<br />whole business picture.</h2><p>We work across brand, design, content, campaigns and digital technology. The point is not to sell every service to every client. It is to understand the real need and bring together the right skills for it.</p></div><div className="editorial-columns"><p>Some businesses need a clearer brand. Some need a steady flow of content. Others need a website, a campaign or a connected digital system. We begin by understanding the business and its audience, then shape the work around the next useful step.</p><p>Swapno is a team of skilled contributors and learners. We value honest communication, shared responsibility and learning through meaningful work. The person who understands the brief should stay connected to the work as it takes shape.</p></div></section>
      <section className="page-band"><div className="content-shell"><SectionLabel number="02">OUR PRINCIPLES</SectionLabel><div className="principle-grid">{[['Clarity','Understand the problem before choosing the output.'],['Consistency','Make every touchpoint feel like part of one brand.'],['Useful creativity','Let the idea, audience and purpose guide the execution.'],['Responsible growth','Build with realistic expectations and learn from evidence.']].map(([title,description])=><article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="content-shell page-story"><SectionLabel number="03">HOW WE WORK</SectionLabel><div className="split-heading"><h2>One connected<br /><em>process.</em></h2><p>Understand the business, shape the plan, create and build the agreed work, then review what should happen next.</p></div><a className="button button-primary" href="/contact">Start a project <span>↗</span></a></section>
    </main>
  )
}

function ServicesPage() {
  return (
    <main className="content-page">
      <PageIntro label="SERVICES" title={<>Creative work.<br /><em>Digital progress.</em></>} description="A connected set of brand, content, marketing and technology services—shaped around what your business actually needs." action={{ href: '/contact', label: 'Discuss a project' }} />
      <section className="content-shell page-service-list"><SectionLabel number="01">OUR CAPABILITIES</SectionLabel>{serviceGroups.map((service) => <article id={service.id} className="service-detail-row" key={service.id}><div><small>{service.number} / {service.title}</small><h2>{service.title}</h2><p>{service.description}</p></div><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section>
      <section className="page-band"><div className="content-shell"><SectionLabel number="02">THE RIGHT COMBINATION</SectionLabel><div className="split-heading"><h2>Start with the<br />need—not a menu.</h2><p>Tell us where the business is today and what needs to improve. We'll help identify the work that can make a meaningful difference first.</p></div><a className="button button-primary" href="/contact">Talk through your brief <span>↗</span></a></div></section>
    </main>
  )
}

function PackagesPage() {
  return (
    <main className="content-page">
      <PageIntro label="PACKAGES & ENGAGEMENT" title={<>The right scope<br /><em>for the next step.</em></>} description="Choose a focused project, ongoing support or a custom combination. Scope and pricing are agreed after we understand what the work requires." action={{ href: '/contact', label: 'Request a quote' }} />
      <section className="content-shell package-options"><SectionLabel number="01">WAYS TO ENGAGE</SectionLabel>{engagementModels.map((model) => <article key={model.number}><span>{model.number} / {model.label}</span><h2>{model.title}</h2><p>{model.description}</p><a href="/contact">Discuss this option ↗</a></article>)}</section>
      <section className="page-band"><div className="content-shell"><SectionLabel number="02">CLEAR SCOPE. CLEAR EXPECTATIONS.</SectionLabel><p className="large-copy">We don't publish a one-size-fits-all price for work that hasn't been scoped. The proposal should explain the deliverables, responsibilities, timeline and cost before anything begins.</p><a className="button button-primary" href="/contact">Request a project proposal <span>↗</span></a></div></section>
    </main>
  )
}

function WorkPage({ path }) {
  const slug = path.split('/').filter(Boolean)[1]
  const project = projects.find((item) => item.slug === slug)
  if (project) return (
    <main className="content-page">
      <PageIntro label={'PROJECT / ' + project.category.toUpperCase()} title={project.name} description={project.summary} action={{ href: '/contact', label: 'Discuss a similar project' }} />
      <section className="content-shell case-study-body"><SectionLabel number="01">PROJECT SCOPE</SectionLabel><h2>{project.scope}</h2><p>{project.summary} This project overview will be expanded with approved creative assets, the brief, execution details and verified outcomes before being published as a full case study.</p><div className="case-note">No performance figures or client quotations are published here without a verified source and an approved reporting period.</div><a className="button button-primary" href="/contact">Discuss a similar project <span>↗</span></a></section>
    </main>
  )
  return (
    <main className="content-page">
      <PageIntro label="WORK / SELECTED PROJECTS" title={<>Different briefs.<br /><em>Thoughtful execution.</em></>} description="A selection of brand, content, campaign and digital work from projects Swapno Tech has contributed to." action={{ href: '/contact', label: 'Start a project' }} />
      <section className="content-shell page-work-list"><SectionLabel number="01">PROJECT ARCHIVE</SectionLabel>{projects.map((item, index) => <a key={item.slug} href={'/work/' + item.slug} className="project-row"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><div className="project-title"><h3>{item.name}</h3><p>{item.summary}</p></div><span className="project-category">{item.category}</span><span className="project-scope">{item.scope}</span><i>↗</i></a>)}</section>
      <section className="page-band"><div className="content-shell"><p className="large-copy">Every project deserves its real story. We only publish images, results and client details that are approved and verified.</p></div></section>
    </main>
  )
}

function ProductPage({ type }) {
  const content = {
    website: { label: 'CORE PRODUCT 01', title: <>A website you can<br /><em>shape yourself.</em></>, description: 'A guided website solution for businesses that want a clear, professional online presence without learning a complex design tool.', parts: [['Choose a starting point','Select a suitable template and organise your pages, header, categories and footer.'],['Edit what matters','Update text, imagery, products and content using supported page sections.'],['Preview and publish','Review desktop and mobile layouts, save drafts and publish to a Swapno subdomain.'],['Add support when needed','Request verified add-ons such as payment, analytics, automation or custom agency-assisted features.']] },
    creator: { label: 'CORE PRODUCT 02', title: <>Find people who<br /><em>make it happen.</em></>, description: 'A professional discovery platform for designers, editors, creators, developers and other skilled contributors.', parts: [['Discover skills','Search and filter profiles by profession, skill and relevant work.'],['Review portfolios','See public profile information, experience and selected portfolio work.'],['Connect through Swapno','Client enquiries are routed through Swapno Tech; private contact information and private metrics stay protected.'],['Build your profile','A structured profile can later support a reviewed CV and portfolio builder.']] },
    hosting: { label: 'CORE PRODUCT 03', title: <>A clear way to<br /><em>choose hosting.</em></>, description: 'Compare verified third-party hosting packages and request coordination for setup, migration or support.', parts: [['Compare verified plans','Provider names, included features, renewal terms and prices must be checked before publication.'],['Send an enquiry','Tell us about the site and the requirements.'],['Review the provider quote','Swapno coordinates with the provider and shares the quote for approval.'],['Track the setup','Follow the request through review, provider contact, approval and completion.']] },
  }[type]
  return (
    <main className="content-page">
      <PageIntro label={content.label} title={content.title} description={content.description} action={{ href: '/contact', label: 'Ask about this product' }} />
      <section className="content-shell product-detail-steps"><SectionLabel number="01">HOW IT WORKS</SectionLabel>{content.parts.map(([title,description],index)=><article key={title}><b>{String(index+1).padStart(2,'0')}</b><div><h2>{title}</h2><p>{description}</p></div></article>)}</section>
      <section className="page-band"><div className="content-shell"><p className="large-copy">The product will be introduced in stages. We will only describe features that are implemented, tested and available.</p><a className="button button-primary" href="/contact">Register your interest <span>↗</span></a></div></section>
    </main>
  )
}

function FoundersPage() {
  const groups = [
    ['01','Founder Announcements','Official updates and information from the moderation team. Members can read and react.'],
    ['02','Open Discussion','Ask questions, share experiences, introduce a business and connect with other members.'],
    ['03',"Founders' Circle",'Focused conversations about sales, marketing, finance, operations, hiring and customer management.'],
    ['04','Opportunities & Collaboration','Partnerships, projects, referrals and events—with moderation to reduce spam.'],
  ]
  return (
    <main className="content-page">
      <PageIntro label="SWAPNO FOUNDERS / SEPARATE COMMUNITY" title={<>Build with people<br /><em>who understand.</em></>} description="A dedicated community for aspiring entrepreneurs, founders and business owners to learn, discuss real challenges and find opportunities to collaborate." action={{ href: '/contact', label: 'Ask about membership' }} />
      <section className="content-shell founder-groups"><SectionLabel number="01">FOUR COMMUNITY SPACES</SectionLabel>{groups.map(([number,title,description])=><article key={number}><b>{number}</b><div><h2>{title}</h2><p>{description}</p></div></article>)}</section>
      <section className="page-band"><div className="content-shell"><SectionLabel number="02">A MODERATED COMMUNITY</SectionLabel><div className="split-heading"><h2>Open to learning.<br /><em>Built on trust.</em></h2><p>Membership approval and verified-founder status are separate. Community permissions, privacy, reporting and guidelines are designed to keep participation useful and respectful.</p></div><a className="button button-primary" href="/community/guidelines">Read community guidelines <span>↗</span></a></div></section>
    </main>
  )
}

function InsightsPage() {
  const topics = [
    ['brand','01 / BRAND','How a clear brand helps customers understand what makes a business different.'],
    ['content','02 / CONTENT & MARKETING','How content, distribution and campaigns can work as one connected system.'],
    ['technology','03 / DIGITAL SYSTEMS','How the right website or platform can make a business easier to find and work with.'],
  ]
  return (
    <main className="content-page">
      <PageIntro label="INSIGHTS & IDEAS" title={<>Better questions.<br /><em>Useful thinking.</em></>} description="A place for practical perspectives on brand, content, marketing and digital systems for growing businesses." />
      <section className="content-shell insight-page-list"><SectionLabel number="01">TOPIC AREAS</SectionLabel>{topics.map(([id,label,description])=><article id={id} key={id}><small>{label}</small><p>{description}</p></article>)}</section>
      <section className="page-band"><div className="content-shell"><p className="large-copy">Articles will appear here when they are written and reviewed. We won't fill the journal with invented posts or generic placeholders.</p></div></section>
    </main>
  )
}

function ContactPage() {
  return (
    <main className="content-page">
      <PageIntro label="CONTACT / PROJECT ENQUIRY" title={<>Let's make<br /><em>something useful.</em></>} description="Tell us what the business needs, what you want to create or what should work better. We'll start by understanding the brief." />
      <section className="content-shell contact-layout"><div><SectionLabel number="01">START A CONVERSATION</SectionLabel><h2>A clear brief<br />is a good start.</h2><p>Share the project context, the service you are considering and what you would like to achieve. We can then discuss the most practical next step.</p><a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Message Swapno Tech on WhatsApp <span>↗</span></a><p className="contact-phone"><small>PHONE / WHATSAPP</small><a href={'tel:' + CONTACT_PHONE}>{CONTACT_PHONE}</a></p></div><div className="contact-side-note"><span>BEFORE WE BEGIN</span><p>We will clarify the scope, expected deliverables, responsibilities and cost before starting work. No surprise add-ons or guaranteed results.</p></div></section>
    </main>
  )
}

function LegalPage({ type }) {
  const data = {
    privacy: ['Privacy', 'This page will describe what information Swapno Tech collects, why it is needed, how it is protected, and how people can make requests about their information. The final policy must be reviewed against the actual services and data flows before publication.'],
    terms: ['Terms of Use', 'This page will explain the terms for using the Swapno Tech website, products and services. Final terms must reflect the actual commercial, product and community rules before publication.'],
    guidelines: ['Community Guidelines', 'Be respectful, keep discussions useful, protect private information, avoid spam and misrepresentation, and use the reporting process when something feels unsafe or inappropriate. Detailed moderation and membership rules will be published before the community opens.'],
  }[type]
  return <main className="content-page"><PageIntro label="SWAPNO TECH / INFORMATION" title={data[0]} description="Important information about using Swapno Tech services and spaces." /><section className="content-shell legal-copy"><p>{data[1]}</p><div className="case-note">This page is a draft structure and is not a final legal policy. It must be reviewed and approved before launch.</div></section></main>
}

function NotFoundPage() {
  return <main className="content-page"><PageIntro label="404 / PAGE NOT FOUND" title={<>This page isn't<br /><em>here yet.</em></>} description="The address may have changed, or the page may not be published." action={{ href: '/', label: 'Return home' }} /><div className="content-shell"><a className="button button-primary" href="/">Back to Swapno Tech <span>↗</span></a></div></main>
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-shell footer-main">
        <div className="footer-brand"><BrandWordmark light /><p>Building brands.<br />Growing systems.</p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
        <div className="footer-column"><small>EXPLORE</small><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a></div>
        <div className="footer-column"><small>ECOSYSTEM</small><a href="/products/website-solution">Website Solution</a><a href="/products/creator-platform">Creator Platform</a><a href="/products/hosting">Hosting Packages</a><a href="/community/founders">Swapno Founders</a></div>
        <div className="footer-column"><small>CONNECT</small><a href="/contact">Start a project</a><a href={'tel:' + CONTACT_PHONE}>{CONTACT_PHONE}</a><a href="/packages">Engagement options</a><a href="#top">Back to top ↑</a></div>
      </div>
      <div className="content-shell footer-bottom"><span>© {new Date().getFullYear()} Swapno Tech. All rights reserved.</span><div><a href="/legal/privacy">Privacy</a><a href="/legal/terms">Terms</a><a href="/community/guidelines">Community Guidelines</a></div><span>BUILDING BRANDS. GROWING SYSTEMS.</span></div>
    </footer>
  )
}

function App() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/')
  const [compact, setCompact] = useState(false)
  const [light, setLight] = useState(false)
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !window.sessionStorage.getItem('swapno-intro-seen')
    } catch {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
  })

  const completeIntro = useCallback(() => {
    try { window.sessionStorage.setItem('swapno-intro-seen', '1') } catch {}
    setShowIntro(false)
  }, [])

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname.replace(/\/+$/, '') || '/')
      window.scrollTo(0, 0)
    }
    const onClick = (event) => {
      const anchor = event.target.closest('a')
      if (!anchor || anchor.target === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('/') || href.startsWith('//')) return
      event.preventDefault()
      window.history.pushState({}, '', href)
      setPath(window.location.pathname.replace(/\/+$/, '') || '/')
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPopState)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', onPopState)
      document.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = light ? 'light' : 'dark'
    return () => { delete document.documentElement.dataset.theme }
  }, [light])

  let page
  if (path === '/') page = <HomePage />
  else if (path === '/about') page = <AboutPage />
  else if (path === '/services' || path.startsWith('/services/')) page = <ServicesPage />
  else if (path === '/packages') page = <PackagesPage />
  else if (path === '/work' || path.startsWith('/work/')) page = <WorkPage path={path} />
  else if (path === '/products/website-solution') page = <ProductPage type="website" />
  else if (path === '/products/creator-platform') page = <ProductPage type="creator" />
  else if (path === '/products/hosting') page = <ProductPage type="hosting" />
  else if (path === '/community/founders') page = <FoundersPage />
  else if (path === '/insights' || path.startsWith('/insights/')) page = <InsightsPage />
  else if (path === '/contact') page = <ContactPage />
  else if (path === '/legal/privacy') page = <LegalPage type="privacy" />
  else if (path === '/legal/terms') page = <LegalPage type="terms" />
  else if (path === '/community/guidelines') page = <LegalPage type="guidelines" />
  else page = <NotFoundPage />

  return (
    <div className="site-shell">
      {showIntro && <IntroSequence onComplete={completeIntro} />}
      <SiteHeader compact={compact} light={light} onThemeToggle={() => setLight(!light)} />
      {page}
      <SiteFooter />
    </div>
  )
}

export default App
