import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';

export default function Footer({ onExplore }) {
  return (
    <footer style={{ background: 'rgba(3, 7, 18, 0.98)', borderTop: '1px solid rgba(0, 243, 255, 0.2)', position: 'relative' }}>
      
      {/* FINAL CTA SECTION */}
      <div className="section-padding grid-bg-overlay" style={{ textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="hud-badge" style={{ marginBottom: '1.25rem' }}>
            <span>THE 2030 VISION</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 'bold', color: '#ffffff', lineHeight: 1.2, marginBottom: '1rem' }}>
            "THE FUTURE IS NOT SOMETHING WE WAIT FOR. <span className="glow-text-cyan">IT IS SOMETHING WE BUILD.</span>"
          </h2>

          <p className="hud-font glow-text-green" style={{ fontSize: '1.2rem', marginBottom: '2rem', letterSpacing: '0.08em' }}>
            SMART CITY 2030 — Connected. Intelligent. Sustainable.
          </p>

          <a href="#hero" className="btn-primary" onClick={onExplore} style={{ fontSize: '1.1rem', padding: '1rem 2.25rem' }}>
            <span>EXPLORE THE FUTURE</span>
            <ArrowUpRight size={22} />
          </a>
        </div>
      </div>

      {/* FOOTER LINKS & INFORMATION */}
      <div className="container" style={{ padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <Cpu size={24} className="glow-text-cyan" />
              <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ffffff' }}>SMART CITY 2030</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              A futuristic digital operating system and real-time command center integrating AI, IoT, Digital Twins, and Clean Energy infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="hud-font glow-text-cyan" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>SYSTEM NAVIGATION</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
              <a href="#dashboard" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Command Dashboard</a>
              <a href="#brain" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>AI Brain Core</a>
              <a href="#digital-twin" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Digital Twin Spatial Mirror</a>
              <a href="#map" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Interactive City Map</a>
            </div>
          </div>

          {/* Core Subsystems */}
          <div>
            <h4 className="hud-font glow-text-cyan" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>INFRASTRUCTURE</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
              <a href="#transport" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Autonomous Mobility Grid</a>
              <a href="#energy" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Net-Zero Energy Grid</a>
              <a href="#environment" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Environmental Telemetry</a>
              <a href="#cybersecurity" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Zero-Trust Cybersecurity</a>
            </div>
          </div>

          {/* Citizen Services */}
          <div>
            <h4 className="hud-font glow-text-cyan" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>CITIZEN PORTAL</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
              <a href="#services" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Report an Urban Issue</a>
              <a href="#services" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Utility Billing & Solar Credit</a>
              <a href="#services" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Emergency SOS Dispatch</a>
              <a href="#roadmap" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>2030 Strategic Roadmap</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          <p style={{ marginBottom: '0.3rem' }}>Built for the future of intelligent cities — SMART CITY 2030 Digital Operating System.</p>
          <p className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-neon-cyan)' }}>
            © 2030 SMART CITY MUNICIPAL COMMAND CENTER. ALL SYSTEMS OPTIMAL.
          </p>
        </div>
      </div>
    </footer>
  );
}
