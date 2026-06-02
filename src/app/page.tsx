'use client'
import Link from 'next/link'
import { ArrowUpRight, TrendingUp, Shield, Globe, BarChart3 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MarketTicker from '@/components/MarketTicker'
import { useReveal } from '@/hooks/useReveal'

const STATS = [
  { value: '$2.1T+', label: 'Markets Accessible' },
  { value: '12+',    label: 'Global Markets' },
  { value: '14.2%',  label: 'Prisma 5yr CAGR' },
  { value: '₹5,000', label: 'Min. SIP Amount' },
]

const THESIS = [
  {
    num: '01',
    title: 'The Indian investor has been underserved.',
    body: 'For decades, resident Indians had limited access to global markets. Complex LRS rules, opaque products, and high minimums kept institutional-grade opportunities out of reach.',
  },
  {
    num: '02',
    title: 'Geography is no longer destiny.',
    body: "The world's fastest-growing companies and most resilient asset classes exist outside India. Spring Street builds the infrastructure to access them — simply, reliably, at scale.",
  },
  {
    num: '03',
    title: 'Quantitative rigour, human conviction.',
    body: 'Our portfolios are built on deep factor research, systematic rebalancing, and institutional risk management — not hunches or headlines. Every allocation has a reason.',
  },
]

const WHY = [
  { icon: Globe,      title: 'Global Access',          body: 'Invest across 12+ markets via institutional-grade ETFs — US, Europe, Japan, EM and beyond.' },
  { icon: BarChart3,  title: 'Factor Research',         body: 'Every portfolio backed by quantitative models and peer-reviewed academic research.' },
  { icon: TrendingUp, title: 'Systematic Rebalancing',  body: 'Rules-based, emotionless portfolio management. No market timing, just disciplined allocation.' },
  { icon: Shield,     title: 'LRS Compliant',           body: 'Full Liberalised Remittance Scheme compliance built into our infrastructure. Legal, seamless.' },
]

const PARTNERS = ['BlackRock', 'Vanguard', 'Invesco', 'iShares', 'Dimensional', 'PIMCO']

export default function HomePage() {
  const thesisRef  = useReveal()
  const whyRef     = useReveal()
  const productRef = useReveal()
  const partnerRef = useReveal()

  return (
    <main style={{ background: 'var(--navy)' }}>
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section style={{
        minHeight: '100dvh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '0 clamp(1.25rem,4vw,2.5rem) clamp(3.5rem,6vw,5.5rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Concentric rings */}
        {[900, 650, 420].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%', right: i === 0 ? '-15%' : i === 1 ? '-8%' : '-2%',
            width: size, height: size,
            transform: 'translateY(-50%)',
            borderRadius: '50%',
            border: `1px solid rgba(${i === 0 ? '46,109,180' : i === 1 ? '200,169,81' : '91,155,213'},${0.08 + i * 0.03})`,
            background: i === 0 ? 'radial-gradient(circle at 35% 35%, rgba(46,109,180,0.12), transparent 60%)' : 'none',
            pointerEvents: 'none',
          }} />
        ))}
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 55% 70% at 85% 50%, black 10%, transparent 75%)',
        }} />

        <div className="container" style={{ position: 'relative', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', opacity: 0, animation: 'fadeUp 0.6s 0.15s var(--ease-out-expo) forwards' }}>
            <span style={{ display: 'block', width: '36px', height: '1px', background: 'var(--gold)' }} />
            <span className="label">Global Stage for Indian Capital</span>
          </div>

          <h1 className="display-xl" style={{ color: 'var(--paper)', maxWidth: '880px', marginBottom: '2rem', opacity: 0, animation: 'fadeUp 0.75s 0.3s var(--ease-out-expo) forwards' }}>
            Your wealth<br />
            <em style={{ color: 'var(--sky)', fontStyle: 'italic' }}>deserves</em>{' '}
            the world.
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
            color: 'rgba(247,245,240,0.58)',
            maxWidth: '500px', lineHeight: '1.75', marginBottom: '2.75rem',
            opacity: 0, animation: 'fadeUp 0.75s 0.45s var(--ease-out-expo) forwards',
          }}>
            Institutional-grade global investing for resident Indians.
            Access the world&apos;s best markets with the discipline of a sovereign fund.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', opacity: 0, animation: 'fadeUp 0.75s 0.6s var(--ease-out-expo) forwards' }}>
            <Link href="/products" className="btn-gold">
              Explore Products <ArrowUpRight size={13} />
            </Link>
            <Link href="/products/prisma" className="btn-outline">
              View Prisma
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            marginTop: 'clamp(3.5rem,7vw,6rem)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: 'clamp(2rem,4vw,3rem)',
            opacity: 0, animation: 'fadeUp 0.8s 0.8s var(--ease-out-expo) forwards',
          }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-card" style={{ paddingBlock: '0.5rem', paddingRight: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: 'var(--paper)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(247,245,240,0.38)', marginTop: '0.4rem', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TICKER ════════════════════════════════════════════════════════ */}
      <MarketTicker />

      {/* ══ THESIS ════════════════════════════════════════════════════════ */}
      <section className="section" ref={thesisRef}>
        <div className="container">
          {/* FIX: use responsive-grid CSS class instead of hardcoded 1fr 2fr */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(2rem,6vw,7rem)', alignItems: 'start' }}>
            <div className="reveal">
              <span style={{ display: 'block', width: '36px', height: '1px', background: 'var(--gold)', marginBottom: '1.5rem' }} />
              <h2 className="display-md" style={{ color: 'var(--paper)', lineHeight: '1.1' }}>
                Our<br /><em style={{ fontStyle: 'italic', color: 'var(--sky)' }}>thesis</em>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem,3vw,3rem)' }}>
              {THESIS.map((t, i) => (
                <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.75rem', alignItems: 'start', paddingBottom: 'clamp(2rem,3vw,3rem)', borderBottom: i < THESIS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', paddingTop: '0.45rem', letterSpacing: '0.1em' }}>{t.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem,1.8vw,1.5rem)', fontWeight: 400, color: 'var(--paper)', marginBottom: '0.65rem', lineHeight: '1.3' }}>
                      {t.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(247,245,240,0.52)', lineHeight: '1.8' }}>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ margin: '0 clamp(1.25rem,4vw,2.5rem)' }} />

      {/* ══ PRODUCT PREVIEW ═══════════════════════════════════════════════ */}
      <section className="section" ref={productRef}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2.5rem,5vw,4rem)', flexWrap: 'wrap', gap: '1.25rem' }}>
            <div className="reveal">
              <span style={{ display: 'block', width: '36px', height: '1px', background: 'var(--gold)', marginBottom: '1.25rem' }} />
              <h2 className="display-md" style={{ color: 'var(--paper)' }}>Our Products</h2>
            </div>
            <Link href="/products" className="reveal btn-ghost">
              View All <ArrowUpRight size={13} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            <Link href="/products/prisma" style={{ textDecoration: 'none' }}>
              <div className="reveal glass" style={{ padding: 'clamp(1.75rem,3vw,2.75rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%', transition: 'background 0.3s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(46,109,180,0.1)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.035)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', background: 'rgba(46,109,180,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <polygon points="12,2 22,20 2,20" stroke="#5B9BD5" strokeWidth="1.5" fill="rgba(46,109,180,0.3)"/>
                    </svg>
                  </div>
                  <span className="tag tag-gold">Flagship</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 400, color: 'var(--paper)', lineHeight: 1, marginBottom: '0.35rem' }}>Prisma</h3>
                  <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--sky)' }}>Global Growth Portfolio</p>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(247,245,240,0.52)', lineHeight: '1.75', flex: 1 }}>
                  A factor-driven, globally diversified equity portfolio spanning 12+ markets. Built for compounding over decades, not quarters.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  {[['5yr CAGR','14.2%'],['Sharpe','1.47'],['Min. SIP','₹5,000'],['Markets','12+']].map(([k,v]) => (
                    <div key={k}>
                      <p style={{ fontSize: '0.63rem', color: 'rgba(247,245,240,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{k}</p>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--paper)' }}>{v}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
                  View Factsheet <ArrowUpRight size={12} />
                </div>
              </div>
            </Link>

            <div className="reveal glass" style={{ padding: 'clamp(1.75rem,3vw,2.75rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', minHeight: '380px', textAlign: 'center' }}>
              <div style={{ width: '44px', height: '44px', border: '1px dashed rgba(200,169,81,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'rgba(200,169,81,0.5)', fontSize: '1.2rem', lineHeight: 1 }}>+</span>
              </div>
              <span className="tag tag-muted">Launching Q3 2025</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 400, color: 'rgba(247,245,240,0.3)' }}>Alpha Series</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(247,245,240,0.25)', lineHeight: '1.7', maxWidth: '260px' }}>
                Concentrated, high-conviction global equity portfolios for sophisticated investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY US ════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'rgba(6,12,20,0.45)' }} ref={whyRef}>
        <div className="container">
          <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <div className="reveal">
              <span style={{ display: 'block', width: '36px', height: '1px', background: 'var(--gold)', marginBottom: '1.25rem' }} />
              <h2 className="display-md" style={{ color: 'var(--paper)', maxWidth: '460px' }}>
                Built different,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--sky)' }}>by design.</em>
              </h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {WHY.map(({ icon: Icon, title, body }, i) => (
              <div key={i} className="reveal glass" style={{ padding: 'clamp(1.75rem,3vw,2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(46,109,180,0.12)', border: '1px solid rgba(46,109,180,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} color="var(--sky)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--paper)' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(247,245,240,0.48)', lineHeight: '1.75' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARTNERS ══════════════════════════════════════════════════════ */}
      <section className="section-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }} ref={partnerRef}>
        <div className="container">
          <p className="reveal label-muted" style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            Powered by world-class fund managers
          </p>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem 4rem' }}>
            {PARTNERS.map(p => (
              <span key={p} style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'rgba(247,245,240,0.18)', letterSpacing: '0.04em', fontWeight: 500 }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════════════════ */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '560px', height: '560px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(46,109,180,0.1), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '620px', margin: '0 auto', padding: '0 clamp(1.25rem,4vw,2.5rem)' }}>
          <span style={{ display: 'block', width: '36px', height: '1px', background: 'var(--gold)', margin: '0 auto 1.75rem' }} />
          <h2 className="display-lg" style={{ color: 'var(--paper)', marginBottom: '1.25rem' }}>
            Ready to invest<br />
            <em style={{ fontStyle: 'italic', color: 'var(--sky)' }}>globally?</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(247,245,240,0.5)', lineHeight: '1.75', margin: '0 auto 2.75rem', maxWidth: '440px' }}>
            Open your Spring Street account in minutes. Start your global wealth journey with as little as ₹5,000.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-gold">Open Account <ArrowUpRight size={13} /></button>
            <Link href="/contact" className="btn-outline">Talk to an Advisor</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
