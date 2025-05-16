import React, { useState } from 'react'

interface HealthcareDirectiveProps {
  navigateTo: (page: string) => void
  user: any
}

const HealthcareDirective: React.FC<HealthcareDirectiveProps> = ({ navigateTo }) => {
  const [currentStep, setCurrentStep] = useState(0) // 0 for intro, 1-4 for steps
  const totalSteps = 4

  // Mock form data
  const [formData] = useState({
    // Healthcare Agent
    primaryAgent: {
      name: 'Tanya Washington',
      relationship: 'Spouse',
      phone: '(404) 555-2345',
      email: 'tanya.washington@email.com'
    },
    alternateAgent: {
      name: 'Michelle Johnson',
      relationship: 'Sister',
      phone: '(404) 555-6789',
      email: 'michelle.johnson@email.com'
    },
    
    // Medical Preferences
    cprPreference: 'no_cpr',
    ventilationPreference: 'temporary',
    nutritionPreference: 'agent_decide',
    
    // Additional Wishes
    painManagement: 'maximum',
    spiritualCare: 'minister',
    religiousAffiliation: 'Baptist',
    religiousPractices: [
      'Prayer before medical procedures',
      'Family prayer at bedside'
    ],
    otherWishes: 'I would like gospel music played in my room'
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
    // In a real app, this would save and finalize the directive
    navigateTo('dashboard')
  }

  const renderIntroduction = () => {
    return (
      <div className="step-content">
        <h2>Healthcare Directive - Introduction</h2>
        
        <div className="card">
          <h3>What is a Healthcare Directive?</h3>
          <p>
            A Healthcare Directive (also called an Advance Directive) allows you to:
          </p>
          <ul>
            <li>Appoint someone you trust to make medical decisions if you cannot speak for yourself</li>
            <li>Document your wishes for medical treatment</li>
            <li>Specify your preferences for end-of-life care</li>
          </ul>
          <p>
            This document helps ensure your values and wishes are respected.
          </p>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Faith and Healthcare Decisions</div>
          <p>
            Many people worry that advance planning conflicts with their faith. Creating a healthcare 
            directive doesn't mean giving up hope or faith in healing. It means ensuring your values 
            guide your care if you cannot speak for yourself.
          </p>
        </div>
        
        <div className="video-placeholder">
          <p>Video: Faith Leaders Discuss Healthcare Directives</p>
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

  const renderHealthcareAgent = () => {
    return (
      <div className="step-content">
        <h2>Healthcare Agent</h2>
        <p>Who do you trust to make medical decisions for you if you cannot speak for yourself?</p>
        
        <div className="card">
          <h3>Primary Healthcare Agent</h3>
          
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
          <h3>Alternate Healthcare Agent</h3>
          
          <div className="form-group checkbox-group">
            <input
              type="radio"
              id="alternate_sister"
              name="alternateAgent"
              checked={formData.alternateAgent.relationship === 'Sister'}
              readOnly
            />
            <label htmlFor="alternate_sister">
              Sister: {formData.alternateAgent.name}
            </label>
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="radio"
              id="alternate_other"
              name="alternateAgent"
              checked={formData.alternateAgent.relationship !== 'Sister'}
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
          <div className="info-box-title">Choosing Your Healthcare Agent</div>
          <p>
            Your healthcare agent should be someone who:
          </p>
          <ul>
            <li>Knows your values and wishes</li>
            <li>Can make difficult decisions under pressure</li>
            <li>Will advocate strongly for your wishes</li>
            <li>Is willing to serve in this role</li>
          </ul>
        </div>
      </div>
    )
  }

  const renderMedicalPreferences = () => {
    return (
      <div className="step-content">
        <h2>Medical Preferences</h2>
        
        <div className="card">
          <h3>Life-Sustaining Treatments</h3>
          <p>
            If I am terminally ill or permanently unconscious with no reasonable hope of recovery:
          </p>
          
          <div className="form-section">
            <h4>Cardiopulmonary Resuscitation (CPR):</h4>
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="cpr_yes"
                name="cprPreference"
                checked={formData.cprPreference === 'yes_cpr'}
                readOnly
              />
              <label htmlFor="cpr_yes">
                I want CPR attempted
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="cpr_no"
                name="cprPreference"
                checked={formData.cprPreference === 'no_cpr'}
                readOnly
              />
              <label htmlFor="cpr_no">
                I do not want CPR attempted
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="cpr_agent"
                name="cprPreference"
                checked={formData.cprPreference === 'agent_decide'}
                readOnly
              />
              <label htmlFor="cpr_agent">
                I want my healthcare agent to decide
              </label>
            </div>
          </div>
          
          <div className="form-section">
            <h4>Mechanical Ventilation:</h4>
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="ventilation_yes"
                name="ventilationPreference"
                checked={formData.ventilationPreference === 'yes_ventilation'}
                readOnly
              />
              <label htmlFor="ventilation_yes">
                I want to be put on a breathing machine
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="ventilation_no"
                name="ventilationPreference"
                checked={formData.ventilationPreference === 'no_ventilation'}
                readOnly
              />
              <label htmlFor="ventilation_no">
                I do not want to be put on a breathing machine
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="ventilation_temporary"
                name="ventilationPreference"
                checked={formData.ventilationPreference === 'temporary'}
                readOnly
              />
              <label htmlFor="ventilation_temporary">
                I want to be put on a breathing machine temporarily to see if I will recover
              </label>
            </div>
          </div>
          
          <div className="form-section">
            <h4>Artificial Nutrition and Hydration:</h4>
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="nutrition_yes"
                name="nutritionPreference"
                checked={formData.nutritionPreference === 'yes_nutrition'}
                readOnly
              />
              <label htmlFor="nutrition_yes">
                I want tube feeding
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="nutrition_no"
                name="nutritionPreference"
                checked={formData.nutritionPreference === 'no_nutrition'}
                readOnly
              />
              <label htmlFor="nutrition_no">
                I do not want tube feeding
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="nutrition_agent"
                name="nutritionPreference"
                checked={formData.nutritionPreference === 'agent_decide'}
                readOnly
              />
              <label htmlFor="nutrition_agent">
                I want my healthcare agent to decide based on my prognosis
              </label>
            </div>
          </div>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Cultural Context</div>
          <p>
            Studies show that Black Americans often prefer more aggressive medical interventions. 
            There is no right or wrong choice - what matters is that your wishes are documented 
            and respected. Consider discussing these options with your healthcare provider and 
            loved ones.
          </p>
        </div>
      </div>
    )
  }

  const renderAdditionalWishes = () => {
    return (
      <div className="step-content">
        <h2>Additional Wishes</h2>
        
        <div className="card">
          <h3>Comfort and Spiritual Care</h3>
          
          <div className="form-section">
            <h4>Pain Management:</h4>
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="pain_maximum"
                name="painManagement"
                checked={formData.painManagement === 'maximum'}
                readOnly
              />
              <label htmlFor="pain_maximum">
                I want maximum pain relief, even if it may hasten my death
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="pain_limited"
                name="painManagement"
                checked={formData.painManagement === 'limited'}
                readOnly
              />
              <label htmlFor="pain_limited">
                I want pain relief that will not hasten my death
              </label>
            </div>
          </div>
          
          <div className="form-section">
            <h4>Spiritual Care:</h4>
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="spiritual_minister"
                name="spiritualCare"
                checked={formData.spiritualCare === 'minister'}
                readOnly
              />
              <label htmlFor="spiritual_minister">
                I would like to see a minister/pastor
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="spiritual_chaplain"
                name="spiritualCare"
                checked={formData.spiritualCare === 'chaplain'}
                readOnly
              />
              <label htmlFor="spiritual_chaplain">
                I would like to see a chaplain
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="spiritual_none"
                name="spiritualCare"
                checked={formData.spiritualCare === 'none'}
                readOnly
              />
              <label htmlFor="spiritual_none">
                I do not want spiritual care
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="religiousAffiliation" className="form-label">My religious affiliation:</label>
            <input
              type="text"
              id="religiousAffiliation"
              className="form-input"
              value={formData.religiousAffiliation}
              readOnly
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Important religious practices to observe:</label>
            <ul className="practices-list">
              {formData.religiousPractices.map((practice, index) => (
                <li key={index}>{practice}</li>
              ))}
            </ul>
          </div>
          
          <div className="form-group">
            <label htmlFor="otherWishes" className="form-label">Other wishes:</label>
            <textarea
              id="otherWishes"
              className="form-input"
              value={formData.otherWishes}
              readOnly
              rows={3}
            />
          </div>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Faith and End-of-Life Care</div>
          <p>
            Many people find comfort in their faith during illness. Documenting your spiritual needs 
            helps ensure healthcare providers respect your religious practices and beliefs during treatment.
          </p>
        </div>
      </div>
    )
  }

  const renderFinalization = () => {
    return (
      <div className="step-content">
        <h2>Review and Finalize</h2>
        <p>Your Healthcare Directive is almost complete.</p>
        
        <div className="card">
          <h3>Summary of Your Choices</h3>
          <ul className="summary-list">
            <li>Healthcare Agent: {formData.primaryAgent.name} ({formData.primaryAgent.relationship.toLowerCase()})</li>
            <li>Alternate Agent: {formData.alternateAgent.name} ({formData.alternateAgent.relationship.toLowerCase()})</li>
            <li>CPR Preference: {formData.cprPreference === 'no_cpr' ? 'Do not attempt if terminally ill or permanently unconscious' : 'Attempt CPR'}</li>
            <li>Ventilation: {formData.ventilationPreference === 'temporary' ? 'Temporary use only' : 'As specified'}</li>
            <li>Nutrition: {formData.nutritionPreference === 'agent_decide' ? 'Agent to decide based on prognosis' : 'As specified'}</li>
            <li>Pain Management: {formData.painManagement === 'maximum' ? 'Maximum relief preferred' : 'Limited relief'}</li>
            <li>Spiritual Care: {formData.religiousAffiliation} {formData.spiritualCare === 'minister' ? 'minister' : 'chaplain'} requested</li>
          </ul>
          
          <button className="btn btn-secondary">
            View Full Document
          </button>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Making It Official</div>
          <p>
            To make your Healthcare Directive legally binding:
          </p>
          <ol>
            <li>Print your completed document</li>
            <li>Sign in front of two witnesses OR a notary public (requirements vary by state)</li>
            <li>Give copies to your healthcare agents, doctor, and close family members</li>
            <li>Keep the original in an accessible location</li>
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
        return renderHealthcareAgent()
      case 2:
        return renderMedicalPreferences()
      case 3:
        return renderAdditionalWishes()
      case 4:
        return renderFinalization()
      default:
        return null
    }
  }

  return (
    <div className="healthcare-directive-page fade-in">
      {currentStep > 0 && (
        <>
          <h1>Healthcare Directive - Step {currentStep} of {totalSteps}</h1>
          
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
                    {index === 1 && 'Medical'}
                    {index === 2 && 'Wishes'}
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

export default HealthcareDirective
