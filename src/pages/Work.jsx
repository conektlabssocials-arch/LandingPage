import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import CtaBand, { CtaButton, ArrowIcon } from '../components/CtaBand'
import LogoWall from '../components/LogoWall'
import campaignWork from '../data/campaignWork'
import '../styles/pages/work.css'

const normalizeMediaSrc = (src = '') => {
  if (/^(https?:|data:|blob:)/i.test(src)) return src
  if (src.startsWith('/public/')) return src.replace('/public', '')
  if (src.startsWith('public/')) return `/${src.replace(/^public\//, '')}`
  if (src.startsWith('/')) return src
  return `/${src}`
}

const isVideoMedia = (src = '') => /\.(mp4|webm|ogg)$/i.test(src.split('?')[0])

function CampaignMedia({ campaign }) {
  const src = normalizeMediaSrc(campaign.image)

  if (isVideoMedia(src)) {
    return (
      <video
        src={src}
        aria-label={campaign.alt}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    )
  }

  return <img src={src} alt={campaign.alt} loading="lazy" />
}

export default function Work() {
  const [featuredCampaign, ...campaigns] = campaignWork

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
              <CampaignMedia campaign={featuredCampaign} />
            </div>
            <div className="csbig__body">
              <span className="pill-tag">Featured · {featuredCampaign.type} · {featuredCampaign.city}</span>
              <h2 className="h2" style={{ marginTop: '14px' }}>
                {featuredCampaign.title}
              </h2>
              <p className="lead">
                {featuredCampaign.location}
              </p>
              <div className="csbig__metrics">
                {featuredCampaign.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="n">{metric.value}</div>
                    <div className="l">{metric.label}</div>
                  </div>
                ))}
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
            {campaigns.map((campaign, index) => (
              <Reveal key={campaign.id} as="article" className="casecard card" delay={index % 3 === 1 ? 'd1' : index % 3 === 2 ? 'd2' : ''}>
                <div className="casecard__media">
                  <CampaignMedia campaign={campaign} />
                </div>
                <div className="casecard__body">
                  <h3 className="h3">{campaign.title}</h3>
                  <p>{campaign.location}</p>
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
