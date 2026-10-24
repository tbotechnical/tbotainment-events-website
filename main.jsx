import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const LIVE_ORIGIN = 'https://tbotainmentevents.manus.space'
const media = {
  hero: `${LIVE_ORIGIN}/manus-storage/TbotainmentEventHighlights3_faststart_1080p_23957725.mp4`,
  heroMobile: `${LIVE_ORIGIN}/manus-storage/TbotainmentEventHighlights4_mobile_1080p_50b2001a.mp4`,
  heroPortrait: `${LIVE_ORIGIN}/manus-storage/AboutCarouselPoolEvent_b0e0952f.png`,
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
  about: `${LIVE_ORIGIN}/manus-storage/AboutCarouselProductionShoot_6e865be6.png`,
  management: `${LIVE_ORIGIN}/manus-storage/EventManagementCrowdReplacementWide_3c168231.png`,
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
  festival: `${LIVE_ORIGIN}/manus-storage/OutdoorFestivalStageUnderBlueSkies_e0deca37.png`,
  neon: `${LIVE_ORIGIN}/manus-storage/NeonMasqueradeStageatNight_00f84945.png`,
  science: `${LIVE_ORIGIN}/manus-storage/Eventstagepreparationforscienceconference_f3f1131b.png`,
  funeral: `${LIVE_ORIGIN}/manus-storage/Formalceremonyatfuneralparlourevent_b53d4288.png`,
  twilight: `${LIVE_ORIGIN}/manus-storage/TwilightDJConcertinthePark_cbd246b7.png`,
  whereStage1: `${LIVE_ORIGIN}/manus-storage/WhereDeliveredStageProduction_1002219884_071ed94d.png`,
  whereStage2: `${LIVE_ORIGIN}/manus-storage/WhereDeliveredStageProduction_1002219206_11f5b846.png`,
  whereLive1: `${LIVE_ORIGIN}/manus-storage/WhereDeliveredLiveEvents_1002219174_cd847058.png`,
  whereLive2: `${LIVE_ORIGIN}/manus-storage/WhereDeliveredLiveEvents_1002220883_dabcf498.png`,
  lounge: `${LIVE_ORIGIN}/manus-storage/Modernloungewithcityskylineview_2edbb398.png`,
  productionVenue: 'https://lh3.googleusercontent.com/p/AF1QipM3B6-8WvfPEFS2w2DIgQ3SmIDRa5o-rUTN5TeU=s1374-w720-h1374-rw',
  venueDj: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287850_compressed_64a48248.jpg',
  indoorBrand: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287868_compressed_4178f76a.jpg',
  outdoorVenue: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1765716372562_08e1b8e1.jpg',
  largeCrowd: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663481280200/bXdgADpStumtzZsMqF78Tq/1001287836_compressed_6dfc6f5e.jpg',
}
const aboutHeroSlides = [
  { src: `${LIVE_ORIGIN}/manus-storage/AboutCarouselProductionShoot_6e865be6.png`, alt: 'Event production crew and speakers in an industrial venue' },
  { src: `${LIVE_ORIGIN}/manus-storage/AboutCarouselOutdoorSetup_7ecf31be.png`, alt: 'Outdoor event technical setup with branded equipment' },
  { src: `${LIVE_ORIGIN}/manus-storage/AboutCarouselMicrophones_1d0be7a0.png`, alt: 'Wireless microphones prepared for an event' },
  { src: `${LIVE_ORIGIN}/manus-storage/AboutCarouselPoolEvent_b0e0952f.png`, alt: 'Outdoor poolside event with DJ and technical production setup' },
  { src: `${LIVE_ORIGIN}/manus-storage/AboutCarouselDondazulSpeakers_b4a5fe1e.png`, alt: 'Outdoor event speaker array suspended from a truss structure' },
  { src: `${LIVE_ORIGIN}/manus-storage/AboutCarouselIndoorSpeaker_6f11fc19.png`, alt: 'Indoor event speaker and uplighting setup at a decorated venue' },
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
  { category: 'Stage & Technical', title: 'Production crew and speakers', image: media.about, meta: 'Technical Production' },
  { category: 'Stage & Technical', title: 'Outdoor stage setup with drums', image: media.stage4, meta: 'Stage Setup' },
  { category: 'Stage & Technical', title: 'Crew rigging truss at height', image: media.live2, meta: 'Rigging & Truss' },
  { category: 'Stage & Technical', title: 'Kavo Beach Bar DJ setup', image: media.venueDj, meta: 'Venue Production' },
  { category: 'Stage & Technical', title: 'Large projection screen', image: media.projection, meta: 'Projection & AV' },
  { category: 'Corporate', title: 'Corporate conference screens', image: media.conferenceScreens, meta: 'Corporate Conferences' },
  { category: 'Corporate', title: 'Panel event with branded backdrop', image: media.panel, meta: 'Panel Events' },
  { category: 'Corporate', title: 'Professional security team', image: media.security, meta: 'Security Services' },
  { category: 'Corporate', title: 'Community event stage', image: media.community, meta: 'Community Events' },
  { category: 'Corporate', title: 'School ceremony production', image: media.school, meta: 'School Events' },
  { category: 'Live Entertainment', title: 'Live DJ performance', image: media.liveDj, meta: 'Live Entertainment' },
  { category: 'Brand Activations', title: 'Red Bull and Bonaqua beach activation', image: media.branded, meta: 'Sports & Beach Activations' },
  { category: 'Stage & Technical', title: 'Outdoor festival stage', image: media.festival, meta: 'Stage Production' },
  { category: 'Stage & Technical', title: 'Neon masquerade stage', image: media.neon, meta: 'Stage Production' },
  { category: 'Corporate', title: 'Science conference stage', image: media.science, meta: 'Corporate Events' },
  { category: 'Corporate', title: 'Formal ceremony production', image: media.funeral, meta: 'Corporate Events' },
  { category: 'Stage & Technical', title: 'Twilight DJ concert', image: media.twilight, meta: 'Stage Production' },
  { category: 'Stage & Technical', title: 'Outdoor stage with truss and speakers', image: media.whereStage1, meta: 'Stage Production' },
  { category: 'Stage & Technical', title: 'Live event stage and truss lighting', image: media.whereStage2, meta: 'Stage Production' },
  { category: 'Live Entertainment', title: 'Live DJ stage with colour', image: media.whereLive1, meta: 'Live Entertainment' },
  { category: 'Live Entertainment', title: 'Outdoor live event sound system', image: media.whereLive2, meta: 'Live Entertainment' },
  { category: 'Brand Activations', title: 'Modern event lounge', image: media.lounge, meta: 'Brand Activations' },
]
const categories = ['All work', 'Corporate', 'Live Entertainment', 'Brand Activations', 'Stage & Technical']
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

function Arrow({ direction = 'right' }) { return <span className={`arrow arrow-${direction}`} aria-hidden="true">↗</span> }

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
    <span className="image-index">TB / {String(active + 1).padStart(2, '0')}</span>
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
      <p>From corporate conferences to nationwide brand activations — we transform concepts into immersive reality through high-end technical supply and strategic execution.</p>
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
    <AnimatedStat value={4.8} suffix="★" label="Star rating" decimals={1} />
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
      <div className="service-grid">{services.slice(0, 3).map((service) => <article className="service-card" key={service.num}><div className="service-card-top"><span>{service.num}</span><Arrow /></div><div className="service-card-image"><img src={service.image} alt={`${service.title} production`} /></div><h3>{service.title}</h3><p>{service.short}</p><Link to="/services" className="text-link">Explore category <Arrow /></Link></article>)}</div>
    </div>
  </section>
}

function WorkStrip({ limit = 5 }) {
  return <section className="section work-preview">
    <div className="page-width"><div className="split-heading"><SectionHeading eyebrow="Events & media" title="Work that holds<br /><em>the room.</em>" body="A selection of real Tbotainment Events imagery from stages, conferences, activations and live production." /><ButtonLink to="/our-work" variant="outline">See our work</ButtonLink></div>
      <div className="work-mosaic">{workItems.slice(0, limit).map((item, index) => <Link to="/our-work" className={`work-tile work-tile-${index + 1}`} key={item.title}><img src={item.image} alt={item.title} /><div className="work-tile-overlay"><span>{item.meta}</span><strong>{item.title}</strong><Arrow /></div></Link>)}</div>
    </div>
  </section>
}

function TrustBlock() {
  return <section className="section trust-section section-dark"><div className="page-width trust-grid"><div><Eyebrow>Built for the live moment</Eyebrow><h2>Quietly precise.<br /><em>Visibly capable.</em></h2></div><div className="trust-points"><div><span>01</span><h3>Technical superiority</h3><p>We own our equipment and our expertise, so decisions stay close to the work.</p></div><div><span>02</span><h3>End-to-end control</h3><p>One partner from permits and logistics to sound, lighting, people and performance.</p></div><div><span>03</span><h3>Strategic scale</h3><p>Specialist attention with the ability to coordinate complex event environments.</p></div></div></div></section>
}

function Testimonial() {
  const reviews = [
    { text: 'Exceeded my expectation!!!! Keep up the good work @Tbotainment Events🙌', author: 'Paulet Tebeila', rating: 5, date: '1 week ago' },
    { text: 'Tbotainment for the win! Talk about a team that works with you and not against you. They just get it, and they\'re amazing at what they do. I definitely recommend using their service and put a tip on if you\'re happy x', author: 'Lyrique Adams', rating: 5, date: '1 week ago' },
    { text: 'I cannot recommend Tbotainment team enough they brought so much vibe and fun to our party. Exceptional service 11/10 would totally recommend !', author: 'Brian Gadisi', rating: 5, date: '1 week ago' },
    { text: 'Great service and fast turnaround!', author: 'Louis du Toit', rating: 5, date: '4 weeks ago' },
    { text: null, author: 'Shane Betshwana', rating: 5, date: '1 month ago' },
    { text: 'Great service, goes above and beyond. Very happy with Tbotainment', author: 'Zee', rating: 5, date: '1 month ago' },
    { text: 'Great service, spectacular sound, friendly crew.', author: 'Sanele Zwane', rating: 5, date: '1 month ago' },
    { text: null, author: 'Dihan', rating: 5, date: '1 month ago' },
    { text: null, author: 'Taylor-leigh Bridge', rating: 5, date: '1 month ago' },
    { text: "I've worked with TBO many times now, always great service, punctual and a regular within my line of work ! Thank you so much team !", author: 'Linda', rating: 5, date: '1 month ago' },
    { text: 'Reliable and very helpful. Thanks Tbo for the professional service.', author: 'Mukhethwa Mudumela', rating: 5, date: '1 month ago' },
    { text: 'Great people to work with and able to adapt and change', author: 'Joker Gaming', rating: 5, date: '3 months ago' },
    { text: 'Was a grateful experience working with yall 🔥', author: 'Thando Mosha', rating: 5 },
    { text: null, author: 'Kiyaam Maggott', rating: 5 },
    { text: 'I highly recommend this company. Their punctuality and professionalism were outstanding from start to finish. They arrived on time, communicated clearly throughout the process, and completed the work to a very high standard. The team was friendly, knowledgeable, and took pride in their work.', author: 'Ryan Reece', rating: 5 },
    { text: 'Highly competent and reliable. Ushers adapted seamlessly to new situations, and showed great initiative. Both ushers and security were trustworthy. Tbotainment events provided quality service', author: 'Khumo Mpolokeng', rating: 5 },
    { text: 'Well coordinated events and had a good experience', author: 'Neo Mofokeng', rating: 5 },
    { text: 'The best in SA', author: 'Tshepo Nethononda', rating: 5 },
    { text: 'Good equipment, good music, excellent service. Thank you', author: 'Tebogo Nkosi', rating: 5 },
    { text: null, author: 'Nigel Machenerenje', rating: 5 },
    { text: null, author: 'Metse Kgotatso Mahlophe', rating: 5 },
    { text: 'Quality quality', author: 'Hulani Manganyi', rating: 5 },
    { text: "Thank you for the excellent sound service at my father's funeral. Your professionalism, punctuality, and clear sound made a difficult day run smoothly.", author: 'kholeka mbonxa', rating: 5 },
  ]
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const pageCount = Math.ceil(reviews.length / 2)
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (paused || reduced) return undefined
    const timer = window.setInterval(() => setPage((current) => (current + 1) % pageCount), 4000)
    return () => window.clearInterval(timer)
  }, [pageCount, paused])
  const pair = reviews.slice(page * 2, page * 2 + 2)
  return <section className="section testimonial" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }}><div className="page-width testimonial-grid"><div><Eyebrow>Client voices</Eyebrow><h2>What the work<br /><em>leaves behind.</em></h2><p className="review-source-note">Our Google reviews:</p><div className="review-dots" aria-label="Review pages">{Array.from({ length: pageCount }, (_, index) => <button key={index} className={page === index ? 'active' : ''} aria-label={`Show review set ${index + 1}`} onClick={() => setPage(index)}></button>)}</div></div><div className="review-pair" key={page}>{pair.map((review, index) => <blockquote className={`${index === 1 ? 'testimonial-secondary ' : ''}${review.text ? '' : 'review-rating-only'}`} key={review.author}><span className="quote-mark">“</span>{review.text && <p>{review.text}</p>}<footer>— {review.author} <span><strong className="review-stars" aria-label={`${review.rating} out of 5 stars`}>★★★★★</strong></span></footer></blockquote>)}</div></div></section>
}

function BrandRail() {
  return <section className="brand-rail"><div className="page-width"><Eyebrow>Trusted by</Eyebrow><div className="brand-marquee" aria-label="Trusted brands"><div className="brand-track">{[...brands, ...brands].map((brand, index) => <span key={`${brand}-${index}`}>{brand}</span>)}</div></div><small>Brand names are carried forward from the existing site and should be verified before final publication.</small></div></section>
}

function CtaBand() {
  return <section className="cta-band"><div className="page-width cta-band-inner"><div><Eyebrow light>Start with the brief</Eyebrow><h2>Let’s create something<br /><em>extraordinary.</em></h2></div><ButtonLink to="/request-a-quote" variant="light">Request a quote</ButtonLink></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="page-width footer-grid"><div className="footer-brand"><Logo /><p>South Africa’s full-service event production agency. Transforming concepts into immersive reality since 2018.</p><a className="footer-phone" href="tel:+27681099680">068 109 9680 <Arrow /></a></div><div className="footer-column"><span className="footer-label">Navigate</span><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/our-work">Our Work</Link><Link to="/about">About Us</Link><Link to="/request-a-quote">Request a quote</Link></div><div className="footer-column"><span className="footer-label">Contact</span><a href="mailto:Tbotechnical@gmail.com">Tbotechnical@gmail.com</a><span>41 Takbok Street<br />Highbury, Meyerton<br />1960, South Africa</span><a className="whatsapp-link" href="https://wa.me/27681099680" target="_blank" rel="noreferrer">WhatsApp us <Arrow /></a></div></div><div className="page-width footer-bottom"><span>© 2026 Tbotainment Events. Reg. No. 2019/117405/07. All rights reserved.</span><span>BBBEE Level One <b aria-hidden="true">•</b> CSD: MAAA1355917</span></div></footer>
}

function HomePage() {
  return <><Hero /><StatStrip /><section className="section intro-section"><div className="page-width intro-grid"><div><Eyebrow>About Tbotainment</Eyebrow><h2>South Africa’s full-scale<br /><em>event production agency.</em></h2><p className="lead">Founded in 2018, Tbotainment Events has evolved from a premier audio-visual provider into a full-scale event production agency. We specialise in transforming concepts into immersive reality through high-end technical supply, meticulous planning and strategic execution.</p><ButtonLink to="/about" variant="text">Read our story</ButtonLink></div></div></section><ServicePreview /><TrustBlock /><WorkStrip /><BrandRail /><Testimonial /><CtaBand /></>
}

function ServicesPage() {
  return <><PageIntro eyebrow="Capabilities" title="Every moving part,<br /><em>beautifully managed.</em>" body="Technical production, event management, people and content — built around the reality of your brief, not a templated package." image={media.heroPortrait}><ButtonLink to="/request-a-quote">Talk through your brief</ButtonLink></PageIntro><section className="section service-list-section"><div className="page-width"><div className="service-list-intro"><Eyebrow>Our services</Eyebrow><p>Choose the layer you need, or bring us the whole event. The categories below reflect the current Tbotainment Events offer and are designed to flex around your production.</p></div><div className="service-list">{services.map((service) => <article className="service-row" key={service.num}><div className="service-row-index">{service.num}</div><div className="service-row-image"><img src={service.image} alt="" /></div><div className="service-row-copy"><h2>{service.title}</h2><p>{service.body}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><ButtonLink to="/request-a-quote" variant="text">Request a quote</ButtonLink></div></article>)}</div></div></section><CtaBand /></>
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined
    const handler = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.classList.add('modal-open')
    return () => { window.removeEventListener('keydown', handler); document.body.classList.remove('modal-open') }
  }, [item, onClose])
  if (!item) return null
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}><div className="lightbox-card" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={onClose} aria-label="Close image viewer">×</button><img src={item.image} alt={item.title} /></div></div>
}

function WorkPage() {
  const [active, setActive] = useState('All work')
  const [selected, setSelected] = useState(null)
  const filtered = useMemo(() => active === 'All work' ? workItems : workItems.filter(item => item.category === active), [active])
  return <><PageIntro eyebrow="Selected work" title="Proof in the<br /><em>production.</em>" body="Real event imagery from the current Tbotainment Events gallery — shown here as a more considered portfolio experience." image={media.heroPortrait}><span className="preview-note"><span className="status-dot"></span> Existing project media only</span></PageIntro><section className="section portfolio-section"><div className="page-width"><div className="portfolio-toolbar"><div><Eyebrow>Browse the archive</Eyebrow><p>Click any frame to expand it.</p></div><div className="filter-tabs" role="tablist" aria-label="Portfolio filters">{categories.map(category => <button key={category} className={active === category ? 'active' : ''} onClick={() => setActive(category)}>{category}</button>)}</div></div><div className="portfolio-grid">{filtered.map((item, index) => <button className="portfolio-card" key={item.title} onClick={() => setSelected(item)} aria-label={`Open project image ${index + 1}`}><img src={item.image} alt="" /><span className="portfolio-card-overlay"><span className="view-chip">View <Arrow /></span></span></button>)}</div></div></section><BrandRail /><Lightbox item={selected} onClose={() => setSelected(null)} /></>
}

function AboutPage() {
  return <><PageIntro eyebrow="About Tbotainment" title="A technical mind<br /><em>for the bigger picture.</em>" body="By merging our technical expertise with strategic industry partnerships, we provide solutions that offer our clients the agility of a specialized boutique agency with the massive footprint and 35-year operational backbone of South Africa's most established activation networks." image={media.heroPortrait}><ButtonLink to="/request-a-quote">Meet your production partner</ButtonLink></PageIntro><section className="section about-story"><div className="page-width about-story-grid"><div className="about-story-visual"><img src={media.activation3} alt="Tbotainment Events event environment" /></div><div className="about-story-copy"><Eyebrow>How we work</Eyebrow><h2>Specialist energy.<br /><em>Strategic reach.</em></h2><p>Our point of difference is the connection between technical detail and the bigger event picture. We bring the equipment, crew and planning together early, so the final experience feels effortless to the audience.</p><div className="about-quote"><span>“</span><p>We don’t just supply equipment — we supply the peace of mind that comes with knowing every detail is managed by experts.</p><small>Mission statement</small></div></div></div></section><section className="section section-dark proof-section"><div className="page-width"><SectionHeading eyebrow="Trusted by organizers." title="Backed by results." body="From large-scale technical setups to seamless production management, we bring experience and precision to every event." /><div className="proof-grid"><div><strong><AnimatedCount value={2018} /></strong><span>Established</span><small>Presented as an existing company detail.</small></div><div><strong><AnimatedCount value={130} suffix="+" /></strong><span>Happy clients</span><small>Existing site claim — verify before publication.</small></div><div><strong><AnimatedCount value={4.8} suffix="★" decimals={1} /></strong><span>Google rating</span><small>Existing site claim — verify before publication.</small></div><div><strong>L1</strong><span>BBBEE level</span><small>Existing site claim — verify before publication.</small></div></div></div></section><CtaBand /></>
}

function QuotePage() {
  const [sent, setSent] = useState(false)
  return <><PageIntro eyebrow="Request a quote" title="Bring us the brief.<br /><em>We’ll build the room.</em>" image={media.heroPortrait}><div className="contact-quick"><a href="https://wa.me/27681099680" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a><a href="tel:+27681099680">068 109 9680 <Arrow /></a></div></PageIntro><section className="section quote-section"><div className="page-width quote-grid"><div className="quote-aside"><Eyebrow>Direct contact</Eyebrow><h2>Start with<br /><em>a conversation.</em></h2><p>Prefer a direct line? Reach the team using the contact details below</p><dl><div><dt>Phone</dt><dd><a href="tel:+27681099680">068 109 9680</a></dd></div><div><dt>Email</dt><dd><a href="mailto:Tbotechnical@gmail.com">Tbotechnical@gmail.com</a></dd></div><div><dt>Base</dt><dd>41 Takbok Street<br />Highbury, Meyerton, 1960</dd></div></dl><a className="whatsapp-card" href="https://wa.me/27681099680" target="_blank" rel="noreferrer"><span>Have a quick question?</span><strong>Message us on WhatsApp <Arrow /></strong></a></div><form className="quote-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><div className="form-heading"><span>01</span><div><h2>Event enquiry</h2><p>Fill in the relevant details below</p></div></div><div className="form-grid"><label>Full name *<input required name="name" placeholder="Your name" /></label><label>Company / organisation<input name="company" placeholder="Company name" /></label><label>Phone number *<input required name="phone" type="tel" placeholder="+27 ..." /></label><label>Email address *<input required name="email" type="email" placeholder="you@company.com" /></label><label>Event type<select name="eventType" defaultValue=""><option value="" disabled>Select event type</option><option>Corporate event</option><option>Conference</option><option>Live entertainment</option><option>Brand activation</option><option>Festival / outdoor event</option><option>Other</option></select></label><label>Event date<input name="date" type="date" /></label><label>Event location<input name="location" placeholder="City / venue" /></label><label>Expected guests<input name="guests" type="number" min="1" placeholder="Approximate number" /></label><label>Services required<select name="services" defaultValue=""><option value="" disabled>Select a service</option><option>Technical production</option><option>Event management</option><option>Safety & security</option><option>Activations & branding</option><option>Staffing & crew</option><option>Content creation</option><option>Full-service package</option></select></label><label>Approximate budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under R50 000</option><option>R50 000 – R150 000</option><option>R150 000 – R300 000</option><option>R300 000+</option><option>To be discussed</option></select></label><label className="full-width">Additional information<textarea name="message" placeholder="Tell us about your event, audience and what you need to make it land."></textarea></label></div><div className="form-submit-row"><div className="form-status"><span className="status-dot"></span>{sent ? 'Preview only — no enquiry was sent.' : 'Preview form · integration pending'}</div><button className="button button-primary" type="submit">{sent ? 'Enquiry captured in preview' : 'Review enquiry'} <Arrow /></button></div></form></div></section></>
}

function App() {
  const [route, setRoute] = useState(pathFor(window.location.pathname))
  useEffect(() => { const handler = () => setRoute(pathFor(window.location.pathname)); window.addEventListener('popstate', handler); return () => window.removeEventListener('popstate', handler) }, [])
  useEffect(() => { const titles = { home: 'Home', services: 'Services', work: 'Our Work', about: 'About Us', quote: 'Request a Quote' }; document.title = `Tbotainment Events — ${titles[route]}` }, [route])
  const page = route === 'services' ? <ServicesPage /> : route === 'work' ? <WorkPage /> : route === 'about' ? <AboutPage /> : route === 'quote' ? <QuotePage /> : <HomePage />
  return <><Header /><main>{page}</main><Footer /></>
}

createRoot(document.getElementById('root')).render(<App />)
