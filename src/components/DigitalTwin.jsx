import React, { useState } from 'react';
import { DIGITAL_TWIN_LAYERS } from '../data/cityData';
import { Layers, Eye, Radio, Sparkles, Activity } from 'lucide-react';

export default function DigitalTwin({ onTriggerToast }) {
  const [activeLayerId, setActiveLayerId] = useState('live');
  const activeLayer = DIGITAL_TWIN_LAYERS.find((l) => l.id === activeLayerId) || DIGITAL_TWIN_LAYERS[0];

  const handleLayerSelect = (layer) => {
    setActiveLayerId(layer.id);
    if (onTriggerToast) onTriggerToast(`Digital Twin view updated: ${layer.name}`);
  };

  return (
    <section id="digital-twin" className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ borderColor: 'rgba(0,255,157,0.4)', color: 'var(--color-neon-green)', marginBottom: '1rem' }}>
            <Layers size={16} />
            <span>3D SPATIAL SIMULATION ENGINE</span>
          </div>
          <h2 className="section-title">
            A DIGITAL COPY OF THE <span className="glow-text-green">CITY</span>.
          </h2>
          <p className="section-subtitle">
            Explore a living digital twin that mirrors transportation, energy, environment, hydrostatic water pressure, and emergency response nodes in real time.
          </p>
        </div>

        {/* Interactive Layer Selector Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {DIGITAL_TWIN_LAYERS.map((layer) => {
            const isActive = layer.id === activeLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => handleLayerSelect(layer)}
                className="hud-font"
                style={{
                  background: isActive ? `rgba(${layer.id === 'live' ? '0,243,255' : '0,255,157'}, 0.2)` : 'rgba(15, 23, 42, 0.7)',
                  border: `1px solid ${isActive ? layer.color : 'rgba(255,255,255,0.15)'}`,
                  color: isActive ? layer.color : 'var(--color-text-muted)',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? `0 0 20px ${layer.color}40` : 'none'
                }}
              >
                <Radio size={14} style={{ color: isActive ? layer.color : 'inherit' }} />
                <span>{layer.name}</span>
              </button>
            );
          })}
        </div>

        {/* 2D/3D Isometric City Simulation Display Card */}
        <div className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
          
          {/* Top Canvas Bar Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Eye size={20} style={{ color: activeLayer.color }} />
              <span className="hud-font glow-text-cyan" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                TWIN VIEW: {activeLayer.name}
              </span>
            </div>
            <div className="hud-font" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              SYNC LATENCY: <span style={{ color: 'var(--color-neon-green)' }}>1.2 ms</span> | FPS: <span style={{ color: 'var(--color-neon-cyan)' }}>60</span>
            </div>
          </div>

          {/* Interactive Visual Canvas Graphic */}
          <div
            style={{
              width: '100%',
              height: '380px',
              borderRadius: '10px',
              background: 'radial-gradient(ellipse at center, rgba(10, 25, 47, 0.9), rgba(3, 7, 18, 0.98))',
              border: `1px solid ${activeLayer.color}40`,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Animated Grid Floor */}
            <div
              style={{
                position: 'absolute',
                width: '200%',
                height: '200%',
                backgroundImage: `linear-gradient(${activeLayer.color}15 1px, transparent 1px), linear-gradient(90deg, ${activeLayer.color}15 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg)',
                top: '-50%'
              }}
            />

            {/* Glowing City Isometric Building Blocks */}
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '2rem', alignItems: 'flex-end', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem' }}>
              
              {/* Building Node 1 */}
              <div style={{ width: '80px', height: '180px', background: `linear-gradient(180deg, ${activeLayer.color}40, rgba(15,23,42,0.9))`, border: `1px solid ${activeLayer.color}`, borderRadius: '6px 6px 0 0', position: 'relative', boxShadow: `0 0 30px ${activeLayer.color}30` }}>
                <div style={{ position: 'absolute', top: '10px', left: '10px', width: '8px', height: '8px', background: activeLayer.color, borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '15px', width: '100%', textAlign: 'center', fontSize: '0.65rem' }} className="hud-font">SECTOR A</div>
              </div>

              {/* Building Node 2 (Tower) */}
              <div style={{ width: '100px', height: '260px', background: `linear-gradient(180deg, ${activeLayer.color}60, rgba(15,23,42,0.9))`, border: `1px solid ${activeLayer.color}`, borderRadius: '8px 8px 0 0', position: 'relative', boxShadow: `0 0 40px ${activeLayer.color}40` }}>
                <div style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', background: '#ffffff', borderRadius: '50%', boxShadow: '0 0 15px #ffffff' }} />
                <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center', fontSize: '0.7rem' }} className="hud-font glow-text-cyan">HQ TOWER</div>
              </div>

              {/* Building Node 3 */}
              <div style={{ width: '75px', height: '140px', background: `linear-gradient(180deg, ${activeLayer.color}30, rgba(15,23,42,0.9))`, border: `1px solid ${activeLayer.color}`, borderRadius: '6px 6px 0 0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', background: activeLayer.color, borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center', fontSize: '0.65rem' }} className="hud-font">NODE C</div>
              </div>

              {/* Moving Light Trail Data Wave */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '10%',
                  width: '80%',
                  height: '4px',
                  background: `linear-gradient(90deg, transparent, ${activeLayer.color}, transparent)`,
                  boxShadow: `0 0 20px ${activeLayer.color}`,
                  animation: 'pulse-ring 2s infinite ease-in-out'
                }}
              />
            </div>

            {/* Overlay Status Description Box */}
            <div
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                right: '15px',
                padding: '0.85rem 1.25rem',
                background: 'rgba(3, 7, 18, 0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem',
                zIndex: 3
              }}
            >
              <div style={{ fontSize: '0.92rem', color: '#ffffff' }}>
                <span className="hud-font glow-text-cyan" style={{ fontSize: '0.8rem', marginRight: '0.5rem' }}>ACTIVE LAYER TELEMETRY:</span>
                {activeLayer.desc}
              </div>
              <span className="hud-badge" style={{ borderColor: activeLayer.color, color: activeLayer.color }}>
                ● REAL-TIME STREAMING
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
