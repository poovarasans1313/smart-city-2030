import React, { useState } from 'react';
import { MAP_MARKERS } from '../data/cityData';
import { MapPin, Navigation, Compass, Crosshair } from 'lucide-react';

export default function InteractiveMap({ onSelectMarker }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'Hospital', 'Traffic', 'Energy', 'Water', 'Park', 'EV Charging', 'Smart Building', 'Emergency'];

  const filteredMarkers = activeFilter === 'ALL'
    ? MAP_MARKERS
    : MAP_MARKERS.filter((m) => m.type === activeFilter);

  const getMarkerColor = (type) => {
    switch (type) {
      case 'Hospital': return '#ff3366';
      case 'Traffic': return '#00ff9d';
      case 'Energy': return '#ffaa00';
      case 'Water': return '#00f3ff';
      case 'EV Charging': return '#00f3ff';
      case 'Emergency': return '#ff3366';
      default: return '#bf00ff';
    }
  };

  return (
    <section id="map" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ marginBottom: '1rem' }}>
            <Compass size={16} />
            <span>GEO-SPATIAL IOT MATRIX</span>
          </div>
          <h2 className="section-title">
            INTERACTIVE CITY <span className="glow-text-cyan">MAP</span>
          </h2>
          <p className="section-subtitle">
            Locate critical municipal infrastructure, emergency response centers, EV hyper-chargers, and IoT monitoring stations across the smart grid.
          </p>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="hud-font"
              style={{
                background: activeFilter === cat ? 'rgba(0, 243, 255, 0.2)' : 'rgba(15, 23, 42, 0.7)',
                border: `1px solid ${activeFilter === cat ? 'var(--color-neon-cyan)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: activeFilter === cat ? 'var(--color-neon-cyan)' : 'var(--color-text-muted)',
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Futuristic Map Canvas Graphic Container */}
        <div
          className="glass-panel"
          style={{
            height: '460px',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'radial-gradient(circle at center, #0a1128 0%, #030712 100%)',
            border: '1px solid var(--color-neon-cyan)'
          }}
        >
          {/* Map Grid Pattern Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `
                linear-gradient(rgba(0, 243, 255, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 243, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Holographic Radar Pulse Animation */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '320px',
              height: '320px',
              transform: 'translate(-50%, -50%)',
              border: '1px dashed rgba(0, 243, 255, 0.25)',
              borderRadius: '50%',
              pointerEvents: 'none',
              animation: 'spin 20s linear infinite'
            }}
          />

          {/* Render Clickable Pins */}
          {filteredMarkers.map((marker) => {
            const pinColor = getMarkerColor(marker.type);
            return (
              <div
                key={marker.id}
                onClick={() => onSelectMarker(marker)}
                style={{
                  position: 'absolute',
                  top: `${marker.lat}%`,
                  left: `${marker.lng}%`,
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  zIndex: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
              >
                {/* Glowing Marker Icon */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(3, 7, 18, 0.9)',
                    border: `2px solid ${pinColor}`,
                    boxShadow: `0 0 15px ${pinColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: pinColor
                  }}
                >
                  <MapPin size={18} />
                </div>
                {/* Tooltip Label */}
                <span
                  className="hud-font"
                  style={{
                    fontSize: '0.65rem',
                    background: 'rgba(3, 7, 18, 0.9)',
                    padding: '0.15rem 0.4rem',
                    borderRadius: '4px',
                    border: `1px solid ${pinColor}60`,
                    color: '#ffffff',
                    marginTop: '4px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {marker.title}
                </span>
              </div>
            );
          })}

          {/* Map Bottom Legend / Helper Text */}
          <div
            style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              right: '15px',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              pointerEvents: 'none'
            }}
          >
            <div className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-neon-cyan)' }}>
              ● CLICK ANY PIN TO VIEW NODE CAPACITY & AI MONITORING METRICS
            </div>
            <div className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              SECTOR GRID: 35.4° N, 139.6° E
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
