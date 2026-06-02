import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', background: 'var(--navy)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: '2rem', textAlign: 'center', padding: '2rem',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.18em', color: 'var(--gold)' }}>
        404
      </span>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--paper)', lineHeight: 1 }}>
        Page not found.
      </h1>
      <p style={{ color: 'rgba(247,245,240,0.45)', maxWidth: '360px', lineHeight: '1.7', fontSize: '0.95rem' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-gold">Return Home</Link>
    </div>
  )
}
