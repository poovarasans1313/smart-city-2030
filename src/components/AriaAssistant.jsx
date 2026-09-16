import React, { useState, useRef, useEffect } from 'react';
import { ARIA_RESPONSES } from '../data/cityData';
import { Bot, X, Send, Sparkles, RefreshCw, Search, Eye, Play } from 'lucide-react';

export default function AriaAssistant({ isOpen, onClose, onOpenReportModal, onTriggerToast }) {
  const [messages, setMessages] = useState([
    {
      sender: 'aria',
      text: 'Welcome to AI CITY INTELLIGENCE. I am monitoring 12.8K urban IoT sensors. How can I assist your city operations query?'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const quickPrompts = [
    'Why is traffic high?',
    'Show energy demand status',
    'Check air quality in Zone 07',
    'Where are EV chargers?',
    'Is there any emergency?'
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let responseText = '';
      let recommendation = '';

      if (query.includes('traffic')) {
        responseText = 'High congestion detected in Zone 04 Central Corridor. Traffic density is 18% above nominal threshold.';
        recommendation = 'Increase green-light duration by 18 seconds during peak traffic.';
      } else if (query.includes('energy')) {
        responseText = 'Energy demand has increased by 12% in Zone 02 due to air conditioning load.';
        recommendation = 'Shift non-critical loads toward renewable generation periods and release 0.4 GW battery reserve.';
      } else if (query.includes('air') || query.includes('Zone 07')) {
        responseText = 'Air quality deterioration detected near Zone 07 Industrial Sector (AQI 58).';
        recommendation = 'Increase bio-filtration scrubber RPM by 25% and notify nearby citizens.';
      } else if (query.includes('EV') || query.includes('charger')) {
        responseText = '18 hyper-chargers available at Zone 05 Plaza with 100% solar micro-grid synchronization.';
        recommendation = 'Reserve 4 inductive ports for incoming Level 5 autonomous shuttles.';
      } else if (query.includes('emergency')) {
        responseText = 'All 12 disaster response stations standby. Average medical drone arrival time is 2.4 minutes.';
        recommendation = 'Keep rapid response drones on active standby.';
      } else {
        responseText = `Analyzing city telemetry for "${query}". All municipal subsystems operating within nominal 2030 safety parameters.`;
        recommendation = 'Continuous telemetry streaming active.';
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'aria',
          text: responseText,
          recommendation,
          isAiInsight: true
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleInsightAction = (actionType, msg) => {
    if (onTriggerToast) {
      if (actionType === 'ANALYZE') {
        onTriggerToast(`AI Analyzing deep telemetry stream...`);
      } else if (actionType === 'REC') {
        onTriggerToast(`AI Recommendation: "${msg.recommendation}"`);
      } else if (actionType === 'ACTION') {
        onTriggerToast(`SIMULATED AI ACTION DISPATCHED: "${msg.recommendation}"`);
      }
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        sender: 'aria',
        text: 'Telemetry chat reset. AI CITY INTELLIGENCE is ready for your query.'
      }
    ]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={onClose}
        className="hud-font"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99,
          background: 'linear-gradient(135deg, rgba(0,243,255,0.3), rgba(191,0,255,0.3))',
          border: '1px solid var(--color-neon-cyan)',
          color: 'var(--color-text-main)',
          padding: '0.85rem 1.25rem',
          borderRadius: '30px',
          boxShadow: '0 0 25px rgba(0,243,255,0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Bot size={22} className="glow-text-cyan" />
        <span>AI CITY INTELLIGENCE</span>
        <span className="pulse-dot" style={{ color: 'var(--color-neon-green)' }} />
      </button>
    );
  }

  return (
    <div
      className="glass-panel"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: 'calc(100vw - 48px)',
        maxWidth: '430px',
        height: '570px',
        zIndex: 150,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        border: '1px solid var(--color-neon-cyan)'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '1rem',
          background: 'rgba(3, 7, 18, 0.92)',
          borderBottom: '1px solid rgba(0,243,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(0,243,255,0.15)',
              border: '1px solid var(--color-neon-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-neon-cyan)'
            }}
          >
            <Bot size={18} />
          </div>
          <div>
            <div className="hud-font glow-text-cyan" style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>
              AI CITY INTELLIGENCE
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-neon-green)' }}>● SIMULATED AI INSIGHTS</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button
            onClick={handleClearChat}
            style={{ background: 'transparent', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: '0.3rem' }}
            title="Clear Chat"
          >
            <RefreshCw size={16} />
          </button>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: 'var(--color-text-main)', cursor: 'pointer', padding: '0.3rem' }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Messages Feed */}
      <div
        style={{
          flex: 1,
          padding: '1rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '88%'
            }}
          >
            <div
              style={{
                background: msg.sender === 'user' ? 'rgba(0,243,255,0.2)' : 'rgba(15,23,42,0.85)',
                border: `1px solid ${msg.sender === 'user' ? 'var(--color-neon-cyan)' : 'rgba(255,255,255,0.1)'}`,
                padding: '0.75rem 1rem',
                borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                color: 'var(--color-text-main)',
                fontSize: '0.92rem',
                lineHeight: 1.5
              }}
            >
              {msg.isAiInsight && (
                <div style={{ marginBottom: '0.4rem' }}>
                  <span className="hud-badge" style={{ fontSize: '0.62rem', padding: '0.15rem 0.4rem', borderColor: 'rgba(191,0,255,0.4)', color: 'var(--color-neon-purple)' }}>
                    SIMULATED AI INSIGHT
                  </span>
                </div>
              )}
              
              <div>{msg.text}</div>

              {msg.recommendation && (
                <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.82rem' }}>
                  <strong style={{ color: 'var(--color-neon-cyan)' }}>RECOMMENDATION:</strong> {msg.recommendation}

                  {/* 3 Interactive Buttons */}
                  <div style={{ display: 'flex', gap: '0.3rem', marginTop: '0.5rem' }}>
                    <button
                      onClick={() => handleInsightAction('ANALYZE', msg)}
                      className="btn-secondary"
                      style={{ fontSize: '0.68rem', padding: '0.25rem 0.5rem', justifyContent: 'center' }}
                    >
                      <Search size={10} />
                      <span>ANALYZE</span>
                    </button>
                    <button
                      onClick={() => handleInsightAction('REC', msg)}
                      className="btn-secondary"
                      style={{ fontSize: '0.68rem', padding: '0.25rem 0.5rem', justifyContent: 'center' }}
                    >
                      <Eye size={10} />
                      <span>REC.</span>
                    </button>
                    <button
                      onClick={() => handleInsightAction('ACTION', msg)}
                      className="btn-primary"
                      style={{ fontSize: '0.68rem', padding: '0.25rem 0.5rem', justifyContent: 'center' }}
                    >
                      <Play size={10} />
                      <span>TAKE ACTION</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ alignSelf: 'flex-start' }}>
            <div className="glass-card" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: 'var(--color-neon-cyan)' }}>
              AI CITY INTELLIGENCE is processing telemetry...
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Quick Suggestions Pills */}
      <div style={{ padding: '0.5rem 1rem', background: 'rgba(3,7,18,0.6)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handleSendMessage(prompt)}
            className="hud-font"
            style={{
              whiteSpace: 'nowrap',
              fontSize: '0.7rem',
              background: 'rgba(0,243,255,0.08)',
              border: '1px solid rgba(0,243,255,0.2)',
              color: 'var(--color-neon-cyan)',
              padding: '0.25rem 0.65rem',
              borderRadius: '12px',
              cursor: 'pointer'
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        style={{
          padding: '0.85rem',
          background: 'rgba(3, 7, 18, 0.95)',
          borderTop: '1px solid rgba(0,243,255,0.2)',
          display: 'flex',
          gap: '0.5rem'
        }}
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Ask AI Intelligence about traffic, energy..."
          style={{
            flex: 1,
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(0,243,255,0.3)',
            borderRadius: '6px',
            padding: '0.6rem 0.85rem',
            color: 'var(--color-text-main)',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-primary)',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          className="btn-primary"
          style={{ padding: '0.6rem 1rem', borderRadius: '6px' }}
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
