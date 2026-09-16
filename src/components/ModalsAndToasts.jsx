import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, ShieldAlert, AlertTriangle, Send, PhoneCall, AlertOctagon } from 'lucide-react';

export default function ModalsAndToasts({
  activeMarker,
  onCloseMarker,
  emergencyOpen,
  onCloseEmergency,
  onConfirmSendSos,
  createdSosResult,
  onCloseSosResult,
  reportModalOpen,
  onCloseReportModal,
  selectedTech,
  onCloseTech,
  toasts,
  onDismissToast,
  onTriggerToast
}) {
  // ESC Key listener to close active modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeMarker) onCloseMarker();
        if (emergencyOpen) onCloseEmergency();
        if (createdSosResult) onCloseSosResult();
        if (reportModalOpen) onCloseReportModal();
        if (selectedTech) onCloseTech();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMarker, emergencyOpen, createdSosResult, reportModalOpen, selectedTech]);

  // Form State for Citizen Issue Report Modal
  const [issueCategory, setIssueCategory] = useState('Pothole / Road Repair');
  const [issueLocation, setIssueLocation] = useState('District 4 - Central Ave');
  const [issueDesc, setIssueDesc] = useState('');
  const [formError, setFormError] = useState('');

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!issueDesc.trim()) {
      setFormError('Please provide a brief description of the issue.');
      return;
    }
    setFormError('');
    onCloseReportModal();
    setIssueDesc('');
    if (onTriggerToast) {
      onTriggerToast(`Issue report submitted successfully for ${issueLocation}. AI dispatch notified!`);
    }
  };

  return (
    <>
      {/* MAP MARKER DETAIL MODAL */}
      {activeMarker && (
        <div className="modal-backdrop" style={backdropStyle}>
          <div className="glass-panel" style={modalContainerStyle}>
            <div style={modalHeaderStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="hud-badge" style={{ borderColor: 'var(--color-neon-cyan)', color: 'var(--color-neon-cyan)' }}>
                  {activeMarker.type.toUpperCase()}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>
                  {activeMarker.title}
                </h3>
              </div>
              <button onClick={onCloseMarker} style={closeBtnStyle}><X size={20} /></button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div className="hud-font glow-text-cyan" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
                NODE TELEMETRY & CAPACITIES:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.25rem' }}>
                {Object.entries(activeMarker.metrics).map(([key, val]) => (
                  <div key={key} className="glass-card" style={{ padding: '0.75rem' }}>
                    <div className="hud-font" style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                      {key}
                    </div>
                    <div className="hud-font glow-text-cyan" style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>
                      {val}
                    </div>
                  </div>
                ))}
              </div>

              {activeMarker.aiRec && (
                <div className="glass-card" style={{ padding: '0.85rem', marginBottom: '1.25rem', border: '1px solid var(--color-neon-cyan)', background: 'rgba(0,243,255,0.06)' }}>
                  <div className="hud-font glow-text-cyan" style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>SIMULATED AI RECOMMENDATION:</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-main)', marginTop: '0.3rem' }}>
                    "{activeMarker.aiRec}"
                  </div>
                </div>
              )}

              <button onClick={onCloseMarker} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>CLOSE INSPECTION</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🚨 SOS CONFIRMATION MODAL (Prevents Accidental Triggers) */}
      {emergencyOpen && (
        <div className="modal-backdrop" style={backdropStyle}>
          <div className="glass-panel" style={{ ...modalContainerStyle, border: '1px solid var(--color-neon-red)' }}>
            <div style={{ ...modalHeaderStyle, background: 'rgba(255,51,102,0.18)', borderBottom: '1px solid var(--color-neon-red)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <AlertOctagon size={24} style={{ color: 'var(--color-neon-red)' }} />
                <h3 className="hud-font" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-neon-red)' }}>
                  EMERGENCY SOS CONFIRMATION
                </h3>
              </div>
              <button onClick={onCloseEmergency} style={closeBtnStyle}><X size={20} /></button>
            </div>

            <div style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'rgba(255, 51, 102, 0.15)',
                  border: '2px solid var(--color-neon-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  color: 'var(--color-neon-red)',
                  boxShadow: '0 0 25px rgba(255, 51, 102, 0.4)'
                }}
              >
                <ShieldAlert size={28} />
              </div>

              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>
                Are you sure you want to send an emergency alert to the City Command Center?
              </h4>

              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                This action will log a critical SOS alert for <strong>Zone 04 — Demo Location</strong> and initiate emergency dispatch telemetry.
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={onCloseEmergency}
                  className="btn-secondary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <span>CANCEL</span>
                </button>
                <button
                  onClick={() => {
                    onCloseEmergency();
                    onConfirmSendSos();
                  }}
                  className="btn-primary"
                  style={{
                    flex: 1.2,
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(255,51,102,0.5), rgba(191,0,255,0.5))',
                    borderColor: 'var(--color-neon-red)',
                    fontSize: '0.92rem'
                  }}
                >
                  <ShieldAlert size={18} />
                  <span>SEND SOS ALERT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SOS ALERT CREATED RESULT MODAL */}
      {createdSosResult && (
        <div className="modal-backdrop" style={backdropStyle}>
          <div className="glass-panel" style={{ ...modalContainerStyle, border: '1px solid var(--color-neon-cyan)' }}>
            <div style={modalHeaderStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={22} className="glow-text-green" />
                <h3 className="hud-font glow-text-green" style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>
                  ✓ SOS ALERT CREATED
                </h3>
              </div>
              <button onClick={onCloseSosResult} style={closeBtnStyle}><X size={20} /></button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '1.25rem', borderLeft: '4px solid var(--color-neon-red)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="hud-font glow-text-cyan" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                    {createdSosResult.id}
                  </span>
                  <span className="hud-badge" style={{ borderColor: 'var(--color-neon-red)', color: 'var(--color-neon-red)' }}>
                    ● {createdSosResult.priority}
                  </span>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
                  <div><strong>Type:</strong> {createdSosResult.type}</div>
                  <div><strong>Location:</strong> {createdSosResult.zone}</div>
                  <div><strong>Time:</strong> {createdSosResult.time}</div>
                  <div><strong>Status:</strong> <span style={{ color: 'var(--color-neon-amber)' }}>{createdSosResult.status}</span></div>
                </div>
              </div>

              {/* Status Badges & Demo Mode Callout */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-neon-green)', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} />
                  <span>✓ CITY COMMAND CENTER NOTIFIED</span>
                </div>
                
                {createdSosResult.demoMode && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-neon-amber)', fontSize: '0.85rem' }}>
                    <AlertTriangle size={16} />
                    <span>⚠ SMS DEMO MODE — ADMIN SMS SERVICE NOT CONFIGURED</span>
                  </div>
                )}
              </div>

              <button onClick={onCloseSosResult} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>VIEW IN COMMAND CENTER →</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CITIZEN REPORT AN ISSUE MODAL */}
      {reportModalOpen && (
        <div className="modal-backdrop" style={backdropStyle}>
          <div className="glass-panel" style={modalContainerStyle}>
            <div style={modalHeaderStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertTriangle size={20} className="glow-text-cyan" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>
                  REPORT AN URBAN ISSUE
                </h3>
              </div>
              <button onClick={onCloseReportModal} style={closeBtnStyle}><X size={20} /></button>
            </div>

            <form onSubmit={handleReportSubmit} style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label className="hud-font" style={{ display: 'block', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.4rem' }}>
                  ISSUE CATEGORY
                </label>
                <select
                  value={issueCategory}
                  onChange={(e) => setIssueCategory(e.target.value)}
                  style={inputStyle}
                >
                  <option value="Pothole / Road Repair">Pothole / Road Repair</option>
                  <option value="Broken Street Light">Broken Smart Street Light</option>
                  <option value="Water Leak">Water Pipeline Leak</option>
                  <option value="Waste Bin Overflow">Waste Bin Overflow</option>
                  <option value="EV Charger Fault">EV Charger Fault</option>
                </select>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label className="hud-font" style={{ display: 'block', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.4rem' }}>
                  LOCATION
                </label>
                <input
                  type="text"
                  value={issueLocation}
                  onChange={(e) => setIssueLocation(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label className="hud-font" style={{ display: 'block', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.4rem' }}>
                  DESCRIPTION
                </label>
                <textarea
                  rows={3}
                  value={issueDesc}
                  onChange={(e) => setIssueDesc(e.target.value)}
                  placeholder="Provide details for AI dispatch routing..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                {formError && <div style={{ color: 'var(--color-neon-red)', fontSize: '0.8rem', marginTop: '0.4rem' }}>{formError}</div>}
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} />
                <span>SUBMIT REPORT TO AI DISPATCH →</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TECH SPECS MODAL */}
      {selectedTech && (
        <div className="modal-backdrop" style={backdropStyle}>
          <div className="glass-panel" style={modalContainerStyle}>
            <div style={modalHeaderStyle}>
              <div>
                <span className="hud-font glow-text-cyan" style={{ fontSize: '0.75rem' }}>
                  SPECS // {selectedTech.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>
                  {selectedTech.name}
                </h3>
              </div>
              <button onClick={onCloseTech} style={closeBtnStyle}><X size={20} /></button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <p style={{ fontSize: '1.02rem', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                {selectedTech.details}
              </p>
              <button onClick={onCloseTech} className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>CLOSE SPECS</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING TOAST NOTIFICATIONS */}
      <div
        style={{
          position: 'fixed',
          top: '80px',
          right: '24px',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          pointerEvents: 'none'
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="glass-panel"
            style={{
              padding: '0.85rem 1.25rem',
              border: '1px solid var(--color-neon-cyan)',
              background: 'var(--color-panel-bg)',
              boxShadow: '0 10px 30px rgba(0, 243, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              pointerEvents: 'auto',
              animation: 'fadeInRight 0.3s ease'
            }}
          >
            <CheckCircle2 size={18} className="glow-text-green" />
            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{toast.message}</span>
            <button
              onClick={() => onDismissToast(toast.id)}
              style={{ background: 'transparent', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', marginLeft: '0.5rem' }}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(3, 7, 18, 0.85);
          backdrop-filter: blur(8px);
          z-index: 180;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(3, 7, 18, 0.85)',
  backdropFilter: 'blur(10px)',
  zIndex: 180,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem'
};

const modalContainerStyle = {
  maxWidth: '520px',
  width: '100%',
  background: 'var(--color-panel-bg)',
  border: '1px solid var(--color-neon-cyan)',
  borderRadius: '12px',
  boxShadow: '0 20px 50px rgba(0,243,255,0.2)',
  overflow: 'hidden'
};

const modalHeaderStyle = {
  padding: '1.25rem 1.5rem',
  background: 'rgba(3, 7, 18, 0.9)',
  borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const closeBtnStyle = {
  background: 'transparent',
  border: 'none',
  color: 'var(--color-text-muted)',
  cursor: 'pointer'
};

const inputStyle = {
  width: '100%',
  background: 'rgba(15, 23, 42, 0.9)',
  border: '1px solid rgba(0, 243, 255, 0.3)',
  borderRadius: '6px',
  padding: '0.65rem 0.85rem',
  color: 'var(--color-text-main)',
  fontSize: '0.92rem',
  fontFamily: 'var(--font-primary)',
  outline: 'none'
};
