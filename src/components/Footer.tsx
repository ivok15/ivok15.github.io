const cols = [
  {
    heading: 'Services',
    links: ['Cybersecurity', 'IT Solutions', 'Artificial Intelligence', 'Smart Security', 'Technology Consulting'],
  },
  {
    heading: 'Industries',
    links: ['Small Business', 'Retail', 'Healthcare', 'Manufacturing', 'Financial Services'],
  },
  {
    heading: 'Company',
    links: ['About', 'Insights', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '64px 24px 36px',
      background: '#0a1120',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 56,
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#2563EB" fillOpacity="0.12" />
                <rect x="0.5" y="0.5" width="27" height="27" rx="5.5" stroke="#2563EB" strokeOpacity="0.5" />
                <path d="M7 10h8M7 14h14M7 18h8" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#fff', letterSpacing: '-0.02em' }}>
                FCP Technologies
              </span>
            </div>
            <p style={{
              fontSize: 13,
              color: '#334155',
              lineHeight: 1.7,
              maxWidth: 240,
              letterSpacing: '-0.005em',
            }}>
              Technology partner for businesses that demand security, reliability and innovation.
            </p>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#475569',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 16,
              }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 13,
                        color: '#334155',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#334155')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: 12, color: '#1e293b' }}>
            © {new Date().getFullYear()} FCP Technologies. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontSize: 12, color: '#1e293b', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#1e293b')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
