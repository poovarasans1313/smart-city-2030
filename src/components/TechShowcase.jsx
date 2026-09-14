import React from 'react';
import { TECH_CARDS } from '../data/cityData';
import { Cpu, Wifi, Layers, HardDrive, Radio, Cloud, Eye, Bot, Navigation, Database, Sun, Shield, Layers3, ArrowUpRight } from 'lucide-react';

export default function TechShowcase({ onSelectTech }) {
  const getIcon = (name) => {
    switch (name) {
      case 'AI / ML': return <Cpu size={24} className="glow-text-cyan" />;
      case 'Internet of Things': return <Wifi size={24} className="glow-text-green" />;
      case 'Digital Twins': return <Layers size={24} className="glow-text-purple" />;
      case 'Edge Computing': return <HardDrive size={24} className="glow-text-cyan" />;
      case '5G / 6G Network': return <Radio size={24} className="glow-text-amber" />;
      case 'Cloud Computing': return <Cloud size={24} className="glow-text-cyan" />;
      case 'Computer Vision': return <Eye size={24} className="glow-text-green" />;
      case 'Robotics': return <Bot size={24} className="glow-text-purple" />;
      case 'Autonomous Systems': return <Navigation size={24} className="glow-text-cyan" />;
      case 'Big Data Analytics': return <Database size={24} className="glow-text-amber" />;
      case 'Renewable Energy': return <Sun size={24} className="glow-text-amber" />;
      case 'Cybersecurity': return <Shield size={24} className="glow-text-purple" />;
      default: return <Layers3 size={24} className="glow-text-cyan" />;
    }
  };

  return (
    <section className="section-padding grid-bg-overlay" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ marginBottom: '1rem' }}>
            <Cpu size={16} />
            <span>TECHNOLOGY ARCHITECTURE</span>
          </div>
          <h2 className="section-title">
            NEXT-GEN TECH <span className="glow-text-cyan">STACK</span>
          </h2>
          <p className="section-subtitle">
            13 core foundational technologies powering Smart City 2030's intelligent municipal operating system.
          </p>
        </div>

        {/* Tech Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {TECH_CARDS.map((tech) => (
            <div
              key={tech.name}
              className="glass-card"
              onClick={() => onSelectTech(tech)}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  {getIcon(tech.name)}
                  <span className="hud-font glow-text-cyan" style={{ fontSize: '0.7rem' }}>
                    {tech.category}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {tech.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {tech.desc}
                </p>
              </div>

              <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--color-neon-cyan)', fontWeight: 'bold' }}>
                <span>VIEW SPECS</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
