import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import '../styles/pages/contact.css'

const SHEETS_WEB_APP_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL?.trim()

const FORMATS = [
  'OOH Hoardings',
  'DOOH Screens',
  'Auto Branding',
  'Bus Branding',
  'Mobile LED Vehicles',
  'Car Branding',
  'Newspaper Jackets',
  'Not sure — recommend a mix',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    format: '',
    message: '',
  })

  useEffect(() => {
    document.title = 'Contact — Conekt Ads'
  }, [])

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setSubmitError('')
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }))
    }
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = true
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) next.email = true
    if (!form.message.trim()) next.message = true
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    if (!SHEETS_WEB_APP_URL) {
      setSubmitError('The Google Sheet is not connected yet. Add VITE_GOOGLE_SHEETS_WEB_APP_URL in .env.local.')
      return
    }

    setSubmitting(true)
    setSubmitError('')

    const payload = new URLSearchParams({
      submittedAt: new Date().toISOString(),
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      format: form.format,
      message: form.message.trim(),
      source: 'Conekt Ads contact page',
    })

    try {
      await fetch(SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      })
      setSubmitted(true)
    } catch {
      setSubmitError('Something went wrong while sending your enquiry. Please try again or email hello@conektads.com.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleReset = () => {
    setForm({ name: '', email: '', phone: '', company: '', format: '', message: '' })
    setErrors({})
    setSubmitError('')
    setSubmitted(false)
  }

  return (
    <section className="section contactwrap" id="enquiry">
      <div className="wrap contactgrid">
        <div className="contact__intro">
          <Reveal as="span" className="kicker">
            Get in touch
          </Reveal>
          <Reveal as="h1" className="display" delay="d1" style={{ maxWidth: '14ch' }}>
            Let&apos;s build
            <br />
            visibility that <span className="em-green">moves business.</span>
          </Reveal>
          <Reveal as="p" className="lead" delay="d2" style={{ maxWidth: '42ch' }}>
            From streets to skylines, we help brands show up where attention matters most. Tell us about your campaign and we&apos;ll get back within one working day.
          </Reveal>

          <Reveal className="contact__cards" delay="d3">
            <a className="ccard" href="mailto:hello@conektads.com">
              <span className="ccard__ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span>
                <span className="ccard__l">Email us</span>
                <span className="ccard__v">hello@conektads.com</span>
              </span>
            </a>
            <a className="ccard" href="tel:+919731865049">
              <span className="ccard__ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              <span>
                <span className="ccard__l">Call us</span>
                <span className="ccard__v">+91 97318 65049</span>
              </span>
            </a>
            <a className="ccard" href="tel:+918861596468">
              <span className="ccard__ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              <span>
                <span className="ccard__l">Call us</span>
                <span className="ccard__v">+91 88615 96468</span>
              </span>
            </a>
            <div className="ccard ccard--static">
              <span className="ccard__ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>
                <span className="ccard__l">Visit us</span>
                <span className="ccard__v">JP Nagar, Bengaluru, India</span>
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="contact__formwrap" delay="d2">
          {!submitted ? (
            <form className="cform" onSubmit={handleSubmit} noValidate>
              <h2 className="h3" style={{ marginBottom: '6px' }}>
                Start a campaign
              </h2>
              <p style={{ color: 'var(--muted)', margin: '0 0 22px' }}>Fields marked * are required.</p>
              <div className="field">
                <label htmlFor="name">Full name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  required
                  className={errors.name ? 'invalid' : ''}
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>
              <div className="frow">
                <div className="field">
                  <label htmlFor="email">Work email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className={errors.email ? 'invalid' : ''}
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>
              </div>
              <div className="frow">
                <div className="field">
                  <label htmlFor="company">Company / brand</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your brand"
                    value={form.company}
                    onChange={(e) => updateField('company', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="format">Format of interest</label>
                  <select
                    id="format"
                    name="format"
                    value={form.format}
                    onChange={(e) => updateField('format', e.target.value)}
                  >
                    <option value="">Select a format</option>
                    {FORMATS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Tell us about your campaign *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Goals, target cities, timeline and budget range…"
                  required
                  className={errors.message ? 'invalid' : ''}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                />
              </div>
              {submitError ? (
                <p className="cform__error" role="alert">
                  {submitError}
                </p>
              ) : null}
              <button
                className="btn btn--primary btn--lg"
                type="submit"
                disabled={submitting}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {submitting ? 'Sending...' : 'Send enquiry'}{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <p className="cform__note">By submitting you agree to be contacted by Conekt Ads about your enquiry.</p>
            </form>
          ) : (
            <div className="cform__success">
              <div className="cform__check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="m20 6-11 11-5-5" />
                </svg>
              </div>
              <h2 className="h3">Thanks — we&apos;ve got it.</h2>
              <p style={{ color: 'var(--muted)' }}>
                Our team will get back to you within one working day. For anything urgent, call{' '}
                <a href="tel:+918861596468" style={{ color: 'var(--accent)', fontWeight: 700 }}>
                  +91 88615 96468
                </a>
                .
              </p>
              <button className="btn btn--ghost" type="button" onClick={handleReset}>
                Send another enquiry
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
