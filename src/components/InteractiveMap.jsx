import React, { useState } from 'react';
import { MAP_MARKERS } from '../data/cityData';
import { MapPin, Compass, Navigation, Zap, Droplets, Wind, Siren, Lightbulb } from 'lucide-react';

export default function InteractiveMap({ onSelectMarker }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'Traffic', 'Energy', 'Water', 'Pollution', 'Smart Lighting', 'EV Charging', 'Emergency', 'Hospital'];

  // Map markers extended dataset
  const mapData = [
    { id: 'zone-04', type: 'Traffic', title: 'ZONE 04 — CENTRAL CORRIDOR', lat: 45, lng: 35, status: 'HIGH DENSITY', metrics: { traffic: 'HIGH', airQuality: 'GOOD', smartSignals: 'ACTIVE' }, aiRec: 'Optimize signal timing during peak traffic (+18 sec green light).' },
    { id: 'nrg-02', type: 'Energy', title: 'ZONE 02 — SOLAR HUB', lat: 25, lng: 65, status: 'GENERATING', metrics: { output: '1.4 GW', battery: '92%', gridSync: 'STABLE' }, aiRec: 'Shift non-critical loads to renewable storage peak hours.' },
    { id: 'wtr-01', type: 'Water', title: 'ZONE 01 — RESERVOIR DELTA', lat: 70, lng: 50, status: 'HEALTHY', metrics: { level: '82%', purity: '98%', acousticCheck: 'CLEAR' }, aiRec: 'Schedule micro-flush maintenance at 02:00 UTC.' },
    { id: 'pol-07', type: 'Pollution', title: 'ZONE 07 — INDUSTRIAL ECO-CENTER', lat: 60, lng: 75, status: 'MONITORING', metrics: { aqi: 42, co2Scrub: '94%', bioFiltration: 'ACTIVE' }, aiRec: 'Increase bio-filtration scrubber RPM to maintain optimal AQI.' },
    { id: 'ev-05', type: 'EV Charging', title: 'ZONE 05 — HYPER-CHARGE PLAZA', lat: 35, lng: 20, status: 'ACTIVE', metrics: { availablePorts: 18, totalPorts: 24, load: '75%' }, aiRec: 'Reserve 4 charging ports for incoming autonomous transit shuttles.' },
    { id: 'lgt-03', type: 'Smart Lighting', title: 'ZONE 03 — SMART LIGHTING GRID', lat: 55, lng: 60, status: 'EFFICIENT', metrics: { activeLamps: 1420, motionDimming: 'ACTIVE', energySaved: '32%' }, aiRec: 'Enable 40% ambient dimming during zero-pedestrian hours.' },
    { id: 'emg-07', type: 'Emergency', title: 'ZONE 07 — DISASTER & FIRE NODE', lat: 30, lng: 80, status: 'READY', metrics: { responseDrones: 12, readyTime: '2.4 min', status: 'STANDBY' }, aiRec: 'Autonomous response drones prepped for rapid zone dispatch.' }
  ];

  const filteredMarkers = activeFilter === 'ALL'
    ? mapData
    : mapData.filter((m) => m.type === activeFilter);

  const getMarkerColor = (type) => {
    switch (type) {
      case 'Traffic': return 'var(--color-neon-amber)';
      case 'Energy': return 'var(--color-neon-amber)';
      case 'Water': return 'var(--color-neon-cyan)';
      case 'Pollution': return 'var(--color-neon-green)';
      case 'Smart Lighting': return 'var(--color-neon-cyan)';
      case 'EV Charging': return 'var(--color-neon-purple)';
      case 'Emergency': return 'var(--color-neon-red)';
      default: return 'var(--color-neon-cyan)';
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
            Explore live city zones, traffic signals, EV charging plazas, solar nodes, smart lighting, emergency centers, and pollution monitors in real time.
          </p>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: '2rem' }}>
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
                fontSize: '0.78rem',
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
            height: '480px',
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
              width: '340px',
              height: '340px',
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
              ● CLICK ANY LOCATION PIN TO VIEW REAL-TIME ZONE TELEMETRY & AI RECOMMENDATIONS
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
