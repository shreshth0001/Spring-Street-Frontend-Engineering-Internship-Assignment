'use client'
import { useState } from 'react'
import { Plus, Minus, ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'

const FAQS = [
  {
    category: 'Getting Started',
    items: [
      { q: 'Who is Spring Street for?',
        a: 'Spring Street is built for resident Indians who want to invest in global markets. Whether you\'re a salaried professional, a business owner, or someone with substantial savings, our platform gives you access to institutional-grade global portfolios that were previously only available to the ultra-wealthy or NRIs.' },
      { q: 'How much do I need to start?',
        a: 'You can start a Systematic Investment Plan (SIP) with as little as ₹5,000/month. For lump-sum investments, the minimum is ₹50,000. There is no maximum, subject to the LRS annual limit of $250,000 per financial year.' },
      { q: 'Is investing abroad legal for resident Indians?',
        a: 'Absolutely. All investments flow through the RBI\'s Liberalised Remittance Scheme (LRS), which allows resident Indians to invest up to $250,000 per financial year abroad. Spring Street handles all LRS paperwork and compliance.' },
      { q: 'Is Spring Street SEBI regulated?',
        a: 'Yes. Spring Street Wealth Pvt. Ltd. is registered with SEBI as a Registered Investment Adviser (RIA). We operate under all applicable SEBI, RBI, and FEMA regulations.' },
    ],
  },
  {
    category: 'Products',
    items: [
      { q: 'What is Prisma?',
        a: 'Prisma is our flagship Global Growth Portfolio — a factor-driven, globally diversified equity portfolio spanning 12+ markets through 8 best-in-class ETFs. Designed for long-term capital appreciation through systematic, research-backed allocation and quarterly rebalancing.' },
      { q: 'How is Prisma different from buying US stocks myself?',
        a: 'Prisma provides exposure to 12+ global markets, not just the US. It applies multi-factor research to select and size ETFs, rebalances systematically, and manages currency and volatility risk. Replicating this independently would require significant expertise, time, and higher transaction costs.' },
      { q: 'How often is Prisma rebalanced?',
        a: 'Prisma follows a quarterly threshold-trigger rebalancing schedule. Any position that drifts more than 5% from its target weight is rebalanced — minimising unnecessary costs while maintaining factor purity.' },
      { q: 'What are the underlying investments?',
        a: 'Prisma invests in 8 globally listed ETFs from providers including iShares (BlackRock), Vanguard, Invesco, and SPDR. These are highly liquid, low-cost instruments listed on major global exchanges. Full holdings are disclosed on the Prisma page.' },
    ],
  },
  {
    category: 'Tax & Compliance',
    items: [
      { q: 'How are my gains taxed in India?',
        a: 'Foreign equity gains are treated as capital gains. Long-term gains (held >24 months) are taxed at 12.5% without indexation. Short-term gains are taxed at your applicable slab rate. Dividend income is taxed as per your income slab. Spring Street provides an annual tax statement.' },
      { q: 'Do I need to file Schedule FA?',
        a: 'Yes. If your foreign assets exceed ₹5 lakh in value, you must disclose them in Schedule FA of your ITR. Spring Street provides detailed statements to facilitate this. We also help with Form A2 for LRS remittances.' },
      { q: 'What is TCS and how does it apply?',
        a: 'Tax Collected at Source (TCS) at 20% applies to LRS remittances above ₹7 lakh per financial year. This is not an additional tax — it is adjustable against your final tax liability or fully refundable. We notify you when approaching this threshold.' },
    ],
  },
  {
    category: 'Operations',
    items: [
      { q: 'How do I withdraw my money?',
        a: 'Withdrawals are processed in 3–5 business days. Funds are liquidated, converted from USD to INR, and credited to your registered Indian bank account. No lock-in period exists, but a 0.5% exit load applies on withdrawals within the first year.' },
      { q: 'What happens to my funds if Spring Street shuts down?',
        a: 'Your funds are held in a segregated custodian account in your name — Spring Street never has direct custody of your assets. In the event of closure, your holdings remain yours and can be transferred or liquidated. This structural protection is non-negotiable.' },
      { q: 'How is my data protected?',
        a: 'We comply with India\'s Digital Personal Data Protection Act, 2023. Your financial data is encrypted at rest and in transit, never sold to third parties, and access is strictly limited to service delivery.' },
    ],
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{ borderBottom:'1px solid rgba(255,255,255,0.055)', cursor:'pointer' }}
    >
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'1.5rem', padding:'1.5rem 0', transition:'padding 0.2s' }}>
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1rem,1.4vw,1.15rem)', fontWeight:400, color: open ? 'var(--paper)' : 'rgba(247,245,240,0.72)', lineHeight:'1.4', flex:1, transition:'color 0.2s' }}>
          {q}
        </h3>
        <div style={{ color: open ? 'var(--gold)' : 'rgba(247,245,240,0.28)', flexShrink:0, marginTop:'0.15rem', transition:'color 0.2s, transform 0.2s', transform: open ? 'rotate(0deg)' : 'rotate(0deg)' }}>
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </div>
      </div>
      <div style={{ overflow:'hidden', maxHeight: open ? '400px' : '0', transition:'max-height 0.35s var(--ease-out-expo)' }}>
        <p style={{ paddingBottom:'1.5rem', fontSize:'0.9rem', color:'rgba(247,245,240,0.52)', lineHeight:'1.85' }}>{a}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState(FAQS[0].category)
  const bodyRef = useReveal()

  return (
    <main style={{ background:'var(--navy)' }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding:'clamp(7rem,14vw,12rem) clamp(1.25rem,4vw,2.5rem) clamp(3rem,5vw,5rem)' }}>
        <div className="container">
          <div style={{ opacity:0, animation:'fadeUp 0.6s 0.1s var(--ease-out-expo) forwards', display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <span style={{ display:'block', width:'36px', height:'1px', background:'var(--gold)' }} />
            <span className="label">FAQ</span>
          </div>
          <h1 className="display-lg" style={{ color:'var(--paper)', maxWidth:'560px', marginBottom:'1.25rem', opacity:0, animation:'fadeUp 0.7s 0.25s var(--ease-out-expo) forwards' }}>
            Questions,<br /><em style={{ fontStyle:'italic', color:'var(--sky)' }}>answered.</em>
          </h1>
          <p style={{ fontSize:'clamp(0.9rem,1.3vw,1.05rem)', color:'rgba(247,245,240,0.48)', maxWidth:'440px', lineHeight:'1.8', opacity:0, animation:'fadeUp 0.7s 0.4s var(--ease-out-expo) forwards' }}>
            Everything you need to know about global investing with Spring Street.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding:'0 clamp(1.25rem,4vw,2.5rem) clamp(5rem,10vw,9rem)' }} ref={bodyRef}>
        <div className="container">
          {/* Mobile: category pills */}
          <div className="hide-desktop" style={{ display:'flex', gap:'0.5rem', marginBottom:'2rem', overflowX:'auto', WebkitOverflowScrolling:'touch', paddingBottom:'0.25rem' }}>
            {FAQS.map(cat => (
              <button key={cat.category} onClick={() => setActiveCat(cat.category)} style={{
                padding:'0.5rem 1rem', background:'none', border: activeCat===cat.category ? '1px solid var(--gold)' : '1px solid rgba(255,255,255,0.12)',
                color: activeCat===cat.category ? 'var(--gold)' : 'rgba(247,245,240,0.45)',
                fontSize:'0.72rem', letterSpacing:'0.08em', cursor:'pointer', fontFamily:'var(--font-body)',
                textTransform:'uppercase', whiteSpace:'nowrap', transition:'all 0.2s',
              }}>{cat.category}</button>
            ))}
          </div>

          <div className='faq-grid' style={{ display:'grid', gap:'clamp(2.5rem,6vw,7rem)', alignItems:'start' }}>
            {/* Desktop sidebar */}
            <div className="hide-mobile" style={{ position:'sticky', top:'5.5rem' }}>
              {FAQS.map(cat => (
                <button key={cat.category} onClick={() => setActiveCat(cat.category)} style={{
                  display:'block', width:'100%', textAlign:'left', background:'none', border:'none',
                  borderLeft: activeCat===cat.category ? '2px solid var(--gold)' : '2px solid transparent',
                  paddingLeft:'0.875rem', marginLeft:'-0.875rem',
                  paddingBlock:'0.55rem',
                  color: activeCat===cat.category ? 'var(--paper)' : 'rgba(247,245,240,0.35)',
                  fontSize:'0.82rem', cursor:'pointer', transition:'color 0.2s, border-color 0.2s',
                  fontFamily:'var(--font-body)', fontWeight: activeCat===cat.category ? 500 : 400,
                }}>
                  {cat.category}
                </button>
              ))}
              <div style={{ marginTop:'2.5rem', paddingTop:'2rem', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontSize:'0.72rem', color:'rgba(247,245,240,0.28)', lineHeight:'1.6', marginBottom:'1rem' }}>
                  Still have a question?
                </p>
                <Link href="/contact" className="btn-ghost" style={{ display:'inline-flex' }}>
                  Contact us <ArrowUpRight size={11} />
                </Link>
              </div>
            </div>

            {/* Questions */}
            <div className="reveal">
              {FAQS.filter(c => c.category === activeCat).map(cat => (
                <div key={cat.category}>
                  <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.35rem', fontWeight:400, color:'var(--paper)', marginBottom:'0.25rem' }}>
                    {cat.category}
                  </h2>
                  <p style={{ fontSize:'0.72rem', color:'rgba(247,245,240,0.3)', marginBottom:'1.75rem' }}>
                    {cat.items.length} questions
                  </p>
                  {cat.items.map((item, i) => (
                    <Item key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:'clamp(3.5rem,6vw,5rem) clamp(1.25rem,4vw,2.5rem)', background:'rgba(6,12,20,0.5)', borderTop:'1px solid rgba(255,255,255,0.05)', textAlign:'center' }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,2.5vw,2.2rem)', fontWeight:400, color:'var(--paper)', marginBottom:'0.75rem' }}>
          Still have questions?
        </h2>
        <p style={{ color:'rgba(247,245,240,0.45)', marginBottom:'2rem', fontSize:'0.9rem' }}>
          Our team responds within 24 hours.
        </p>
        <Link href="/contact" className="btn-gold">Contact Us <ArrowUpRight size={13} /></Link>
      </section>

      <Footer />
    </main>
  )
}
