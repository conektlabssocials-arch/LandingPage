import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { ArrowIcon } from './CtaBand'
import campaignWork from '../data/campaignWork'

const cardSizes = ['wide', 'portrait', 'wide', 'standard', 'compact', 'wide', 'compact', 'standard']

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

function CampaignCard({ campaign, isDuplicate = false, size = 'standard' }) {
  return (
    <article className={`campaigncard campaigncard--${size}`} aria-hidden={isDuplicate || undefined}>
      <div className="campaigncard__media">
        <CampaignMedia campaign={campaign} />
      </div>
      <div className="campaigncard__body">
        <h3>{campaign.title}</h3>
        <p className="campaigncard__location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {campaign.location}
        </p>
      </div>
    </article>
  )
}

export function CampaignShowcaseSection() {
  const rows = ['top', 'bottom'].map((id, rowIndex) => ({
    id,
    cards: campaignWork
      .filter((_, campaignIndex) => campaignIndex % 2 === rowIndex)
      .map((campaign, campaignIndex) => ({
        campaign,
        size: cardSizes[(campaignIndex + rowIndex + 1) % cardSizes.length],
      })),
  }))

  return (
    <section className="section proofshowcase" id="proof">
      <div className="wrap">
        <div className="eyebrow-row proofshowcase__head">
          <div>
            <Reveal as="span" className="kicker">
              Previous work
            </Reveal>
            <Reveal as="h2" className="h1" delay="d1" style={{ marginTop: '.3em' }}>
              Campaigns We&apos;ve Delivered
            </Reveal>
          </div>
          <Reveal as="p" delay="d2">
            Real brands. Real impact. Data-driven OOH campaigns that drive visibility and ROI across India.
          </Reveal>
        </div>

        <Reveal className="proofshowcase__rows" delay="d2" aria-label="Previous work campaign showcase">
          {rows.map((row) => {
            const rowCards = [...row.cards, ...row.cards]

            return (
              <div className={`proofshowcase__rail proofshowcase__rail--${row.id}`} key={row.id}>
                <div className="proofshowcase__track">
                  {rowCards.map(({ campaign, size }, index) => (
                    <CampaignCard
                      campaign={campaign}
                      isDuplicate={index >= row.cards.length}
                      key={`${row.id}-${campaign.id}-${index}`}
                      size={size}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </Reveal>

        <Reveal className="proofshowcase__cta" delay="d3">
          <Link className="btn btn--primary btn--lg" to="/work">
            Explore More <ArrowIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default function ProofShowcase() {
  return <CampaignShowcaseSection />
}
