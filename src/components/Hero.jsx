import React, { useEffect, useState } from 'react';
import { CITY_STATS } from '../data/cityData';
import { ArrowRight, Activity, ShieldCheck, Cpu, Zap, Lock, Droplets } from 'lucide-react';

export default function Hero({ onExplore, onOpenDashboard }) {
  // Animated counters logic
  const [counts, setCounts] = useState(CITY_STATS.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(
        CITY_STATS.map((item) => {
          return parseFloat((item.value * Math.min(progress, 1)).toFixed(1));
        })
      );
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={22} className="glow-text-cyan" />;
      case 'Activity': return <Activity size={22} className="glow-text-green" />;
      case 'ShieldCheck': return <ShieldCheck size={22} className="glow-text-purple" />;
      case 'Zap': return <Zap size={22} className="glow-text-cyan" />;
      case 'Lock': return <Lock size={22} className="glow-text-green" />;
      case 'Droplets': return <Droplets size={22} className="glow-text-cyan" />;
      default: return <Cpu size={22} />;
    }
  };

  return (
    <section id="hero" style={{ paddingTop: '110px', paddingBottom: '4rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
      <div className="container">
        
        {/* Live HUD Badges Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem', justifyContent: 'center' }}>
          <div className="hud-badge">
            <span className="pulse-dot" style={{ color: 'var(--color-neon-green)' }} />
            <span>CITY SYSTEMS ONLINE</span>
          </div>
          <div className="hud-badge" style={{ borderColor: 'rgba(191,0,255,0.4)', color: 'var(--color-neon-purple)' }}>
            <span className="pulse-dot" style={{ color: 'var(--color-neon-purple)' }} />
            <span>AI MONITORING ACTIVE</span>
          </div>
          <div className="hud-badge">
            <span className="pulse-dot" style={{ color: 'var(--color-neon-cyan)' }} />
            <span>IoT NETWORK CONNECTED</span>
          </div>
          <div className="hud-badge" style={{ borderColor: 'rgba(0,255,157,0.4)', color: 'var(--color-neon-green)' }}>
            <span className="pulse-dot" style={{ color: 'var(--color-neon-green)' }} />
            <span>CLEAN ENERGY FLOWING</span>
          </div>
        </div>

        {/* Hero Central Text */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.02em', textShadow: '0 0 40px rgba(0,243,255,0.3)' }}>
            SMART CITY <span className="glow-text-cyan">2030</span>
          </h1>

          <p className="hud-font glow-text-green" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            "Building a Connected, Intelligent & Sustainable Future"
          </p>

          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            Welcome to Smart City 2030 — a connected urban ecosystem where artificial intelligence, IoT, clean energy and intelligent infrastructure work together to create a safer, greener and more efficient future.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <a href="#digital-twin" className="btn-primary" onClick={onExplore}>
              <span>EXPLORE THE CITY</span>
              <ArrowRight size={20} />
            </a>

            <a href="#dashboard" className="btn-secondary" onClick={onOpenDashboard}>
              <span>OPEN LIVE DASHBOARD</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Animated Live City Statistics Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
          {CITY_STATS.map((stat, idx) => (
            <div key={stat.label} className="glass-card" style={{ textCenter: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="hud-font" style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em' }}>
                  {stat.label}
                </span>
                {getIcon(stat.icon)}
              </div>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                {counts[idx]}
                <span style={{ fontSize: '1.2rem', marginLeft: '0.1rem' }}>{stat.suffix}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-neon-green)' }}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
