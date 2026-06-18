export const SITE_URL = 'https://conektads.com'
export const SITE_NAME = 'Conekt Ads'
export const DEFAULT_IMAGE = '/assets/img/hero-street.webp'

export const contact = {
  email: 'hello@conektads.com',
  phone: '+91 88615 96468',
  phoneHref: 'tel:+918861596468',
  altPhone: '+91 97318 65049',
  altPhoneHref: 'tel:+919731865049',
  whatsapp: 'https://wa.me/918861596468',
  address: 'JP Nagar, Bengaluru, India',
}

export const pages = {
  '/': {
    label: 'Home',
    title: 'Conekt Ads | Outdoor Advertising Agency in India',
    description:
      'Conekt Ads plans and executes OOH, DOOH, auto, bus, cab, mobile LED and print campaigns across India with verified inventory and reporting.',
    image: DEFAULT_IMAGE,
  },
  '/services': {
    label: 'Services',
    title: 'OOH, DOOH, Auto, Bus & Cab Advertising Services | Conekt Ads',
    description:
      'Explore outdoor advertising services from Conekt Ads, including hoardings, DOOH screens, auto branding, bus branding, cab wraps, mobile LED vehicles and newspaper jackets.',
    image: '/assets/img/svc-ooh.webp',
  },
  '/work': {
    label: 'Work',
    title: 'Outdoor Advertising Case Studies & Campaign Work | Conekt Ads',
    description:
      'See Conekt Ads campaign work across OOH, DOOH, auto, bus, cab and mobile LED formats, with measurable reach, impressions and city-wide brand visibility.',
    image: '/assets/img/cs-hero-led.webp',
  },
  '/coverage': {
    label: 'Coverage',
    title: 'Outdoor Advertising Coverage Across India | Conekt Ads',
    description:
      'Conekt Ads offers outdoor advertising coverage across South India, Mumbai, Delhi, Gurgaon and Jaipur with verified media inventory and on-ground execution teams.',
    image: '/assets/img/metro-city.webp',
  },
  '/contact': {
    label: 'Contact',
    title: 'Contact Conekt Ads | Start an Outdoor Advertising Campaign',
    description:
      'Contact Conekt Ads to plan an outdoor advertising campaign across hoardings, DOOH, auto branding, bus branding, cab branding, mobile LED and print media.',
    image: DEFAULT_IMAGE,
  },
}

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path === '/' ? '' : path}`
}
