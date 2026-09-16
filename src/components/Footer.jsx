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

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 'bold', color: 'var(--color-text-main)', lineHeight: 1.2, marginBottom: '1rem' }}>
            "THE FUTURE IS NOT SOMETHING WE WAIT FOR. <span className="glow-text-cyan">IT IS SOMETHING WE BUILD.</span>"
          </h2>

          <p className="hud-font glow-text-green" style={{ fontSize: '1.2rem', marginBottom: '2rem', letterSpacing: '0.08em' }}>
            SMART CITY 2030 — Building a Connected, Intelligent & Sustainable Future
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
              <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>SMART CITY 2030</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              An AI-powered urban platform connecting mobility, energy, environment, safety and citizen services to create smarter and more sustainable cities.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['React', 'Vite', 'AI', 'IoT', 'Data Visualization'].map((tech) => (
                <span
                  key={tech}
                  className="hud-font"
                  style={{
                    fontSize: '0.65rem',
                    padding: '0.15rem 0.45rem',
                    background: 'rgba(0, 243, 255, 0.08)',
                    border: '1px solid rgba(0, 243, 255, 0.25)',
                    borderRadius: '4px',
                    color: 'var(--color-neon-cyan)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="hud-font glow-text-cyan" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>NAVIGATION</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
              <a href="#hero" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</a>
              <a href="#dashboard" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Command Center</a>
              <a href="#solutions" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Smart City Solutions</a>
              <a href="#brain" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>AI City Intelligence</a>
            </div>
          </div>

          {/* Core Subsystems */}
          <div>
            <h4 className="hud-font glow-text-cyan" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>IMPACT & TECH</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
              <a href="#digital-twin" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Digital Twin Spatial Mirror</a>
              <a href="#map" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Interactive City Map</a>
              <a href="#impact" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Vision 2030 Impact</a>
              <a href="#roadmap" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Strategic Roadmap</a>
            </div>
          </div>

          {/* Competition Badge */}
          <div>
            <h4 className="hud-font glow-text-cyan" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>PROJECT STATUS</h4>
            <div className="glass-card" style={{ padding: '1rem' }}>
              <span className="hud-font glow-text-green" style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '0.3rem' }}>
                COMPETITION DEMO PLATFORM
              </span>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                Built as a Smart City 2030 Competition Project to demonstrate AI municipal decision-making.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          <p style={{ marginBottom: '0.3rem' }}>Built as a Smart City 2030 Competition Project • Smart City Municipal Command Platform.</p>
          <p className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-neon-cyan)' }}>
            © 2030 SMART CITY PLATFORM. ALL SYSTEMS OPTIMAL.
          </p>
        </div>
      </div>
    </footer>
  );
}
