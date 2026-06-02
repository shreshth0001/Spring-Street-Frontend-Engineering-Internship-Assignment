import Link from 'next/link'
import { NAV_LINKS, CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container section-sm" style={{ padding: '4rem clamp(1.25rem,4vw,2.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem 4rem', marginBottom: '3.5rem' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <rect x="3"  y="21" width="6" height="8"  fill="#2E6DB4"/>
                <rect x="11" y="14" width="6" height="15" fill="#5B9BD5"/>
                <rect x="19" y="7"  width="6" height="22" fill="#C8A951"/>
                <rect x="27" y="2"  width="2" height="27" fill="rgba(247,245,240,0.2)"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--paper)' }}>
                Spring Street
              </span>
            </Link>
            <p style={{ fontSize: '0.825rem', color: 'rgba(247,245,240,0.4)', lineHeight: '1.75', maxWidth: '280px' }}>
              Global stage for Indian capital. Institutional-grade global portfolios for the long-term wealth of resident Indians.
            </p>
            <p style={{ fontSize: '0.68rem', color: 'rgba(247,245,240,0.2)', marginTop: '1.25rem', lineHeight: '1.6' }}>
              SEBI Registered Investment Adviser<br />
              Reg. No. INA000000000
            </p>
          </div>

          {/* Platform */}
          <div>
            <p className="label-muted" style={{ marginBottom: '1.25rem' }}>Platform</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} className="hover-line"
                  style={{ fontSize: '0.85rem', color: 'rgba(247,245,240,0.5)', textDecoration: 'none', width: 'fit-content' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="label-muted" style={{ marginBottom: '1.25rem' }}>Legal</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Privacy Policy', 'Terms of Use', 'Risk Disclosures', 'Grievance Policy'].map(item => (
                <Link key={item} href="#" className="hover-line"
                  style={{ fontSize: '0.85rem', color: 'rgba(247,245,240,0.5)', textDecoration: 'none', width: 'fit-content' }}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="label-muted" style={{ marginBottom: '1.25rem' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover-line"
                style={{ fontSize: '0.85rem', color: 'rgba(247,245,240,0.5)', textDecoration: 'none', width: 'fit-content' }}>
                {CONTACT_EMAIL}
              </a>
              <span style={{ fontSize: '0.85rem', color: 'rgba(247,245,240,0.35)' }}>BKC, Mumbai 400051</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(247,245,240,0.35)' }}>Mon–Fri · 9AM–6PM IST</span>
            </div>
          </div>
        </div>

        <div className="divider-subtle" style={{ marginBottom: '1.5rem' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(247,245,240,0.2)' }}>
            © {new Date().getFullYear()} Spring Street Wealth Pvt. Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: '0.68rem', color: 'rgba(247,245,240,0.15)', maxWidth: '640px', lineHeight: '1.6', textAlign: 'right' }}>
            Investments in securities are subject to market risks. Past performance is not indicative of future results. Please read all documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  )
}
