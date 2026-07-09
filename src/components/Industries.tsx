const industries = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="8" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="13" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'Small Business',
    desc: 'Scalable IT and security solutions for growing businesses that need enterprise-grade technology without the complexity.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17V8l7-5 7 5v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="7" y="12" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Retail',
    desc: 'Point-of-sale security, e-commerce infrastructure, and customer data protection for modern retail operations.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 17c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Healthcare',
    desc: 'HIPAA-aligned security frameworks and reliable IT infrastructure for clinics, hospitals, and health networks.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="10" width="16" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 10V7a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 14h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Manufacturing',
    desc: 'Operational technology security and connected factory solutions that keep production lines running without interruption.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 13l4-6 4 3 3-4 3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="15" width="16" height="2.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Logistics',
    desc: 'Fleet tracking, supply chain visibility, and infrastructure security for distribution and logistics companies.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 8h16" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 12h3M13 12h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Financial Services',
    desc: 'Compliance-ready cybersecurity and IT systems for financial firms that handle sensitive data and regulated transactions.',
  },
]

export default function Industries() {
  return (
    <section
      id="industries"
      style={{
        padding: '0 24px 120px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <p style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#2563EB',
          marginBottom: 16,
        }}>
          Industries
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: 16,
        }}>
          Who We Work With
        </h2>
        <p style={{
          fontSize: 16,
          color: '#64748B',
          maxWidth: 440,
          margin: '0 auto',
          lineHeight: 1.6,
          letterSpacing: '-0.01em',
        }}>
          We bring deep understanding to industries where technology reliability and security are non-negotiable.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 1,
        background: 'rgba(255,255,255,0.04)',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        {industries.map((ind, i) => (
          <IndustryCard key={i} {...ind} />
        ))}
      </div>
    </section>
  )
}

function IndustryCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div
      style={{
        padding: '32px 28px',
        background: '#0F172A',
        transition: 'background 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#111827')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#0F172A')}
    >
      <div style={{
        color: '#64748B',
        marginBottom: 16,
        transition: 'color 0.2s',
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: 15,
        fontWeight: 600,
        color: '#fff',
        marginBottom: 8,
        letterSpacing: '-0.02em',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 13.5,
        color: '#64748B',
        lineHeight: 1.65,
        letterSpacing: '-0.005em',
      }}>
        {desc}
      </p>
    </div>
  )
}
