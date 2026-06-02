'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Download, TrendingUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, ReferenceLine,
} from 'recharts'
import { useReveal } from '@/hooks/useReveal'

/* ── performance data ── */
const PERF = [
  { d:'Jan 20', p:100,  s:100,  n:100  },
  { d:'Apr 20', p:88,   s:85,   n:82   },
  { d:'Jul 20', p:108,  s:112,  n:104  },
  { d:'Oct 20', p:118,  s:120,  n:112  },
  { d:'Jan 21', p:128,  s:130,  n:120  },
  { d:'Apr 21', p:137,  s:135,  n:127  },
  { d:'Jul 21', p:145,  s:140,  n:131  },
  { d:'Oct 21', p:152,  s:148,  n:136  },
  { d:'Jan 22', p:140,  s:132,  n:122  },
  { d:'Apr 22', p:133,  s:126,  n:118  },
  { d:'Jul 22', p:128,  s:122,  n:115  },
  { d:'Oct 22', p:136,  s:128,  n:120  },
  { d:'Jan 23', p:148,  s:140,  n:128  },
  { d:'Apr 23', p:156,  s:148,  n:135  },
  { d:'Jul 23', p:165,  s:158,  n:142  },
  { d:'Oct 23', p:160,  s:152,  n:138  },
  { d:'Jan 24', p:175,  s:168,  n:150  },
  { d:'Apr 24', p:183,  s:175,  n:157  },
  { d:'Jul 24', p:190,  s:180,  n:162  },
  { d:'Oct 24', p:195,  s:185,  n:167  },
  { d:'Jan 25', p:200,  s:190,  n:172  },
  { d:'Apr 25', p:198,  s:188,  n:170  },
]

const ALLOCATION = [
  { region:'US Equities',   weight:38, color:'#2E6DB4' },
  { region:'Europe Dev.',   weight:18, color:'#5B9BD5' },
  { region:'Asia Pacific',  weight:16, color:'#C8A951' },
  { region:'Emerging Mkts', weight:14, color:'#8BB8D4' },
  { region:'Japan',         weight: 8, color:'#EDE0C4' },
  { region:'Others',        weight: 6, color:'#4B6A8A' },
]

const HOLDINGS = [
  { name:'iShares Core MSCI World ETF',    ticker:'IWDA', weight:'22%', region:'Global',     er:'0.20%' },
  { name:'Vanguard S&P 500 ETF',           ticker:'VOO',  weight:'18%', region:'US',         er:'0.03%' },
  { name:'iShares MSCI EM ETF',            ticker:'EEM',  weight:'12%', region:'EM',         er:'0.68%' },
  { name:'Invesco QQQ Trust',              ticker:'QQQ',  weight:'10%', region:'US Tech',    er:'0.20%' },
  { name:'Vanguard FTSE Europe ETF',       ticker:'VGK',  weight:'10%', region:'Europe',     er:'0.08%' },
  { name:'iShares MSCI Japan ETF',         ticker:'EWJ',  weight:' 8%', region:'Japan',      er:'0.50%' },
  { name:'Schwab International Equity',   ticker:'SCHF', weight:'12%', region:'Intl Dev.',  er:'0.06%' },
  { name:'SPDR Gold MiniShares',           ticker:'GLDM', weight:' 8%', region:'Commodity',  er:'0.10%' },
]

const METRICS = [
  { label:'5yr CAGR',    value:'14.2%', positive:true  },
  { label:'Sharpe Ratio',value:'1.47',  },
  { label:'Max Drawdown',value:'-18.4%',negative:true  },
  { label:'Volatility',  value:'11.8%', },
  { label:'Beta (S&P)',  value:'0.82',  },
  { label:'Expense',     value:'0.18%', },
  { label:'Holdings',    value:'8 ETFs',},
  { label:'Rebalance',   value:'Qtrly', },
]

const METHODOLOGY = [
  { step:'01', title:'Universe Screening',     body:'800+ globally listed ETFs filtered by AUM (>$1B), expense ratio (<0.5%), tracking error, and SEBI/FEMA regulatory eligibility.' },
  { step:'02', title:'Factor Selection',       body:'Five academically robust factors: Market, Value, Quality, Momentum, and Low Volatility. Each sized by historical Sharpe contribution.' },
  { step:'03', title:'Regional Diversification',body:'Weights across US, Europe, Asia-Pacific, and EM determined by GDP-adjusted free-float market cap. Single-market cap: 40%.' },
  { step:'04', title:'Systematic Rebalancing', body:'Quarterly threshold-trigger: positions drifting >5% from target are rebalanced, minimising transaction costs while maintaining factor purity.' },
  { step:'05', title:'Risk Management',        body:'Max-drawdown triggers and volatility-adjusted sizing prevent catastrophic losses. 8% GLDM allocation provides a structural hedge.' },
]

const TABS = ['performance','holdings','methodology','fees'] as const
type Tab = typeof TABS[number]

function Tooltip2({ active, payload, label }: { active?: boolean; payload?: Array<{name: string; value: number; color: string}>; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background:'rgba(8,15,24,0.96)', border:'1px solid rgba(255,255,255,0.1)', padding:'0.75rem 1rem', borderRadius:'2px' }}>
      <p style={{ fontSize:'0.7rem', color:'rgba(247,245,240,0.35)', marginBottom:'0.5rem', fontFamily:'var(--font-mono)' }}>{label}</p>
      {payload.map(p => (
        <p key={p.name} style={{ fontFamily:'var(--font-mono)', fontSize:'0.8rem', color:p.color, margin:'0.15rem 0' }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  )
}

export default function PrismaPage() {
  const [tab, setTab] = useState<Tab>('performance')
  const metricsRef = useReveal()
  const tabRef     = useReveal()

  return (
    <main style={{ background:'var(--navy)' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ paddingTop:'clamp(7rem,14vw,11rem)', paddingBottom:'clamp(2rem,4vw,4rem)', padding:'clamp(7rem,14vw,11rem) clamp(1.25rem,4vw,2.5rem) clamp(2rem,4vw,4rem)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap:'clamp(2rem,4vw,3.5rem)', alignItems:'start' }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.75rem', opacity:0, animation:'fadeUp 0.6s 0.1s var(--ease-out-expo) forwards' }}>
                <span style={{ display:'block', width:'36px', height:'1px', background:'var(--gold)' }} />
                <span className="tag tag-gold">Flagship Product</span>
              </div>

              <div style={{ display:'flex', gap:'1.5rem', alignItems:'center', marginBottom:'1.5rem', opacity:0, animation:'fadeUp 0.7s 0.25s var(--ease-out-expo) forwards' }}>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <polygon points="28,5 51,47 5,47" stroke="#5B9BD5" strokeWidth="1.5" fill="rgba(46,109,180,0.18)"/>
                  <polygon points="28,16 42,41 14,41" stroke="rgba(200,169,81,0.4)" strokeWidth="1" fill="none"/>
                  <polygon points="28,27 35,37 21,37" stroke="rgba(200,169,81,0.2)" strokeWidth="0.75" fill="rgba(200,169,81,0.06)"/>
                </svg>
                <div>
                  <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(3rem,6vw,5.5rem)', fontWeight:300, color:'var(--paper)', lineHeight:1, letterSpacing:'-0.02em' }}>
                    Prisma
                  </h1>
                  <p style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'1.05rem', color:'var(--sky)', marginTop:'0.25rem' }}>
                    Global Growth Portfolio
                  </p>
                </div>
              </div>

              <p style={{ fontSize:'clamp(0.9rem,1.3vw,1.05rem)', color:'rgba(247,245,240,0.52)', maxWidth:'540px', lineHeight:'1.85', marginBottom:'2.25rem', opacity:0, animation:'fadeUp 0.7s 0.4s var(--ease-out-expo) forwards' }}>
                A factor-driven, globally diversified equity portfolio spanning 12+ markets through 8 best-in-class ETFs. Built for compounding over decades with institutional-grade risk management.
              </p>

              <div style={{ display:'flex', gap:'0.875rem', flexWrap:'wrap', opacity:0, animation:'fadeUp 0.7s 0.55s var(--ease-out-expo) forwards' }}>
                <button className="btn-gold">Start Investing <ArrowUpRight size={13} /></button>
                <button className="btn-outline"><Download size={13} /> Download Factsheet</button>
              </div>
            </div>

            {/* Quick stats card */}
            <div className="glass" style={{ padding:'1.75rem', minWidth:'220px', opacity:0, animation:'fadeIn 0.7s 0.7s ease forwards' }}>
              <p className="label-muted" style={{ marginBottom:'1.25rem' }}>At a Glance</p>
              {[
                ['5yr Return',    '+98.2%', true ],
                ['1yr Return',    '+14.2%', true ],
                ['Min. SIP',      '₹5,000', null ],
                ['Mgmt. Fee',     '0.75% p.a.', null],
              ].map(([k,v,pos]) => (
                <div key={String(k)} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingBlock:'0.65rem', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize:'0.78rem', color:'rgba(247,245,240,0.42)' }}>{k}</span>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.875rem', color: pos===true ? '#4ADE80' : 'var(--paper)' }}>{v}</span>
                </div>
              ))}
              <p style={{ fontSize:'0.62rem', color:'rgba(247,245,240,0.18)', marginTop:'0.875rem', lineHeight:'1.5' }}>
                As of Apr 2025. Past performance is not a guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics strip ── */}
      <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)', borderBottom:'1px solid rgba(255,255,255,0.06)', background:'rgba(6,12,20,0.55)' }} ref={metricsRef}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(120px, 1fr))' }}>
            {METRICS.map((m,i) => (
              <div key={i} className="reveal" style={{ padding:'1.25rem 1.25rem', borderRight:'1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'clamp(1.1rem,1.8vw,1.4rem)', color: m.positive?'#4ADE80':m.negative?'#F87171':'var(--paper)', fontWeight:300, lineHeight:1, marginBottom:'0.3rem' }}>
                  {m.value}
                </div>
                <div style={{ fontSize:'0.65rem', color:'rgba(247,245,240,0.35)', letterSpacing:'0.1em', textTransform:'uppercase' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <section style={{ padding:'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2.5rem)' }} ref={tabRef}>
        <div className="container">
          {/* Tab bar */}
          <div style={{ display:'flex', gap:0, borderBottom:'1px solid rgba(255,255,255,0.07)', marginBottom:'clamp(2rem,4vw,3.5rem)', overflowX:'auto', WebkitOverflowScrolling:'touch' }}>
            {TABS.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding:'0.875rem clamp(1rem,2vw,1.75rem)',
                background:'none', border:'none',
                borderBottom: tab===t ? '2px solid var(--gold)' : '2px solid transparent',
                color: tab===t ? 'var(--paper)' : 'rgba(247,245,240,0.38)',
                fontSize:'0.73rem', letterSpacing:'0.12em', textTransform:'uppercase',
                cursor:'pointer', transition:'color 0.2s ease',
                fontFamily:'var(--font-body)', whiteSpace:'nowrap', fontWeight: tab===t ? 500 : 400,
              }}>
                {t}
              </button>
            ))}
          </div>

          {/* ── Performance ── */}
          {tab === 'performance' && (
            <div className="reveal">
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1.75rem', flexWrap:'wrap', gap:'1rem' }}>
                <div>
                  <h2 className="display-sm" style={{ color:'var(--paper)', marginBottom:'0.35rem' }}>Cumulative Performance</h2>
                  <p style={{ fontSize:'0.78rem', color:'rgba(247,245,240,0.38)' }}>Indexed to 100 · Jan 2020 – Apr 2025 · Simulated data</p>
                </div>
                <div style={{ display:'flex', gap:'1.75rem', flexWrap:'wrap' }}>
                  {[{l:'Prisma',color:'#C8A951'},{l:'S&P 500',color:'#5B9BD5'},{l:'Nifty 50',color:'rgba(247,245,240,0.3)'}].map(item => (
                    <div key={item.l} style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
                      <div style={{ width:'20px', height:'2px', background:item.color }} />
                      <span style={{ fontSize:'0.72rem', color:'rgba(247,245,240,0.5)' }}>{item.l}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass" style={{ padding:'1.5rem', height:'380px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={PERF} margin={{ top:5, right:10, bottom:5, left:0 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.035)" strokeDasharray="4 4" />
                    <XAxis dataKey="d" tick={{ fill:'rgba(247,245,240,0.3)', fontSize:10, fontFamily:'var(--font-mono)' }} axisLine={false} tickLine={false} interval={3} />
                    <YAxis tick={{ fill:'rgba(247,245,240,0.3)', fontSize:10, fontFamily:'var(--font-mono)' }} axisLine={false} tickLine={false} domain={[75,215]} tickFormatter={v=>`${v}`} />
                    <Tooltip content={<Tooltip2 />} />
                    <ReferenceLine y={100} stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <Line type="monotone" dataKey="p" stroke="#C8A951" strokeWidth={2.5} dot={false} name="Prisma" activeDot={{ r:4, fill:'#C8A951' }} />
                    <Line type="monotone" dataKey="s" stroke="#5B9BD5" strokeWidth={1.5} dot={false} strokeDasharray="6 3" name="S&P 500" activeDot={{ r:3, fill:'#5B9BD5' }} />
                    <Line type="monotone" dataKey="n" stroke="rgba(247,245,240,0.28)" strokeWidth={1.5} dot={false} strokeDasharray="3 3" name="Nifty 50" activeDot={{ r:3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Annual returns table */}
              <div style={{ marginTop:'2rem', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(100px,1fr))', gap:'1px', background:'rgba(255,255,255,0.05)' }}>
                {[['2020','21.4%',true],['2021','22.8%',true],['2022','-8.6%',false],['2023','18.3%',true],['2024','14.2%',true]].map(([yr,ret,up]) => (
                  <div key={String(yr)} className="glass" style={{ padding:'1.25rem', textAlign:'center' }}>
                    <p style={{ fontSize:'0.68rem', color:'rgba(247,245,240,0.3)', letterSpacing:'0.1em', marginBottom:'0.4rem' }}>{yr}</p>
                    <p style={{ fontFamily:'var(--font-mono)', fontSize:'1.05rem', color: up ? '#4ADE80' : '#F87171' }}>{ret}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize:'0.65rem', color:'rgba(247,245,240,0.18)', marginTop:'1rem' }}>
                Simulated past performance. Actual returns may differ. Not investment advice.
              </p>
            </div>
          )}

          {/* ── Holdings ── */}
          {tab === 'holdings' && (
            <div className="reveal" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap:'clamp(2rem,4vw,4rem)', alignItems:'start' }}>
              <div>
                <h2 className="display-sm" style={{ color:'var(--paper)', marginBottom:'0.35rem' }}>Regional Allocation</h2>
                <p style={{ fontSize:'0.78rem', color:'rgba(247,245,240,0.38)', marginBottom:'2rem' }}>As of Apr 2025</p>
                {ALLOCATION.map((a,i) => (
                  <div key={i} style={{ marginBottom:'1.1rem' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.4rem' }}>
                      <span style={{ fontSize:'0.83rem', color:'rgba(247,245,240,0.62)' }}>{a.region}</span>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.83rem', color:'var(--paper)' }}>{a.weight}%</span>
                    </div>
                    <div style={{ height:'3px', background:'rgba(255,255,255,0.06)' }}>
                      <div style={{ width:`${a.weight}%`, height:'100%', background:a.color, transition:'width 1s var(--ease-out-expo)' }} />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="display-sm" style={{ color:'var(--paper)', marginBottom:'0.35rem' }}>Holdings</h2>
                <p style={{ fontSize:'0.78rem', color:'rgba(247,245,240,0.38)', marginBottom:'1.5rem' }}>8 exchange-listed ETFs</p>
                <div className="glass" style={{ overflowX:'auto' }}>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Fund</th>
                        <th>Ticker</th>
                        <th>Region</th>
                        <th>Weight</th>
                        <th>ER</th>
                      </tr>
                    </thead>
                    <tbody>
                      {HOLDINGS.map((h,i) => (
                        <tr key={i}>
                          <td style={{ fontSize:'0.78rem', maxWidth:'180px', color:'var(--paper)' }}>{h.name}</td>
                          <td><span className="tag tag-blue">{h.ticker}</span></td>
                          <td style={{ fontSize:'0.78rem', color:'rgba(247,245,240,0.42)' }}>{h.region}</td>
                          <td style={{ fontFamily:'var(--font-mono)', fontSize:'0.83rem', color:'var(--gold)' }}>{h.weight}</td>
                          <td style={{ fontFamily:'var(--font-mono)', fontSize:'0.78rem', color:'rgba(247,245,240,0.42)' }}>{h.er}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── Methodology ── */}
          {tab === 'methodology' && (
            <div className="reveal" style={{ maxWidth:'680px' }}>
              <h2 className="display-sm" style={{ color:'var(--paper)', marginBottom:'0.5rem' }}>How Prisma is built</h2>
              <p style={{ fontSize:'0.85rem', color:'rgba(247,245,240,0.42)', marginBottom:'3rem', lineHeight:'1.7' }}>
                A rigorous five-stage construction process ensures every rupee is deployed with purpose.
              </p>
              {METHODOLOGY.map((s,i) => (
                <div key={i} style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'2rem', marginBottom:'2.5rem', paddingBottom:'2.5rem', borderBottom: i < METHODOLOGY.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem' }}>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--gold)', letterSpacing:'0.1em' }}>{s.step}</span>
                    {i < METHODOLOGY.length-1 && <div style={{ width:'1px', flex:1, background:'rgba(200,169,81,0.15)', minHeight:'40px' }} />}
                  </div>
                  <div>
                    <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.25rem', fontWeight:400, color:'var(--paper)', marginBottom:'0.6rem' }}>{s.title}</h3>
                    <p style={{ fontSize:'0.875rem', color:'rgba(247,245,240,0.52)', lineHeight:'1.85' }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Fees ── */}
          {tab === 'fees' && (
            <div className="reveal" style={{ maxWidth:'560px' }}>
              <h2 className="display-sm" style={{ color:'var(--paper)', marginBottom:'0.5rem' }}>Simple, transparent pricing</h2>
              <p style={{ fontSize:'0.85rem', color:'rgba(247,245,240,0.42)', marginBottom:'2.5rem' }}>No hidden charges. No performance fees. No entry loads.</p>

              <div className="glass-gold" style={{ padding:'1.75rem', marginBottom:'1.5rem' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.75rem' }}>
                  <span style={{ fontFamily:'var(--font-display)', fontSize:'1.1rem', color:'var(--paper)' }}>Advisory Fee</span>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:'2rem', color:'var(--gold)', fontWeight:300 }}>0.75%</span>
                </div>
                <p style={{ fontSize:'0.82rem', color:'rgba(247,245,240,0.42)', lineHeight:'1.7' }}>
                  Charged annually on AUM. Billed quarterly. Includes portfolio management, rebalancing, and advisor access.
                </p>
              </div>

              {[
                ['Avg. ETF Expense Ratio', '0.18% p.a.'],
                ['FX / LRS Conversion',   '~0.5% per remittance'],
                ['Brokerage',             'At-cost passthrough'],
                ['Account Opening',       'Free'],
                ['Exit Load < 1yr',       '0.5%'],
                ['Exit Load > 1yr',       'Nil'],
              ].map(([k,v]) => (
                <div key={String(k)} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingBlock:'0.85rem', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize:'0.85rem', color:'rgba(247,245,240,0.52)' }}>{k}</span>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.85rem', color:'var(--paper)' }}>{v}</span>
                </div>
              ))}

              <div className="glass" style={{ padding:'1.5rem', marginTop:'2rem' }}>
                <div style={{ display:'flex', gap:'0.75rem', alignItems:'flex-start' }}>
                  <TrendingUp size={16} color="var(--gold)" style={{ marginTop:'0.15rem', flexShrink:0 }} />
                  <div>
                    <p style={{ fontSize:'0.82rem', color:'rgba(247,245,240,0.6)', lineHeight:'1.7' }}>
                      <strong style={{ color:'var(--paper)' }}>Total cost:</strong> ~0.93–1.25% p.a. all-in — significantly lower than actively managed funds (1.5–2.5% p.a.) with better global diversification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-sm" style={{ background:'rgba(6,12,20,0.6)', borderTop:'1px solid rgba(255,255,255,0.05)', textAlign:'center' }}>
        <div style={{ maxWidth:'520px', margin:'0 auto', padding:'0 clamp(1.25rem,4vw,2.5rem)' }}>
          <h2 className="display-sm" style={{ color:'var(--paper)', marginBottom:'0.875rem' }}>Start with Prisma today</h2>
          <p style={{ color:'rgba(247,245,240,0.45)', lineHeight:'1.75', marginBottom:'2.25rem', fontSize:'0.9rem' }}>
            SIP from ₹5,000/month. Open your account in minutes.
          </p>
          <div style={{ display:'flex', gap:'0.875rem', justifyContent:'center', flexWrap:'wrap' }}>
            <button className="btn-gold">Open Account <ArrowUpRight size={13} /></button>
            <Link href="/contact" className="btn-outline">Schedule a Call</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
