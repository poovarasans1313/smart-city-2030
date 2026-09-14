import React, { useState } from 'react';
import { COMMAND_METRICS } from '../data/cityData';
import { RefreshCw, CheckCircle2, Sliders } from 'lucide-react';

export default function CommandDashboard({ onTriggerToast }) {
  const [metrics, setMetrics] = useState(COMMAND_METRICS);
  const [refreshing, setRefreshing] = useState(false);

  const handleSimulateUpdate = () => {
    setRefreshing(true);
    setTimeout(() => {
      setMetrics((prev) =>
        prev.map((item) => {
          const delta = (Math.random() * 4 - 2).toFixed(1);
          const newScore = Math.min(100, Math.max(75, parseFloat((item.score + parseFloat(delta)).toFixed(1))));
          return { ...item, score: newScore };
        })
      );
      setRefreshing(false);
      if (onTriggerToast) onTriggerToast("City Command metrics updated in real-time.");
    }, 600);
  };

  return (
    <section id="dashboard" className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ marginBottom: '1rem' }}>
            <span className="pulse-dot" style={{ color: 'var(--color-neon-cyan)' }} />
            <span>REAL-TIME COMMAND CENTER</span>
          </div>
          <h2 className="section-title">
            CITY COMMAND <span className="glow-text-cyan">DASHBOARD</span>
          </h2>
          <p className="section-subtitle">
            Centralized telemetry monitoring critical infrastructure, traffic, power distribution, water management, environmental sensors, and public safety.
          </p>
        </div>

        {/* Live Controls Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="hud-font" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sliders size={18} className="glow-text-cyan" />
            <span>ACTIVE SECTORS: 12 URBAN DISTRICTS SYNCHRONIZED</span>
          </div>

          <button
            onClick={handleSimulateUpdate}
            className="btn-secondary"
            style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}
          >
            <RefreshCw size={16} style={{ animation: refreshing ? 'spin 1s linear infinite' : 'none' }} />
            <span>RE-SYNC TELEMETRY</span>
          </button>
        </div>

        {/* Metric Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {metrics.map((m) => (
            <div key={m.id} className="glass-panel" style={{ padding: '1.75rem', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <span className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>
                    METRIC // {m.id.toUpperCase()}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ffffff', marginTop: '0.2rem' }}>
                    {m.title}
                  </h3>
                </div>
                <span
                  className="hud-font"
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: `1px solid ${m.color}`,
                    color: m.color
                  }}
                >
                  ● {m.status}
                </span>
              </div>

              {/* Score & Progress Ring/Bar */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <span className="hud-font glow-text-cyan" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                    {m.score}%
                  </span>
                  <span className="hud-font" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    {m.unit}
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${m.score}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${m.color}, #00f3ff)`,
                      borderRadius: '4px',
                      transition: 'width 0.8s ease'
                    }}
                  />
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: m.color, shrink: 0, marginTop: '3px' }} />
                <span>{m.desc}</span>
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
