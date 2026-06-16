import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import CtaBand, { CtaButton, ArrowIcon } from '../components/CtaBand'
import '../styles/pages/coverage.css'

export default function Coverage() {
  useEffect(() => {
    document.title = 'Coverage — Conekt Ads'
  }, [])

  return (
    <>
      <section className="pagehero">
        <div className="wrap covhero">
          <div className="covhero__copy">
            <Reveal as="span" className="kicker">
              Where we&apos;re live
            </Reveal>
            <Reveal as="h1" className="display" delay="d1" style={{ maxWidth: '16ch' }}>
              Live across the
              <br />
              South, <span className="em-green">and growing fast.</span>
            </Reveal>
            <Reveal as="p" className="lead" delay="d2" style={{ maxWidth: '50ch' }}>
              Full active coverage across South India, plus Mumbai, Delhi, Gurgaon and Jaipur — with verified inventory and on-ground teams in every market we operate.
            </Reveal>
            <Reveal className="hero__actions" delay="d3">
              <Link className="btn btn--primary btn--lg" to="/contact">
                Request inventory list <ArrowIcon />
              </Link>
            </Reveal>
          </div>
          <Reveal className="covhero__media" delay="d2">
            <img src="/assets/img/metro-city.jpg" alt="Conekt Ads branding along a city metro line" />
          </Reveal>
        </div>
      </section>

      <section className="section--tight canvas">
        <div className="wrap covstats">
          {[
            { value: 50, suffix: 'K+', label: 'Premium sites', delay: '' },
            { value: 150, suffix: '+', label: 'Cities covered', delay: 'd1' },
            { value: 95, suffix: '%', label: 'Visibility rate', delay: 'd2' },
            { value: 6, suffix: '+', label: 'Media formats', delay: 'd3' },
          ].map((stat) => (
            <Reveal key={stat.label} className="covstat" delay={stat.delay}>
              <div className="statnum">
                <CountUp value={stat.value} />
                <span className="u">{stat.suffix}</span>
              </div>
              <div className="statlabel">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow-row">
            <div>
              <Reveal as="span" className="kicker">
                Where we operate
              </Reveal>
              <Reveal as="h2" className="h1" delay="d1" style={{ marginTop: '.3em', maxWidth: '16ch' }}>
                Strong across the South. Live in key metros.
              </Reveal>
            </div>
            <Reveal as="p" delay="d2">
              Headquartered in Bengaluru with on-ground teams across South India, and active operations in Mumbai, Delhi, Gurgaon and Jaipur.
            </Reveal>
          </div>
          <div className="regions">
            <Reveal className="region region--hl">
              <span className="pill-tag">Live now · Home turf</span>
              <h3 className="h3">All of South India</h3>
              <p>Full active coverage across the South — billboards, autos, cabs, buses, mobile LED and DOOH in every major city and corridor.</p>
              <div className="region__zones">Bengaluru · Chennai · Hyderabad · Coimbatore · Kochi · Mysuru · Madurai · Vizag &amp; more</div>
            </Reveal>
            <Reveal className="region" delay="d1">
              <span className="region__live">Live</span>
              <h3 className="h3">Mumbai</h3>
              <p>Across the city&apos;s busiest commercial and transit corridors.</p>
            </Reveal>
            <Reveal className="region" delay="d2">
              <span className="region__live">Live</span>
              <h3 className="h3">Delhi &amp; Gurgaon</h3>
              <p>Prime hoardings, cabs and mobile media across the NCR.</p>
            </Reveal>
            <Reveal className="region" delay="d3">
              <span className="region__live">Live</span>
              <h3 className="h3">Jaipur</h3>
              <p>High-visibility outdoor and on-vehicle branding city-wide.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section--tight ink-bg">
        <div className="wrap">
          <div className="eyebrow-row">
            <div>
              <span className="kicker no-rule" style={{ color: 'var(--accent-bright)' }}>
                The network
              </span>
              <h2 className="h1" style={{ color: '#fff', marginTop: '.3em', maxWidth: '16ch' }}>
                Every format, mapped and verified.
              </h2>
            </div>
            <p className="lead" style={{ color: 'rgba(255,255,255,.72)', maxWidth: '42ch' }}>
              One curated inventory you can plan, book and measure across the whole country.
            </p>
          </div>
          <div className="invgrid">
            {[
              { n: '50K+', l: 'OOH & DOOH sites', delay: '' },
              { n: 'Fleets', l: 'Autos, cabs, cars & buses', delay: 'd1' },
              { n: 'Mobile', l: 'LED vehicles on demand', delay: 'd2' },
              { n: 'Print', l: 'Leading newspaper jackets', delay: 'd3' },
            ].map((item) => (
              <Reveal key={item.l} className="inv" delay={item.delay}>
                <div className="inv__n">{item.n}</div>
                <div className="inv__l">{item.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        bg="/assets/img/cta-street.jpg"
        title="Tell us where you want to be seen."
        lead="Share your target cities and we'll send a curated inventory plan that fits your goals and budget."
      >
        <CtaButton to="/contact">
          Get a coverage plan <ArrowIcon />
        </CtaButton>
      </CtaBand>
    </>
  )
}
