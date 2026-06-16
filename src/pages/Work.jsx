import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import CtaBand, { CtaButton, ArrowIcon } from '../components/CtaBand'
import LogoWall from '../components/LogoWall'
import '../styles/pages/work.css'

const cases = [
  {
    img: '/assets/img/cs-hero-led.jpg',
    alt: 'Hero mobile LED vehicle',
    tag: 'Mobile LED · Multi-city',
    title: 'Hero — on the move, everywhere',
    desc: 'High-impact LED vehicles moved with the city across 25+ key routes for 30 days, putting Hero in front of millions on the road.',
    metrics: [
      { n: '1.2M+', l: 'Impressions' },
      { n: '3.8M+', l: 'Reached' },
      { n: '25+', l: 'Routes' },
    ],
    delay: '',
  },
  {
    img: '/assets/img/svc-led.jpg',
    alt: 'Snitch LED vehicle',
    tag: 'Mobile LED · 27 days',
    title: "Snitch — fit isn't just what you wear",
    desc: "An LED vehicle campaign across 28+ key routes carried Snitch's bold brand statement through the busiest parts of the city.",
    metrics: [
      { n: '1.3M+', l: 'Impressions' },
      { n: '3.9M+', l: 'Reached' },
      { n: '28+', l: 'Routes' },
    ],
    delay: 'd1',
  },
  {
    img: '/assets/img/cs-king.jpg',
    alt: 'King Ice Cream auto top branding',
    tag: 'Auto top · 30 days',
    title: 'King Ice Cream — scoop up attention',
    desc: 'A high-visibility mobile activation turned every auto into a moving billboard, creating instant brand recall across 20+ coverage zones.',
    metrics: [
      { n: '1.1M+', l: 'Impressions' },
      { n: '3.2M+', l: 'Reached' },
      { n: '20+', l: 'Zones' },
    ],
    delay: 'd2',
  },
  {
    img: '/assets/img/cs-inorbit.jpg',
    alt: 'Inorbit Mall',
    tag: 'Planning & curation',
    title: 'Inorbit Mall — high-visibility retail',
    desc: 'Outdoor media planning and inventory curation for a high-visibility retail promotion — strategic site selection and mapping ensured efficient, multi-format execution.',
    metrics: [
      { n: '120+', l: 'Sites curated' },
      { n: 'Multi', l: 'Format' },
      { n: 'High', l: 'Visibility' },
    ],
    delay: 'd3',
  },
]

export default function Work() {
  useEffect(() => {
    document.title = 'Work — Conekt Ads'
  }, [])

  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <Reveal as="span" className="kicker">
            Case studies
          </Reveal>
          <Reveal as="h1" className="display" delay="d1" style={{ maxWidth: '15ch' }}>
            Real campaigns.
            <br />
            <span className="em-green">Real results.</span>
          </Reveal>
          <Reveal as="p" className="lead" delay="d2" style={{ maxWidth: '52ch' }}>
            Campaigns that turned city-wide visibility into measurable impact — from product launches to always-on brand presence.
          </Reveal>
          <div className="worktotals reveal in">
            <div>
              <div className="statnum">
                <CountUp value={27} />
                <span className="u">M+</span>
              </div>
              <div className="statlabel">Combined impressions</div>
            </div>
            <div>
              <div className="statnum">
                <CountUp value={11} />
                <span className="u">M+</span>
              </div>
              <div className="statlabel">People reached</div>
            </div>
            <div>
              <div className="statnum">
                <CountUp value={5} />
                <span className="u"> formats</span>
              </div>
              <div className="statlabel">Across the media mix</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <Reveal as="article" className="csbig">
            <div className="csbig__media">
              <img src="/assets/img/cs-wispr.jpg" alt="Wispr Flow branded auto in Bengaluru" />
            </div>
            <div className="csbig__body">
              <span className="pill-tag">Featured · Auto + OOH</span>
              <h2 className="h2" style={{ marginTop: '14px' }}>
                Bengaluru traffic became the media.
              </h2>
              <p className="lead">
                For Wispr Flow&apos;s India launch, Bengaluru&apos;s daily traffic became a city-wide media network. Through auto branding and billboards — amplified by founder-led social storytelling — the campaign delivered strong recall and turned city-wide awareness into real conversation.
              </p>
              <div className="csbig__metrics">
                <div><div className="n">23.3M</div><div className="l">Views</div></div>
                <div><div className="n">267.7K</div><div className="l">Likes</div></div>
                <div><div className="n">2.9K</div><div className="l">Comments</div></div>
                <div><div className="n">100+</div><div className="l">Autos branded</div></div>
                <div><div className="n">15</div><div className="l">Billboards</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section--tight canvas">
        <div className="wrap">
          <div className="eyebrow-row">
            <div>
              <Reveal as="span" className="kicker">
                More campaigns
              </Reveal>
              <Reveal as="h2" className="h2" delay="d1" style={{ marginTop: '.3em' }}>
                Proof across every format
              </Reveal>
            </div>
          </div>
          <div className="casegrid">
            {cases.map((c) => (
              <Reveal key={c.title} as="article" className="casecard card" delay={c.delay}>
                <div className="casecard__media">
                  <img src={c.img} alt={c.alt} />
                </div>
                <div className="casecard__body">
                  <span className="svc__tag">{c.tag}</span>
                  <h3 className="h3">{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="casecard__metrics">
                    {c.metrics.map((m) => (
                      <div key={m.l}>
                        <span className="n">{m.n}</span>
                        <span className="l">{m.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LogoWall title="Brands we've worked with" />

      <CtaBand
        bg="/assets/img/night-billboard.jpg"
        title="Your campaign could be next."
        lead="Let's turn your next launch into a city-wide moment people can't miss."
      >
        <CtaButton to="/contact">
          Start a campaign <ArrowIcon />
        </CtaButton>
      </CtaBand>
    </>
  )
}
