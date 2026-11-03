import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const media = {
  hero: '/manus-storage/1002317611_6d3f2fe3.mp4',
  heroMobile: '/manus-storage/TbotainmentEvents_20261102_112843_0000_186e9b81.mp4',
  heroPortrait: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001569004_68645175.jpg',
  stage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001569004_68645175.jpg',
  corporate: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287853_compressed_77da4556.jpg',
  activation: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287837_compressed_1050e450.jpg',
  live: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001393667_64e56e77.jpg',
  stage2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287396_9ac86bef.jpg',
  stage3: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001570093_f2ba126d.jpg',
  stage4: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001571383_a6db0636.jpg',
  corporate2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287545_7a64c756.jpg',
  corporate3: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287631_compressed_0e15cb86.jpg',
  activation2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287825_a2c7e6a8.jpg',
  activation3: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287828_compressed_e53537a0.jpg',
  live2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001359642_d6cb4e58.jpg',
  live3: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/dondazul_stage_b4804c73.jpg',
  branded: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/gallery_bonaqua_full_bdea1bc3.jpg',
  about: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001393667_64e56e77.jpg',
  management: '/manus-storage/1793729224437_b5ab5eb8.png',
  safety: 'https://lh3.googleusercontent.com/p/AF1QipP0Gi1c-MYde1Dz7Ky1eW4eUOBGJmV28nLg2uun=s1360-w1360-h1020-rw',
  activationBlock: 'https://lh3.googleusercontent.com/p/AF1QipPWXvAJjiFS-Mk9wEcewwqRIosKRKDdg9Stlnju=s1360-w1360-h1020-rw',
  staffing: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/staffing_absolut_full_3621fabd.jpg',
  content: 'https://lh3.googleusercontent.com/p/AF1QipO5yv23LPBd9XIQIg3-yLuAWyY9bNdTEfsulBOz=s1360-w1360-h1020-rw',
  projection: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287852_compressed_8b4f24a5.jpg',
  conferenceScreens: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287846_58815640.jpg',
  panel: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287848_compressed_6ddabc5b.jpg',
  security: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287828_compressed_e53537a0.jpg',
  community: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287825_a2c7e6a8.jpg',
  school: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287631_compressed_0e15cb86.jpg',
  liveDj: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287396_9ac86bef.jpg',
  festival: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001571383_a6db0636.jpg',
  neon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/dondazul_stage_b4804c73.jpg',
  science: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287631_compressed_0e15cb86.jpg',
  funeral: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287848_compressed_6ddabc5b.jpg',
  twilight: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001359642_d6cb4e58.jpg',
  whereStage1: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287852_compressed_8b4f24a5.jpg',
  whereStage2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287846_58815640.jpg',
  whereLive1: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287396_9ac86bef.jpg',
  whereLive2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/gallery_bonaqua_full_bdea1bc3.jpg',
  lounge: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1765716372562_08e1b8e1.jpg',
  productionVenue: 'https://lh3.googleusercontent.com/p/AF1QipM3B6-8WvfPEFS2w2DIgQ3SmIDRa5o-rUTN5TeU=s1374-w720-h1374-rw',
  venueDj: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287850_compressed_64a48248.jpg',
  indoorBrand: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287868_compressed_4178f76a.jpg',
  outdoorVenue: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1765716372562_08e1b8e1.jpg',
  largeCrowd: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287836_compressed_6dfc6f5e.jpg',
}
const aboutHeroSlides = [
  { src: media.productionVenue, alt: 'Portrait event production environment with technical setup' },
  { src: media.safety, alt: 'Professional event safety and production environment' },
  { src: media.activationBlock, alt: 'Branded event activation environment' },
  { src: media.content, alt: 'Event content production environment' },
  { src: media.staffing, alt: 'Event crew and staffing production image' },
  { src: media.stage, alt: 'Stage production with technical equipment and event lighting' },
]
const services = [
  { num: '01', title: 'Technical Production', short: 'The signal, the atmosphere, the detail.', body: 'End-to-end audio-visual infrastructure, owned equipment and a technical crew that understands what is at stake when the room goes live.', items: ['Audio visual rentals', 'Sound technicians & setup crew', 'Lighting & staging', 'Live recording', 'Acoustics engineering'], image: media.stage3 },
  { num: '02', title: 'Event Management', short: 'One partner from brief to breakdown.', body: 'From intimate corporate events to large-scale festivals, we coordinate the moving parts with a clear line of sight from planning through production.', items: ['Corporate & conference events', 'Live entertainment', 'End-to-end event support', 'Large-scale events & festivals', 'Management & logistics'], image: media.management },
  { num: '03', title: 'Safety & Security', short: 'Calm, qualified and on site.', body: 'Professional safety officers, security and on-site supervision designed to keep people, production and the programme moving safely.', items: ['Qualified safety officers', 'Professional event security', 'On-site supervision'], image: media.safety },
  { num: '04', title: 'Activations & Branding', short: 'Make the brand impossible to miss.', body: 'Experiential brand activations that connect the brief to the audience through considered environments, staffing and visible execution.', items: ['Experiential brand activations', 'Promotional support', 'Beach & outdoor media branding', 'In-store branding & retail visibility'], image: media.activationBlock },
  { num: '05', title: 'Staffing & Crew', short: 'The right people in the right places.', body: 'A polished, hands-on event team, from brand ambassadors and promotional staff to trained mixologists and crew.', items: ['Premium staffing & recruiting', 'Professional hands-on crew', 'Trained mixologists & bartenders', 'Influencers & models'], image: media.staffing },
  { num: '06', title: 'Content Creation', short: 'Keep the energy moving after the lights go down.', body: 'Professional event photography, reels and live recording that turn a single event into a library of usable content.', items: ['Event photography', 'Reels & video content', 'Live recording sessions'], image: media.content },
]

const workItems = [
  { category: 'Live Entertainment', title: 'High-energy neon stage production', image: media.live, meta: 'Events & Media' },
  { category: 'Live Entertainment', title: 'Festival crowd at night', image: media.largeCrowd, meta: 'Large Scale Events' },
  { category: 'Stage & Technical', title: 'Open-air stage production', image: media.stage, meta: 'Stage Production' },
  { category: 'Corporate', title: 'Conference environment', image: media.corporate, meta: 'Corporate Events' },
  { category: 'Brand Activations', title: 'Beach activation', image: media.activation, meta: 'Brand Activations' },
  { category: 'Brand Activations', title: 'VIP branded lounge', image: media.corporate2, meta: 'VIP Experiences' },
  { category: 'Brand Activations', title: 'Outdoor venue setup', image: media.outdoorVenue, meta: 'Outdoor Venues' },
  { category: 'Brand Activations', title: 'Indoor brand activation', image: media.indoorBrand, meta: 'Indoor Venues' },
  { category: 'Stage & Technical', title: 'Dondazul professional stage', image: media.live3, meta: 'Technical Excellence' },
  { category: 'Stage & Technical', title: 'Production venue in action', image: media.productionVenue, meta: 'Production Quality' },
  { category: 'Stage & Technical', title: 'Outdoor stage setup with drums', image: media.stage4, meta: 'Stage Setup' },
  { category: 'Stage & Technical', title: 'Crew rigging truss at height', image: media.live2, meta: 'Rigging & Truss' },
  { category: 'Stage & Technical', title: 'Kavo Beach Bar DJ setup', image: media.venueDj, meta: 'Venue Production' },
  { category: 'Stage & Technical', title: 'Large projection screen', image: media.projection, meta: 'Projection & AV' },
  { category: 'Stage & Technical', title: 'Outdoor stage and sound system', image: '/manus-storage/1002219884_3078a27c.png', meta: 'Stage Production' },
  { category: 'Stage & Technical', title: 'Outdoor sound system and stage', image: '/manus-storage/1002220883_28c251dc.png', meta: 'Stage Production' },
  { category: 'Stage & Technical', title: 'Illuminated DJ stage production', image: '/manus-storage/1002219174_695321ec.png', meta: 'Live Stage Production' },
  { category: 'Corporate', title: 'Corporate conference screens', image: media.conferenceScreens, meta: 'Corporate Conferences' },
  { category: 'Corporate', title: 'Panel event with branded backdrop', image: media.panel, meta: 'Panel Events' },
  { category: 'Corporate', title: 'Professional security team', image: media.security, meta: 'Security Services' },
  { category: 'Corporate', title: 'Community event stage', image: media.community, meta: 'Community Events' },
  { category: 'Corporate', title: 'School ceremony production', image: media.school, meta: 'School Events' },
  { category: 'Live Entertainment', title: 'Live DJ performance', image: media.liveDj, meta: 'Live Entertainment' },
  { category: 'Brand Activations', title: 'Red Bull and Bonaqua beach activation', image: media.branded, meta: 'Sports & Beach Activations' },
]
const categories = ['All work', 'Corporate', 'Live Entertainment', 'Brand Activations', 'Stage & Technical']
const uniqueWorkItems = workItems.filter((item, index, items) => items.findIndex(candidate => candidate.image === item.image) === index)
const brands = ['Vodacom', 'Red Bull', 'Coca-Cola', 'Bonaqua', 'Energade Boost', 'Absolut Vodka', 'Hennessy', 'Santam', 'Hollywood Bets', 'Komatsu', 'Mzansi Neosoul', 'Ultramog Sessions']

function pathFor(path) {
  if (path === '/') return 'home'
  if (path === '/services') return 'services'
  if (path === '/our-work') return 'work'
  if (path === '/about') return 'about'
  if (path === '/request-a-quote') return 'quote'
  return 'home'
}

function navigateTo(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Link({ to, children, className = '', onClick }) {
  return <a href={to} className={className} onClick={(event) => { event.preventDefault(); onClick?.(); navigateTo(to) }}>{children}</a>
}

function Logo({ compact = false }) {
  return <Link to="/" className={`logo ${compact ? 'logo-compact' : ''}`} aria-label="Tbotainment Events home" title="Tbotainment Events">
    <span className="logo-mark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
    <span className="logo-copy" aria-label="Tbotainment Events"><strong><b>TBO</b>TAINMENT</strong><em>EVENTS</em></span>
  </Link>
}

function Arrow({ direction = 'right' }) { return <span className={`arrow arrow-${direction}`} aria-hidden="true">鈫�</span> }

function ButtonLink({ to, children, variant = 'primary', className = '' }) {
  return <Link to={to} className={`button button-${variant} ${className}`}>{children}<Arrow /></Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className={`site-header ${open ? 'menu-open' : ''}`}>
    <div className="nav-shell">
      <Logo compact />
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/our-work">Our Work</Link>
        <Link to="/about">About Us</Link>
        <ButtonLink to="/request-a-quote">Request a quote</ButtonLink>
      </nav>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}><span></span><span></span><span></span><b>{open ? 'Close' : 'Menu'}</b></button>
    </div>
    <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
      <Link to="/" onClick={close}>Home <Arrow /></Link>
      <Link to="/services" onClick={close}>Services <Arrow /></Link>
      <Link to="/our-work" onClick={close}>Our Work <Arrow /></Link>
      <Link to="/about" onClick={close}>About Us <Arrow /></Link>
      <Link to="/request-a-quote" className="mobile-cta" onClick={close}>Request a quote <Arrow /></Link>
      <div className="mobile-nav-meta"><span>South Africa</span><a href="tel:+27681099680">068 109 9680</a></div>
    </nav>
  </header>
}

function Eyebrow({ children, light = false }) { return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span className="eyebrow-line"></span>{children}</div> }

function HeroSlideshow() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const preloaded = aboutHeroSlides.map((slide) => {
      const image = new Image()
      image.decoding = 'async'
      image.src = slide.src
      return image
    })
    const timer = window.setInterval(() => setActive((current) => (current + 1) % aboutHeroSlides.length), 5200)
    return () => {
      window.clearInterval(timer)
      preloaded.forEach((image) => { image.onload = null; image.onerror = null })
    }
  }, [])
  return <div className="page-intro-image hero-slideshow" aria-label="Tbotainment Events production photographs">
    {aboutHeroSlides.map((slide, index) => <img key={slide.src} className={index === active ? 'active' : ''} src={slide.src} alt={slide.alt} loading="eager" decoding="async" fetchPriority="high" />)}
    <div className="hero-slideshow-dots" aria-label="Hero photograph slides">{aboutHeroSlides.map((slide, index) => <button key={slide.src} className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show hero photograph ${index + 1}`} />)}</div>
  </div>
}
function PageIntro({ eyebrow, title, body, children }) {
  return <section className="page-intro">
    <div className="page-intro-copy">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      {body && <p className="lead">{body}</p>}
      {children}
    </div>
    <HeroSlideshow />
  </section>
}

function Hero() {
  return <section className="hero">
    <div className="hero-media" aria-label="Tbotainment Events stage production highlights">
      <video autoPlay muted loop playsInline preload="auto">
        <source src={media.heroMobile} media="(max-width: 700px)" type="video/mp4" />
        <source src={media.hero} type="video/mp4" />
      </video>
      <div className="hero-shade"></div>
    </div>
    <div className="hero-content page-width">
      <div className="hero-kicker"><span className="status-dot"></span> Full-service agency <span className="kicker-divider">/</span> Est. 2018 <span className="kicker-divider">/</span> South Africa</div>
      <h1>The Fusion of<br /><span>Technical</span><br />Excellence<span className="period">.</span></h1>
      <p>From corporate conferences to nationwide brand activations 鈥� we transform concepts into immersive reality through high-end technical supply and strategic execution.</p>
      <div className="hero-actions"><ButtonLink to="/request-a-quote">Start a conversation</ButtonLink><ButtonLink to="/services" variant="ghost">Explore services</ButtonLink></div>
    </div>
    <div className="hero-bottom page-width"><span>Scroll to explore</span><span className="scroll-line"></span><span>01 / 05</span></div>
  </section>
}

function AnimatedCount({ value, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect() }
    }, { threshold: .45 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!started) return undefined
    let frame
    let start
    const duration = 1800
    const tick = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(decimals ? Number((value * eased).toFixed(decimals)) : Math.floor(value * eased))
      if (progress < 1) frame = window.requestAnimationFrame(tick)
    }
    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [started, value, decimals])
  return <span ref={ref}>{display}{suffix}</span>
}
function AnimatedStat({ value, suffix = '', label, decimals = 0 }) {
  return <div className="stat"><strong><AnimatedCount value={value} suffix={suffix} decimals={decimals} /></strong><span>{label}</span></div>
}

function StatStrip() {
  return <section className="stat-strip page-width">
    <AnimatedStat value={130} suffix="+" label="Happy clients" />
    <AnimatedStat value={4.8} suffix="鈽�" label="Star rating" decimals={1} />
    <AnimatedStat value={35} suffix="yr" label="Network backbone" />
    <AnimatedStat value={2018} label="Founded" />
  </section>
}

function SectionHeading({ eyebrow, title, body, align = 'left' }) {
  return <div className={`section-heading ${align === 'right' ? 'align-right' : ''}`}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 dangerouslySetInnerHTML={{ __html: title }} />
    {body && <p>{body}</p>}
  </div>
}

function ServicePreview() {
  return <section className="section section-dark service-preview">
    <div className="page-width">
      <div className="split-heading"><SectionHeading eyebrow="What we do" title="One partner.<br /><em>Total control.</em>" body="From the first technical consultation to the final breakdown, we manage every aspect of your event." /><ButtonLink to="/services" variant="outline">View all services</ButtonLink></div>
      <div className="service-grid">{services.slice(0, 3).map((service) => <article
