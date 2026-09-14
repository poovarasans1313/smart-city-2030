import React, { useState } from 'react';
import { AI_PREDICTIONS } from '../data/cityData';
import { Cpu, ArrowDown, Sparkles, AlertCircle, CheckCircle2, Info, Play } from 'lucide-react';

export default function CityBrain({ onTriggerToast }) {
  const [predictions, setPredictions] = useState(AI_PREDICTIONS);
  const [executingId, setExecutingId] = useState(null);

  const handleExecuteAction = (pred) => {
    setExecutingId(pred.id);
    setTimeout(() => {
      setExecutingId(null);
      if (onTriggerToast) {
        onTriggerToast(`AI Decision executed: "${pred.action}"`);
      }
    }, 800);
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'warning': return <AlertCircle size={18} style={{ color: 'var(--color-neon-amber)' }} />;
      case 'success': return <CheckCircle2 size={18} style={{ color: 'var(--color-neon-green)' }} />;
      default: return <Info size={18} style={{ color: 'var(--color-neon-cyan)' }} />;
    }
  };

  const flowSteps = [
    { title: "CITY DATA", desc: "12.8K IoT Sensors & Streams" },
    { title: "AI ANALYSIS", desc: "Neural Pattern Matching" },
    { title: "PREDICTION", desc: "Predictive Analytics Models" },
    { title: "SMART DECISION", desc: "Optimized Action Selection" },
    { title: "CITY ACTION", desc: "Autonomous Infrastructure Dispatch" }
  ];

  return (
    <section id="brain" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hud-badge" style={{ borderColor: 'rgba(191,0,255,0.4)', color: 'var(--color-neon-purple)', marginBottom: '1rem' }}>
            <Cpu size={16} />
            <span>ARTIFICIAL GENERAL INTELLIGENCE CORE</span>
          </div>
          <h2 className="section-title">
            THE CITY HAS A <span className="glow-text-purple">BRAIN</span>.
          </h2>
          <p className="section-subtitle">
            Millions of data points become meaningful decisions through artificial intelligence, driving autonomous optimization across every city sector.
          </p>
        </div>

        {/* Visual Workflow Pipeline */}
        <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
          <div className="hud-font" style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-neon-purple)', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            ◆ AUTONOMOUS DECISION-MAKING PIPELINE ◆
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', alignItems: 'center' }}>
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
                  <span className="hud-font glow-text-cyan" style={{ fontSize: '0.75rem' }}>
                    STEP 0{idx + 1}
                  </span>
                  <h4 className="hud-font" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffffff', margin: '0.4rem 0' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
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

        {/* Live AI Insights & Action Recommendations Feed */}
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
                  <span className="hud-badge" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                    AI PREDICTION
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', color: '#ffffff', lineHeight: 1.5, marginBottom: '1rem' }}>
                  "{pred.text}"
                </p>
              </div>

              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.6rem' }}>
                  <strong style={{ color: 'var(--color-neon-cyan)' }}>RECOMMENDED ACTION:</strong> {pred.action}
                </div>
                <button
                  onClick={() => handleExecuteAction(pred)}
                  disabled={executingId === pred.id}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem 1rem', justifyContent: 'center' }}
                >
                  <Play size={14} />
                  <span>{executingId === pred.id ? 'DISPATCHING...' : 'EXECUTE ACTION →'}</span>
                </button>
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
