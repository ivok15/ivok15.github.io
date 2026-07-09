import { useEffect, useRef } from 'react'

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    let frame: number
    let t = 0
    const tick = () => {
      t += 0.004
      const x = 50 + Math.sin(t) * 8
      const y = 50 + Math.cos(t * 0.7) * 6
      el.style.background = `radial-gradient(ellipse 900px 600px at ${x}% ${y}%, rgba(37,99,235,0.13) 0%, rgba(56,189,248,0.05) 40%, transparent 70%)`
      frame = requestAnimationFrame(tick)
    }
    tick()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Animated gradient */}
      <div ref={glowRef} style={{ position: 'absolute', inset: 0, transition: 'background 0.8s ease', pointerEvents: 'none' }} />

      {/* Dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        background: 'linear-gradient(to bottom, transparent, #0F172A)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 820 }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 36,
          padding: '6px 14px',
          borderRadius: 100,
          border: '1px solid rgba(37,99,235,0.3)',
          background: 'rgba(37,99,235,0.06)',
        }}>
          <span style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#38BDF8',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{ fontSize: 12, fontWeight: 500, color: '#38BDF8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Technology Consulting &amp; Solutions
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)',
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            marginBottom: 28,
            color: '#fff',
          }}
        >
          Technology that moves
          <br />
          <span className="grad-blue">business forward.</span>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#94a3b8',
          lineHeight: 1.65,
          maxWidth: 560,
          margin: '0 auto 48px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }}>
          Helping businesses protect, optimize and transform their technology through
          cybersecurity, IT services, AI and smart solutions.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 28px',
              borderRadius: 10,
              background: '#2563EB',
              color: '#fff',
              fontWeight: 500,
              fontSize: 15,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'transform 0.15s, opacity 0.15s',
              boxShadow: '0 0 32px rgba(37,99,235,0.3)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
          >
            Let's Talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '13px 28px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8',
              fontWeight: 500,
              fontSize: 15,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#fff'
              el.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#94a3b8'
              el.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            Explore Services
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
