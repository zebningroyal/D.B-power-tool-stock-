import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Consolidated Contact component.
 *
 * Props:
 *  - onBackToHome: function to call when back button pressed
 *  - editPassword: optional string. If provided, the same password must be entered to start editing.
 *                  If omitted (undefined/null), editing is allowed without a password.
 *
 * Behavior:
 *  - Maintains owner, phone, and additional custom fields.
 *  - Edit flow uses drafts and requires Save to commit.
 *  - Basic phone validation (digits >= 6).
 */

function Contact({ onBackToHome, editPassword }) {
  const [owner, setOwner] = useState('Md shakir');
  const [phone, setPhone] = useState('8143807462');
  const [customFields, setCustomFields] = useState([]);

  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [draftOwner, setDraftOwner] = useState(owner);
  const [draftPhone, setDraftPhone] = useState(phone);
  const [draftCustomFields, setDraftCustomFields] = useState(customFields.map((f) => ({ ...f })));

  const startEdit = () => {
    // If editPassword is provided, require entering it. Otherwise allow editing immediately.
    if (typeof editPassword === 'string' && editPassword.length > 0) {
      setPasswordInput('');
      setPasswordError('');
      setShowPasswordPrompt(true);
      return;
    }

    // allow edit without password
    setIsEditing(true);
    setDraftOwner(owner);
    setDraftPhone(phone);
    setDraftCustomFields(customFields.map((f) => ({ ...f })));
  };

  const verifyPassword = () => {
    if (editPassword === undefined || editPassword === null) {
      // shouldn't be called in this mode, but guard
      setShowPasswordPrompt(false);
      setIsEditing(true);
      setDraftOwner(owner);
      setDraftPhone(phone);
      setDraftCustomFields(customFields.map((f) => ({ ...f })));
      return;
    }

    if (passwordInput === editPassword) {
      setShowPasswordPrompt(false);
      setIsEditing(true);
      setDraftOwner(owner);
      setDraftPhone(phone);
      setDraftCustomFields(customFields.map((f) => ({ ...f })));
      setPasswordInput('');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password');
    }
  };

  const addColumn = () => {
    setDraftCustomFields((prev) => [...prev, { name: 'New Column', value: '' }]);
  };

  const updateCustomField = (index, key, value) => {
    setDraftCustomFields((prev) => {
      const next = prev.map((f) => ({ ...f }));
      next[index][key] = value;
      return next;
    });
  };

  const removeCustomField = (index) => {
    setDraftCustomFields((prev) => prev.filter((_, i) => i !== index));
  };

  const saveChanges = () => {
    const phoneDigits = draftPhone.replace(/[^0-9]/g, '');
    if (phoneDigits.length < 6) {
      setPasswordError('Please enter a valid phone number');
      return;
    }

    setOwner(draftOwner);
    setPhone(draftPhone);
    setCustomFields(draftCustomFields.map((f) => ({ ...f })));
    setIsEditing(false);
    setPasswordError('');
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setShowPasswordPrompt(false);
    setPasswordInput('');
    setPasswordError('');
    setDraftOwner(owner);
    setDraftPhone(phone);
    setDraftCustomFields(customFields.map((f) => ({ ...f })));
  };

  return (
    <div
      className="contact-page"
      style={{
        fontFamily: 'Inter, Arial, sans-serif',
        minHeight: '100vh',
        background:
          'radial-gradient(1200px 600px at 10% 10%, rgba(14,165,233,0.08), transparent 12%), linear-gradient(180deg, #07131f 0%, #081825 60%)',
        color: '#e6f2ff',
      }}
    >
      <style>{`
        .contact-hero { padding: 22px 28px; display:flex; align-items:center; gap:12px; backdrop-filter: blur(6px); }
        .back-btn { background: transparent; border: none; color: #dfeaf8; cursor: pointer; font-weight:600; }
        .scene { perspective: 1400px; display: flex; justify-content: center; padding: 40px 20px; }
        .card-stack { position: relative; width: 100%; max-width: 920px; transform-style: preserve-3d; }
        .card-layer { position:absolute; inset:0; border-radius:18px; filter: blur(18px); opacity:0.08; }
        .card-layer.layer-1 { background: linear-gradient(135deg, rgba(255,183,3,0.12), rgba(14,165,233,0.08)); transform: translateZ(-40px) rotateX(8deg); }
        .card-layer.layer-2 { background: linear-gradient(135deg, rgba(16,185,129,0.06), rgba(59,130,246,0.04)); transform: translateZ(-20px) rotateX(4deg); }
        .contact-card { position: relative; border-radius:18px; padding: 28px; background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); box-shadow: 0 18px 60px rgba(2,6,23,0.7); transform: translateY(0); transition: transform 350ms cubic-bezier(.2,.9,.2,1), box-shadow 350ms; transform-style: preserve-3d; }
        .contact-card:hover { transform: translateY(-10px) rotateX(4deg); box-shadow: 0 28px 90px rgba(2,6,23,0.8); }
        .card-header { display:flex; align-items:center; gap:14px; }
        .logo-sphere { width:68px; height:68px; border-radius:50%; background: radial-gradient(circle at 30% 25%, #fff7ea, #ffd88b 18%, transparent 30%), linear-gradient(135deg, #06b6d4, #ffb703); box-shadow: 0 8px 30px rgba(6,182,212,0.14), inset 0 -6px 18px rgba(0,0,0,0.15); transform: translateZ(20px); }
        .title { font-size:20px; font-weight:800; letter-spacing:0.4px; color:#f6fbff; transform: translateZ(28px); }
        .subtitle { font-size:13px; color:#b9dff7; transform: translateZ(18px); }
        .info-grid { display:grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top:18px; }
        .info-item { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding:12px 14px; border-radius:12px; border: 1px solid rgba(255,255,255,0.03); }
        .info-label { font-size:12px; color:#9fbce8; }
        .info-value { font-size:16px; color:#e5eefb; font-weight:700; margin-top:6px; }
        .columns-wrap { margin-top:18px; display:flex; flex-direction:column; gap:10px; }
        .column-chip { display:flex; gap:10px; align-items:center; padding:10px 12px; border-radius:12px; background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.03); box-shadow: 0 6px 18px rgba(2,6,23,0.45); }
        .col-name { color:#9bd3ff; font-weight:700; min-width:130px; }
        .col-value { color:#eaf6ff; }
        .controls { margin-top:18px; display:flex; gap:12px; }
        .btn { padding:10px 14px; border-radius:10px; cursor:pointer; border:none; font-weight:700; }
        .btn-primary { background: linear-gradient(90deg,#ffb703,#06b6d4); color:#081827; box-shadow: 0 8px 28px rgba(6,182,212,0.12); }
        .btn-ghost { background: transparent; border: 1px solid rgba(255,255,255,0.06); color: #dfeaf8; }
        .edit-input { padding:10px 12px; border-radius:10px; border:1px solid rgba(200,220,255,0.07); }
        .small-muted { font-size:13px; color:#9fbce8; }
        @media (max-width:720px){ .info-grid{ grid-template-columns:1fr; } }
      `}</style>

      <header className="contact-hero">
        <button className="back-btn" onClick={onBackToHome}>← Back</button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#f8fbff' }}>Contact</div>
            <div style={{ marginLeft: 8, color: '#9fbce8' }} className="small-muted">
              Shop contact and quick edits {typeof editPassword === 'string' && editPassword.length > 0 ? '(password protected)' : '(no password required)'}
            </div>
          </div>
        </div>
        <div>{!isEditing && <button className="btn btn-primary" onClick={startEdit}>Edit</button>}</div>
      </header>

      <section className="scene">
        <div className="card-stack">
          <div className="card-layer layer-1" aria-hidden="true" />
          <div className="card-layer layer-2" aria-hidden="true" />

          <div className="contact-card" role="region" aria-label="Contact card">
            <div className="card-header">
              <div className="logo-sphere" />
              <div>
                <div className="title">PowerPro Shop</div>
                <div className="subtitle">Contact & Owner information</div>
              </div>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Shop Owner</div>
                {isEditing ? (
                  <input
                    className="edit-input"
                    value={draftOwner}
                    onChange={(e) => setDraftOwner(e.target.value)}
                    aria-label="Shop owner name"
                  />
                ) : (
                  <div className="info-value">{owner}</div>
                )}
              </div>

              <div className="info-item">
                <div className="info-label">Contact Number</div>
                {isEditing ? (
                  <input
                    className="edit-input"
                    value={draftPhone}
                    onChange={(e) => setDraftPhone(e.target.value)}
                    aria-label="Contact phone"
                  />
                ) : (
                  <div className="info-value">{phone}</div>
                )}
              </div>
            </div>

            <div className="columns-wrap">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: '#9fbce8', fontWeight: 700 }}>Additional Columns</div>
                {isEditing && <div style={{ color: '#9fbce8', fontSize: 13 }}>Edit name/value, add or remove</div>}
              </div>

              {!isEditing && (
                <div>
                  {customFields.length === 0 && <div className="small-muted">No additional columns added.</div>}
                  {customFields.map((field, index) => (
                    <div key={index} className="column-chip">
                      <div className="col-name">{field.name}</div>
                      <div className="col-value">{field.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {isEditing && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {draftCustomFields.map((field, index) => (
                    <div
                      key={index}
                      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 8, alignItems: 'center' }}
                    >
                      <input
                        className="edit-input"
                        value={field.name}
                        onChange={(e) => updateCustomField(index, 'name', e.target.value)}
                      />
                      <input
                        className="edit-input"
                        value={field.value}
                        onChange={(e) => updateCustomField(index, 'value', e.target.value)}
                      />
                      <button
                        className="btn btn-ghost"
                        onClick={() => removeCustomField(index)}
                        style={{ padding: '8px 10px' }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}

                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <button className="btn btn-primary" onClick={addColumn}>Add Column</button>
                    <div className="small-muted">Columns are free-form name/value pairs.</div>
                  </div>
                </div>
              )}
            </div>

            {isEditing && (
              <div className="controls">
                <button className="btn btn-primary" onClick={saveChanges}>Save</button>
                <button className="btn btn-ghost" onClick={cancelEdit}>Cancel</button>
              </div>
            )}

            {showPasswordPrompt && (
              <div style={{ marginTop: 16 }}>
                <div style={{ color: '#9fbce8', marginBottom: 8 }}>Enter password to edit</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="password"
                    className="edit-input"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    style={{ flex: 1 }}
                    aria-label="Edit password"
                  />
                  <button className="btn btn-primary" onClick={verifyPassword}>Verify</button>
                  <button className="btn btn-ghost" onClick={() => setShowPasswordPrompt(false)}>Cancel</button>
                </div>
                {passwordError && <div style={{ color: '#ffb4b4', marginTop: 8 }}>{passwordError}</div>}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

Contact.propTypes = {
  onBackToHome: PropTypes.func,
  // optional password string. If provided, it will be required to enter before editing.
  editPassword: PropTypes.string,
};

export default Contact;