import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s, border-color 0.3s',
        background: scrolled ? 'rgba(15,23,42,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#2563EB" fillOpacity="0.12" />
              <rect x="0.5" y="0.5" width="27" height="27" rx="5.5" stroke="#2563EB" strokeOpacity="0.5" />
              <path d="M7 10h8M7 14h14M7 18h8" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.02em', color: '#fff' }}>
              FCP Technologies
            </span>
          </a>

          {/* Desktop links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 13.5,
                  color: '#94a3b8',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#fff')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#94a3b8')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden-mobile"
            style={{
              fontSize: 13.5,
              fontWeight: 500,
              color: '#fff',
              textDecoration: 'none',
              padding: '8px 18px',
              borderRadius: 8,
              background: '#2563EB',
              letterSpacing: '-0.01em',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            Let's Talk
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#94a3b8',
              padding: 4,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '16px 0 20px',
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '10px 0',
                  fontSize: 15,
                  color: '#94a3b8',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                marginTop: 12,
                padding: '10px 20px',
                borderRadius: 8,
                background: '#2563EB',
                color: '#fff',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Let's Talk
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
