import { useState } from 'react'

const categories = [
  {
    label: 'Cloud & Infrastructure',
    techs: [
      { name: 'AWS', abbr: 'AWS', color: '#FF9900' },
      { name: 'Microsoft Azure', abbr: 'AZ', color: '#0078D4' },
      { name: 'Google Cloud', abbr: 'GCP', color: '#4285F4' },
      { name: 'Kubernetes', abbr: 'K8s', color: '#326CE5' },
      { name: 'Terraform', abbr: 'TF', color: '#7B42BC' },
      { name: 'Docker', abbr: 'DCK', color: '#2496ED' },
    ],
  },
  {
    label: 'Security Platforms',
    techs: [
      { name: 'CrowdStrike', abbr: 'CS', color: '#E01B22' },
      { name: 'Palo Alto', abbr: 'PA', color: '#FA582D' },
      { name: 'Splunk', abbr: 'SPL', color: '#65A637' },
      { name: 'Sentinel', abbr: 'SEN', color: '#0078D4' },
      { name: 'Okta', abbr: 'OKT', color: '#007DC1' },
      { name: 'CyberArk', abbr: 'CAK', color: '#003087' },
    ],
  },
  {
    label: 'AI & Data',
    techs: [
      { name: 'OpenAI', abbr: 'OAI', color: '#10A37F' },
      { name: 'PyTorch', abbr: 'PT', color: '#EE4C2C' },
      { name: 'Databricks', abbr: 'DB', color: '#FF3621' },
      { name: 'Snowflake', abbr: 'SFW', color: '#29B5E8' },
      { name: 'Apache Kafka', abbr: 'KFK', color: '#231F20' },
      { name: 'Elastic', abbr: 'ELS', color: '#005571' },
    ],
  },
]

export default function Technologies() {
  const [active, setActive] = useState(0)

  return (
    <section id="technologies" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #07101f 0%, #060c1a 100%)' }}
      />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 orb"
        style={{ background: 'radial-gradient(circle, rgba(56,200,240,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[#2d6bff]/20 bg-[#2d6bff]/6">
            <span className="text-xs font-medium text-[#2d6bff] tracking-widest uppercase">Technology Stack</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Built on Industry-Leading <br className="hidden lg:block" />
              <span className="text-gradient">Platforms</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Deep certifications and partnerships with the world's most trusted technology vendors.
            </p>
          </div>
        </div>

        {/* Tab selector */}
        <div className="flex gap-1 mb-10 p-1 rounded-xl w-fit" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: active === i ? '#2d6bff' : 'transparent',
                color: active === i ? '#fff' : '#64748b',
                boxShadow: active === i ? '0 4px 15px rgba(45,107,255,0.3)' : 'none',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories[active].techs.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(10,15,25,0.7)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold font-mono transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${tech.color}18`,
                  border: `1px solid ${tech.color}30`,
                  color: tech.color,
                }}
              >
                {tech.abbr}
              </div>
              <span className="text-xs text-slate-400 text-center leading-tight group-hover:text-slate-200 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Partner badges bar */}
        <div
          className="rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6"
          style={{
            background: 'rgba(10,15,25,0.6)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Strategic Partnerships</p>
          <div className="flex flex-wrap gap-6 items-center">
            {['Microsoft Gold Partner', 'AWS Premier Tier', 'Google Cloud Partner', 'CrowdStrike Authorized', 'Palo Alto MSSP'].map(
              (badge) => (
                <span key={badge} className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d6bff]" />
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
