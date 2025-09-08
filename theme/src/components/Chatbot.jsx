import React, { useState, useRef, useEffect } from 'react';

const BOT_INTRO = `Hi! 👋 I’m Gemini, your virtual assistant. I can answer questions about our development and maintenance services, help you get in touch, or guide you through our offerings. How can I help you today?`;


export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: BOT_INTRO }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      setShowGreeting(false);
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: 'bot', text: data.reply }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
    }
    setLoading(false);
  };

  // Responsive styles
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 500;

  return (
    <>
      {/* Floating Chat Icon */}
      <div
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          display: open ? 'none' : 'flex',
          alignItems: 'center',
        }}
      >
        {showGreeting && (
          <div
            style={{
              background: '#fff',
              color: '#222',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              padding: '8px 14px',
              marginRight: 8,
              fontSize: 15,
              fontWeight: 500,
              maxWidth: 180,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              transition: 'opacity 0.3s',
            }}
          >
            Hii... I'm your virtual assistant
          </div>
        )}
        <button
          aria-label="Open chatbot"
          onClick={() => setOpen(true)}
          style={{
            background: '#1a202c',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 56,
            height: 56,
            fontSize: 28,
            boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
        >
          💬
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: isMobile ? 0 : 24,
            right: isMobile ? 0 : 24,
            width: isMobile ? '100vw' : 340,
            maxWidth: '100vw',
            maxHeight: isMobile ? '70vh' : 500,
            background: '#fff',
            borderRadius: isMobile ? '16px 16px 0 0' : 16,
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1001,
            fontFamily: 'inherit',
            overflow: 'hidden',
          }}
        >
          <div style={{
            padding: '12px 16px',
            background: '#1a202c',
            color: '#fff',
            borderTopLeftRadius: isMobile ? 16 : 16,
            borderTopRightRadius: isMobile ? 16 : 16,
            fontWeight: 600,
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span>💬 Gemini Chatbot</span>
            <button
              aria-label="Close chatbot"
              onClick={() => setOpen(false)}
              style={{
                background: 'transparent',
                color: '#fff',
                border: 'none',
                fontSize: 22,
                cursor: 'pointer',
                marginLeft: 8,
              }}
            >
              ×
            </button>
          </div>
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: 16,
            background: '#f9f9f9',
            fontSize: 15,
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={msg.sender === 'bot' ? styles.botMsg : styles.userMsg}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} style={{
            display: 'flex',
            borderTop: '1px solid #eee',
            padding: 8,
            background: '#fff',
            borderBottomLeftRadius: isMobile ? 0 : 16,
            borderBottomRightRadius: isMobile ? 0 : 16,
          }}>
            <input
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: 15,
                padding: '8px 12px',
                borderRadius: 8,
                background: '#f1f5f9',
                marginRight: 8,
              }}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask me anything about our services..."
              disabled={loading}
            />
            <button
              style={{
                background: '#1a202c',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '8px 16px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              type="submit"
              disabled={loading || !input.trim()}
            >
              {loading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    width: 340,
    maxHeight: 500,
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000,
    fontFamily: 'inherit',
  },
  header: {
    padding: '12px 16px',
    background: '#1a202c',
    color: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    fontWeight: 600,
    fontSize: 18,
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: 16,
    background: '#f9f9f9',
    fontSize: 15,
  },
  botMsg: {
    background: '#e2e8f0',
    color: '#222',
    padding: '8px 12px',
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'flex-start',
    maxWidth: '85%',
  },
  userMsg: {
    background: '#3182ce',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'flex-end',
    maxWidth: '85%',
  },
  inputBar: {
    display: 'flex',
    borderTop: '1px solid #eee',
    padding: 8,
    background: '#fff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: 15,
    padding: '8px 12px',
    borderRadius: 8,
    background: '#f1f5f9',
    marginRight: 8,
  },
  button: {
    background: '#1a202c',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    padding: '8px 16px',
    fontWeight: 600,
    cursor: 'pointer',
  },
};
