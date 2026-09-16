import React, { useState } from 'react';
import { COMMAND_METRICS } from '../data/cityData';
import { RefreshCw, CheckCircle2, Sliders, AlertCircle, Bell, ShieldAlert, Check, Eye, Play } from 'lucide-react';

export default function CommandDashboard({ sosAlerts, onUpdateSosStatus, onTriggerToast }) {
  const [metrics, setMetrics] = useState(COMMAND_METRICS);
  const [refreshing, setRefreshing] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedSosDetails, setSelectedSosDetails] = useState(null);

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'RESPONSE REQUIRED': return 'var(--color-neon-red)';
      case 'ACKNOWLEDGED': return 'var(--color-neon-amber)';
      case 'RESPONDING': return 'var(--color-neon-cyan)';
      case 'RESOLVED': return 'var(--color-neon-green)';
      default: return 'var(--color-neon-cyan)';
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
            Centralized operations dashboard monitoring traffic flow, clean energy grid health, air quality, hydrostatic water telemetry, and active emergency alerts.
          </p>
        </div>

        {/* 🚨 ACTIVE EMERGENCY ALERTS PANEL */}
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2.5rem', border: '1px solid var(--color-neon-red)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldAlert size={22} style={{ color: 'var(--color-neon-red)' }} />
              <h3 className="hud-font glow-text-red" style={{ fontSize: '1.15rem', fontWeight: 'bold', color: 'var(--color-neon-red)' }}>
                🚨 ACTIVE EMERGENCY ALERTS ({sosAlerts ? sosAlerts.length : 0})
              </h3>
            </div>
            <span className="hud-badge" style={{ borderColor: 'var(--color-neon-red)', color: 'var(--color-neon-red)', fontSize: '0.7rem' }}>
              ● REAL-TIME DISPATCH MATRIX
            </span>
          </div>

          {sosAlerts && sosAlerts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.25rem' }}>
              {sosAlerts.map((sos) => {
                const color = getStatusColor(sos.status);
                return (
                  <div
                    key={sos.id}
                    className="glass-card"
                    style={{
                      padding: '1.25rem',
                      borderLeft: `4px solid ${color}`,
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between',
                      background: 'rgba(15, 23, 42, 0.85)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <span className="hud-font glow-text-cyan" style={{ fontSize: '1.05rem', fontWeight: 'bold' }}>
                          {sos.id}
                        </span>
                        <span className="hud-badge" style={{ borderColor: 'var(--color-neon-red)', color: 'var(--color-neon-red)', fontSize: '0.65rem' }}>
                          ● {sos.priority}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', lineHeight: 1.6, marginBottom: '1rem' }}>
                        <div><strong>Zone:</strong> {sos.zone}</div>
                        <div><strong>Time:</strong> {sos.time}</div>
                        <div><strong>Type:</strong> {sos.type}</div>
                        <div style={{ marginTop: '0.3rem' }}>
                          <strong>STATUS:</strong>{' '}
                          <span className="hud-font" style={{ color, fontWeight: 'bold' }}>
                            {sos.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Action Buttons: VIEW DETAILS, ACKNOWLEDGE, RESOLVE */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr 1fr', gap: '0.4rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
                      <button
                        onClick={() => {
                          setSelectedSosDetails(sos);
                          if (onTriggerToast) onTriggerToast(`Viewing details for alert ${sos.id}`);
                        }}
                        className="btn-secondary"
                        style={{ fontSize: '0.72rem', padding: '0.35rem 0.2rem', justifyContent: 'center', whiteSpace: 'nowrap' }}
                      >
                        <Eye size={12} />
                        <span>DETAILS</span>
                      </button>

                      <button
                        onClick={() => onUpdateSosStatus(sos.id, 'ACKNOWLEDGED')}
                        disabled={sos.status === 'ACKNOWLEDGED' || sos.status === 'RESOLVED'}
                        className="btn-secondary"
                        style={{ fontSize: '0.72rem', padding: '0.35rem 0.2rem', justifyContent: 'center', whiteSpace: 'nowrap' }}
                      >
                        <Check size={12} />
                        <span>ACKNOWLEDGE</span>
                      </button>

                      <button
                        onClick={() => onUpdateSosStatus(sos.id, 'RESOLVED')}
                        disabled={sos.status === 'RESOLVED'}
                        className="btn-primary"
                        style={{ fontSize: '0.72rem', padding: '0.35rem 0.2rem', justifyContent: 'center', whiteSpace: 'nowrap' }}
                      >
                        <CheckCircle2 size={12} />
                        <span>RESOLVE</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
              No critical active emergency alerts. All sectors operating normally. Click <strong>🚨 SOS</strong> in header to log a test emergency.
            </div>
          )}
        </div>

        {/* SOS DETAILS MODAL */}
        {selectedSosDetails && (
          <div className="modal-backdrop" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(3,7,18,0.85)', backdropFilter: 'blur(8px)', zIndex: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="glass-panel" style={{ maxWidth: '480px', width: '100%', padding: '1.5rem', border: '1px solid var(--color-neon-cyan)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(0,243,255,0.2)', paddingBottom: '0.5rem' }}>
                <span className="hud-font glow-text-cyan" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                  ALERT DETAILS // {selectedSosDetails.id}
                </span>
                <button onClick={() => setSelectedSosDetails(null)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
                  ✕
                </button>
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                <div><strong>Alert ID:</strong> {selectedSosDetails.id}</div>
                <div><strong>Type:</strong> {selectedSosDetails.type}</div>
                <div><strong>Location:</strong> {selectedSosDetails.zone}</div>
                <div><strong>Time Logged:</strong> {selectedSosDetails.time}</div>
                <div><strong>Priority Level:</strong> <span style={{ color: 'var(--color-neon-red)' }}>{selectedSosDetails.priority}</span></div>
                <div><strong>Current Status:</strong> <span style={{ color: getStatusColor(selectedSosDetails.status) }}>{selectedSosDetails.status}</span></div>
                <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: 'rgba(0,243,255,0.06)', borderRadius: '6px' }}>
                  {selectedSosDetails.details}
                </div>
              </div>
              <button onClick={() => setSelectedSosDetails(null)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>CLOSE DETAILS</span>
              </button>
            </div>
          </div>
        )}

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
