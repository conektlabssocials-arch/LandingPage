export const imageSizes = {
  '/assets/img/cs-hero-led.webp': { width: 2281, height: 1273 },
  '/assets/img/cs-inorbit.webp': { width: 2264, height: 1244 },
  '/assets/img/cs-king.webp': { width: 1503, height: 1497 },
  '/assets/img/cs-wispr.webp': { width: 2143, height: 960 },
  '/assets/img/cta-street.webp': { width: 2246, height: 1944 },
  '/assets/img/hero-street.webp': { width: 1984, height: 2106 },
  '/assets/img/metro-city.webp': { width: 1884, height: 923 },
  '/assets/img/night-billboard.webp': { width: 1797, height: 1394 },
  '/assets/img/svc-auto.webp': { width: 1486, height: 1614 },
  '/assets/img/svc-bus.webp': { width: 1002, height: 836 },
  '/assets/img/svc-car.webp': { width: 2004, height: 1254 },
  '/assets/img/svc-led.webp': { width: 2091, height: 1302 },
  '/assets/img/svc-ooh.webp': { width: 1872, height: 1832 },
  '/assets/logos/aadityaa.webp': { width: 618, height: 495 },
  '/assets/logos/flow.webp': { width: 693, height: 305 },
  '/assets/logos/hero.webp': { width: 487, height: 432 },
  '/assets/logos/inorbit.webp': { width: 618, height: 326 },
  '/assets/logos/kingfisher.webp': { width: 599, height: 379 },
  '/assets/logos/royalritz.webp': { width: 618, height: 432 },
  '/assets/logos/snitch.webp': { width: 711, height: 242 },
  '/assets/logos/tanishq.webp': { width: 543, height: 421 },
  '/assets/showcase/billboards.webp': { width: 1128, height: 794 },
  '/assets/showcase/billboards1.webp': { width: 1128, height: 762 },
  '/assets/showcase/billboards2.webp': { width: 1426, height: 558 },
  '/assets/showcase/billboards3.webp': { width: 1472, height: 550 },
  '/assets/showcase/billboards4.webp': { width: 1036, height: 768 },
  '/assets/showcase/wisper1.webp': { width: 4608, height: 3072 },
  '/assets/showcase/wispr2.webp': { width: 4608, height: 3072 },
  '/assets/showcase/wispr3.webp': { width: 4608, height: 3072 },
  '/assets/showcase/wisprFlow.webp': { width: 4608, height: 3072 },
}

export function normalizeImageSrc(src = '') {
  if (/^(https?:|data:|blob:)/i.test(src)) return src
  if (src.startsWith('/public/')) return src.replace('/public', '')
  if (src.startsWith('public/')) return `/${src.replace(/^public\//, '')}`
  if (src.startsWith('/')) return src
  return `/${src}`
}

export function getImageSize(src = '') {
  return imageSizes[normalizeImageSrc(src)]
}
