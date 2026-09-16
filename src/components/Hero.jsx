import React, { useEffect, useState } from 'react';
import { ArrowRight, Navigation, Wind, Zap, Droplets, Clock, Activity } from 'lucide-react';

export default function Hero({ onExplore, onOpenDashboard, onSelectMetric }) {
  const liveStats = [
    { id: 'traffic', label: 'TRAFFIC FLOW', value: 82, suffix: '%', icon: Navigation, color: 'var(--color-neon-cyan)', status: 'OPTIMAL', desc: 'AI computer vision adaptive signal timing across 450 municipal intersections.' },
    { id: 'air', label: 'AIR QUALITY', value: 94, suffix: '%', icon: Wind, color: 'var(--color-neon-green)', status: 'HEALTHY (AQI 42)', desc: 'Micro-AQI sensors and vertical bio-forest scrubbers actively filtering particulate matter.' },
    { id: 'energy', label: 'RENEWABLE ENERGY', value: 71, suffix: '%', icon: Zap, color: 'var(--color-neon-amber)', status: 'HIGH YIELD', desc: 'Solar building facade glass, micro-wind turbines, and offshore wave energy matrix.' },
    { id: 'water', label: 'WATER EFFICIENCY', value: 88, suffix: '%', icon: Droplets, color: 'var(--color-neon-cyan)', status: 'EFFICIENT', desc: 'Acoustic pipeline leak detection and dynamic hydrostatic pressure optimization.' },
    { id: 'emergency', label: 'EMERGENCY RESPONSE', value: 2.4, suffix: ' MIN', icon: Clock, color: 'var(--color-neon-red)', status: 'STANDBY', desc: 'Autonomous drone dispatch matrix and priority traffic corridor preemption.' }
  ];

  // Animated counters logic
  const [counts, setCounts] = useState(liveStats.map(() => 0));

  useEffect(() => {
    const duration = 1800;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(
        liveStats.map((item) => {
          return parseFloat((item.value * Math.min(progress, 1)).toFixed(1));
        })
      );
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{ paddingTop: '110px', paddingBottom: '4rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
      <div className="container">
        
        {/* Futuristic Status Badges Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem', justifyContent: 'center' }}>
          <div className="hud-badge">
            <span className="pulse-dot" style={{ color: 'var(--color-neon-green)' }} />
            <span>AI SYSTEM ONLINE</span>
          </div>
          <div className="hud-badge" style={{ borderColor: 'rgba(0,243,255,0.4)', color: 'var(--color-neon-cyan)' }}>
            <span className="pulse-dot" style={{ color: 'var(--color-neon-cyan)' }} />
            <span>CITY NETWORK CONNECTED</span>
          </div>
          <div className="hud-badge" style={{ borderColor: 'rgba(0,255,157,0.4)', color: 'var(--color-neon-green)' }}>
            <span className="pulse-dot" style={{ color: 'var(--color-neon-green)' }} />
            <span>SUSTAINABILITY ACTIVE</span>
          </div>
        </div>

        {/* Hero Central Text */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.02em', textShadow: '0 0 40px rgba(0,243,255,0.35)' }}>
            SMART CITY <span className="glow-text-cyan">2030</span>
          </h1>

          <p className="hud-font glow-text-green" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Building a Connected, Intelligent & Sustainable Future
          </p>

          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            An AI-powered urban platform connecting mobility, energy, environment, safety and citizen services to create smarter and more sustainable cities.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <a href="#solutions" className="btn-primary" onClick={onExplore}>
              <span>EXPLORE CITY</span>
              <ArrowRight size={20} />
            </a>

            <a href="#dashboard" className="btn-secondary" onClick={onOpenDashboard}>
              <span>COMMAND CENTER</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Live City Status Cards with Label SIMULATED DEMO DATA */}
        <div style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="hud-badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>
              SIMULATED DEMO DATA — CLICK METRIC FOR FULL TELEMETRY
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {liveStats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass-card"
                  onClick={() => onSelectMetric && onSelectMetric(stat)}
                  style={{ textAlign: 'center', position: 'relative', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="hud-font" style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>
                      {stat.label}
                    </span>
                    <IconComponent size={20} style={{ color: stat.color }} />
                  </div>
                  <div className="hud-font glow-text-cyan" style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>
                    {counts[idx]}
                    <span style={{ fontSize: '1.1rem', marginLeft: '0.1rem' }}>{stat.suffix}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
