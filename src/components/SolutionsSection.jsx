import React from 'react';
import { CarFront, Zap, Leaf, ShieldCheck, Building2, Users, ArrowRight } from 'lucide-react';

export default function SolutionsSection({ onTriggerToast }) {
  const solutions = [
    {
      id: 'mobility',
      title: 'SMART MOBILITY',
      desc: 'AI traffic management, Level 5 autonomous public transport, and wireless inductive EV charging infrastructure.',
      icon: CarFront,
      color: 'var(--color-neon-cyan)',
      stats: '82% Flow Efficiency'
    },
    {
      id: 'energy',
      title: 'SMART ENERGY',
      desc: 'Micro-grid solar/wind generation, intelligent battery storage, and dynamic load-shifting algorithms.',
      icon: Zap,
      color: 'var(--color-neon-amber)',
      stats: '71% Renewable Share'
    },
    {
      id: 'environment',
      title: 'SMART ENVIRONMENT',
      desc: 'Real-time AQI sensors, vertical bio-forest air scrubbers, acoustic water leak detection, and automated waste bins.',
      icon: Leaf,
      color: 'var(--color-neon-green)',
      stats: 'AQI 42 (Good)'
    },
    {
      id: 'safety',
      title: 'SMART SAFETY',
      desc: 'AI optical computer vision CCTV, gunshot/accident acoustic detection, emergency drone dispatch, and disaster response.',
      icon: ShieldCheck,
      color: 'var(--color-neon-red)',
      stats: '2.4 Min Response'
    },
    {
      id: 'infrastructure',
      title: 'SMART INFRASTRUCTURE',
      desc: 'Adaptive street lighting, zero-carbon building HVAC systems, IoT sensor matrix, and sub-surface utility conduits.',
      icon: Building2,
      color: 'var(--color-neon-purple)',
      stats: '12.8K Sensors Active'
    },
    {
      id: 'services',
      title: 'CITIZEN SERVICES',
      desc: 'Digital citizen portal, automated issue reporting, NFC public transit pass, and bio-vitals digital healthcare link.',
      icon: Users,
      color: 'var(--color-neon-cyan)',
      stats: '24/7 Digital Portal'
    }
  ];

  const handleCardClick = (sol) => {
    if (onTriggerToast) {
      onTriggerToast(`Inspecting Solution: ${sol.title} (${sol.stats})`);
    }
  };

  return (
    <section id="solutions" className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ marginBottom: '1rem' }}>
            <span>MODULAR URBAN PLATFORM</span>
          </div>
          <h2 className="section-title">
            SMART CITY <span className="glow-text-cyan">SOLUTIONS</span>
          </h2>
          <p className="section-subtitle">
            Six integrated municipal subsystems working together through unified IoT telemetry and artificial intelligence.
          </p>
        </div>

        {/* 6 Solution Module Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="glass-panel"
                onClick={() => handleCardClick(sol)}
                style={{
                  padding: '1.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(0, 243, 255, 0.08)',
                        border: `1px solid ${sol.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: sol.color
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className="hud-font"
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '12px',
                        border: `1px solid ${sol.color}`,
                        color: sol.color
                      }}
                    >
                      ● {sol.stats}
                    </span>
                  </div>

                  <h3 className="hud-font" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.6rem' }}>
                    {sol.title}
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {sol.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: sol.color, fontSize: '0.85rem', fontWeight: 'bold' }}>
                  <span>EXPLORE MODULE</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
