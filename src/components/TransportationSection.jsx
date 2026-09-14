import React from 'react';
import { TRAFFIC_HOURLY } from '../data/cityData';
import { Navigation, Bus, Car, ParkingSquare, Bike, Compass, AlertCircle } from 'lucide-react';

export default function TransportationSection({ onTriggerToast }) {
  const stats = [
    { label: 'TRAFFIC FLOW', value: '92%', icon: Navigation, color: 'var(--color-neon-cyan)' },
    { label: 'PUBLIC TRANSPORT', value: '87%', icon: Bus, color: 'var(--color-neon-green)' },
    { label: 'EV ADOPTION', value: '64%', icon: Car, color: 'var(--color-neon-purple)' },
    { label: 'SMART PARKING', value: '78%', icon: ParkingSquare, color: 'var(--color-neon-amber)' }
  ];

  return (
    <section id="transport" className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ marginBottom: '1rem' }}>
            <Bus size={16} />
            <span>AUTONOMOUS MOBILITY GRID</span>
          </div>
          <h2 className="section-title">
            MOVE SMARTER. <span className="glow-text-cyan">MOVE FASTER.</span>
          </h2>
          <p className="section-subtitle">
            Level 5 autonomous shuttle transit, wireless inductive EV charging highways, predictive traffic signal timing, and drone aerial delivery lanes.
          </p>
        </div>

        {/* Mobility Stats Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {stats.map((s) => {
            const IconComponent = s.icon;
            return (
              <div key={s.label} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <IconComponent size={28} style={{ color: s.color, marginBottom: '0.75rem' }} />
                <div className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em' }}>
                  {s.label}
                </div>
                <div className="hud-font glow-text-cyan" style={{ fontSize: '2.4rem', fontWeight: 'bold', margin: '0.25rem 0' }}>
                  {s.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Traffic Prediction SVG/CSS Chart */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="hud-font glow-text-cyan" style={{ fontSize: '0.8rem' }}>AI TRAFFIC PREDICTION MODEL</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ffffff' }}>HOURLY CONGESTION FORECAST</h3>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid var(--color-neon-amber)',
                background: 'rgba(255, 170, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem'
              }}
            >
              <AlertCircle size={18} style={{ color: 'var(--color-neon-amber)' }} />
              <span><strong>AI Recommendation:</strong> "Alternate route via Underpass Sector 03 recommended at 09:30."</span>
            </div>
          </div>

          {/* SVG Bar / Line Chart Visualization */}
          <div style={{ width: '100%', height: '220px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {TRAFFIC_HOURLY.map((item) => (
              <div key={item.time} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                <span className="hud-font glow-text-cyan" style={{ fontSize: '0.8rem', marginBottom: '0.4rem', fontWeight: 'bold' }}>
                  {item.congestion}%
                </span>
                
                {/* Animated Column Bar */}
                <div
                  style={{
                    width: '100%',
                    maxWidth: '45px',
                    height: `${item.congestion * 1.8}px`,
                    background: item.congestion > 70
                      ? 'linear-gradient(180deg, var(--color-neon-red), rgba(255,51,102,0.2))'
                      : 'linear-gradient(180deg, var(--color-neon-cyan), rgba(0,243,255,0.2))',
                    borderRadius: '6px 6px 0 0',
                    transition: 'height 1s ease',
                    boxShadow: item.congestion > 70 ? '0 0 15px rgba(255,51,102,0.4)' : '0 0 15px rgba(0,243,255,0.3)'
                  }}
                />

                <span className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.6rem' }}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
