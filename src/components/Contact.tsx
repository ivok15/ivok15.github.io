import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const fieldStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 8,
    color: '#fff',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.15s',
    letterSpacing: '-0.01em',
    fontFamily: 'Inter, system-ui, sans-serif',
  }

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '0 24px 120px',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 600,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Top divider */}
        <div style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          marginBottom: 80,
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
          className="contact-grid"
        >
          {/* Left */}
          <div>
            <p style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2563EB',
              marginBottom: 16,
            }}>
              Contact
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Ready to get started?
            </h2>
            <p style={{
              fontSize: 16,
              color: '#64748B',
              lineHeight: 1.65,
              letterSpacing: '-0.01em',
              marginBottom: 48,
              maxWidth: 380,
            }}>
              Tell us about your business and technology needs. We will get back to you promptly to explore how we can help.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                {
                  label: 'Email',
                  value: 'hello@fcptechnologies.com',
                  href: 'mailto:hello@fcptechnologies.com',
                },
                {
                  label: 'Phone',
                  value: '+1 (800) FCP-TECH',
                  href: 'tel:+18003278324',
                },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: 11, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 4 }}>
                    {item.label}
                  </div>
                  <a href={item.href} style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 14,
              padding: '36px',
            }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(37,99,235,0.12)',
                  border: '1px solid rgba(37,99,235,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4.5 4.5 7.5-9" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 8, letterSpacing: '-0.02em' }}>
                  Message Sent
                </h3>
                <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 6 }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      style={fieldStyle}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(37,99,235,0.5)')}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 6 }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      style={fieldStyle}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(37,99,235,0.5)')}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 6 }}>
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your company"
                    style={fieldStyle}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(37,99,235,0.5)')}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 6 }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your needs..."
                    required
                    style={{ ...fieldStyle, resize: 'none' }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(37,99,235,0.5)')}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '13px 24px',
                    borderRadius: 8,
                    background: '#2563EB',
                    color: '#fff',
                    fontWeight: 500,
                    fontSize: 14,
                    border: 'none',
                    cursor: 'pointer',
                    letterSpacing: '-0.01em',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    transition: 'opacity 0.15s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    boxShadow: '0 0 24px rgba(37,99,235,0.25)',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
