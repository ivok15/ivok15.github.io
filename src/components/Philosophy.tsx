const cards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l1.5 3.5H15l-2.5 2 1 3.5L10 9.5 6.5 11l1-3.5L5 5.5h3.5L10 2z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 14h8M7 17h6" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Tailored Solutions',
    desc: 'Every business is different. We design technology around your goals, not the other way around.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 10h1.5M15 10h1.5M10 3.5V5M10 15v1.5" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Innovation First',
    desc: 'We embrace modern technologies to create solutions that deliver long-term value, not short-term fixes.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3a4 4 0 100 8 4 4 0 000-8z" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M3 17c0-3 3.1-5 7-5s7 2 7 5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Long-Term Partnership',
    desc: 'We believe in building relationships, not just delivering projects. Your success is our ongoing commitment.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="#2563EB" strokeWidth="1.5" />
        <path d="M7 10h6M10 7v6" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Business Driven',
    desc: 'Technology should solve business problems, not create complexity. We keep the focus where it matters.',
  },
]

export default function Philosophy() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 24px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <p style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#2563EB',
          marginBottom: 16,
        }}>
          Our Approach
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: '#fff',
          marginBottom: 16,
          lineHeight: 1.1,
        }}>
          Why FCP Technologies?
        </h2>
        <p style={{
          fontSize: 16,
          color: '#64748B',
          maxWidth: 480,
          margin: '0 auto',
          lineHeight: 1.6,
          letterSpacing: '-0.01em',
        }}>
          We are a technology partner that puts your business first — honest,
          precise, and always focused on what actually works.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 2,
        background: 'rgba(255,255,255,0.04)',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        {cards.map((c, i) => (
          <PhilCard key={i} {...c} />
        ))}
      </div>
    </section>
  )
}

function PhilCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div
      style={{
        padding: '36px 32px',
        background: '#0F172A',
        transition: 'background 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#111827')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#0F172A')}
    >
      <div style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: 'rgba(37,99,235,0.1)',
        border: '1px solid rgba(37,99,235,0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: 15,
        fontWeight: 600,
        color: '#fff',
        marginBottom: 10,
        letterSpacing: '-0.02em',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 14,
        color: '#64748B',
        lineHeight: 1.65,
        letterSpacing: '-0.005em',
      }}>
        {desc}
      </p>
    </div>
  )
}
