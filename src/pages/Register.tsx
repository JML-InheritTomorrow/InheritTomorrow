import React, { useState } from 'react'

interface RegisterProps {
  onRegister: (userData: any) => void
  navigateTo: (page: string) => void
}

const Register: React.FC<RegisterProps> = ({ onRegister, navigateTo }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and privacy policy'
    }
    
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    // Clear any existing errors
    setErrors({})
    
    // In a real app, this would call an API to register the user
    // For the prototype, we'll just simulate a successful registration
    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    }
    
    onRegister(userData)
  }

  return (
    <div className="register-page fade-in">
      <div className="auth-container">
        <div className="auth-content">
          <h1>Create Your Inherit Tomorrow Account</h1>
          <p>Start building your legacy plan today</p>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`form-input ${errors.firstName ? 'form-input-error' : ''}`}
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <div className="form-error">{errors.firstName}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`form-input ${errors.lastName ? 'form-input-error' : ''}`}
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <div className="form-error">{errors.lastName}</div>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-input ${errors.password ? 'form-input-error' : ''}`}
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password (8+ characters)"
              />
              {errors.password && <div className="form-error">{errors.password}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`form-input ${errors.confirmPassword ? 'form-input-error' : ''}`}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <div className="form-error">{errors.confirmPassword}</div>}
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                className="form-checkbox"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label htmlFor="agreeTerms">
                I agree to the <button type="button" className="text-link" onClick={() => navigateTo('terms')}>Terms of Service</button> and <button type="button" className="text-link" onClick={() => navigateTo('privacy')}>Privacy Policy</button>
              </label>
              {errors.agreeTerms && <div className="form-error">{errors.agreeTerms}</div>}
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">
              Create Account
            </button>
          </form>
          
          <div className="auth-divider">
            <span>Already have an account?</span>
          </div>
          
          <button 
            className="btn btn-secondary btn-block"
            onClick={() => navigateTo('login')}
          >
            Log In
          </button>
          
          <div className="info-box">
            <div className="info-box-title">Why We Protect Your Privacy</div>
            <p>
              At Inherit Tomorrow, we understand the importance of privacy and security, 
              especially for sensitive estate planning documents. Your information is 
              encrypted, secure, and never sold to third parties.
            </p>
            <p>
              We partner with trusted community organizations to ensure our services 
              are culturally relevant and legally sound.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
