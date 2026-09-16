import React from 'react';
import { TrendingDown, TrendingUp, Target, ShieldCheck } from 'lucide-react';

export default function VisionImpactSection() {
  const targets = [
    { title: 'PROJECTED TRAFFIC CONGESTION', change: '↓ 30%', color: 'var(--color-neon-cyan)', desc: 'Reduction through Level 5 autonomous light control and smart rerouting.' },
    { title: 'PROJECTED ENERGY WASTE', change: '↓ 25%', color: 'var(--color-neon-amber)', desc: 'Saved via AI load-shifting algorithms and battery storage matrix.' },
    { title: 'PROJECTED WATER LOSS', change: '↓ 40%', color: 'var(--color-neon-green)', desc: 'Prevented using acoustic sensor leak detection and pressure balancing.' },
    { title: 'PROJECTED RENEWABLE INTEGRATION', change: '↑ 35%', color: 'var(--color-neon-purple)', desc: 'Increase in solar glass facade and offshore micro-turbine adoption.' },
    { title: 'TARGET EMERGENCY RESPONSE TIME', change: '↓ 50%', color: 'var(--color-neon-red)', desc: 'Faster dispatch using autonomous medical and fire drone swarms.' }
  ];

  return (
    <section id="impact" className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ borderColor: 'rgba(0, 255, 157, 0.4)', color: 'var(--color-neon-green)', marginBottom: '1rem' }}>
            <Target size={16} />
            <span>PROJECT TARGETS / DEMO PROJECTIONS</span>
          </div>
          <h2 className="section-title">
            VISION <span className="glow-text-green">2030</span> IMPACT
          </h2>
          <p className="section-subtitle">
            Target operational milestones and projected environmental/economic benefits planned for full municipal deployment.
          </p>
        </div>

        {/* Target Projection Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {targets.map((t) => (
            <div key={t.title} className="glass-panel" style={{ padding: '1.75rem', textAlign: 'center', position: 'relative' }}>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '2.6rem', fontWeight: 'bold', color: t.color, marginBottom: '0.3rem' }}>
                {t.change}
              </div>
              <h3 className="hud-font" style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.6rem', letterSpacing: '0.04em' }}>
                {t.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer Note */}
        <div
          className="glass-card"
          style={{
            maxWidth: '650px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '0.85rem 1.5rem',
            border: '1px solid rgba(0, 243, 255, 0.3)',
            background: 'rgba(0, 243, 255, 0.05)'
          }}
        >
          <span className="hud-font glow-text-cyan" style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            ⓘ DEMO DISCLAIMER: All figures presented reflect strategic 2030 municipal target goals and simulated demo metrics.
          </span>
        </div>

      </div>
    </section>
  );
}
