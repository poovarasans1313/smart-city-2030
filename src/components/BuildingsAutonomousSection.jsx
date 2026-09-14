import React from 'react';
import { SMART_BUILDINGS, AUTONOMOUS_STATS } from '../data/cityData';
import { Building2, Bot, ShieldCheck, Cpu, Plane, Car, Check } from 'lucide-react';

export default function BuildingsAutonomousSection() {
  return (
    <section className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* SMART BUILDINGS SUB-SECTION */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="section-header">
            <div className="hud-badge" style={{ marginBottom: '1rem' }}>
              <Building2 size={16} />
              <span>ZERO-CARBON SMART BUILDINGS</span>
            </div>
            <h2 className="section-title">
              INTELLIGENT URBAN <span className="glow-text-cyan">STRUCTURES</span>
            </h2>
            <p className="section-subtitle">
              Self-regulating HVAC systems, dynamic solar facades, rain harvesting micro-turbines, and biometric security integration.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {SMART_BUILDINGS.map((bldg) => (
              <div key={bldg.name} className="glass-panel" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h3 className="hud-font glow-text-cyan" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                    {bldg.name}
                  </h3>
                  <span className="hud-badge" style={{ borderColor: 'rgba(0,255,157,0.4)', color: 'var(--color-neon-green)', fontSize: '0.7rem' }}>
                    ● ZERO CARBON
                  </span>
                </div>

                {/* Building Telemetry Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div className="glass-card" style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <span className="hud-font" style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>ENERGY EFF.</span>
                    <div className="hud-font glow-text-cyan" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{bldg.energy}%</div>
                  </div>
                  <div className="glass-card" style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <span className="hud-font" style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>WATER EFF.</span>
                    <div className="hud-font glow-text-green" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{bldg.water}%</div>
                  </div>
                  <div className="glass-card" style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <span className="hud-font" style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>OCCUPANCY</span>
                    <div className="hud-font" style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ffffff' }}>{bldg.occupancy}%</div>
                  </div>
                  <div className="glass-card" style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <span className="hud-font" style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>CO₂ REDUCTION</span>
                    <div className="hud-font glow-text-purple" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{bldg.co2}%</div>
                  </div>
                </div>

                {/* Systems Active */}
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                  <strong style={{ color: '#ffffff' }}>ACTIVE SYSTEMS:</strong>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {bldg.systems.map((sys) => (
                    <span
                      key={sys}
                      className="hud-font"
                      style={{
                        fontSize: '0.65rem',
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(0,243,255,0.08)',
                        border: '1px solid rgba(0,243,255,0.2)',
                        borderRadius: '4px',
                        color: 'var(--color-neon-cyan)'
                      }}
                    >
                      ✓ {sys}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AUTONOMOUS FLEET SUB-SECTION */}
        <div>
          <div className="section-header">
            <div className="hud-badge" style={{ borderColor: 'rgba(191,0,255,0.4)', color: 'var(--color-neon-purple)', marginBottom: '1rem' }}>
              <Bot size={16} />
              <span>ROBOTICS & AUTONOMOUS SYSTEMS</span>
            </div>
            <h2 className="section-title">
              AUTONOMOUS <span className="glow-text-purple">FLEET MATRIX</span>
            </h2>
            <p className="section-subtitle">
              Self-guided aerial delivery drones, autonomous shuttle buses, and smart robotic maintenance systems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Plane size={36} className="glow-text-cyan" style={{ marginBottom: '1rem' }} />
              <div className="hud-font glow-text-cyan" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                {AUTONOMOUS_STATS.dronesOnline}
              </div>
              <div className="hud-font" style={{ fontSize: '0.9rem', color: '#ffffff', marginTop: '0.5rem' }}>
                DELIVERY & INSPECTION DRONES ONLINE
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Car size={36} className="glow-text-green" style={{ marginBottom: '1rem' }} />
              <div className="hud-font glow-text-green" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                {AUTONOMOUS_STATS.autonomousVehicles}
              </div>
              <div className="hud-font" style={{ fontSize: '0.9rem', color: '#ffffff', marginTop: '0.5rem' }}>
                AUTONOMOUS ELECTRIC VEHICLES & BUSES
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Bot size={36} className="glow-text-purple" style={{ marginBottom: '1rem' }} />
              <div className="hud-font glow-text-purple" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                {AUTONOMOUS_STATS.robotSystems}
              </div>
              <div className="hud-font" style={{ fontSize: '0.9rem', color: '#ffffff', marginTop: '0.5rem' }}>
                ROBOTIC MAINTENANCE & CLEANING UNITS
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
