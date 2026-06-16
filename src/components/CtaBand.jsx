import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CtaBand({ bg, title, lead, children }) {
  return (
    <section className="ctaband">
      <img className="ctaband__bg" src={bg} alt="" />
      <div className="ctaband__scrim" />
      <div className="wrap ctaband__inner">
        <Reveal>
          <h2 className="display" style={{ color: '#fff', maxWidth: '15ch' }}>
            {title}
          </h2>
          {lead && (
            <p className="lead" style={{ color: 'rgba(255,255,255,.85)', maxWidth: '50ch' }}>
              {lead}
            </p>
          )}
          <div className="hero__actions">{children}</div>
        </Reveal>
      </div>
    </section>
  )
}

export function CtaButton({ to, href, children, className = 'btn btn--on-dark btn--lg', style }) {
  if (href) {
    return (
      <a className={className} href={href} style={style}>
        {children}
      </a>
    )
  }
  return (
    <Link className={className} to={to} style={style}>
      {children}
    </Link>
  )
}

export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
