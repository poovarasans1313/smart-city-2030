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
  Siren,
  Sun,
  Moon
} from 'lucide-react';

export default function Navbar({ onOpenEmergency, onOpenAria, theme, onToggleTheme }) {
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
        background: scrolled ? (theme === 'light' ? 'rgba(255, 255, 255, 0.94)' : 'rgba(3, 7, 18, 0.94)') : (theme === 'light' ? 'rgba(241, 245, 249, 0.85)' : 'rgba(10, 16, 31, 0.75)'),
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 243, 255, 0.2)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px', maxWidth: '1440px', padding: '0 1rem' }}>
        
        {/* Brand / Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--color-text-main)', flexShrink: 0 }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, rgba(0,243,255,0.3), rgba(191,0,255,0.3))',
            border: '1px solid var(--color-neon-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-neon-cyan)',
            boxShadow: '0 0 15px rgba(0,243,255,0.2)'
          }}>
            <Cpu size={20} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '1.05rem', fontWeight: 'bold', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>SMART CITY</span>
            <span className="hud-font glow-text-cyan" style={{ fontSize: '0.75rem', marginLeft: '0.3rem', padding: '0.08rem 0.3rem', border: '1px solid rgba(0,243,255,0.4)', borderRadius: '4px' }}>2030</span>
          </div>
        </a>

        {/* Live Clock & System Status Indicator */}
        <div className="hud-font nav-clock-status" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-neon-green)' }}>
            <span className="pulse-dot" />
            <span className="hud-badge" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem' }}>ONLINE</span>
          </div>
          <div style={{ color: 'var(--color-text-muted)', borderLeft: '1px solid rgba(255,255,255,0.12)', paddingLeft: '0.65rem' }}>
            <span style={{ color: 'var(--color-neon-cyan)' }}>UTC: </span>
            <span>{currentTime || '12:00:47'}</span>
          </div>
        </div>

        {/* Desktop Navigation Links with Line Icons */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            gap: '0.35rem',
            alignItems: 'center',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            maxWidth: '100%',
            padding: '0 0.25rem'
          }}
        >
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
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.45rem',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <IconComponent size={15} style={{ color: 'var(--color-neon-cyan)', transition: 'transform 0.2s ease', flexShrink: 0 }} className="nav-icon" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Theme Switcher + SOS Alert */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          
          {/* Dark / Light Theme Toggle Switch */}
          <button
            onClick={onToggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
            style={{
              background: 'rgba(0, 243, 255, 0.1)',
              border: '1px solid rgba(0, 243, 255, 0.3)',
              color: 'var(--color-neon-cyan)',
              padding: '0.35rem 0.6rem',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-hud)',
              fontWeight: 'bold',
              transition: 'all 0.25s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={15} style={{ color: '#ffaa00' }} /> : <Moon size={15} style={{ color: '#7c3aed' }} />}
            <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
          </button>

          {/* SOS Alert Button */}
          <button
            onClick={onOpenEmergency}
            style={{
              background: 'rgba(255, 51, 102, 0.15)',
              border: '1px solid var(--color-neon-red)',
              color: 'var(--color-neon-red)',
              padding: '0.4rem 0.75rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              fontWeight: 'bold',
              fontFamily: 'var(--font-primary)',
              transition: 'all 0.25s ease',
              boxShadow: '0 0 12px rgba(255, 51, 102, 0.2)',
              whiteSpace: 'nowrap'
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
            <Siren size={15} style={{ color: 'var(--color-neon-red)' }} />
            <span>SOS ALERT</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(0, 243, 255, 0.4)',
              color: 'var(--color-neon-cyan)',
              padding: '0.35rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            top: '68px',
            left: 0,
            width: '100%',
            background: theme === 'light' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(3, 7, 18, 0.97)',
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
        .desktop-nav::-webkit-scrollbar {
          display: none;
        }
        .nav-item-link:hover {
          color: var(--color-text-main) !important;
          background: rgba(0, 243, 255, 0.12) !important;
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.6);
        }
        .nav-item-link:hover .nav-icon {
          transform: scale(1.15);
          filter: drop-shadow(0 0 6px var(--color-neon-cyan));
        }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
        @media (max-width: 1380px) {
          .nav-clock-status { display: none !important; }
        }
        @media (max-width: 1023px) {
          .nav-clock-status { display: none !important; }
          .desktop-nav { display: none !important; }
          .mobile-hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
