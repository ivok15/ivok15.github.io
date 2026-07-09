const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.5 3.4 8.7 8 9.9 4.6-1.2 8-5.4 8-9.9V6L11 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Cybersecurity',
    desc: 'Protecting your business with threat prevention, risk assessment, and continuous security monitoring.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 19h6M11 16v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'IT Solutions',
    desc: 'End-to-end managed IT infrastructure, cloud services, and technical support built for reliability.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M6 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="11" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 18h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Artificial Intelligence',
    desc: 'Intelligent automation and AI-powered tools that streamline operations and surface actionable insights.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    title: 'Smart Security',
    desc: 'Integrated physical and digital security systems — access control, surveillance, and IoT protection.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l8 4.5v7L11 19l-8-4.5v-7L11 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M11 3v16M3 7.5l8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Technology Consulting',
    desc: 'Strategic advisory to align your technology investments with your business goals and long-term vision.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '0 24px 120px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <p style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#2563EB',
          marginBottom: 16,
        }}>
          What We Do
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#fff',
            lineHeight: 1.1,
          }}>
            Our Services
          </h2>
          <p style={{
            fontSize: 14,
            color: '#64748B',
            maxWidth: 360,
            lineHeight: 1.6,
            letterSpacing: '-0.005em',
          }}>
            A focused suite of technology services designed to help businesses operate more securely and efficiently.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
        {services.map((svc, i) => (
          <ServiceRow key={i} {...svc} index={i} total={services.length} />
        ))}
      </div>
    </section>
  )
}

function ServiceRow({
  icon, title, desc, index, total,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  index: number
  total: number
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: 24,
        padding: '28px 32px',
        background: '#0F172A',
        borderBottom: index < total - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'background 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#111827')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#0F172A')}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {/* Icon */}
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: '#64748B',
        }}>
          {icon}
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 4, letterSpacing: '-0.02em' }}>
            {title}
          </div>
          <div style={{ fontSize: 13.5, color: '#64748B', letterSpacing: '-0.005em', lineHeight: 1.5 }}>
            {desc}
          </div>
        </div>
      </div>

      {/* Learn more */}
      <a
        href="#contact"
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: '#2563EB',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          whiteSpace: 'nowrap',
          transition: 'gap 0.15s',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '10px')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '6px')}
      >
        Learn More
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  )
}
