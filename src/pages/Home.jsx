import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import CtaBand, { CtaButton, ArrowIcon } from '../components/CtaBand'
import LogoWall from '../components/LogoWall'
import ProofShowcase from '../components/ProofShowcase'
import '../styles/pages/home.css'

const ArrowLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const services = [
  { img: '/assets/img/svc-ooh.jpg', alt: 'OOH hoarding', tag: 'OOH Hoardings', title: 'High-impact hoardings', desc: 'Static & illuminated hoardings at premium, high-footfall locations across cities.', link: '/services' },
  { img: '/assets/img/night-billboard.jpg', alt: 'DOOH digital screen', tag: 'DOOH Screens', title: 'Dynamic digital screens', desc: 'Real-time digital displays that deliver impact in high-footfall, high-dwell zones.', link: '/services', delay: 'd1' },
  { img: '/assets/img/svc-auto.jpg', alt: 'Auto branding', tag: 'Auto Branding', title: 'Hyper-local auto reach', desc: 'Visibility that reaches every lane, every signal and every neighbourhood.', link: '/services', delay: 'd2' },
  { img: '/assets/img/svc-bus.jpg', alt: 'Bus branding', tag: 'Bus Branding', title: 'Billboards that travel', desc: "Moving media across the city's busiest routes for maximum daily exposure.", link: '/services' },
  { img: '/assets/img/svc-led.jpg', alt: 'Mobile LED vehicle', tag: 'Mobile LED', title: 'LED that moves with the city', desc: 'High-impact LED vehicles that capture attention everywhere they go.', link: '/services', delay: 'd1' },
  { img: '/assets/img/svc-car.jpg', alt: 'Car branding', tag: 'Car & Cab Branding', title: 'Cabs that carry your brand', desc: 'Exterior wraps and in-cab placements that reach every rider, every trip, across fleets.', link: '/services#car', delay: 'd2' },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Conekt Ads — Making Brands Unmissable'
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero__inner wrap">
          <div className="hero__copy">
            <Reveal as="span" className="kicker">
              India&apos;s tech-enabled outdoor advertising partner
            </Reveal>
            <Reveal as="h1" className="display" delay="d1">
              Making Brands<br />
              <span className="em-green">Unmissable.</span>
            </Reveal>
            <Reveal as="p" className="lead" delay="d2">
              Strategic outdoor media across India&apos;s most impactful formats — planned, executed and measured by a team that turns visibility into real business.
            </Reveal>
            <Reveal className="hero__actions" delay="d3">
              <Link className="btn btn--primary btn--lg" to="/contact">
                Start a campaign <ArrowIcon />
              </Link>
              <Link className="btn btn--ghost btn--lg" to="/work">
                See our work
              </Link>
            </Reveal>
            <Reveal className="chips" delay="d4" aria-label="Formats">
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="11" rx="1" /><path d="M12 15v5M8 20h8" /></svg>
                OOH
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="m10 9 4 2.5L10 14V9zM8 21h8" /></svg>
                DOOH
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 16V9l2-4h7l3 4h2a2 2 0 0 1 2 2v5" /><circle cx="7.5" cy="16.5" r="1.7" /><circle cx="17" cy="16.5" r="1.7" /><path d="M9 16h6" /></svg>
                Auto
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5v5h-3v-2H6v2H3v-5z" /><circle cx="7" cy="16" r="1.4" /><circle cx="17" cy="16" r="1.4" /></svg>
                Cabs
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="13" rx="2" /><path d="M4 11h16M7 20v-3M17 20v-3" /><circle cx="8" cy="17" r="1" /><circle cx="16" cy="17" r="1" /></svg>
                Bus
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 6h11v11H2zM13 9h4l3 3v5h-7" /><circle cx="6" cy="18" r="1.8" /><circle cx="16.5" cy="18" r="1.8" /></svg>
                Mobile LED
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5h13v14H6a2 2 0 0 1-2-2V5zM17 9h3v8a2 2 0 0 1-2 2M7 8h7M7 12h7M7 16h4" /></svg>
                Print
              </span>
            </Reveal>
          </div>
          <Reveal className="hero__media" delay="d2">
            <div className="hero__imgwrap">
              <img src="/assets/img/hero-street.jpg" alt="Conekt Ads billboard, mobile LED truck and branded auto on a city road" />
            </div>
            <div className="hero__badge">
              <CountUp value={50} className="statnum" />
              <span className="statnum">K+</span>
              <span className="statlabel">
                premium sites
                <br />
                pan-India
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section--tight canvas">
        <div className="wrap statstrip">
          {[
            { value: 3, suffix: 'L+', label: 'Billboards ', delay: '' },
            { value: 50, suffix: 'K+', label: 'Premium sites', delay: '' },
            { value: 150, suffix: '+', label: 'Cities covered', delay: 'd1' },
            { value: 95, suffix: '%', label: 'Visibility rate', delay: 'd2' },
            { value: 100, suffix: '+', label: 'Campaigns executed', delay: 'd3' },
          ].map((stat) => (
            <Reveal key={stat.label} className="stat" delay={stat.delay}>
              <div className="statnum">
                <CountUp value={stat.value} />
                <span className="u">{stat.suffix}</span>
              </div>
              <div className="statlabel">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <div className="eyebrow-row">
            <div>
              <Reveal as="span" className="kicker">
                Our core services
              </Reveal>
              <Reveal as="h2" className="h1" delay="d1" style={{ marginTop: '.3em', maxWidth: '16ch' }}>
                One agency.
                <br />
                Every format.
              </Reveal>
            </div>
            <Reveal as="p" delay="d2">
              Strategic outdoor media solutions that put your brand where it matters most — from premium hoardings to streets that move.
            </Reveal>
          </div>
          <div className="svc-grid">
            {services.map((svc) => (
              <Reveal key={svc.tag} as="article" className="svc card" delay={svc.delay || ''}>
                <div className="svc__img">
                  <img src={svc.img} alt={svc.alt} />
                </div>
                <div className="svc__body">
                  <span className="svc__tag">{svc.tag}</span>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="svc__foot">
                    <Link className="arrowlink" to={svc.link}>
                      Explore <ArrowLink />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section ink-bg" id="why">
        <div className="wrap why">
          <Reveal className="why__head">
            <span className="kicker no-rule" style={{ color: 'var(--accent-bright)' }}>
              The Conekt difference
            </span>
            <h2 className="h1" style={{ maxWidth: '18ch', marginTop: '.3em' }}>
              Outdoor advertising is everywhere.
              <br />
              <span style={{ color: 'var(--accent-bright)' }}>Execution is not.</span>
            </h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,.72)', maxWidth: '52ch' }}>
              Brands lose budget to fragmented inventory, unverified sites and zero transparency. Our tech-enabled process fixes exactly that.
            </p>
          </Reveal>
          <div className="why__grid">
            {[
              { n: '01', title: 'Verified inventory', desc: 'Every site checked and quality-assured before your brand goes up.', delay: '' },
              { n: '02', title: 'Fast turnaround', desc: 'From brief to on-ground in days, not weeks — across formats.', delay: 'd1' },
              { n: '03', title: 'Full transparency', desc: 'Live updates and proof of execution at every step of the campaign.', delay: 'd2' },
              { n: '04', title: 'Optimised budgets', desc: 'Strategic site selection that maximises reach for every rupee spent.', delay: 'd3' },
            ].map((card) => (
              <Reveal key={card.n} className="why__card" delay={card.delay}>
                <div className="why__n">{card.n}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LogoWall />

      <ProofShowcase />

      <section className="section canvas" id="work">
        <div className="wrap">
          <div className="eyebrow-row">
            <div>
              <Reveal as="span" className="kicker">
                Case studies
              </Reveal>
              <Reveal as="h2" className="h1" delay="d1" style={{ marginTop: '.3em', maxWidth: '14ch' }}>
                Real campaigns.
                <br />
                Real results.
              </Reveal>
            </div>
            <Reveal as="p" delay="d2">
              A few of the campaigns where we turned city-wide visibility into measurable impact.
            </Reveal>
          </div>
          <div className="cslist">
            <Reveal as="article" className="cs">
              <div className="cs__media">
                <img src="/assets/img/cs-wispr.jpg" alt="Wispr Flow branded auto in Bengaluru" />
              </div>
              <div className="cs__body">
                <span className="pill-tag">Auto + OOH · Bengaluru</span>
                <h3 className="h3">Bengaluru traffic became the media for Wispr Flow&apos;s India launch.</h3>
                <p style={{ color: 'var(--muted)', margin: 0 }}>
                  Auto branding and billboards turned the city&apos;s daily commute into a city-wide launch network — amplified through social into real conversation.
                </p>
                <div className="cs__metrics">
                  <div className="cs__metric"><div className="n">23.3M</div><div className="l">Views</div></div>
                  <div className="cs__metric"><div className="n">267.7K</div><div className="l">Likes</div></div>
                  <div className="cs__metric"><div className="n">100+</div><div className="l">Autos branded</div></div>
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="cs">
              <div className="cs__media">
                <img src="/assets/img/cs-hero-led.jpg" alt="Hero mobile LED vehicle campaign" />
              </div>
              <div className="cs__body">
                <span className="pill-tag">Mobile LED · Multi-city</span>
                <h3 className="h3">Taking Hero where it matters — across 25+ key routes.</h3>
                <p style={{ color: 'var(--muted)', margin: 0 }}>
                  High-impact LED vehicles moved with the city for 30 days, putting the brand in front of millions on the road.
                </p>
                <div className="cs__metrics">
                  <div className="cs__metric"><div className="n">1.2M+</div><div className="l">Impressions</div></div>
                  <div className="cs__metric"><div className="n">3.8M+</div><div className="l">People reached</div></div>
                  <div className="cs__metric"><div className="n">25+</div><div className="l">Key routes</div></div>
                </div>
              </div>
            </Reveal>
          </div>
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Reveal>
              <Link className="btn btn--dark btn--lg" to="/work">
                View all case studies <ArrowIcon />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <div className="eyebrow-row">
            <div>
              <Reveal as="span" className="kicker">
                Our process
              </Reveal>
              <Reveal as="h2" className="h1" delay="d1" style={{ marginTop: '.3em', maxWidth: '16ch' }}>
                A seamless journey from brief to impact.
              </Reveal>
            </div>
            <Reveal as="p" delay="d2">
              Tech-enabled at every step — built for speed, transparency and precision.
            </Reveal>
          </div>
          <div className="process">
            {[
              { n: '01', title: 'Understand your goal', desc: 'We dive deep into your objectives, audience and campaign needs.', delay: '' },
              { n: '02', title: 'Plan & curate', desc: 'Experts select the right formats, locations and strategy.', delay: 'd1' },
              { n: '03', title: 'Execute flawlessly', desc: 'We handle everything from booking to on-ground implementation.', delay: 'd2' },
              { n: '04', title: 'Monitor in real-time', desc: 'Track performance with live updates and proof of delivery.', delay: 'd3' },
              { n: '05', title: 'Report & optimise', desc: 'Clear reporting and optimisation for better impact and ROI.', delay: 'd4' },
            ].map((step) => (
              <Reveal key={step.n} className="process__step" delay={step.delay}>
                <div className="process__n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        bg="/assets/img/cta-street.jpg"
        title="Let's build visibility that moves business."
        lead="From streets to skylines, we help brands show up where attention matters most. Ready to launch your next campaign?"
      >
        <CtaButton to="/contact">
          Let&apos;s talk <ArrowIcon />
        </CtaButton>
        <CtaButton href="tel:+918861596468" className="btn btn--lg" style={{ color: '#fff', border: '1.5px solid rgba(255,255,255,.5)' }}>
          +91 88615 96468
        </CtaButton>
      </CtaBand>
    </>
  )
}
