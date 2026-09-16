import React from 'react';
import { Radio, Database, Cpu, TrendingUp, CheckSquare, Play, Heart } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    { title: 'IoT SENSORS', desc: '12.8K environmental, pressure & motion sensors streaming 24/7', icon: Radio, color: 'var(--color-neon-cyan)' },
    { title: 'CITY DATA PLATFORM', desc: 'Petabyte-scale distributed edge cloud ingesting 4.8M data points/sec', icon: Database, color: 'var(--color-neon-purple)' },
    { title: 'AI ANALYSIS', desc: 'Neural vision & predictive pattern evaluation models', icon: Cpu, color: 'var(--color-neon-green)' },
    { title: 'PREDICTION', desc: 'Forecasting traffic surges, energy peaks & rainfall 2 hours ahead', icon: TrendingUp, color: 'var(--color-neon-amber)' },
    { title: 'SMART DECISION', desc: 'Autonomous optimization algorithms selecting optimal city parameters', icon: CheckSquare, color: 'var(--color-neon-cyan)' },
    { title: 'CITY ACTION', desc: 'Automated light timing, battery release & drone response dispatch', icon: Play, color: 'var(--color-neon-red)' },
    { title: 'CITIZEN BENEFIT', desc: 'Safer streets, cleaner air, zero traffic gridlock & 100% net-zero power', icon: Heart, color: 'var(--color-neon-green)' }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ marginBottom: '1rem' }}>
            <span>TECHNICAL ARCHITECTURE</span>
          </div>
          <h2 className="section-title">
            HOW THE CITY <span className="glow-text-cyan">OPERATES</span>
          </h2>
          <p className="section-subtitle">
            An end-to-end autonomous data pipeline from physical hardware sensors to real-world municipal impact.
          </p>
        </div>

        {/* 7-Step Visual Flowchart Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', position: 'relative' }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  borderTop: `3px solid ${step.color}`,
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="hud-font glow-text-cyan" style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>
                    PHASE 0{idx + 1}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0, 243, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: step.color
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="hud-font" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
