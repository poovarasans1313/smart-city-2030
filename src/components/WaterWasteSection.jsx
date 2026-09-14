import React from 'react';
import { WASTE_BINS } from '../data/cityData';
import { Droplets, Trash2, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function WaterWasteSection({ onTriggerToast }) {
  const waterStats = [
    { label: 'WATER RESERVOIR', value: '82%', status: 'OPTIMAL LEVEL' },
    { label: 'DAILY CONSUMPTION', value: '1.8M L', status: 'SMART METERED' },
    { label: 'LEAK DETECTION', value: '3 ALERTS', status: 'AUTO-ISOLATED' },
    { label: 'WATER PURITY', value: '98%', status: 'SAFE FOR USE' }
  ];

  const handleDispatchCollection = (bin) => {
    if (onTriggerToast) {
      onTriggerToast(`Collection vehicle dispatched for ${bin.id} (${bin.location})`);
    }
  };

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* SMART WATER SUB-SECTION */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="section-header">
            <div className="hud-badge" style={{ marginBottom: '1rem' }}>
              <Droplets size={16} />
              <span>HYDROSTATIC WATER GRID</span>
            </div>
            <h2 className="section-title">
              EVERY DROP <span className="glow-text-cyan">COUNTS.</span>
            </h2>
            <p className="section-subtitle">
              Automated leak detection, acoustic sensors, real-time pressure balancing, and smart reservoir telemetry.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {waterStats.map((w) => (
              <div key={w.label} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <span className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em' }}>
                  {w.label}
                </span>
                <div className="hud-font glow-text-cyan" style={{ fontSize: '2.4rem', fontWeight: 'bold', margin: '0.2rem 0' }}>
                  {w.value}
                </div>
                <span className="hud-badge" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                  ● {w.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SMART WASTE MANAGEMENT SUB-SECTION */}
        <div>
          <div className="section-header">
            <div className="hud-badge" style={{ borderColor: 'rgba(255,170,0,0.4)', color: 'var(--color-neon-amber)', marginBottom: '1rem' }}>
              <Trash2 size={16} />
              <span>CIRCULAR WASTE MANAGEMENT</span>
            </div>
            <h2 className="section-title">
              TURNING WASTE INTO <span className="glow-text-cyan">INTELLIGENCE.</span>
            </h2>
            <p className="section-subtitle">
              Ultrasonic fill sensors, dynamic vehicle dispatch, and automated underground pneumatic vacuum waste tubes.
            </p>
          </div>

          {/* AI Recommendation Banner */}
          <div
            className="glass-card"
            style={{
              padding: '1rem 1.5rem',
              border: '1px solid var(--color-neon-amber)',
              background: 'rgba(255,170,0,0.1)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <AlertTriangle size={22} style={{ color: 'var(--color-neon-amber)' }} />
              <div>
                <span className="hud-font glow-text-cyan" style={{ fontSize: '0.75rem' }}>AI ROUTE RECOMMENDATION</span>
                <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#ffffff' }}>
                  "Collection vehicle recommended for Zone 3 due to 96% fill level on Bin #206."
                </div>
              </div>
            </div>

            <button
              onClick={() => handleDispatchCollection(WASTE_BINS[2])}
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
            >
              <span>DISPATCH TRUCK →</span>
            </button>
          </div>

          {/* Waste Bins Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {WASTE_BINS.map((bin) => {
              const isCritical = bin.fillLevel > 90;
              return (
                <div key={bin.id} className="glass-panel" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="hud-font glow-text-cyan" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                      {bin.id}
                    </span>
                    <span
                      className="hud-badge"
                      style={{
                        borderColor: isCritical ? 'var(--color-neon-red)' : 'var(--color-neon-green)',
                        color: isCritical ? 'var(--color-neon-red)' : 'var(--color-neon-green)'
                      }}
                    >
                      ● {bin.status}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    Location: {bin.location}
                  </div>

                  {/* Fill Level Meter */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.3rem' }} className="hud-font">
                      <span>FILL LEVEL</span>
                      <span style={{ color: isCritical ? 'var(--color-neon-red)' : 'var(--color-neon-cyan)' }}>{bin.fillLevel}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${bin.fillLevel}%`,
                          height: '100%',
                          background: isCritical ? 'var(--color-neon-red)' : 'var(--color-neon-cyan)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => handleDispatchCollection(bin)}
                    className="btn-secondary"
                    style={{ width: '100%', fontSize: '0.82rem', padding: '0.45rem', justifyContent: 'center' }}
                  >
                    <span>SCHEDULE PICKUP</span>
                  </button>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
