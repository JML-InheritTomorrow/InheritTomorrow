import React, { useState } from 'react'
import '../assets/css/forms/advanced-directive.css'

interface NYAdvancedDirectiveProps {
  navigateTo: (page: string) => void
  user?: any
}

const NYAdvancedDirective: React.FC<NYAdvancedDirectiveProps> = ({ navigateTo }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  const [formData, setFormData] = useState({
    // General Information
    fullName: '',
    homeAddress: '',
    telephoneNumber: '',
    
    // Health Care Proxy
    agentName: '',
    agentAddress: '',
    agentPhone: '',
    alternateAgentName: '',
    alternateAgentAddress: '',
    alternateAgentPhone: '',
    additionalInstructions: '',
    expirationDate: '',
    agentInstructions: '',
    additionalCareInstructions: '',
    
    // Living Will
    choiceNotToProlongLife: false,
    terminalCondition: false,
    permanentlyUnconscious: false,
    minimallyConscious: false,
    cardiacResuscitation: false,
    mechanicalRespiration: false,
    artificialNutritionHydration: false,
    antibiotics: false,
    choiceToProlongLife: false,
    painRelief: '',
    otherWishes: '',
    
    // Organ Donation
    organDonation: '',
    transplant: false,
    therapy: false,
    research: false,
    education: false,
    
    // Execution
    executionDate: '',
    printName: '',
    executionAddress: '',
    witness1Date: '',
    witness1PrintName: '',
    witness1Address: '',
    witness2Date: '',
    witness2PrintName: '',
    witness2Address: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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

  const handleSaveAndExit = () => {
    // In a real app, this would save the current progress
    navigateTo('dashboard')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the form data
    alert('Form would be submitted in the actual application')
    navigateTo('dashboard')
  }

  const renderGeneralInformation = () => {
    return (
      <section className="form-section">
        <h2>General Information</h2>
        <div className="form-group">
          <label htmlFor="full-name">Full Name:</label>
          <input 
            type="text" 
            id="full-name" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="home-address">Home Address:</label>
          <input 
            type="text" 
            id="home-address" 
            name="homeAddress" 
            value={formData.homeAddress} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="telephone-number">Telephone Number:</label>
          <input 
            type="tel" 
            id="telephone-number" 
            name="telephoneNumber" 
            value={formData.telephoneNumber} 
            onChange={handleInputChange} 
            required 
          />
        </div>
      </section>
    )
  }

  const renderHealthCareProxy = () => {
    return (
      <section className="form-section">
        <h2>Part I: Health Care Proxy</h2>
        
        <div className="form-group">
          <label htmlFor="agent-name">Appointing Health Care Agent - Name:</label>
          <input 
            type="text" 
            id="agent-name" 
            name="agentName" 
            value={formData.agentName} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="agent-address">Appointing Health Care Agent - Home Address:</label>
          <input 
            type="text" 
            id="agent-address" 
            name="agentAddress" 
            value={formData.agentAddress} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="agent-phone">Appointing Health Care Agent - Telephone Number:</label>
          <input 
            type="tel" 
            id="agent-phone" 
            name="agentPhone" 
            value={formData.agentPhone} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="alternate-agent-name">Appointing Alternate Health Care Agent - Name:</label>
          <input 
            type="text" 
            id="alternate-agent-name" 
            name="alternateAgentName" 
            value={formData.alternateAgentName} 
            onChange={handleInputChange} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="alternate-agent-address">Appointing Alternate Health Care Agent - Home Address:</label>
          <input 
            type="text" 
            id="alternate-agent-address" 
            name="alternateAgentAddress" 
            value={formData.alternateAgentAddress} 
            onChange={handleInputChange} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="alternate-agent-phone">Appointing Alternate Health Care Agent - Telephone Number:</label>
          <input 
            type="tel" 
            id="alternate-agent-phone" 
            name="alternateAgentPhone" 
            value={formData.alternateAgentPhone} 
            onChange={handleInputChange} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="additional-instructions">Additional Instructions (Optional):</label>
          <textarea 
            id="additional-instructions" 
            name="additionalInstructions" 
            value={formData.additionalInstructions} 
            onChange={handleInputChange} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="expiration-date">Date or Conditions for Expiration (if desired):</label>
          <input 
            type="text" 
            id="expiration-date" 
            name="expirationDate" 
            value={formData.expirationDate} 
            onChange={handleInputChange} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="agent-instructions">Instructions to Agent:</label>
          <textarea 
            id="agent-instructions" 
            name="agentInstructions" 
            value={formData.agentInstructions} 
            onChange={handleInputChange} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="additional-care-instructions">Additional Instructions Regarding Advance Care Plans (Optional):</label>
          <textarea 
            id="additional-care-instructions" 
            name="additionalCareInstructions" 
            value={formData.additionalCareInstructions} 
            onChange={handleInputChange} 
          />
        </div>
      </section>
    )
  }

  const renderLivingWill = () => {
    return (
      <section className="form-section">
        <h2>Part II: Living Will</h2>
        <h3>Life-Sustaining Treatments</h3>
        
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="choice-not-to-prolong-life" 
            name="choiceNotToProlongLife" 
            checked={formData.choiceNotToProlongLife} 
            onChange={handleInputChange} 
          />
          <label htmlFor="choice-not-to-prolong-life">
            I do not want my life to be prolonged if I should be in an incurable or irreversible mental or physical condition with no reasonable expectation of recovery, including but not limited to:
          </label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="terminal-condition" 
            name="terminalCondition" 
            checked={formData.terminalCondition} 
            onChange={handleInputChange} 
          />
          <label htmlFor="terminal-condition">Terminal condition</label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="permanently-unconscious" 
            name="permanentlyUnconscious" 
            checked={formData.permanentlyUnconscious} 
            onChange={handleInputChange} 
          />
          <label htmlFor="permanently-unconscious">Permanently unconscious condition</label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="minimally-conscious" 
            name="minimallyConscious" 
            checked={formData.minimallyConscious} 
            onChange={handleInputChange} 
          />
          <label htmlFor="minimally-conscious">Minimally conscious condition</label>
        </div>
        
        <div className="form-group">
          <label htmlFor="specific-treatments">Specific Treatments to Withhold:</label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="cardiac-resuscitation" 
            name="cardiacResuscitation" 
            checked={formData.cardiacResuscitation} 
            onChange={handleInputChange} 
          />
          <label htmlFor="cardiac-resuscitation">Cardiac resuscitation</label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="mechanical-respiration" 
            name="mechanicalRespiration" 
            checked={formData.mechanicalRespiration} 
            onChange={handleInputChange} 
          />
          <label htmlFor="mechanical-respiration">Mechanical respiration</label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="artificial-nutrition-hydration" 
            name="artificialNutritionHydration" 
            checked={formData.artificialNutritionHydration} 
            onChange={handleInputChange} 
          />
          <label htmlFor="artificial-nutrition-hydration">Artificial nutrition and hydration</label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="antibiotics" 
            name="antibiotics" 
            checked={formData.antibiotics} 
            onChange={handleInputChange} 
          />
          <label htmlFor="antibiotics">Antibiotics</label>
        </div>
        
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="choice-to-prolong-life" 
            name="choiceToProlongLife" 
            checked={formData.choiceToProlongLife} 
            onChange={handleInputChange} 
          />
          <label htmlFor="choice-to-prolong-life">
            I want my life to be prolonged as long as possible within the limits of generally accepted health care standards.
          </label>
        </div>
        
        <div className="form-group">
          <label htmlFor="pain-relief">Relief from Pain:</label>
          <textarea 
            id="pain-relief" 
            name="painRelief" 
            value={formData.painRelief} 
            onChange={handleInputChange} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="other-wishes">Other Wishes:</label>
          <textarea 
            id="other-wishes" 
            name="otherWishes" 
            value={formData.otherWishes} 
            onChange={handleInputChange} 
          />
        </div>
      </section>
    )
  }

  const renderOrganDonation = () => {
    return (
      <section className="form-section">
        <h2>Organ Donation (Optional)</h2>
        
        <div className="radio-group">
          <input 
            type="radio" 
            id="no-donation" 
            name="organDonation" 
            value="no-donation" 
            checked={formData.organDonation === 'no-donation'} 
            onChange={handleRadioChange} 
          />
          <label htmlFor="no-donation">
            I do not give any of my organs, tissues, or parts and do not want my agent, guardian, or family to make a donation on my behalf.
          </label>
        </div>
        
        <div className="radio-group">
          <input 
            type="radio" 
            id="any-donation" 
            name="organDonation" 
            value="any-donation" 
            checked={formData.organDonation === 'any-donation'} 
            onChange={handleRadioChange} 
          />
          <label htmlFor="any-donation">
            I give any needed organs, tissues, or parts.
          </label>
        </div>
        
        <div className="radio-group">
          <input 
            type="radio" 
            id="specific-donation" 
            name="organDonation" 
            value="specific-donation" 
            checked={formData.organDonation === 'specific-donation'} 
            onChange={handleRadioChange} 
          />
          <label htmlFor="specific-donation">
            I give the following organs, tissues, or parts only:
          </label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="transplant" 
            name="transplant" 
            checked={formData.transplant} 
            onChange={handleInputChange} 
            disabled={formData.organDonation !== 'specific-donation'} 
          />
          <label htmlFor="transplant">Transplant</label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="therapy" 
            name="therapy" 
            checked={formData.therapy} 
            onChange={handleInputChange} 
            disabled={formData.organDonation !== 'specific-donation'} 
          />
          <label htmlFor="therapy">Therapy</label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="research" 
            name="research" 
            checked={formData.research} 
            onChange={handleInputChange} 
            disabled={formData.organDonation !== 'specific-donation'} 
          />
          <label htmlFor="research">Research</label>
        </div>
        
        <div className="checkbox-group indented">
          <input 
            type="checkbox" 
            id="education" 
            name="education" 
            checked={formData.education} 
            onChange={handleInputChange} 
            disabled={formData.organDonation !== 'specific-donation'} 
          />
          <label htmlFor="education">Education</label>
        </div>
      </section>
    )
  }

  const renderExecution = () => {
    return (
      <section className="form-section">
        <h2>Part III: Execution</h2>
        
        <div className="form-group">
          <label htmlFor="signature">Signature:</label>
          <div className="signature-pad-container">
            <div className="signature-pad-placeholder">
              <p>Signature Pad will appear here in the final version</p>
            </div>
            <button type="button" className="btn btn-secondary">Clear Signature</button>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="execution-date">Date:</label>
          <input 
            type="date" 
            id="execution-date" 
            name="executionDate" 
            value={formData.executionDate} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="print-name">Print Name:</label>
          <input 
            type="text" 
            id="print-name" 
            name="printName" 
            value={formData.printName} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="execution-address">Address:</label>
          <input 
            type="text" 
            id="execution-address" 
            name="executionAddress" 
            value={formData.executionAddress} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        <h3>Witnesses (2 required):</h3>
        
        <div className="witness-section">
          <h4>Witness 1</h4>
          
          <div className="form-group">
            <label htmlFor="witness1-signature">Witness 1 Signature:</label>
            <div className="signature-pad-container">
              <div className="signature-pad-placeholder">
                <p>Signature Pad will appear here in the final version</p>
              </div>
              <button type="button" className="btn btn-secondary">Clear Signature</button>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="witness1-date">Date:</label>
            <input 
              type="date" 
              id="witness1-date" 
              name="witness1Date" 
              value={formData.witness1Date} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="witness1-print-name">Print Name:</label>
            <input 
              type="text" 
              id="witness1-print-name" 
              name="witness1PrintName" 
              value={formData.witness1PrintName} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="witness1-address">Address:</label>
            <input 
              type="text" 
              id="witness1-address" 
              name="witness1Address" 
              value={formData.witness1Address} 
              onChange={handleInputChange} 
              required 
            />
          </div>
        </div>
        
        <div className="witness-section">
          <h4>Witness 2</h4>
          
          <div className="form-group">
            <label htmlFor="witness2-signature">Witness 2 Signature:</label>
            <div className="signature-pad-container">
              <div className="signature-pad-placeholder">
                <p>Signature Pad will appear here in the final version</p>
              </div>
              <button type="button" className="btn btn-secondary">Clear Signature</button>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="witness2-date">Date:</label>
            <input 
              type="date" 
              id="witness2-date" 
              name="witness2Date" 
              value={formData.witness2Date} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="witness2-print-name">Print Name:</label>
            <input 
              type="text" 
              id="witness2-print-name" 
              name="witness2PrintName" 
              value={formData.witness2PrintName} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="witness2-address">Address:</label>
            <input 
              type="text" 
              id="witness2-address" 
              name="witness2Address" 
              value={formData.witness2Address} 
              onChange={handleInputChange} 
              required 
            />
          </div>
        </div>
      </section>
    )
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderGeneralInformation()
      case 2:
        return renderHealthCareProxy()
      case 3:
        return renderLivingWill()
      case 4:
        return renderOrganDonation()
      case 5:
        return renderExecution()
      default:
        return renderGeneralInformation()
    }
  }

  return (
    <div className="ny-advanced-directive-container">
      <div className="form-header">
        <h1>New York Advance Directive</h1>
        <div className="progress-indicator">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <div className="step-indicator">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
      </div>
      
      <form id="ny-advanced-directive-form" onSubmit={handleSubmit}>
        {renderCurrentStep()}
        
        <div className="form-navigation">
          {currentStep > 1 && (
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={handlePreviousStep}
            >
              Previous
            </button>
          )}
          
          <button 
            type="button" 
            className="btn btn-outline" 
            onClick={handleSaveAndExit}
          >
            Save & Exit
          </button>
          
          {currentStep < totalSteps ? (
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button 
              type="submit" 
              className="btn btn-primary"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      
      <div className="form-info-box">
        <h3>About New York Advance Directives</h3>
        <p>
          This form combines a Health Care Proxy and Living Will for New York State. 
          It allows you to appoint someone you trust to make health care decisions for you 
          if you lose the ability to make decisions yourself. It also lets you specify your 
          wishes regarding life-sustaining treatment and organ donation.
        </p>
        <p>
          <strong>Note:</strong> This is a draft form for review purposes. In the final version, 
          you will be able to electronically sign this document and have it witnessed according 
          to New York State law.
        </p>
      </div>
    </div>
  )
}

export default NYAdvancedDirective
