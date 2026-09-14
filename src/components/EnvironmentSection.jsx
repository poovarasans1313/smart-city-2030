import React from 'react';
import { Wind, Droplets, Trees, Sparkles, ShieldCheck } from 'lucide-react';

export default function EnvironmentSection() {
  const envMetrics = [
    { title: 'AIR QUALITY', value: 'AQI 42', status: 'GOOD', color: 'var(--color-neon-green)', icon: Wind, desc: 'Bio-filtration towers operational across all 12 sectors.' },
    { title: 'WATER QUALITY', value: '96%', status: 'SAFE', color: 'var(--color-neon-cyan)', icon: Droplets, desc: 'Real-time spectroscopic sensor verification.' },
    { title: 'GREEN COVER', value: '38%', status: 'OPTIMAL', color: 'var(--color-neon-green)', icon: Trees, desc: 'Vertical urban gardens & eco-corridors.' },
    { title: 'CO₂ REDUCTION', value: '24%', status: 'NET-ZERO TREND', color: 'var(--color-neon-purple)', icon: Sparkles, desc: 'Compared to 2025 municipal baseline.' }
  ];

  return (
    <section id="environment" className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ borderColor: 'rgba(0,255,157,0.4)', color: 'var(--color-neon-green)', marginBottom: '1rem' }}>
            <Wind size={16} />
            <span>ENVIRONMENTAL TELEMETRY</span>
          </div>
          <h2 className="section-title">
            A CITY THAT <span className="glow-text-green">BREATHES BETTER.</span>
          </h2>
          <p className="section-subtitle">
            Hyper-local air monitoring, smart vertical forest biomes, automated particulate scrubbers, and carbon neutral atmospheric telemetry.
          </p>
        </div>

        {/* Environmental Gauge Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
          {envMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-panel" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <Icon size={26} style={{ color: item.color }} />
                  <span className="hud-badge" style={{ borderColor: item.color, color: item.color, fontSize: '0.7rem' }}>
                    ● {item.status}
                  </span>
                </div>
                <span className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em' }}>
                  {item.title}
                </span>
                <div className="hud-font glow-text-cyan" style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.2rem 0 0.5rem' }}>
                  {item.value}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
