import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

export function AuthForm({ children, title, error }) {
  return (
    <Container maxWidth="xs" className="mdb-color-text" style={{paddingTop: "7vh"}}>
      <h2 className="pt-5 pb-3 text-center h2-responsive font-weight-bold" >{title}</h2>
      {error && (
        <p className="text-danger">
          {error.message ? error.message : error}
        </p>
      )}
      {children}
    </Container>
  )
}

export function Email({ handleUpdate, email, autoComplete }) {
  return (
    <div className="form-group">
      <input
        onChange={handleUpdate}
        name="email"
        type="email"
        value={email}
        className="form-control"
        autoComplete={autoComplete}
        id="enterEmailAddress"
        aria-describedby="emailHelp"
        placeholder="email"
      />
    </div>
  )
}

export function Password({ handleUpdate, password, autoComplete }) {
  return (
    <div className="form-group">
      <input
        onChange={handleUpdate}
        autoComplete={autoComplete}
        name="password"
        value={password}
        type="password"
        className="form-control"
        placeholder="password"
        id="enterPassword"
      />
    </div>
  )
}

export function ConfirmationCode({ handleUpdate, authCode, autoComplete }) {
  return (
    <div className="form-group">
      <label htmlFor="enterCode">Confirmation Code</label>
      <input
        onChange={handleUpdate}
        autoComplete={autoComplete}
        name="authCode"
        value={authCode}
        type="text"
        className="form-control"
        placeholder="######"
        id="enterCode"
      />
    </div>
  )
}

export function CustomAction({ padding, question, action, cb, disabled=false }) {
  return (
    <div
      style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: padding,
      paddingBottom: padding
    }}
    >
      <p style={{ marginTop: 10, marginBottom: 10 }}>{question}</p>
      <Button
        color="primary"
        onClick={cb}
        disabled={disabled}
      >
        {action}
      </Button>
  </div>
  )
}      