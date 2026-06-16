import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import CtaBand, { CtaButton, ArrowIcon } from '../components/CtaBand'
import '../styles/pages/services.css'

const formats = [
  {
    id: 'ooh',
    no: '01',
    tag: 'OOH Hoardings',
    title: 'High-impact, unmissable presence',
    lead: 'From premium hoardings to high-traffic corridors, our inventory ensures your brand gets maximum visibility exactly where it matters.',
    img: '/assets/img/svc-ooh.jpg',
    alt: 'OOH hoarding at premium location',
    points: [
      'Prime locations at high-footfall & traffic hotspots',
      'Static & illuminated large-format displays',
      'Verified, quality-assured sites',
      'Drive awareness and boost recall at scale',
    ],
  },
  {
    id: 'dooh',
    no: '02',
    tag: 'DOOH Screens',
    title: 'Dynamic screens, real-time impact',
    lead: 'Digital displays in high-footfall, high-dwell zones deliver flexible, time-of-day creative that keeps your message fresh.',
    img: '/assets/img/night-billboard.jpg',
    alt: 'DOOH digital screen at night',
    points: [
      'Premium digital screens in prime zones',
      'Day-parting and dynamic creative',
      'Fast creative turnaround',
      'Measurable, schedulable delivery',
    ],
  },
  {
    id: 'auto',
    no: '03',
    tag: 'Auto Branding',
    title: 'Move with maximum impact',
    lead: 'Hyper-local reach that goes everywhere your audience goes — high visibility, high recall and unbeatable cost per impression.',
    img: '/assets/img/svc-auto.jpg',
    alt: 'Branded auto rickshaw',
    points: [
      'Full wraps, side panels & head-rest branding',
      'Reaches every lane, signal and neighbourhood',
      'In-cab dangler & back-seat options',
      'Lowest cost per impression across formats',
    ],
  },
  {
    id: 'led',
    no: '04',
    tag: 'Mobile LED Vehicles',
    title: 'Take your brand where it matters',
    lead: 'High-impact LED vehicles that move with the city and get your brand noticed everywhere they go.',
    img: '/assets/img/svc-led.jpg',
    alt: 'Mobile LED vehicle',
    points: [
      'Bright, full-motion LED creative',
      'Route planning across key corridors',
      'Event & launch activations',
      'Impossible to ignore, day or night',
    ],
  },
  {
    id: 'bus',
    no: '05',
    tag: 'Bus Branding',
    title: 'Billboards that travel the city',
    lead: "Moving media across the city's busiest routes, delivering maximum exposure to commuters and pedestrians alike.",
    img: '/assets/img/svc-bus.jpg',
    alt: 'Branded city bus',
    points: [
      'Full & partial bus wraps',
      'Coverage across high-density routes',
      'Repeated daily impressions',
      'City-wide brand presence',
    ],
  },
  {
    id: 'car',
    no: '06',
    tag: 'Car & Cab Fleet Branding',
    title: 'Turn every cab into a moving billboard',
    lead: 'From premium private cars to organised taxi fleets, we put your brand on high-frequency vehicles that cover the city all day — exterior wraps and in-cab placements that reach every rider.',
    img: '/assets/img/svc-car.jpg',
    alt: 'Branded car',
    points: [
      'Full vehicle wraps for hero campaigns',
      'Side & door panel branding',
      'Headrest branding seen every trip',
      'In-cab danglers & back-seat pocket placements',
      'QR-led, ride-along engagement',
      'Fleet-scale rollout across priority routes',
    ],
  },
]

const incabItems = [
  { title: 'Full Wrap', desc: 'Unmissable, full-vehicle exterior branding for hero campaigns.', delay: '' },
  { title: 'Side / Door Panel', desc: 'High-visibility decals on doors and side panels — our signature format.', delay: 'd1' },
  { title: 'Headrest', desc: 'Front-and-centre placement seen by every rider, every trip.', delay: 'd2' },
  { title: 'Danglers', desc: 'Hanging in-cab danglers for high-impact visibility on every ride.', delay: 'd3' },
  { title: 'Back-Seat Pocket', desc: 'Engaging riders even from the back seat — ideal for QR-led campaigns.', delay: 'd4' },
  { title: 'Extra Space', desc: 'Premium add-on placements — bonnet, boot and extra panels for standout brands.', delay: 'd5' },
]

const addons = [
  { tag: 'Newspaper Jackets', title: 'Front-page takeovers', desc: 'Front-page jackets on leading newspapers for unbeatable morning reach and instant credibility.', delay: '' },
  { tag: 'Inventory Curation', title: 'Planning & site mapping', desc: 'Strategic site selection and inventory mapping that ensures efficient, high-visibility execution.', delay: 'd1' },
  { tag: 'Tech-enabled Reporting', title: 'Proof & performance', desc: 'Live updates, on-ground proof and clear reporting so you always know exactly where your brand is.', delay: 'd2' },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services — Conekt Ads'
  }, [])

  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <Reveal as="span" className="kicker">
            Our core services
          </Reveal>
          <Reveal as="h1" className="display" delay="d1" style={{ maxWidth: '18ch' }}>
            One agency.
            <br />
            <span className="em-green">Every format.</span>
          </Reveal>
          <Reveal as="p" className="lead" delay="d2" style={{ maxWidth: '54ch' }}>
            Strategic outdoor media solutions that put your brand where it matters most — from premium hoardings to streets that move with the city.
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap fmtlist">
          {formats.map((fmt) => (
            <Reveal key={fmt.id} as="article" className="fmt" id={fmt.id}>
              <div className="fmt__media">
                <img src={fmt.img} alt={fmt.alt} />
              </div>
              <div className="fmt__body">
                <span className="fmt__no">{fmt.no}</span>
                <span className="svc__tag">{fmt.tag}</span>
                <h2 className="h2">{fmt.title}</h2>
                <p className="lead">{fmt.lead}</p>
                <ul className="fmt__pts">
                  {fmt.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <div>
              <Reveal as="span" className="kicker">
                Inside the cab
              </Reveal>
              <Reveal as="h2" className="h2" delay="d1" style={{ marginTop: '.3em', maxWidth: '18ch' }}>
                Every touchpoint of a taxi fleet, branded.
              </Reveal>
            </div>
            <Reveal as="p" delay="d2">
              Run any format on its own or combine them across an organised fleet for maximum recall on every ride.
            </Reveal>
          </div>
          <div className="incab">
            {incabItems.map((item) => (
              <Reveal key={item.title} className="incab__item" delay={item.delay}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight canvas">
        <div className="wrap addons">
          {addons.map((addon) => (
            <Reveal key={addon.tag} className="addon" delay={addon.delay}>
              <span className="svc__tag">{addon.tag}</span>
              <h3 className="h3">{addon.title}</h3>
              <p>{addon.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        bg="/assets/img/cta-street.jpg"
        title="Not sure which format fits?"
        lead="Tell us your goal and audience — we'll plan the right mix across India's most impactful formats."
      >
        <CtaButton to="/contact">
          Plan my campaign <ArrowIcon />
        </CtaButton>
        <CtaButton to="/work" className="btn btn--lg" style={{ color: '#fff', border: '1.5px solid rgba(255,255,255,.5)' }}>
          See the work
        </CtaButton>
      </CtaBand>
    </>
  )
}
