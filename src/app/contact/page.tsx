'use client'
import { useState } from 'react'
import { ArrowUpRight, Mail, Phone, MapPin, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CONTACT_EMAIL } from '@/lib/constants'
import { useReveal } from '@/hooks/useReveal'

type FormState = { name:string; email:string; phone:string; topic:string; message:string }
type Errors = Partial<Record<keyof FormState, string>>

function validate(f: FormState): Errors {
  const e: Errors = {}
  if (!f.name.trim())                           e.name    = 'Name is required'
  if (!f.email.trim())                          e.email   = 'Email is required'
  else if (!/\S+@\S+\.\S+/.test(f.email))      e.email   = 'Enter a valid email'
  if (!f.topic)                                 e.topic   = 'Please select a topic'
  if (!f.message.trim())                        e.message = 'Message is required'
  return e
}

export default function ContactPage() {
  const [form, setForm]   = useState<FormState>({ name:'', email:'', phone:'', topic:'', message:'' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const bodyRef = useReveal()

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [key]: e.target.value }))
    setErrors(err => ({ ...err, [key]: undefined }))
  }

  const handleSubmit = () => {
    const e = validate(form)
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  const inputStyle = (key: keyof FormState) => ({
    width:'100%', background:'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[key] ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.1)'}`,
    padding:'0.8rem 1rem', color:'var(--paper)', fontFamily:'var(--font-body)',
    fontSize:'0.9rem', outline:'none', transition:'border-color 0.2s ease',
    WebkitAppearance:'none' as const,
  })

  return (
    <main style={{ background:'var(--navy)' }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding:'clamp(7rem,14vw,12rem) clamp(1.25rem,4vw,2.5rem) clamp(3rem,5vw,5rem)' }}>
        <div className="container">
          <div style={{ opacity:0, animation:'fadeUp 0.6s 0.1s var(--ease-out-expo) forwards', display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <span style={{ display:'block', width:'36px', height:'1px', background:'var(--gold)' }} />
            <span className="label">Contact</span>
          </div>
          <h1 className="display-lg" style={{ color:'var(--paper)', maxWidth:'520px', marginBottom:'1.25rem', opacity:0, animation:'fadeUp 0.7s 0.25s var(--ease-out-expo) forwards' }}>
            Let&apos;s talk<br /><em style={{ fontStyle:'italic', color:'var(--sky)' }}>wealth.</em>
          </h1>
          <p style={{ fontSize:'clamp(0.9rem,1.3vw,1.05rem)', color:'rgba(247,245,240,0.48)', maxWidth:'440px', lineHeight:'1.8', opacity:0, animation:'fadeUp 0.7s 0.4s var(--ease-out-expo) forwards' }}>
            Questions about our products, help with your account, or just want to explore — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding:'0 clamp(1.25rem,4vw,2.5rem) clamp(5rem,10vw,9rem)' }} ref={bodyRef}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap:'clamp(2.5rem,5vw,6rem)', alignItems:'start' }}>

          {/* Left */}
          <div className="reveal">
            <div className="glass" style={{ padding:'2rem', marginBottom:'2rem' }}>
              <p className="label-muted" style={{ marginBottom:'1.5rem' }}>Reach us directly</p>
              {[
                { Icon:Mail,    label:'Email',  value:CONTACT_EMAIL,       sub:'Replies within 24 hours' },
                { Icon:Phone,   label:'Phone',  value:'+91 22 6900 0000',  sub:'Mon–Fri · 9AM–6PM IST' },
                { Icon:MapPin,  label:'Office', value:'BKC, Mumbai 400051',sub:'By appointment only' },
              ].map(({ Icon, label, value, sub }, i) => (
                <div key={i} style={{ display:'flex', gap:'1.25rem', alignItems:'flex-start', marginBottom: i < 2 ? '1.5rem' : 0 }}>
                  <div style={{ width:'34px', height:'34px', background:'rgba(46,109,180,0.12)', border:'1px solid rgba(46,109,180,0.18)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Icon size={14} color="var(--sky)" />
                  </div>
                  <div>
                    <p className="label-muted" style={{ marginBottom:'0.2rem' }}>{label}</p>
                    <p style={{ fontSize:'0.875rem', color:'var(--paper)' }}>{value}</p>
                    <p style={{ fontSize:'0.75rem', color:'rgba(247,245,240,0.32)' }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="label-muted" style={{ marginBottom:'1rem' }}>Schedule a call for</p>
              {['Portfolio review & onboarding','Understanding LRS & taxes','Product deep-dives','Existing account support'].map((item,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.65rem' }}>
                  <div style={{ width:'16px', height:'16px', border:'1px solid rgba(200,169,81,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <ArrowUpRight size={9} color="var(--gold)" />
                  </div>
                  <span style={{ fontSize:'0.85rem', color:'rgba(247,245,240,0.52)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form or Success */}
          {submitted ? (
            <div className="reveal glass" style={{ padding:'clamp(2rem,4vw,3.5rem)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'1.5rem', textAlign:'center', minHeight:'360px' }}>
              <div style={{ width:'52px', height:'52px', background:'rgba(74,222,128,0.1)', border:'1px solid rgba(74,222,128,0.25)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Check size={22} color="#4ADE80" />
              </div>
              <div>
                <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.75rem', fontWeight:400, color:'var(--paper)', marginBottom:'0.75rem' }}>
                  Message received
                </h2>
                <p style={{ color:'rgba(247,245,240,0.48)', lineHeight:'1.75', fontSize:'0.9rem' }}>
                  Thank you, {form.name}. We&apos;ll reply to <span style={{ color:'var(--paper)' }}>{form.email}</span> within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <div className="reveal glass" style={{ padding:'clamp(1.75rem,3vw,2.75rem)' }}>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:400, color:'var(--paper)', marginBottom:'2rem' }}>
                Send us a message
              </h2>

              <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                {/* Name + Email */}
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap:'1rem' }}>
                  {([['name','Full Name','Arjun Mehta','text'],['email','Email','arjun@company.com','email']] as const).map(([key, label, placeholder, type]) => (
                    <div key={key}>
                      <label style={{ display:'block', fontSize:'0.65rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(247,245,240,0.38)', marginBottom:'0.45rem' }}>
                        {label} *
                      </label>
                      <input
                        type={type} placeholder={placeholder}
                        value={form[key]} onChange={set(key)}
                        style={inputStyle(key)}
                        onFocus={e => (e.target.style.borderColor = 'rgba(200,169,81,0.4)')}
                        onBlur={e => (e.target.style.borderColor = errors[key] ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.1)')}
                      />
                      {errors[key] && <p style={{ fontSize:'0.7rem', color:'#F87171', marginTop:'0.3rem' }}>{errors[key]}</p>}
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display:'block', fontSize:'0.65rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(247,245,240,0.38)', marginBottom:'0.45rem' }}>
                    Phone (optional)
                  </label>
                  <input type="tel" placeholder="+91 98000 00000" value={form.phone} onChange={set('phone')} style={inputStyle('phone')}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,169,81,0.4)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                {/* Topic */}
                <div>
                  <label style={{ display:'block', fontSize:'0.65rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(247,245,240,0.38)', marginBottom:'0.45rem' }}>
                    Topic *
                  </label>
                  <select value={form.topic} onChange={set('topic')} style={{ ...inputStyle('topic'), cursor:'pointer' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,169,81,0.4)')}
                    onBlur={e => (e.target.style.borderColor = errors.topic ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.1)')}
                  >
                    <option value="" disabled>Select a topic</option>
                    {['Getting started / Onboarding','Prisma Portfolio','Tax & LRS queries','Account support','Other'].map(o => (
                      <option key={o} value={o} style={{ background:'#0D1B2A' }}>{o}</option>
                    ))}
                  </select>
                  {errors.topic && <p style={{ fontSize:'0.7rem', color:'#F87171', marginTop:'0.3rem' }}>{errors.topic}</p>}
                </div>

                {/* Message */}
                <div>
                  <label style={{ display:'block', fontSize:'0.65rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(247,245,240,0.38)', marginBottom:'0.45rem' }}>
                    Message *
                  </label>
                  <textarea rows={4} placeholder="Tell us how we can help..." value={form.message} onChange={set('message')}
                    style={{ ...inputStyle('message'), resize:'vertical', lineHeight:'1.65' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(200,169,81,0.4)')}
                    onBlur={e => (e.target.style.borderColor = errors.message ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.1)')}
                  />
                  {errors.message && <p style={{ fontSize:'0.7rem', color:'#F87171', marginTop:'0.3rem' }}>{errors.message}</p>}
                </div>

                <button onClick={handleSubmit} className="btn-gold" style={{ alignSelf:'flex-start' }}>
                  Send Message <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
