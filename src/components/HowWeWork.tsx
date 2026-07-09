const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: "We start by understanding your business, challenges, and objectives — asking the right questions before proposing anything.",
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We craft a tailored technology strategy and architecture that fits your context, budget, and goals precisely.',
  },
  {
    num: '03',
    title: 'Implement',
    desc: 'Our team deploys and configures your solution with precision, minimizing disruption and maximizing stability.',
  },
  {
    num: '04',
    title: 'Support',
    desc: "We stay with you after delivery — monitoring, optimizing, and adapting your technology as your business evolves.",
  },
]

export default function HowWeWork() {
  return (
    <section
      id="insights"
      style={{
        padding: '0 0 120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Full-width band */}
      <div style={{
        background: '#111827',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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
              Process
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#fff',
              lineHeight: 1.1,
            }}>
              How We Work
            </h2>
          </div>

          {/* Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 0,
            position: 'relative',
          }}>
            {/* Connector line */}
            <div style={{
              position: 'absolute',
              top: 20,
              left: '12.5%',
              right: '12.5%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3) 20%, rgba(37,99,235,0.3) 80%, transparent)',
              pointerEvents: 'none',
            }} />

            {steps.map((s, i) => (
              <StepCard key={i} {...s} isLast={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ num, title, desc, isLast }: { num: string; title: string; desc: string; isLast: boolean }) {
  return (
    <div style={{
      padding: '0 32px',
      borderRight: isLast ? 'none' : '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
    }}>
      {/* Number bubble */}
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: '#0F172A',
        border: '1px solid rgba(37,99,235,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        position: 'relative',
        zIndex: 1,
      }}>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          color: '#2563EB',
          letterSpacing: '0.06em',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {num}
        </span>
      </div>

      <h3 style={{
        fontSize: 17,
        fontWeight: 600,
        color: '#fff',
        marginBottom: 12,
        letterSpacing: '-0.025em',
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
