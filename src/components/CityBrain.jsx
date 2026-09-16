import React, { useState } from 'react';
import { AI_PREDICTIONS } from '../data/cityData';
import { Cpu, AlertCircle, CheckCircle2, Info, Search, Eye, Play } from 'lucide-react';

export default function CityBrain({ onTriggerToast }) {
  const [predictions, setPredictions] = useState(AI_PREDICTIONS);
  const [activeActionId, setActiveActionId] = useState(null);

  const handleAnalyze = (pred) => {
    if (onTriggerToast) {
      onTriggerToast(`AI Analyzing Sector Telemetry for Insight #${pred.id}...`);
    }
  };

  const handleViewRecommendation = (pred) => {
    if (onTriggerToast) {
      onTriggerToast(`AI Recommendation for Insight #${pred.id}: "${pred.action}"`);
    }
  };

  const handleTakeAction = (pred) => {
    setActiveActionId(pred.id);
    setTimeout(() => {
      setActiveActionId(null);
      if (onTriggerToast) {
        onTriggerToast(`SIMULATED AI ACTION EXECUTED: Dispatched "${pred.action}"`);
      }
    }, 700);
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'warning': return <AlertCircle size={18} style={{ color: 'var(--color-neon-amber)' }} />;
      case 'success': return <CheckCircle2 size={18} style={{ color: 'var(--color-neon-green)' }} />;
      default: return <Info size={18} style={{ color: 'var(--color-neon-cyan)' }} />;
    }
  };

  const flowSteps = [
    { title: "IoT SENSORS", desc: "12.8K Active Nodes" },
    { title: "CITY PLATFORM", desc: "Edge Processing Mesh" },
    { title: "AI ANALYSIS", desc: "Neural Pattern Detection" },
    { title: "PREDICTION", desc: "Predictive Analytics Models" },
    { title: "SMART DECISION", desc: "Autonomous Optimization" }
  ];

  return (
    <section id="brain" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ borderColor: 'rgba(191,0,255,0.4)', color: 'var(--color-neon-purple)', marginBottom: '1rem' }}>
            <Cpu size={16} />
            <span>SIMULATED AI INSIGHT ENGINE</span>
          </div>
          <h2 className="section-title">
            AI CITY <span className="glow-text-purple">INTELLIGENCE</span>
          </h2>
          <p className="section-subtitle">
            Millions of municipal data points synthesized into actionable autonomous decisions through advanced artificial intelligence models.
          </p>
        </div>

        {/* Visual Workflow Pipeline */}
        <div className="glass-panel" style={{ padding: '2.25rem', marginBottom: '3.5rem' }}>
          <div className="hud-font" style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-neon-purple)', letterSpacing: '0.1em', marginBottom: '1.75rem' }}>
            ◆ AUTONOMOUS DECISION PIPELINE ◆
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.25rem', alignItems: 'center' }}>
            {flowSteps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <div
                  className="glass-card"
                  style={{
                    textAlign: 'center',
                    padding: '1.25rem 0.75rem',
                    border: '1px solid rgba(191,0,255,0.3)',
                    background: 'rgba(191,0,255,0.06)'
                  }}
                >
                  <span className="hud-font glow-text-cyan" style={{ fontSize: '0.72rem' }}>
                    PHASE 0{idx + 1}
                  </span>
                  <h4 className="hud-font" style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-text-main)', margin: '0.3rem 0' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    {step.desc}
                  </p>
                </div>
                {idx < flowSteps.length - 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--color-neon-purple)' }} className="flow-arrow">
                    <span className="hud-font" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>→</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Live AI Insights & Functional Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {predictions.map((pred) => (
            <div key={pred.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {getSeverityIcon(pred.severity)}
                    <span className="hud-font" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      INSIGHT #{pred.id}
                    </span>
                  </div>
                  <span className="hud-badge" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem', borderColor: 'rgba(191,0,255,0.4)', color: 'var(--color-neon-purple)' }}>
                    SIMULATED AI INSIGHT
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-main)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  "{pred.text}"
                </p>
              </div>

              <div style={{ paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.85rem' }}>
                  <strong style={{ color: 'var(--color-neon-cyan)' }}>RECOMMENDATION:</strong> {pred.action}
                </div>

                {/* 3 Interactive Buttons: ANALYZE, VIEW RECOMMENDATION, TAKE ACTION */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.4rem' }}>
                  <button
                    onClick={() => handleAnalyze(pred)}
                    className="btn-secondary"
                    style={{ fontSize: '0.72rem', padding: '0.4rem 0.2rem', justifyContent: 'center', whiteSpace: 'nowrap' }}
                  >
                    <Search size={12} />
                    <span>ANALYZE</span>
                  </button>

                  <button
                    onClick={() => handleViewRecommendation(pred)}
                    className="btn-secondary"
                    style={{ fontSize: '0.72rem', padding: '0.4rem 0.2rem', justifyContent: 'center', whiteSpace: 'nowrap' }}
                  >
                    <Eye size={12} />
                    <span>REC.</span>
                  </button>

                  <button
                    onClick={() => handleTakeAction(pred)}
                    disabled={activeActionId === pred.id}
                    className="btn-primary"
                    style={{ fontSize: '0.72rem', padding: '0.4rem 0.2rem', justifyContent: 'center', whiteSpace: 'nowrap' }}
                  >
                    <Play size={12} />
                    <span>{activeActionId === pred.id ? 'EXECUTING...' : 'ACTION'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .flow-arrow { transform: rotate(90deg); margin: 0.5rem 0; }
        }
      `}</style>
    </section>
  );
}
