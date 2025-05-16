import React, { useState } from 'react'

interface LoginProps {
  onLogin: (userData: any) => void
  navigateTo: (page: string) => void
}

const Login: React.FC<LoginProps> = ({ onLogin, navigateTo }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }
    
    // Mock login - in a real app, this would call an API
    // For the prototype, we'll just simulate a successful login
    const userData = {
      firstName: 'Michael',
      lastName: 'Washington',
      email: email
    }
    
    onLogin(userData)
  }

  return (
    <div className="login-page fade-in">
      <div className="auth-container">
        <div className="auth-content">
          <h1>Welcome Back to Inherit Tomorrow</h1>
          <p>Log in to continue building your legacy plan</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">
              Log In
            </button>
          </form>
          
          <div className="auth-links">
            <button className="text-link" onClick={() => navigateTo('forgot-password')}>
              Forgot Password?
            </button>
          </div>
          
          <div className="auth-divider">
            <span>Don't have an account?</span>
          </div>
          
          <button 
            className="btn btn-secondary btn-block"
            onClick={() => navigateTo('register')}
          >
            Create an Account
          </button>
          
          <div className="info-box">
            <div className="info-box-title">Why We Protect Your Privacy</div>
            <p>
              At Inherit Tomorrow, we understand the importance of privacy and security, 
              especially for sensitive estate planning documents. Your information is 
              encrypted, secure, and never sold to third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
