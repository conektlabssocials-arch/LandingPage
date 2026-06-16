import Reveal from './Reveal'

const LOGOS = [
  { src: '/assets/logos/inorbit.png', alt: 'Inorbit' },
  { src: '/assets/logos/hero.png', alt: 'Hero' },
  { src: '/assets/logos/kingfisher.png', alt: 'Kingfisher' },
  { src: '/assets/logos/snitch.png', alt: 'Snitch' },
  { src: '/assets/logos/aadityaa.png', alt: 'Aadityaa Milk' },
  { src: '/assets/logos/tanishq.png', alt: 'Tanishq' },
  { src: '/assets/logos/flow.png', alt: 'Wispr Flow' },
  { src: '/assets/logos/royalritz.png', alt: 'Royal Ritz' },
]

export default function LogoWall({ title = 'Brands that trust Conekt Ads' }) {
  return (
    <section className="section--tight">
      <div className="wrap">
        <Reveal as="p" className="brands__title">
          {title}
        </Reveal>
        <Reveal className="logowall" delay="d1">
          {LOGOS.map((logo) => (
            <div key={logo.alt} className="logowall__cell">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
