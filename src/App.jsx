import { useEffect, useState } from 'react'

const navItems = ['Services', 'Work', 'Products', 'About', 'Insights']

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Swapno Tech home">
      <span>swapno<span className="brand-tech">tech</span></span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [introVisible, setIntroVisible] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (!introVisible) return undefined
    const timeout = window.setTimeout(() => setIntroVisible(false), 3600)
    return () => window.clearTimeout(timeout)
  }, [introVisible])

  return (
    <>
      {introVisible && (
        <div className="intro" role="status" aria-label="Swapno Tech introduction">
          <div className="intro-orbit orbit-one" />
          <div className="intro-orbit orbit-two" />
          <div className="intro-core"><span>SWAPNO</span><b>TECH</b></div>
          <p>Possibility is in motion.</p>
          <button className="intro-skip" onClick={() => setIntroVisible(false)}>Skip intro <span>↗</span></button>
        </div>
      )}

      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={item === 'Work' ? '#work' : item === 'Services' ? '#services' : '#ecosystem'} onClick={() => setMenuOpen(false)}>{item}</a>)}
            <a className="mobile-login" href="#contact">Sign in</a>
          </nav>
          <a className="header-cta" href="#contact">Let's Talk <span>↗</span></a>
        </div>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> CREATIVE TECHNOLOGY · DIGITAL GROWTH</div>
            <h1>Make possibility<br /><em>move.</em></h1>
            <p className="hero-lead">We turn ambitious ideas into meaningful brands, digital experiences and technology that move businesses forward.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start a project <span>↗</span></a>
              <a className="text-link" href="#work">Explore our work <span>↓</span></a>
            </div>
            <div className="hero-note"><span>01 / 03</span><span>IDEAS INTO IMPACT</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract orbital illustration representing connected possibilities" role="img">
            <div className="planet planet-main"><div className="planet-shine" /></div>
            <div className="planet planet-small" />
            <div className="orbit-line line-a" /><div className="orbit-line line-b" />
            <span className="orbit-label label-top">CREATE</span>
            <span className="orbit-label label-bottom">CONNECT · BUILD · GROW</span>
            <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
          </div>
          <div className="hero-bottom"><span>INDEPENDENT CREATIVE & TECHNOLOGY STUDIO</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="intro-statement section-wrap" id="about">
          <p className="eyebrow">A DIFFERENT KIND OF PARTNER</p>
          <h2>Good ideas deserve<br /> <span>great execution.</span></h2>
          <p className="statement-body">From the first spark to the systems that help it grow, we bring creative thinking and technology together—so businesses can move with purpose.</p>
        </section>

        <section className="expertise section-wrap" id="services">
          <div className="section-heading"><p className="eyebrow">OUR UNIVERSE OF EXPERTISE</p><h2>Three ways to<br />move forward.</h2></div>
          <div className="expertise-grid">
            <article className="expertise-card mars"><span className="card-index">01 / MARS</span><div className="mini-planet" /><h3>Create<br />& execute.</h3><p>Creative production, branding, content and campaigns that make people pay attention.</p><a href="#contact">Explore creative <span>↗</span></a></article>
            <article className="expertise-card earth"><span className="card-index">02 / EARTH</span><div className="mini-planet" /><h3>Build<br />& grow.</h3><p>Websites, software and digital systems that make your next stage possible.</p><a href="#contact">Explore technology <span>↗</span></a></article>
            <article className="expertise-card venus"><span className="card-index">03 / VENUS</span><div className="mini-planet" /><h3>Brand<br />& connect.</h3><p>Brand communication and digital experiences that bring businesses closer to people.</p><a href="#contact">Explore experiences <span>↗</span></a></article>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="work-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Made to mean<br /><em>something.</em></h2></div><a className="text-link" href="#contact">View all projects ↗</a></div>
          <div className="work-placeholder"><span>PROJECT SHOWCASE</span><p>Real work. Real stories.<br />Coming into focus.</p><small>Portfolio imagery will be added from approved Swapno projects.</small></div>
        </section>

        <section className="ecosystem section-wrap" id="ecosystem">
          <p className="eyebrow">THE SWAPNO ECOSYSTEM</p><h2>More than a service.<br /><span>A way forward.</span></h2>
          <div className="ecosystem-list">
            <a href="#contact"><span>01</span><b>Website Solution</b><small>Build your digital home</small><i>↗</i></a>
            <a href="#contact"><span>02</span><b>Creator Platform</b><small>Find people who make it happen</small><i>↗</i></a>
            <a href="#contact"><span>03</span><b>Hosting Packages</b><small>A reliable place to begin</small><i>↗</i></a>
            <a href="#contact"><span>04</span><b>Swapno Founders</b><small>Grow alongside other builders</small><i>↗</i></a>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let's make<br /><em>it happen.</em></h2>
          <a className="button button-primary" href="#home">Start a conversation <span>↗</span></a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <div className="footer-top"><BrandMark /><p>Creative thinking.<br />Technology with purpose.</p><a href="#home">Back to top ↑</a></div>
        <div className="footer-bottom"><span>© 2026 Swapno Tech. All rights reserved.</span><span>MADE FOR WHAT'S NEXT.</span></div>
      </footer>
    </>
  )
}

export default App
