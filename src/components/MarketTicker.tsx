import { MARKET_TICKERS } from '@/lib/constants'

export default function MarketTicker() {
  const doubled = [...MARKET_TICKERS, ...MARKET_TICKERS]
  return (
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(6,12,20,0.7)',
      overflow: 'hidden',
      height: '38px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10,
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg, rgba(6,12,20,0.9), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(270deg, rgba(6,12,20,0.9), transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div className="animate-ticker" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', willChange: 'transform' }}>
        {doubled.map((t, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0 2.5rem' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(247,245,240,0.35)' }}>
              {t.symbol}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--paper)', fontWeight: 400 }}>
              {t.value}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: t.up ? '#4ADE80' : '#F87171' }}>
              {t.change}
            </span>
            <span style={{ color: 'rgba(247,245,240,0.08)', fontSize: '0.8rem' }}>|</span>
          </span>
        ))}
      </div>
    </div>
  )
}
