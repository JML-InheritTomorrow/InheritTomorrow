import React, { useState } from 'react'

interface SubsidyApplicationProps {
  navigateTo: (page: string) => void
}

const SubsidyApplication: React.FC<SubsidyApplicationProps> = ({ navigateTo }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    householdSize: '1',
    annualIncome: '',
    incomeProofType: 'tax_return',
    documentUploaded: false,
    hearAboutUs: '',
    agreeToTerms: false
  })
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    })
  }
  
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }
  
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigateTo('subsidy-confirmation')
  }
  
  const simulateFileUpload = () => {
    setFormData({
      ...formData,
      documentUploaded: true
    })
  }
  
  const renderPersonalInformation = () => {
    return (
      <div className="step-content">
        <h2>Personal Information</h2>
        <p>Please provide your contact information for the subsidy application.</p>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              id="firstName"
              className="form-input"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="form-input"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="address" className="form-label">Street Address</label>
          <input
            type="text"
            id="address"
            className="form-input"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              id="city"
              className="form-input"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="state" className="form-label">State</label>
            <input
              type="text"
              id="state"
              className="form-input"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="zipCode" className="form-label">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              className="form-input"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Privacy Notice</div>
          <p>
            Your personal information is kept confidential and is only used for the purpose of 
            determining eligibility for our subsidy program. We do not share your information 
            with third parties except as required for verification purposes.
          </p>
        </div>
      </div>
    )
  }
  
  const renderFinancialInformation = () => {
    return (
      <div className="step-content">
        <h2>Financial Information</h2>
        <p>
          This information helps us determine your eligibility for our subsidy program. 
          All information is kept confidential.
        </p>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="householdSize" className="form-label">Household Size</label>
            <select
              id="householdSize"
              className="form-select"
              value={formData.householdSize}
              onChange={handleInputChange}
              required
            >
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5">5 people</option>
              <option value="6">6+ people</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="annualIncome" className="form-label">Annual Household Income</label>
            <input
              type="text"
              id="annualIncome"
              className="form-input"
              value={formData.annualIncome}
              onChange={handleInputChange}
              placeholder="$"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="incomeProofType" className="form-label">Proof of Income Type</label>
          <select
            id="incomeProofType"
            className="form-select"
            value={formData.incomeProofType}
            onChange={handleInputChange}
            required
          >
            <option value="tax_return">Tax Return</option>
            <option value="pay_stubs">Pay Stubs (last 3 months)</option>
            <option value="benefit_letter">Government Benefit Letter</option>
            <option value="ssi_letter">SSI Award Letter</option>
            <option value="other">Other Documentation</option>
          </select>
        </div>
        
        <div className="form-group">
          <label className="form-label">Upload Proof of Income</label>
          <div className="file-upload-container">
            {!formData.documentUploaded ? (
              <div className="file-upload-area">
                <div className="upload-icon">📄</div>
                <p>Drag and drop your document here, or click to browse</p>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={simulateFileUpload}
                >
                  Browse Files
                </button>
              </div>
            ) : (
              <div className="file-uploaded">
                <div className="file-icon">📄</div>
                <div className="file-info">
                  <p className="file-name">income_document.pdf</p>
                  <p className="file-size">1.2 MB</p>
                </div>
                <button 
                  type="button" 
                  className="btn btn-small"
                  onClick={() => setFormData({...formData, documentUploaded: false})}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
          <p className="form-help-text">
            Accepted file formats: PDF, JPG, PNG. Maximum file size: 10MB.
          </p>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Eligibility Guidelines</div>
          <p>
            Our subsidy program is generally available to individuals and families with household 
            incomes below 80% of the Area Median Income (AMI) for their location. Additional 
            consideration is given to those facing financial hardships or with special circumstances.
          </p>
        </div>
      </div>
    )
  }
  
  const renderAdditionalInformation = () => {
    return (
      <div className="step-content">
        <h2>Additional Information</h2>
        
        <div className="form-group">
          <label htmlFor="hearAboutUs" className="form-label">How did you hear about our subsidy program?</label>
          <select
            id="hearAboutUs"
            className="form-select"
            value={formData.hearAboutUs}
            onChange={handleInputChange}
          >
            <option value="">Please select</option>
            <option value="community_org">Community Organization</option>
            <option value="church">Church or Faith Group</option>
            <option value="social_media">Social Media</option>
            <option value="friend">Friend or Family</option>
            <option value="news">News Article</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="agreeToTerms">
            I certify that the information provided is true and accurate to the best of my knowledge. 
            I understand that providing false information may result in disqualification from the program.
          </label>
        </div>
        
        <div className="partner-organizations">
          <h3>Our Partner Organizations</h3>
          <p>
            Our subsidy program is made possible through partnerships with these organizations:
          </p>
          <div className="partner-logos">
            <div className="partner-logo">Community Foundation Logo</div>
            <div className="partner-logo">Legal Aid Society Logo</div>
            <div className="partner-logo">Black Wealth Initiative Logo</div>
          </div>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">What Happens Next?</div>
          <p>
            After submitting your application, our team will review your information within 2-3 business days. 
            You'll receive an email notification regarding your eligibility status. If approved, you'll gain 
            immediate access to premium features at reduced or no cost.
          </p>
        </div>
      </div>
    )
  }
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalInformation()
      case 2:
        return renderFinancialInformation()
      case 3:
        return renderAdditionalInformation()
      default:
        return null
    }
  }
  
  return (
    <div className="subsidy-application-page fade-in">
      <h1>Subsidy Program Application</h1>
      
      <div className="progress-container">
        <div className="progress-steps">
          {[...Array(totalSteps)].map((_, index) => (
            <div 
              key={index} 
              className={`step ${currentStep > index + 1 ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-label">
                {index === 0 && 'Personal'}
                {index === 1 && 'Financial'}
                {index === 2 && 'Additional'}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="form-container">
        {renderStepContent()}
        
        <div className="form-navigation">
          {currentStep > 1 && (
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={handlePreviousStep}
            >
              ← Back
            </button>
          )}
          
          {currentStep < totalSteps ? (
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={handleNextStep}
            >
              Continue →
            </button>
          ) : (
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={!formData.agreeToTerms}
            >
              Submit Application
            </button>
          )}
        </div>
      </form>
      
      <div className="application-footer">
        <p>
          Need assistance with your application? Contact our support team at 
          <button className="text-link">support@inherittomorrow.com</button> or call (800) 555-1234.
        </p>
      </div>
    </div>
  )
}

export default SubsidyApplication
