import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, RefreshCw, Search, Eye, Play, CheckCircle, AlertTriangle } from 'lucide-react';

export default function AriaAssistant({ isOpen, onClose, onOpenReportModal, onTriggerToast, sosAlerts, liveMetrics }) {
  const [messages, setMessages] = useState([
    {
      sender: 'aria',
      text: 'Welcome to SMART CITY AI ASSISTANT. I am synchronized with live city telemetry and active SOS emergency streams. How can I assist your operations query?'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const suggestedQuestions = [
    'What is Smart City 2030?',
    'How does the Command Center work?',
    'How does AI improve traffic?',
    'How does the SOS system work?',
    'What is the current city status?',
    'What is the latest emergency?',
    'How does this project support sustainability?',
    'What is happening in Zone 04?',
    'What is IoT?'
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
      let responseObj = generateGroundedAiResponse(query, sosAlerts, liveMetrics);
      setMessages((prev) => [...prev, { sender: 'aria', ...responseObj }]);
      setIsTyping(false);
    }, 550);
  };

  const generateGroundedAiResponse = (queryStr, alerts, metrics) => {
    const q = queryStr.toLowerCase();

    // 1. Live City Status Query
    if (q.includes('current city status') || q.includes('city status summary') || q.includes('status summary') || q.includes('city status')) {
      const activeSosCount = alerts ? alerts.filter(a => a.status !== 'RESOLVED').length : 0;
      return {
        text: `CITY STATUS SUMMARY\n\nTraffic Flow: 82%\nAir Quality: 94%\nRenewable Energy: 71%\nWater Efficiency: 88%\nEmergency Response: 2.4 MIN\n\nActive SOS Alerts: ${activeSosCount} Critical Alert(s)\nOverall: The demo city is operational with live telemetry active across 12 sectors.`,
        note: 'These values represent simulated Smart City 2030 demo data.',
        dataSource: 'Smart City 2030 Shared State'
      };
    }

    // 2. Latest Emergency / Active Emergency Query
    if (q.includes('latest emergency') || q.includes('latest sos') || q.includes('emergency alert') || q.includes('active emergency') || q.includes('is there any emergency')) {
      const latestAlert = alerts && alerts.length > 0 ? alerts[0] : null;
      if (latestAlert) {
        return {
          text: `ACTIVE EMERGENCY ALERT:\n\nAlert ID: ${latestAlert.id}\nZone: ${latestAlert.zone}\nType: ${latestAlert.type}\nPriority: ${latestAlert.priority}\nStatus: ${latestAlert.status}\nTime: ${latestAlert.time}`,
          recommendation: 'City operators should review the alert in the City Command Center and dispatch emergency response procedures.',
          dataSource: 'Live SOS Shared Application State'
        };
      } else {
        return {
          text: 'NO ACTIVE EMERGENCY ALERTS: All 12 urban sectors report nominal operation with 0 active SOS dispatches.',
          recommendation: 'To test emergency procedures, click the 🚨 SOS button in the header.',
          dataSource: 'Live SOS Shared Application State'
        };
      }
    }

    // 3. What is Smart City 2030? / What is this website?
    if (q.includes('what is smart city 2030') || q.includes('what is this website') || q.includes('project objective')) {
      return {
        text: 'SMART CITY 2030 OVERVIEW\n\nObjective: An AI-powered urban platform connecting mobility, energy, environment, safety, and citizen services to create smarter and more sustainable connected cities.\n\nVision: Achieving net-zero carbon operations, Level 5 autonomous public transit, and sub-millisecond emergency dispatch by 2030.',
        dataSource: 'Smart City 2030 Project Vision Docs'
      };
    }

    // 4. How does the SOS system work?
    if (q.includes('sos system') || q.includes('how does sos work') || q.includes('sos workflow')) {
      return {
        text: 'SOS EMERGENCY SYSTEM WORKFLOW:\n\n1. Citizen Clicks 🚨 SOS in header\n2. Confirmation Modal verifies request to prevent accidental clicks\n3. System creates unique Alert ID (e.g. SOS-2030-0042) logged to Zone 04\n4. Serverless API transmits SMS alert to Admin Mobile\n5. City Command Center activates 🔴 ACTIVE EMERGENCY PANEL with interactive dispatch controls.',
        dataSource: 'Smart City 2030 System Architecture'
      };
    }

    // 5. How does the Command Center work / What does it monitor?
    if (q.includes('command center') || q.includes('monitoring')) {
      return {
        text: 'CITY COMMAND CENTER OPERATIONAL MATRIX:\n\nMonitors: Traffic Flow, Solar/Wind Grid Yield, Air Quality Index (AQI), Hydrostatic Water Pressure, and Real-Time SOS Alerts.\n\nOperators can inspect sector telemetry, trigger re-syncs, and acknowledge/resolve emergency dispatches.',
        dataSource: 'Smart City Command Specs'
      };
    }

    // 6. How does AI help traffic management?
    if (q.includes('traffic management') || q.includes('ai help traffic') || q.includes('ai improve traffic') || q.includes('traffic')) {
      return {
        text: 'AI TRAFFIC OPTIMIZATION:\n\nOptical computer vision cameras measure vehicular flow across 450 intersections. Neural algorithms dynamically adjust green light duration (+18 sec during peak congestion) and reroute autonomous transit shuttles.',
        note: 'Current simulated Traffic Flow metric: 82%.',
        dataSource: 'Smart City Mobility Model'
      };
    }

    // 7. How does Smart City 2030 support sustainability?
    if (q.includes('sustainability') || q.includes('sustainable') || q.includes('environment') || q.includes('green energy')) {
      return {
        text: 'SUSTAINABILITY ARCHITECTURE:\n\n- 71% Renewable Power Share (Solar glass + micro-wind turbines)\n- 0.6 GW Battery Storage for zero-carbon peak load\n- Vertical bio-forest air scrubbers maintaining Air Quality 94%\n- Automated rain harvesting and sub-surface leak prevention.',
        note: 'These metric scores are simulated project demo data.',
        dataSource: 'Smart City Environment Telemetry'
      };
    }

    // 8. What technologies are used?
    if (q.includes('technologies') || q.includes('tech stack') || q.includes('architecture')) {
      return {
        text: 'CORE TECHNOLOGY STACK:\n\n- Frontend: React 18, Vite 5, CSS3 Glassmorphism\n- Intelligence: AI/ML Neural Models, Computer Vision, Edge Computing\n- Telemetry: 12.8K NB-IoT & 6G Sensor Matrix\n- Serverless: Vercel Node.js Serverless Functions for SMS Alerts',
        dataSource: 'Smart City Tech Architecture'
      };
    }

    // 9. What is happening in Zone 04?
    if (q.includes('zone 04') || q.includes('zone 4')) {
      return {
        text: 'ZONE 04 STATUS SUMMARY:\n\nTraffic Density: HIGH (82% Flow Efficiency)\nAir Quality: GOOD (AQI 42)\nSmart Signals: ACTIVE (+18 sec extension)',
        analysis: 'High morning commuter density detected along Central Highway Corridor.',
        recommendation: 'Optimize traffic signal timing and divert autonomous shuttles to Underpass Sector 03.',
        dataSource: 'Smart City Demo Dashboard'
      };
    }

    // 10. General Knowledge: What is IoT?
    if (q.includes('iot') || q.includes('internet of things')) {
      return {
        text: 'INTERNET OF THINGS (IoT):\n\nA network of physical objects embedded with sensors, software, and connectivity to exchange data. In Smart City 2030, 12,800+ IoT sensors monitor air quality, water pressure, energy loads, and structural health.',
        dataSource: 'Verified Smart City Knowledge Base'
      };
    }

    // 11. General Knowledge: What is AI / Artificial Intelligence?
    if (q.includes('what is ai') || q.includes('artificial intelligence')) {
      return {
        text: 'ARTIFICIAL INTELLIGENCE (AI):\n\nMachine intelligence algorithms that simulate human decision-making. Smart City 2030 uses neural networks for adaptive signal control, energy load balancing, computer vision hazard detection, and predictive maintenance.',
        dataSource: 'Verified Smart City Knowledge Base'
      };
    }

    // 12. General Knowledge: Digital Twins
    if (q.includes('digital twin')) {
      return {
        text: 'DIGITAL TWIN ARCHITECTURE:\n\nA real-time virtual 3D replica of physical urban infrastructure. Allows city engineers to simulate traffic rerouting, storm surge flooding, and power grid failures before deploying physical changes.',
        dataSource: 'Verified Smart City Knowledge Base'
      };
    }

    // 13. Default Strict Accuracy Fallback
    return {
      text: "I don't have verified information about that in the current Smart City 2030 system.",
      recommendation: "Please select one of the verified Smart City telemetry topics below.",
      dataSource: 'Smart City 2030 Knowledge Engine'
    };
  };

  const handleInsightAction = (actionType, msg) => {
    if (onTriggerToast) {
      if (actionType === 'ANALYZE') {
        onTriggerToast(`AI Analyzing deep telemetry stream...`);
      } else if (actionType === 'REC') {
        onTriggerToast(`AI Recommendation: "${msg.recommendation}"`);
      } else if (actionType === 'ACTION') {
        onTriggerToast(`SIMULATED AI ACTION DISPATCHED: "${msg.recommendation || 'Action executed'}"`);
      }
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        sender: 'aria',
        text: 'Chat history reset. SMART CITY AI ASSISTANT is ready for your query.'
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
        <span>SMART CITY AI ASSISTANT</span>
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
        height: '580px',
        zIndex: 150,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
        border: '1px solid var(--color-neon-cyan)'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '1rem',
          background: 'rgba(3, 7, 18, 0.94)',
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
              SMART CITY AI ASSISTANT
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-neon-green)' }}>● ONLINE</div>
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
                background: msg.sender === 'user' ? 'rgba(0,243,255,0.2)' : 'rgba(15,23,42,0.88)',
                border: `1px solid ${msg.sender === 'user' ? 'var(--color-neon-cyan)' : 'rgba(255,255,255,0.12)'}`,
                padding: '0.85rem 1rem',
                borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                color: 'var(--color-text-main)',
                fontSize: '0.9rem',
                lineHeight: 1.5,
                whiteSpace: 'pre-line'
              }}
            >
              <div>{msg.text}</div>

              {msg.note && (
                <div style={{ marginTop: '0.4rem', fontSize: '0.75rem', color: 'var(--color-neon-amber)' }}>
                  ℹ {msg.note}
                </div>
              )}

              {msg.analysis && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  <strong style={{ color: 'var(--color-neon-amber)' }}>ANALYSIS:</strong> {msg.analysis}
                </div>
              )}

              {msg.recommendation && (
                <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.82rem' }}>
                  <strong style={{ color: 'var(--color-neon-cyan)' }}>RECOMMENDATION:</strong> {msg.recommendation}

                  {/* Interactive Action Buttons */}
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

              {msg.dataSource && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.68rem', color: 'var(--color-neon-cyan)', opacity: 0.8 }} className="hud-font">
                  DATA SOURCE: {msg.dataSource}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ alignSelf: 'flex-start' }}>
            <div className="glass-card" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: 'var(--color-neon-cyan)' }}>
              SMART CITY AI ASSISTANT is searching knowledge base...
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Suggested Questions Pills */}
      <div style={{ padding: '0.5rem 1rem', background: 'rgba(3,7,18,0.7)', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
        {suggestedQuestions.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handleSendMessage(prompt)}
            className="hud-font"
            style={{
              whiteSpace: 'nowrap',
              fontSize: '0.68rem',
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
          placeholder="Ask Smart City AI Assistant..."
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
