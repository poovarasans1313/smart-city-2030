import React from 'react';
import { ROADMAP_ITEMS } from '../data/cityData';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function Roadmap2030() {
  return (
    <section id="roadmap" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ marginBottom: '1rem' }}>
            <Calendar size={16} />
            <span>STRATEGIC MILESTONES</span>
          </div>
          <h2 className="section-title">
            TECHNOLOGY ROADMAP TO <span className="glow-text-cyan">2030</span>
          </h2>
          <p className="section-subtitle">
            The five-year strategic development trajectory leading to full net-zero municipal autonomy.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical Layout */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Vertical Central Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '2px',
              background: 'linear-gradient(180deg, var(--color-neon-cyan), var(--color-neon-purple))',
              transform: 'translateX(-50%)',
              opacity: 0.6
            }}
            className="timeline-central-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {ROADMAP_ITEMS.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.year}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    position: 'relative'
                  }}
                  className="timeline-item-container"
                >
                  {/* Timeline Card */}
                  <div
                    className="glass-panel"
                    style={{
                      width: '46%',
                      padding: '1.75rem',
                      position: 'relative',
                      border: '1px solid rgba(0, 243, 255, 0.3)'
                    }}
                  >
                    <div className="hud-font glow-text-cyan" style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
                      {item.year}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.5rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Central Node Badge Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#030712',
                      border: '2px solid var(--color-neon-cyan)',
                      boxShadow: '0 0 15px var(--color-neon-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3
                    }}
                    className="timeline-dot"
                  >
                    <CheckCircle2 size={12} style={{ color: 'var(--color-neon-cyan)' }} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-central-line { left: 20px !important; }
          .timeline-item-container { justify-content: flex-start !important; padding-left: 50px !important; }
          .timeline-item-container > div.glass-panel { width: 100% !important; }
          .timeline-dot { left: 20px !important; }
        }
      `}</style>
    </section>
  );
}
