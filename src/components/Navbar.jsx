import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Cpu,
  LayoutDashboard,
  Network,
  MapPinned,
  CarFront,
  Zap,
  Leaf,
  ShieldCheck,
  Building2,
  Rocket,
  Siren
} from 'lucide-react';

export default function Navbar({ onOpenEmergency, onOpenAria }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'AI Dashboard', href: '#dashboard', icon: LayoutDashboard },
    { name: 'Digital Twin', href: '#digital-twin', icon: Network },
    { name: 'Interactive Map', href: '#map', icon: MapPinned },
    { name: 'Clean Mobility', href: '#transport', icon: CarFront },
    { name: 'Energy', href: '#energy', icon: Zap },
    { name: 'Environment', href: '#environment', icon: Leaf },
    { name: 'Cybersecurity', href: '#cybersecurity', icon: ShieldCheck },
    { name: 'Services', href: '#services', icon: Building2 },
    { name: '2030 Roadmap', href: '#roadmap', icon: Rocket },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(3, 7, 18, 0.92)' : 'rgba(10, 16, 31, 0.65)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 243, 255, 0.2)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', maxWidth: '1400px' }}>
        
        {/* Brand / Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', color: '#ffffff', flexShrink: 0 }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, rgba(0,243,255,0.3), rgba(191,0,255,0.3))',
            border: '1px solid var(--color-neon-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-neon-cyan)',
            boxShadow: '0 0 15px rgba(0,243,255,0.2)'
          }}>
            <Cpu size={22} />
          </div>
          <div>
            <span style={{ fontSize: '1.15rem', fontWeight: 'bold', letterSpacing: '0.04em' }}>SMART CITY</span>
            <span className="hud-font glow-text-cyan" style={{ fontSize: '0.8rem', marginLeft: '0.35rem', padding: '0.1rem 0.35rem', border: '1px solid rgba(0,243,255,0.4)', borderRadius: '4px' }}>2030</span>
          </div>
        </a>

        {/* Live Clock & System Status Indicator */}
        <div className="hud-font nav-clock-status" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-neon-green)' }}>
            <span className="pulse-dot" />
            <span className="hud-badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.55rem' }}>ONLINE</span>
          </div>
          <div style={{ color: 'var(--color-text-muted)', borderLeft: '1px solid rgba(255,255,255,0.12)', paddingLeft: '0.85rem' }}>
            <span style={{ color: 'var(--color-neon-cyan)' }}>UTC: </span>
            <span>{currentTime || '12:00:47'}</span>
          </div>
        </div>

        {/* Desktop Navigation Links with Line Icons */}
        <nav style={{ display: 'none', gap: '0.9rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="nav-item-link"
                style={{
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.5rem',
                  borderRadius: '6px',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <IconComponent size={17} style={{ color: 'var(--color-neon-cyan)', transition: 'transform 0.2s ease' }} className="nav-icon" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <button
            onClick={onOpenEmergency}
            style={{
              background: 'rgba(255, 51, 102, 0.15)',
              border: '1px solid var(--color-neon-red)',
              color: 'var(--color-neon-red)',
              padding: '0.45rem 0.85rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.82rem',
              fontWeight: 'bold',
              fontFamily: 'var(--font-primary)',
              transition: 'all 0.25s ease',
              boxShadow: '0 0 12px rgba(255, 51, 102, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 51, 102, 0.3)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 51, 102, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 51, 102, 0.15)';
              e.currentTarget.style.boxShadow = '0 0 12px rgba(255, 51, 102, 0.2)';
            }}
          >
            <Siren size={17} style={{ color: 'var(--color-neon-red)' }} />
            <span>SOS ALERT</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(0, 243, 255, 0.4)',
              color: 'var(--color-neon-cyan)',
              padding: '0.4rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            width: '100%',
            background: 'rgba(3, 7, 18, 0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--color-neon-cyan)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.9)'
          }}
        >
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'var(--color-text-main)',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  padding: '0.55rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <IconComponent size={18} style={{ color: 'var(--color-neon-cyan)' }} />
                  <span>{link.name}</span>
                </div>
                <span className="hud-font glow-text-cyan" style={{ fontSize: '0.85rem' }}>→</span>
              </a>
            );
          })}
          <button
            className="btn-primary"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAria();
            }}
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
          >
            <span>LAUNCH ARIA AI ASSISTANT</span>
          </button>
        </div>
      )}

      <style>{`
        .nav-item-link:hover {
          color: #ffffff !important;
          background: rgba(0, 243, 255, 0.1) !important;
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.6);
        }
        .nav-item-link:hover .nav-icon {
          transform: scale(1.15);
          filter: drop-shadow(0 0 6px var(--color-neon-cyan));
        }
        @media (min-width: 1200px) {
          .desktop-nav { display: flex !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
        @media (max-width: 1199px) {
          .nav-clock-status { display: none !important; }
          .desktop-nav { display: none !important; }
          .mobile-hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
