import React from 'react';

function About({ onBackToHome, onLoginSuccess }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #dbeafe 0%, #f8fafc 100%)',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#ffffff',
          borderRadius: '18px',
          padding: '32px 28px',
          boxShadow: '0 18px 40px rgba(15, 23, 42, 0.12)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, color: '#0f172a', fontSize: '32px' }}>Welcome back</h2>
          <p style={{ margin: '10px 0 0', color: '#64748b', fontSize: '14px' }}>
            Sign in to continue
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '18px' }}>
            <label
              htmlFor="email"
              style={{ display: 'block', marginBottom: '8px', color: '#334155', fontWeight: 600 }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                fontSize: '15px',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label
              htmlFor="password"
              style={{ display: 'block', marginBottom: '8px', color: '#334155', fontWeight: 600 }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                fontSize: '15px',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '22px',
              fontSize: '14px',
            }}
          >
            <label style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" style={{ color: '#2563eb', textDecoration: 'none', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: 'none',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(37, 99, 235, 0.25)',
            }}
          >
            Log In
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '22px', color: '#64748b', fontSize: '14px' }}>
          Don’t have an account?{' '}
          <button type="button" style={{ color: '#2563eb', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}>
            Sign up
          </button>
        </p>

        {onBackToHome && (
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button
              type="button"
              onClick={onBackToHome}
              style={{
                background: 'transparent',
                border: '1px solid #cbd5e1',
                color: '#334155',
                borderRadius: '999px',
                padding: '8px 14px',
                cursor: 'pointer',
              }}
            >
              ← Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
