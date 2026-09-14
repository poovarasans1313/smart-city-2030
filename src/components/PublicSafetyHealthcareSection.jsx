import React from 'react';
import { ShieldAlert, HeartPulse, Siren, Clock, Activity, Flame, Eye, Radio } from 'lucide-react';

export default function PublicSafetyHealthcareSection({ onOpenEmergencyModal }) {
  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* PUBLIC SAFETY SUB-SECTION */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="section-header">
            <div className="hud-badge" style={{ borderColor: 'rgba(255,51,102,0.4)', color: 'var(--color-neon-red)', marginBottom: '1rem' }}>
              <ShieldAlert size={16} />
              <span>AI PUBLIC SAFETY NET</span>
            </div>
            <h2 className="section-title">
              SAFETY THAT <span className="glow-text-cyan">NEVER SLEEPS.</span>
            </h2>
            <p className="section-subtitle">
              Computer vision CCTV monitoring, acoustic gunshot & accident detection, autonomous drone fire dispatch, and rapid emergency response teams.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '2.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.75rem', borderLeft: '4px solid var(--color-neon-red)' }}>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '0.8rem' }}>MUNICIPAL SAFETY SCORE</div>
              <div className="hud-font" style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#ffffff' }}>96%</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Zero major critical breaches reported today.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', borderLeft: '4px solid var(--color-neon-cyan)' }}>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '0.8rem' }}>AVERAGE DISPATCH RESPONSE</div>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '2.8rem', fontWeight: 'bold' }}>4.2 MIN</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Aerial medical & police drones on constant standby.</p>
            </div>
          </div>

          {/* Trigger Active Emergency Simulation Banner */}
          <div
            className="glass-panel"
            style={{
              padding: '1.5rem 2rem',
              border: '1px solid var(--color-neon-red)',
              background: 'rgba(255,51,102,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Siren size={28} className="glow-text-purple" style={{ color: 'var(--color-neon-red)' }} />
              <div>
                <span className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-neon-red)' }}>SIMULATION DISPATCH CENTER</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffffff' }}>TEST EMERGENCY RESPONSE PROTOCOL</h4>
              </div>
            </div>

            <button
              onClick={onOpenEmergencyModal}
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, rgba(255,51,102,0.3), rgba(191,0,255,0.3))',
                borderColor: 'var(--color-neon-red)',
                fontSize: '0.9rem'
              }}
            >
              <ShieldAlert size={18} />
              <span>SIMULATE ZONE 07 INCIDENT →</span>
            </button>
          </div>
        </div>

        {/* SMART HEALTHCARE SUB-SECTION */}
        <div>
          <div className="section-header">
            <div className="hud-badge" style={{ borderColor: 'rgba(0,255,157,0.4)', color: 'var(--color-neon-green)', marginBottom: '1rem' }}>
              <HeartPulse size={16} />
              <span>INTELLIGENT HEALTHCARE NETWORK</span>
            </div>
            <h2 className="section-title">
              PREDICTIVE <span className="glow-text-green">CITIZEN HEALTHCARE</span>
            </h2>
            <p className="section-subtitle">
              Encrypted biometric bio-vitals streaming, smart hospital bed routing, and autonomous bio-transport ambulances.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            <div className="glass-panel" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <Activity size={32} className="glow-text-green" style={{ marginBottom: '0.5rem' }} />
              <div className="hud-font glow-text-cyan" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>82%</div>
              <div className="hud-font" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>HOSPITAL CAPACITY</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <Siren size={32} className="glow-text-cyan" style={{ marginBottom: '0.5rem' }} />
              <div className="hud-font glow-text-cyan" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>24</div>
              <div className="hud-font" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>AMBULANCES ACTIVE</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <Clock size={32} className="glow-text-purple" style={{ marginBottom: '0.5rem' }} />
              <div className="hud-font glow-text-purple" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>6.2 MIN</div>
              <div className="hud-font" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>AVERAGE MEDICAL RESPONSE</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
