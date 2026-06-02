'use client'
import Link from 'next/link'
import { ArrowUpRight, Check, Minus } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { useReveal } from '@/hooks/useReveal'

const FEATURES = [
  { num:'01', title:'Institutional Research', body:'Every portfolio backed by deep factor research, peer-reviewed quant models, and ongoing academic literature review.' },
  { num:'02', title:'Systematic Rebalancing', body:'Rules-based, emotionless portfolio management. No market timing. Threshold-trigger rebalancing every quarter.' },
  { num:'03', title:'LRS Infrastructure',     body:'Seamless Liberalised Remittance Scheme compliance built-in. Send money abroad legally, efficiently, at low FX cost.' },
  { num:'04', title:'Tax Efficiency',         body:'Structured to minimise capital gains drag. Currency hedging and tax-lot optimisation on every transaction.' },
]

const CMP = [
  { feature:'Global market access',    ss:true,  mf:false, broker:true  },
  { feature:'Factor-based construction',ss:true, mf:false, broker:false },
  { feature:'Systematic rebalancing',  ss:true,  mf:true,  broker:false },
  { feature:'LRS compliance support',  ss:true,  mf:false, broker:false },
  { feature:'Transparent fees',        ss:true,  mf:false, broker:true  },
  { feature:'Human advisor access',    ss:true,  mf:false, broker:false },
  { feature:'Tax optimisation',        ss:true,  mf:false, broker:false },
]

function Cell({ v }: { v: boolean | null }) {
  if (v === true)  return <Check size={15} color="#4ADE80" />
  if (v === false) return <Minus size={15} color="rgba(247,245,240,0.15)" />
  return <span style={{ color: 'rgba(247,245,240,0.2)', fontSize: '0.8rem' }}>—</span>
}

export default function ProductsPage() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  return (
    <main style={{ background: 'var(--navy)' }}>
      <Navbar />

      {/* Header */}
      <section style={{ paddingTop: 'clamp(7rem,14vw,12rem)', paddingBottom: 'clamp(3rem,5vw,5rem)', padding: 'clamp(7rem,14vw,12rem) clamp(1.25rem,4vw,2.5rem) clamp(3rem,5vw,5rem)' }}>
        <div className="container">
          <div style={{ opacity:0, animation:'fadeUp 0.6s 0.1s var(--ease-out-expo) forwards', display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <span style={{ display:'block', width:'36px', height:'1px', background:'var(--gold)' }} />
            <span className="label">Our Products</span>
          </div>
          <h1 className="display-lg" style={{ color:'var(--paper)', maxWidth:'680px', marginBottom:'1.5rem', opacity:0, animation:'fadeUp 0.7s 0.25s var(--ease-out-expo) forwards' }}>
            Global portfolios,<br /><em style={{ fontStyle:'italic', color:'var(--sky)' }}>engineered</em> to last.
          </h1>
          <p style={{ fontSize:'clamp(0.95rem,1.3vw,1.1rem)', color:'rgba(247,245,240,0.52)', maxWidth:'520px', lineHeight:'1.8', opacity:0, animation:'fadeUp 0.7s 0.4s var(--ease-out-expo) forwards' }}>
            Research-driven global portfolios for the long-term Indian investor. No noise. No guesswork. Just compounding.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section style={{ padding:'0 clamp(1.25rem,4vw,2.5rem) clamp(4rem,8vw,7rem)' }} ref={r1}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1px', background:'rgba(255,255,255,0.06)' }}>

            {/* ── Prisma ── */}
            <div className="reveal" style={{ background:'var(--navy)', padding:'clamp(1.75rem,3vw,3rem)', display:'flex', flexDirection:'column', gap:'1.5rem', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, right:0, width:'220px', height:'220px', background:'radial-gradient(circle at top right, rgba(46,109,180,0.18), transparent 65%)', pointerEvents:'none' }} />
              <div style={{ position:'relative' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.75rem' }}>
                  <span className="tag tag-gold">Flagship · Live</span>
                  <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#4ADE80', boxShadow:'0 0 8px rgba(74,222,128,0.5)' }} />
                </div>
                <div style={{ display:'flex', gap:'1.25rem', alignItems:'center', marginBottom:'1.25rem' }}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <polygon points="22,4 40,38 4,38" stroke="#5B9BD5" strokeWidth="1.5" fill="rgba(46,109,180,0.2)"/>
                    <polygon points="22,13 33,33 11,33" stroke="rgba(200,169,81,0.35)" strokeWidth="1" fill="none"/>
                  </svg>
                  <div>
                    <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,3.5vw,2.8rem)', fontWeight:300, color:'var(--paper)', lineHeight:1 }}>Prisma</h2>
                    <p style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'0.9rem', color:'var(--sky)', marginTop:'0.2rem' }}>Global Growth Portfolio</p>
                  </div>
                </div>
                <p style={{ fontSize:'0.875rem', color:'rgba(247,245,240,0.52)', lineHeight:'1.8', marginBottom:'2rem' }}>
                  A multi-factor global equity portfolio spanning 12+ markets and 8 best-in-class ETFs. Quarterly systematic rebalancing, full LRS compliance, institutional risk management.
                </p>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'1.25rem', paddingTop:'1.5rem', borderTop:'1px solid rgba(255,255,255,0.06)', marginBottom:'2rem' }}>
                  {[['5yr CAGR','14.2%',true],['Sharpe','1.47',null],['Max DD','-18.4%',false],['Beta','0.82',null],['Min SIP','₹5,000',null],['Expense','0.18%',null]].map(([k,v,pos]) => (
                    <div key={String(k)}>
                      <p style={{ fontSize:'0.63rem', color:'rgba(247,245,240,0.3)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.3rem' }}>{k}</p>
                      <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.95rem', color: pos===true ? '#4ADE80' : pos===false ? '#F87171' : 'var(--paper)' }}>{v}</p>
                    </div>
                  ))}
                </div>
                <Link href="/products/prisma" className="btn-gold" style={{ width:'100%', justifyContent:'center' }}>
                  View Factsheet <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* Alpha Series */}
            <div className="reveal glass" style={{ padding:'clamp(1.75rem,3vw,3rem)', display:'flex', flexDirection:'column', justifyContent:'center', gap:'1.25rem', minHeight:'420px' }}>
              <span className="tag tag-muted" style={{ width:'fit-content' }}>Coming Q3 2025</span>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.75rem,2.5vw,2.4rem)', fontWeight:300, color:'rgba(247,245,240,0.35)' }}>Alpha Series</h2>
              <p style={{ fontFamily:'var(--font-display)', fontStyle:'italic', color:'rgba(91,155,213,0.4)', fontSize:'0.9rem' }}>Concentrated Global Equity</p>
              <p style={{ fontSize:'0.875rem', color:'rgba(247,245,240,0.28)', lineHeight:'1.75', maxWidth:'320px' }}>
                High-conviction, concentrated bets on global secular megatrends. For the investor who wants to take a view with discipline.
              </p>
              <button className="btn-outline" disabled style={{ opacity:0.35, cursor:'not-allowed', width:'fit-content' }}>Notify Me</button>
            </div>

            {/* Anchor */}
            <div className="reveal glass" style={{ padding:'clamp(1.75rem,3vw,3rem)', display:'flex', flexDirection:'column', justifyContent:'center', gap:'1.25rem', minHeight:'420px', opacity:0.6 }}>
              <span className="tag tag-muted" style={{ width:'fit-content' }}>Coming 2026</span>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.75rem,2.5vw,2.4rem)', fontWeight:300, color:'rgba(247,245,240,0.25)' }}>Anchor</h2>
              <p style={{ fontFamily:'var(--font-display)', fontStyle:'italic', color:'rgba(91,155,213,0.3)', fontSize:'0.9rem' }}>Global Fixed Income</p>
              <p style={{ fontSize:'0.875rem', color:'rgba(247,245,240,0.2)', lineHeight:'1.75', maxWidth:'320px' }}>
                Investment-grade sovereign bonds for stability and USD diversification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="section" style={{ background:'rgba(6,12,20,0.5)', borderTop:'1px solid rgba(255,255,255,0.05)' }} ref={r2}>
        <div className="container">
          <div style={{ marginBottom:'clamp(2.5rem,5vw,4rem)' }}>
            <div className="reveal">
              <span style={{ display:'block', width:'36px', height:'1px', background:'var(--gold)', marginBottom:'1.25rem' }} />
              <h2 className="display-md" style={{ color:'var(--paper)' }}>Why Spring Street</h2>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'clamp(2rem,3vw,3rem)' }}>
            {FEATURES.map((f,i) => (
              <div key={i} className="reveal" style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'1.5rem', alignItems:'start' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--gold)', paddingTop:'0.3rem', letterSpacing:'0.1em' }}>{f.num}</span>
                <div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:400, color:'var(--paper)', marginBottom:'0.6rem' }}>{f.title}</h3>
                  <p style={{ fontSize:'0.85rem', color:'rgba(247,245,240,0.48)', lineHeight:'1.8' }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section" ref={r3}>
        <div className="container" style={{ maxWidth:'860px' }}>
          <div className="reveal" style={{ marginBottom:'clamp(2rem,4vw,3.5rem)' }}>
            <h2 className="display-md" style={{ color:'var(--paper)', marginBottom:'0.6rem' }}>How we compare</h2>
            <p style={{ color:'rgba(247,245,240,0.4)', fontSize:'0.875rem' }}>Spring Street vs Mutual Funds vs Direct Brokers</p>
          </div>
          <div className="reveal glass" style={{ overflowX:'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th style={{ color:'var(--gold)' }}>Spring Street</th>
                  <th>Mutual Funds</th>
                  <th>Direct Brokers</th>
                </tr>
              </thead>
              <tbody>
                {CMP.map((row,i) => (
                  <tr key={i}>
                    <td style={{ color:'rgba(247,245,240,0.65)', fontSize:'0.85rem' }}>{row.feature}</td>
                    <td><Cell v={row.ss} /></td>
                    <td><Cell v={row.mf} /></td>
                    <td><Cell v={row.broker} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
