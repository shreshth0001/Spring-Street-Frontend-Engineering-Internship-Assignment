'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(8,15,24,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', padding: '0 clamp(1.25rem, 4vw, 2.5rem)' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect x="3"  y="21" width="6" height="8"  fill="#2E6DB4"/>
            <rect x="11" y="14" width="6" height="15" fill="#5B9BD5"/>
            <rect x="19" y="7"  width="6" height="22" fill="#C8A951"/>
            <rect x="27" y="2"  width="2" height="27" fill="rgba(247,245,240,0.2)"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--paper)', letterSpacing: '0.02em' }}>
            Spring Street
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href}
              className={`nav-link hover-line ${pathname === link.href ? 'active' : ''}`}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-gold" style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem' }}>
            Get Started <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hide-desktop"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--paper)', padding: '0.25rem', lineHeight: 1 }}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="hide-desktop"
        style={{
          overflow: 'hidden',
          maxHeight: open ? '400px' : '0',
          transition: 'max-height 0.35s var(--ease-out-expo)',
          background: 'rgba(8,15,24,0.97)',
          borderBottom: open ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div style={{ padding: '1.5rem clamp(1.25rem, 4vw, 2.5rem) 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              style={{ fontSize: '1rem', letterSpacing: '0.06em' }}>
              {link.label}
            </Link>
          ))}
          <button className="btn-gold" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
            Get Started <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </nav>
  )
}
