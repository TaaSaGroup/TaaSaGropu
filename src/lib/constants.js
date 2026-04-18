export const BRAND_COLORS = {
  deepGreen: '#0B3D2E',
  oliveGreen: '#6B8E23',
  accentGold: '#C9A227',
  cream: '#FAF7F0',
  lightBeige: '#F5F5DC',
}

export const COMPANY_INFO = {
  name: 'TaaSa Rice Processing Company',
  shortName: 'TaaSa',
  phone: '+94 672 222 540',
  whatsapp: '+94 72 051 6432',
  whatsappClean: '94720516432',
  email: 'taasarice@gmail.com',
  officeAddress: 'No.446, Sri Vajiragnana Mawatha, Dematagoda Road, Colombo - 09',
  plantAddress: 'No. 381/3021, Intersection of Chavalakada, Navithanveli - 32308',
  facebook: 'https://web.facebook.com/p/TaaSa-Rice-Processing-Company-Private-Limited-100063943992981',
  defaultMessage: 'Hello TaaSa Rice Processing Company, I would like to inquire about your products.'
}

export const whatsappLink = (message = COMPANY_INFO.defaultMessage) => 
  `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(message)}`

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Gallery', href: '#gallery' },
]

export const QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
]

export const EXPORT_COUNTRIES = ['Middle East', 'South Africa', 'Sri Lanka']
