import React from 'react';
import { CITIZEN_SERVICES } from '../data/cityData';
import { AlertTriangle, CreditCard, Siren, Bus, Car, Activity, GraduationCap, LandPlot, ArrowRight } from 'lucide-react';

export default function CitizenServices({ onOpenReportModal, onTriggerToast }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'AlertTriangle': return <AlertTriangle size={24} className="glow-text-cyan" />;
      case 'CreditCard': return <CreditCard size={24} className="glow-text-green" />;
      case 'Siren': return <Siren size={24} className="glow-text-purple" style={{ color: 'var(--color-neon-red)' }} />;
      case 'Bus': return <Bus size={24} className="glow-text-cyan" />;
      case 'Car': return <Car size={24} className="glow-text-amber" />;
      case 'Activity': return <Activity size={24} className="glow-text-green" />;
      default: return <LandPlot size={24} className="glow-text-cyan" />;
    }
  };

  const handleCardClick = (service) => {
    if (service.id === 'report') {
      onOpenReportModal();
    } else {
      if (onTriggerToast) {
        onTriggerToast(`Accessing Citizen Portal: ${service.title}`);
      }
    }
  };

  return (
    <section id="services" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ marginBottom: '1rem' }}>
            <LandPlot size={16} />
            <span>CITIZEN DIGITAL OS</span>
          </div>
          <h2 className="section-title">
            YOUR CITY. <span className="glow-text-cyan">AT YOUR FINGERTIPS.</span>
          </h2>
          <p className="section-subtitle">
            Seamless digital municipal services. File reports, pay clean energy micro-bills, access autonomous transit, and consult AI health assistants.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {CITIZEN_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="glass-card"
              onClick={() => handleCardClick(serv)}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  {getIcon(serv.icon)}
                  <span className="hud-badge" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                    ONLINE PORTAL
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {serv.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {serv.desc}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-neon-cyan)', fontSize: '0.95rem', fontWeight: 'bold' }}>
                <span>{serv.actionText}</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
