import React, { useState } from 'react';
import PropTypes from 'prop-types';

function About({ onBackToHome, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!email) next.email = 'Email is required';
    // simple email regex
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email';

    if (!password) next.password = 'Password is required';
    else if (password.length < 6) next.password = 'Password must be at least 6 characters';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    if (onLoginSuccess) {
      onLoginSuccess({ email, remember });
    }

    // Optionally clear the form or leave as-is
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

        <form onSubmit={handleSubmit} noValidate>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: errors.email ? '1px solid #ff7b7b' : '1px solid #cbd5e1',
                fontSize: '15px',
                boxSizing: 'border-box',
                outline: 'none',
              }}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <div id="email-error" style={{ color: '#ff4d4f', marginTop: 8, fontSize: 13 }}>
                {errors.email}
              </div>
            )}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                border: errors.password ? '1px solid #ff7b7b' : '1px solid #cbd5e1',
                fontSize: '15px',
                boxSizing: 'border-box',
                outline: 'none',
              }}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password && (
              <div id="password-error" style={{ color: '#ff4d4f', marginTop: 8, fontSize: 13 }}>
                {errors.password}
              </div>
            )}
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
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />{' '}
              Remember me
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

About.propTypes = {
  onBackToHome: PropTypes.func,
  onLoginSuccess: PropTypes.func,
};

export default About;