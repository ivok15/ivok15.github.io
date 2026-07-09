const pillars = [
  {
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.5 3.4 8.7 8 9.9 4.6-1.2 8-5.4 8-9.9V6L11 2z" stroke="#2d6bff" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="#38c8f0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Proven Security Track Record',
    desc: 'Over a decade of protecting Fortune 500 enterprises and government agencies with zero critical breach incidents. Our SOC analysts monitor 10M+ events per day.',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#2d6bff" strokeWidth="1.6" />
        <path d="M11 7v4l3 2" stroke="#38c8f0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sub-2 Minute Response Time',
    desc: 'Industry-leading incident response with automated triage and human escalation. Our SLA guarantees critical threat containment within 90 seconds of detection.',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#2d6bff" strokeWidth="1.6" />
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="#2d6bff" strokeWidth="1.6" />
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="#38c8f0" strokeWidth="1.6" />
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="#2d6bff" strokeWidth="1.6" />
      </svg>
    ),
    title: 'Unified Platform Approach',
    desc: 'A single converged platform spanning security, IT, and AI — eliminating vendor sprawl and providing end-to-end visibility across your entire technology estate.',
  },
  {
    num: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2c-4 3-7 5-7 9a7 7 0 0014 0c0-4-3-6-7-9z" stroke="#2d6bff" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 13c.5 1.5 1.8 2.5 3 2.5s2.5-1 3-2.5" stroke="#38c8f0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI-Native Architecture',
    desc: 'Machine learning embedded at every layer — anomaly detection, predictive maintenance, and intelligent automation powered by models trained on real enterprise data.',
  },
  {
    num: '05',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l2 4h4l-3.5 2.5 1.5 4L11 11l-4 2.5 1.5-4L5 7h4l2-4z" stroke="#2d6bff" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Certified & Compliant',
    desc: 'SOC 2 Type II, ISO 27001, FedRAMP, PCI-DSS, and HIPAA compliant. Our compliance framework adapts to evolving regulatory requirements across all industries.',
  },
  {
    num: '06',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="#2d6bff" strokeWidth="1.6" />
        <path d="M5 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#38c8f0" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Dedicated Expert Teams',
    desc: 'Assigned senior engineers, threat analysts, and vCISO support — not a ticketing queue. Every client receives a dedicated pod with deep expertise in their industry.',
  },
]

export default function WhyUs() {
  return (
    <section id="solutions" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #060c1a 0%, #07101f 100%)' }}
      />
      {/* Horizontal divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(45,107,255,0.4), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[#2d6bff]/20 bg-[#2d6bff]/6">
            <span className="text-xs font-medium text-[#2d6bff] tracking-widest uppercase">Why FCP Technologies</span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            The Competitive <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Enterprise security and technology leadership that outpaces threats and accelerates growth.
          </p>
        </div>

        {/* Two-column layout: left text block + right grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: feature statement */}
          <div className="lg:col-span-2 lg:sticky top-32">
            <div
              className="rounded-2xl p-8 border-glow"
              style={{ background: 'linear-gradient(135deg, rgba(45,107,255,0.08) 0%, rgba(13,21,37,0.6) 100%)' }}
            >
              <div className="text-5xl font-bold text-gradient-blue mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                2+
              </div>
              <div className="text-lg font-semibold text-white mb-4">Enterprise Clients Protected</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                From global financial institutions to emerging tech unicorns — our platform secures the most demanding environments on earth.
              </p>
              <div className="space-y-3">
                {[
                  'Named Gartner Leader — 3 consecutive years',
                  'Forrester Wave: Top Performer',
                  '98.7% client retention rate',
                  'Global presence — 42 countries',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6.5" fill="#2d6bff" fillOpacity="0.15" stroke="#2d6bff" strokeOpacity="0.3" />
                      <path d="M4.5 7l2 2 3-4" stroke="#38c8f0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: pillars grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="group p-6 rounded-xl transition-all duration-300 cursor-default hover:border-[rgba(45,107,255,0.4)]"
                style={{
                  background: 'rgba(10, 15, 25, 0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                    style={{ background: 'rgba(45,107,255,0.1)', border: '1px solid rgba(45,107,255,0.2)' }}
                  >
                    {p.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-600 mt-2.5">{p.num}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
