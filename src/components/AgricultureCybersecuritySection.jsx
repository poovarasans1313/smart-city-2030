import React from 'react';
import { CYBERSECURITY_LOGS } from '../data/cityData';
import { ShieldCheck, Sprout, Lock, Terminal, AlertCircle, CheckCircle } from 'lucide-react';

export default function AgricultureCybersecuritySection() {
  const agStats = [
    { label: 'SOIL MOISTURE', value: '74%', status: 'OPTIMAL IRRIGATION' },
    { label: 'CROP HEALTH', value: '91%', status: 'AI MONITORED' },
    { label: 'WATER SAVING', value: '32%', status: 'PRECISION DRIP' }
  ];

  return (
    <section id="cybersecurity" className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* SMART AGRICULTURE SUB-SECTION */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="section-header">
            <div className="hud-badge" style={{ borderColor: 'rgba(0,255,157,0.4)', color: 'var(--color-neon-green)', marginBottom: '1rem' }}>
              <Sprout size={16} />
              <span>PRECISION SMART AGRICULTURE</span>
            </div>
            <h2 className="section-title">
              SUSTAINABLE <span className="glow-text-green">URBAN FARMING</span>
            </h2>
            <p className="section-subtitle">
              IoT soil moisture probes, autonomous crop inspection drones, automated hydroponic drip systems, and AI micro-climate weather forecasting.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {agStats.map((item) => (
              <div key={item.label} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <span className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{item.label}</span>
                <div className="hud-font glow-text-green" style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.2rem 0' }}>
                  {item.value}
                </div>
                <span className="hud-badge" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>● {item.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CYBERSECURITY COMMAND CENTER SUB-SECTION */}
        <div>
          <div className="section-header">
            <div className="hud-badge" style={{ borderColor: 'rgba(191,0,255,0.4)', color: 'var(--color-neon-purple)', marginBottom: '1rem' }}>
              <ShieldCheck size={16} />
              <span>ZERO-TRUST QUANTUM SHIELD</span>
            </div>
            <h2 className="section-title">
              PROTECTING THE <span className="glow-text-purple">DIGITAL CITY.</span>
            </h2>
            <p className="section-subtitle">
              As cities become connected, cybersecurity becomes critical. Intelligent monitoring protects municipal infrastructure, 6G networks, and citizen data.
            </p>
          </div>

          {/* Security Overview Telemetry Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '0.75rem' }}>NETWORK SECURITY</div>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>98.9%</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div className="hud-font glow-text-purple" style={{ fontSize: '0.75rem' }}>THREATS BLOCKED</div>
              <div className="hud-font glow-text-purple" style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>12,482</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div className="hud-font glow-text-green" style={{ fontSize: '0.75rem' }}>ACTIVE MONITORING</div>
              <div className="hud-font glow-text-green" style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>24/7</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '0.75rem' }}>SYSTEM UPTIME</div>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>99.9%</div>
            </div>
          </div>

          {/* Cyber Terminal Log Card */}
          <div className="glass-panel" style={{ padding: '1.75rem', background: 'rgba(3, 7, 18, 0.95)', border: '1px solid rgba(191,0,255,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
              <Terminal size={18} className="glow-text-purple" />
              <span className="hud-font glow-text-purple" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>
                AI THREAT HUNTING LOG // QUANTUM SECURITY MATRIX
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {CYBERSECURITY_LOGS.map((log, idx) => (
                <div key={idx} className="hud-font" style={{ fontSize: '0.82rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>[{log.time}]</span>
                  <span style={{ color: log.severity === 'WARNING' ? 'var(--color-neon-amber)' : 'var(--color-neon-green)' }}>
                    ● [{log.status}]
                  </span>
                  <span style={{ color: '#ffffff', flex: 1 }}>{log.event}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
