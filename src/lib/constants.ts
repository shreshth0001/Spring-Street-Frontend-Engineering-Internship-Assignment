export const SITE_NAME = 'Spring Street'
export const SITE_URL  = 'https://springstreet.in'
export const CONTACT_EMAIL = 'contact@springstreet.in'

export const NAV_LINKS = [
  { label: 'Products',  href: '/products' },
  { label: 'Prisma',    href: '/products/prisma' },
  { label: 'FAQ',       href: '/faq' },
  { label: 'Contact',   href: '/contact' },
] as const

export const MARKET_TICKERS = [
  { symbol: 'S&P 500',    value: '5,847.32', change: '+0.82%', up: true  },
  { symbol: 'NASDAQ',     value: '18,621.45', change: '+1.14%', up: true  },
  { symbol: 'MSCI World', value: '3,412.68',  change: '+0.53%', up: true  },
  { symbol: 'USD/INR',    value: '83.42',     change: '-0.12%', up: false },
  { symbol: 'Gold',       value: '$2,341',    change: '+0.24%', up: true  },
  { symbol: 'Nikkei 225', value: '38,240',    change: '+0.67%', up: true  },
  { symbol: 'FTSE 100',   value: '8,142',     change: '-0.31%', up: false },
  { symbol: 'DAX',        value: '18,088',    change: '+0.45%', up: true  },
] as const
