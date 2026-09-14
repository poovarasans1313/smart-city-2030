import React from 'react';
import { ENERGY_FLOW } from '../data/cityData';
import { Zap, Sun, Wind, BatteryCharging, Shield, ArrowRight } from 'lucide-react';

export default function EnergyGridSection() {
  const energyTypes = [
    { title: 'SOLAR POWER', share: ENERGY_FLOW.solar, color: 'var(--color-neon-amber)', icon: Sun },
    { title: 'WIND POWER', share: ENERGY_FLOW.wind, color: 'var(--color-neon-cyan)', icon: Wind },
    { title: 'GRID RESERVES', share: ENERGY_FLOW.grid, color: 'var(--color-neon-purple)', icon: Zap }
  ];

  const flowNodes = ['SOLAR / WIND MATRIX', 'SMART GRID', 'COMMERCIAL TOWERS', 'RESIDENTIAL HOMES', 'EV HYPER-CHARGERS'];

  return (
    <section id="energy" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ borderColor: 'rgba(255,170,0,0.4)', color: 'var(--color-neon-amber)', marginBottom: '1rem' }}>
            <Zap size={16} />
            <span>NET-ZERO CLEAN ENERGY GRID</span>
          </div>
          <h2 className="section-title">
            POWERING A <span className="glow-text-cyan">CLEANER TOMORROW.</span>
          </h2>
          <p className="section-subtitle">
            Dynamic AI energy balancing, solar building glass, offshore wind micro-turbines, and continuous battery storage telemetry yielding 2.8 GW capacity.
          </p>
        </div>

        {/* Energy Share Breakdown Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '3.5rem' }}>
          {energyTypes.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-panel" style={{ padding: '1.75rem', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="hud-font" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    SOURCE // {item.title}
                  </span>
                  <Icon size={24} style={{ color: item.color }} />
                </div>
                <div className="hud-font" style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {item.share}%
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${item.share}%`, height: '100%', background: item.color, borderRadius: '3px' }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Battery Storage & Flow Diagram Card */}
        <div className="glass-panel" style={{ padding: '2.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BatteryCharging size={24} className="glow-text-green" />
              <div>
                <span className="hud-font glow-text-green" style={{ fontSize: '0.8rem' }}>BATTERY RESERVE STORAGE</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ffffff' }}>0.6 GW LITHIUM-AIR BANK ACTIVE</h3>
              </div>
            </div>

            <div className="hud-badge" style={{ borderColor: 'rgba(0,255,157,0.4)', color: 'var(--color-neon-green)' }}>
              ● 98.4% STORAGE HEALTH
            </div>
          </div>

          {/* Energy Distribution Flow Diagram */}
          <div className="hud-font" style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            DYNAMIC POWER ROUTING SCHEMATIC
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', alignItems: 'center' }}>
            {flowNodes.map((node, i) => (
              <React.Fragment key={node}>
                <div
                  className="glass-card"
                  style={{
                    textAlign: 'center',
                    padding: '1rem 0.5rem',
                    border: '1px solid rgba(0,243,255,0.3)',
                    background: 'rgba(0,243,255,0.05)'
                  }}
                >
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-neon-cyan)' }}>NODE {i + 1}</span>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ffffff', marginTop: '0.2rem' }}>
                    {node}
                  </div>
                </div>
                {i < flowNodes.length - 1 && (
                  <div style={{ textAlign: 'center', color: 'var(--color-neon-cyan)' }}>
                    <ArrowRight size={18} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
