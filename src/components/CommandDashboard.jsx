import React, { useState } from 'react';
import { COMMAND_METRICS } from '../data/cityData';
import { RefreshCw, CheckCircle2, Sliders, AlertCircle, Bell, ArrowUpRight } from 'lucide-react';

export default function CommandDashboard({ onTriggerToast }) {
  const [metrics, setMetrics] = useState(COMMAND_METRICS);
  const [refreshing, setRefreshing] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const alerts = [
    { id: 'alt-1', severity: 'red', text: 'Traffic congestion high in Zone 04 Central Corridor.', time: '10:54:12', action: 'Signal duration extended +18 sec' },
    { id: 'alt-2', severity: 'yellow', text: 'Energy demand rising in Zone 02 Residential Sector.', time: '10:52:05', action: 'Releasing 0.4 GW battery reserve' },
    { id: 'alt-3', severity: 'green', text: 'Air quality improved across Zone 07 Bio-Corridor.', time: '10:48:30', action: 'Scrubber speed normalized' },
    { id: 'alt-4', severity: 'blue', text: 'EV Hyper-Charger station available in Zone 05.', time: '10:45:18', action: '18 Charging ports ready' }
  ];

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
      if (onTriggerToast) onTriggerToast("City Command telemetry re-synchronized across all 12 sectors.");
    }, 600);
  };

  const handleAlertClick = (alert) => {
    if (onTriggerToast) {
      onTriggerToast(`Alert Details [${alert.time}]: ${alert.text} (${alert.action})`);
    }
  };

  const filteredMetrics = activeFilter === 'ALL'
    ? metrics
    : metrics.filter((m) => m.id === activeFilter.toLowerCase());

  return (
    <section id="dashboard" className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ marginBottom: '1rem' }}>
            <span>MUNICIPAL OPERATIONS CONTROL</span>
          </div>
          <h2 className="section-title">
            CITY COMMAND <span className="glow-text-cyan">CENTER</span>
          </h2>
          <p className="section-subtitle">
            Centralized operations dashboard monitoring traffic flow, clean energy grid health, air quality, hydrostatic water telemetry, and public safety.
          </p>
        </div>

        {/* Smart Alert Panel Header */}
        <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', marginBottom: '2.5rem', border: '1px solid rgba(0,243,255,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bell size={18} className="glow-text-cyan" />
              <span className="hud-font glow-text-cyan" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                SMART ALERT SYSTEM // LIVE INCIDENTS
              </span>
            </div>
            <span className="hud-badge" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
              ● 4 ACTIVE NOTIFICATIONS
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem' }}>
            {alerts.map((alt) => {
              const color = alt.severity === 'red' ? 'var(--color-neon-red)' : alt.severity === 'yellow' ? 'var(--color-neon-amber)' : alt.severity === 'green' ? 'var(--color-neon-green)' : 'var(--color-neon-cyan)';
              return (
                <div
                  key={alt.id}
                  onClick={() => handleAlertClick(alt)}
                  className="glass-card"
                  style={{
                    padding: '0.75rem 1rem',
                    cursor: 'pointer',
                    borderLeft: `4px solid ${color}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.2rem' }}>
                    <span style={{ color }}>● {alt.severity.toUpperCase()} ALERT</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>[{alt.time}]</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-main)', fontWeight: 'bold' }}>
                    {alt.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Controls & Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {['ALL', 'Traffic', 'Energy', 'Environment', 'Water', 'Safety'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="hud-font"
                style={{
                  background: activeFilter === cat ? 'rgba(0, 243, 255, 0.2)' : 'rgba(15, 23, 42, 0.7)',
                  border: `1px solid ${activeFilter === cat ? 'var(--color-neon-cyan)' : 'rgba(255, 255, 255, 0.1)'}`,
                  color: activeFilter === cat ? 'var(--color-neon-cyan)' : 'var(--color-text-muted)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={handleSimulateUpdate}
            className="btn-secondary"
            style={{ fontSize: '0.88rem', padding: '0.45rem 1.1rem' }}
          >
            <RefreshCw size={16} style={{ animation: refreshing ? 'spin 1s linear infinite' : 'none' }} />
            <span>RE-SYNC TELEMETRY</span>
          </button>
        </div>

        {/* Metric Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {filteredMetrics.map((m) => (
            <div key={m.id} className="glass-panel" style={{ padding: '1.75rem', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <span className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>
                    METRIC // {m.id.toUpperCase()}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginTop: '0.2rem' }}>
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
