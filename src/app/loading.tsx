export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh', background: 'var(--navy)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem',
    }}>
      <div style={{ position: 'relative', width: '48px', height: '48px' }}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'spin-slow 3s linear infinite' }}>
          <circle cx="24" cy="24" r="22" stroke="rgba(46,109,180,0.2)" strokeWidth="1" />
          <circle cx="24" cy="24" r="22" stroke="var(--gold)" strokeWidth="1"
            strokeDasharray="30 110" strokeLinecap="round" />
        </svg>
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(247,245,240,0.3)' }}>
        LOADING
      </span>
    </div>
  )
}
