import React, { useState, useRef, useEffect } from 'react';
import { ARIA_RESPONSES } from '../data/cityData';
import { Bot, X, Send, Sparkles, RefreshCw } from 'lucide-react';

export default function AriaAssistant({ isOpen, onClose, onOpenReportModal }) {
  const [messages, setMessages] = useState([
    {
      sender: 'aria',
      text: 'Greetings citizen. I am ARIA (Artificial Reasoning & Infrastructure Assistant). How may I assist you with Smart City 2030 telemetry today?'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const quickPrompts = [
    'What is the traffic situation?',
    'How is air quality?',
    'Where are EV chargers?',
    "Show today's energy usage.",
    'Is there any emergency?',
    'How can I report an issue?'
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // Add User Message
    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let responseText = ARIA_RESPONSES[query];

      if (!responseText) {
        if (query.toLowerCase().includes('report') || query.toLowerCase().includes('issue')) {
          responseText = "I can open the Citizen Issue Reporting Portal for you immediately. Click 'File Issue' to transmit your report directly to AI dispatch.";
        } else {
          responseText = `Analyzing city telemetry for "${query}". All municipal subsystems are operating within nominal 2030 safety parameters. Is there a specific sector you would like to inspect?`;
        }
      }

      setMessages((prev) => [...prev, { sender: 'aria', text: responseText }]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([
      {
        sender: 'aria',
        text: 'Chat history cleared. ARIA is ready for your next query.'
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
          color: '#ffffff',
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
        <span>ARIA AI ASSISTANT</span>
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
        maxWidth: '420px',
        height: '560px',
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
          background: 'rgba(3, 7, 18, 0.9)',
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
              ARIA — AI ASSISTANT
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-neon-green)' }}>● ONLINE & MONITORING</div>
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
            style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '0.3rem' }}
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
              maxWidth: '85%'
            }}
          >
            <div
              style={{
                background: msg.sender === 'user' ? 'rgba(0,243,255,0.2)' : 'rgba(15,23,42,0.85)',
                border: `1px solid ${msg.sender === 'user' ? 'var(--color-neon-cyan)' : 'rgba(255,255,255,0.1)'}`,
                padding: '0.75rem 1rem',
                borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                color: '#ffffff',
                fontSize: '0.92rem',
                lineHeight: 1.5
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ alignSelf: 'flex-start' }}>
            <div className="glass-card" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: 'var(--color-neon-cyan)' }}>
              ARIA is processing city data...
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
          placeholder="Ask ARIA about traffic, air quality, energy..."
          style={{
            flex: 1,
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(0,243,255,0.3)',
            borderRadius: '6px',
            padding: '0.6rem 0.85rem',
            color: '#ffffff',
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
