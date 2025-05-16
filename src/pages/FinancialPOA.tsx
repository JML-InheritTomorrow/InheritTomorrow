import React, { useState } from 'react'

interface FinancialPOAProps {
  navigateTo: (page: string) => void
  user: any
}

const FinancialPOA: React.FC<FinancialPOAProps> = ({ navigateTo }) => {
  const [currentStep, setCurrentStep] = useState(0) // 0 for intro, 1-4 for steps
  const totalSteps = 4

  // Mock form data
  const [formData] = useState({
    // Financial Agent
    primaryAgent: {
      name: 'Tanya Washington',
      relationship: 'Spouse',
      phone: '(404) 555-2345',
      email: 'tanya.washington@email.com'
    },
    alternateAgent: {
      name: 'James Washington',
      relationship: 'Brother',
      phone: '(404) 555-8910',
      email: 'james.washington@email.com'
    },
    
    // Powers Granted
    powers: {
      banking: true,
      billPayments: true,
      realEstate: true,
      personalProperty: true,
      taxes: true,
      governmentBenefits: true,
      retirement: true,
      insurance: true,
      business: false,
      gifts: false,
      trusts: false
    },
    limitations: 'My agent cannot sell my primary residence without court approval',
    
    // When Powers Take Effect
    powerType: 'durable',
    incapacityDetermination: 'two_doctors',
    endConditions: {
      death: true,
      revocation: true,
      specificDate: false,
      date: ''
    }
  })

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSaveAndExit = () => {
    // In a real app, this would save the current progress
    navigateTo('dashboard')
  }

  const handleFinalize = () => {
    // In a real app, this would save and finalize the document
    navigateTo('dashboard')
  }

  const renderIntroduction = () => {
    return (
      <div className="step-content">
        <h2>Financial Power of Attorney - Introduction</h2>
        
        <div className="card">
          <h3>What is a Financial Power of Attorney?</h3>
          <p>
            A Financial Power of Attorney allows you to:
          </p>
          <ul>
            <li>Appoint someone you trust to manage your finances if you become unable to do so</li>
            <li>Specify what financial powers they will have</li>
            <li>Protect your assets and ensure bills are paid during periods of incapacity</li>
          </ul>
          <p>
            This document helps prevent court-appointed guardianship and protects family assets.
          </p>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Protecting Your Family's Financial Security</div>
          <p>
            Without a Financial Power of Attorney, your family may face court costs and delays in 
            accessing funds needed for your care or household expenses if you become incapacitated. 
            This document is especially important for protecting homes and property that have been 
            in families for generations.
          </p>
        </div>
        
        <div className="form-navigation">
          <button className="btn btn-secondary" onClick={handleSaveAndExit}>
            Exit
          </button>
          <button className="btn btn-primary" onClick={handleNextStep}>
            Begin →
          </button>
        </div>
      </div>
    )
  }

  const renderAgentSelection = () => {
    return (
      <div className="step-content">
        <h2>Financial Agent Selection</h2>
        <p>Who do you trust to manage your finances if you become unable to do so?</p>
        
        <div className="card">
          <h3>Primary Financial Agent</h3>
          
          <div className="form-group checkbox-group">
            <input
              type="radio"
              id="agent_spouse"
              name="primaryAgent"
              checked={formData.primaryAgent.relationship === 'Spouse'}
              readOnly
            />
            <label htmlFor="agent_spouse">
              Spouse: {formData.primaryAgent.name}
            </label>
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="radio"
              id="agent_other"
              name="primaryAgent"
              checked={formData.primaryAgent.relationship !== 'Spouse'}
              readOnly
            />
            <label htmlFor="agent_other">
              Other person (specify)
            </label>
          </div>
          
          <div className="form-group">
            <label htmlFor="agentPhone" className="form-label">Phone</label>
            <input
              type="tel"
              id="agentPhone"
              className="form-input"
              value={formData.primaryAgent.phone}
              readOnly
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="agentEmail" className="form-label">Email</label>
            <input
              type="email"
              id="agentEmail"
              className="form-input"
              value={formData.primaryAgent.email}
              readOnly
            />
          </div>
        </div>
        
        <div className="card">
          <h3>Alternate Financial Agent</h3>
          
          <div className="form-group checkbox-group">
            <input
              type="radio"
              id="alternate_same"
              name="alternateAgent"
              checked={false}
              readOnly
            />
            <label htmlFor="alternate_same">
              Same as Healthcare Agent
            </label>
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="radio"
              id="alternate_brother"
              name="alternateAgent"
              checked={formData.alternateAgent.relationship === 'Brother'}
              readOnly
            />
            <label htmlFor="alternate_brother">
              Brother: {formData.alternateAgent.name}
            </label>
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="radio"
              id="alternate_other"
              name="alternateAgent"
              checked={formData.alternateAgent.relationship !== 'Brother'}
              readOnly
            />
            <label htmlFor="alternate_other">
              Other person (specify)
            </label>
          </div>
          
          <div className="form-group">
            <label htmlFor="alternatePhone" className="form-label">Phone</label>
            <input
              type="tel"
              id="alternatePhone"
              className="form-input"
              value={formData.alternateAgent.phone}
              readOnly
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="alternateEmail" className="form-label">Email</label>
            <input
              type="email"
              id="alternateEmail"
              className="form-input"
              value={formData.alternateAgent.email}
              readOnly
            />
          </div>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Choosing Your Financial Agent</div>
          <p>
            Your financial agent should be someone who:
          </p>
          <ul>
            <li>Is trustworthy and responsible with money</li>
            <li>Understands your financial situation</li>
            <li>Will respect your wishes about how money is used</li>
            <li>Has some basic financial knowledge</li>
            <li>Is willing to serve in this role</li>
          </ul>
        </div>
      </div>
    )
  }

  const renderPowersGranted = () => {
    return (
      <div className="step-content">
        <h2>Powers Granted</h2>
        <p>What financial powers do you want to grant to your agent?</p>
        
        <div className="card">
          <div className="powers-list">
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_banking"
                checked={formData.powers.banking}
                readOnly
              />
              <label htmlFor="power_banking">Banking transactions</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_bills"
                checked={formData.powers.billPayments}
                readOnly
              />
              <label htmlFor="power_bills">Bill payments and debt management</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_realestate"
                checked={formData.powers.realEstate}
                readOnly
              />
              <label htmlFor="power_realestate">Real estate transactions</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_property"
                checked={formData.powers.personalProperty}
                readOnly
              />
              <label htmlFor="power_property">Personal property transactions</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_taxes"
                checked={formData.powers.taxes}
                readOnly
              />
              <label htmlFor="power_taxes">Tax matters</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_benefits"
                checked={formData.powers.governmentBenefits}
                readOnly
              />
              <label htmlFor="power_benefits">Government benefits</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_retirement"
                checked={formData.powers.retirement}
                readOnly
              />
              <label htmlFor="power_retirement">Retirement accounts</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_insurance"
                checked={formData.powers.insurance}
                readOnly
              />
              <label htmlFor="power_insurance">Insurance transactions</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_business"
                checked={formData.powers.business}
                readOnly
              />
              <label htmlFor="power_business">Business operations</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_gifts"
                checked={formData.powers.gifts}
                readOnly
              />
              <label htmlFor="power_gifts">Making gifts</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="power_trusts"
                checked={formData.powers.trusts}
                readOnly
              />
              <label htmlFor="power_trusts">Creating or changing trusts</label>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="limitations" className="form-label">Limitations or special instructions:</label>
            <textarea
              id="limitations"
              className="form-input"
              value={formData.limitations}
              readOnly
              rows={3}
            />
          </div>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Protecting Family Property</div>
          <p>
            Consider adding specific protections for property that has special significance or has been 
            in your family for generations. You can limit your agent's ability to sell certain assets 
            or require additional approval for major transactions.
          </p>
        </div>
      </div>
    )
  }

  const renderWhenPowersTakeEffect = () => {
    return (
      <div className="step-content">
        <h2>When Powers Take Effect</h2>
        <p>When do you want your agent's powers to begin?</p>
        
        <div className="card">
          <div className="form-group checkbox-group">
            <input
              type="radio"
              id="power_durable"
              name="powerType"
              checked={formData.powerType === 'durable'}
              readOnly
            />
            <label htmlFor="power_durable">
              <strong>Durable Power of Attorney</strong>
              <p>Takes effect immediately and continues if you become incapacitated</p>
            </label>
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="radio"
              id="power_springing"
              name="powerType"
              checked={formData.powerType === 'springing'}
              readOnly
            />
            <label htmlFor="power_springing">
              <strong>Springing Power of Attorney</strong>
              <p>Takes effect only if you become incapacitated</p>
            </label>
          </div>
          
          {formData.powerType === 'springing' && (
            <div className="form-section">
              <h4>If Springing, how is incapacity determined?</h4>
              <div className="form-group checkbox-group">
                <input
                  type="radio"
                  id="incapacity_one_doctor"
                  name="incapacityDetermination"
                  checked={formData.incapacityDetermination === 'one_doctor'}
                  readOnly
                />
                <label htmlFor="incapacity_one_doctor">
                  Written certification from one doctor
                </label>
              </div>
              
              <div className="form-group checkbox-group">
                <input
                  type="radio"
                  id="incapacity_two_doctors"
                  name="incapacityDetermination"
                  checked={formData.incapacityDetermination === 'two_doctors'}
                  readOnly
                />
                <label htmlFor="incapacity_two_doctors">
                  Written certification from two doctors
                </label>
              </div>
              
              <div className="form-group checkbox-group">
                <input
                  type="radio"
                  id="incapacity_other"
                  name="incapacityDetermination"
                  checked={formData.incapacityDetermination === 'other'}
                  readOnly
                />
                <label htmlFor="incapacity_other">
                  Other method (specify)
                </label>
              </div>
            </div>
          )}
          
          <div className="form-section">
            <h4>When does this Power of Attorney end?</h4>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="end_death"
                checked={formData.endConditions.death}
                readOnly
              />
              <label htmlFor="end_death">Upon my death</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="end_revocation"
                checked={formData.endConditions.revocation}
                readOnly
              />
              <label htmlFor="end_revocation">If I revoke it</label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="end_date"
                checked={formData.endConditions.specificDate}
                readOnly
              />
              <label htmlFor="end_date">On this date:</label>
              {formData.endConditions.specificDate && (
                <input
                  type="date"
                  className="form-input"
                  value={formData.endConditions.date}
                  readOnly
                />
              )}
            </div>
          </div>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Understanding Your Options</div>
          <p>
            A Durable Power of Attorney is often recommended because it ensures your agent can act 
            immediately in emergencies. A Springing Power only activates when you're incapacitated, 
            but this can cause delays while doctors certify your condition.
          </p>
        </div>
      </div>
    )
  }

  const renderFinalization = () => {
    return (
      <div className="step-content">
        <h2>Review and Finalize</h2>
        <p>Your Financial Power of Attorney is almost complete.</p>
        
        <div className="card">
          <h3>Summary of Your Choices</h3>
          <ul className="summary-list">
            <li>Financial Agent: {formData.primaryAgent.name} ({formData.primaryAgent.relationship.toLowerCase()})</li>
            <li>Alternate Agent: {formData.alternateAgent.name} ({formData.alternateAgent.relationship.toLowerCase()})</li>
            <li>
              Powers Granted: Banking, bill payments, real estate, personal property, taxes, 
              government benefits, retirement accounts, insurance
            </li>
            <li>Limitations: Cannot sell primary residence without court approval</li>
            <li>Type: {formData.powerType === 'durable' ? 'Durable' : 'Springing'} Power of Attorney</li>
            <li>
              Ends: {formData.endConditions.death ? 'Upon death' : ''} 
              {formData.endConditions.revocation ? ', upon revocation' : ''}
              {formData.endConditions.specificDate ? `, on ${formData.endConditions.date}` : ''}
            </li>
          </ul>
          
          <button className="btn btn-secondary">
            View Full Document
          </button>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Making It Official</div>
          <p>
            To make your Financial Power of Attorney legally binding:
          </p>
          <ol>
            <li>Print your completed document</li>
            <li>Sign in front of a notary public (required in most states)</li>
            <li>Give copies to your financial agents, bank, and close family members</li>
            <li>Keep the original in a secure but accessible location</li>
          </ol>
        </div>
      </div>
    )
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderIntroduction()
      case 1:
        return renderAgentSelection()
      case 2:
        return renderPowersGranted()
      case 3:
        return renderWhenPowersTakeEffect()
      case 4:
        return renderFinalization()
      default:
        return null
    }
  }

  return (
    <div className="financial-poa-page fade-in">
      {currentStep > 0 && (
        <>
          <h1>Financial Power of Attorney - Step {currentStep} of {totalSteps}</h1>
          
          <div className="progress-container">
            <div className="progress-steps">
              {[...Array(totalSteps)].map((_, index) => (
                <div 
                  key={index} 
                  className={`step ${currentStep > index + 1 ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="step-label">
                    {index === 0 && 'Agent'}
                    {index === 1 && 'Powers'}
                    {index === 2 && 'Timing'}
                    {index === 3 && 'Finalize'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
      <div className="form-container">
        {renderStepContent()}
        
        {currentStep > 0 && (
          <div className="form-navigation">
            <button className="btn btn-secondary" onClick={handlePreviousStep}>
              ← Back
            </button>
            
            <button className="btn btn-secondary" onClick={handleSaveAndExit}>
              Save & Exit
            </button>
            
            {currentStep < totalSteps ? (
              <button className="btn btn-primary" onClick={handleNextStep}>
                Continue →
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleFinalize}>
                Finalize
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default FinancialPOA
