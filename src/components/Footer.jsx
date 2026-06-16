import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap ftop">
        <div>
          <Link className="wordmark" to="/">
            <span className="name">
              Conekt<span className="dot">.</span>
            </span>
            <span className="sub">Ads</span>
          </Link>
          <p className="ftag">
            India&apos;s tech-enabled outdoor advertising partner. Making brands unmissable across every format.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/services#ooh">OOH Hoardings</Link>
          <Link to="/services#dooh">DOOH Screens</Link>
          <Link to="/services#auto">Auto, Car &amp; Cab Branding</Link>
          <Link to="/services#bus">Bus &amp; Mobile LED</Link>
          <Link to="/services">Newspaper Jackets</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/work">Our work</Link>
          <Link to="/coverage">Coverage</Link>
          <Link to="/#why">Why Conekt</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="fcontact">
          <h4>Get in touch</h4>
          <a href="mailto:hello@conektads.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            hello@conektads.com
          </a>
          <a href="tel:+918861596468">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
            +91 88615 96468
          </a>
          <a href="#">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            JP Nagar, Bengaluru, India
          </a>
        </div>
      </div>
      <div className="wrap fbot">
        <span>© 2026 Conekt Ads. All rights reserved.</span>
        <span>Making Brands Unmissable.</span>
      </div>
    </footer>
  )
}
