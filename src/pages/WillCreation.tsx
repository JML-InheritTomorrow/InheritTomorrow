import React, { useState } from 'react'

interface WillCreationProps {
  navigateTo: (page: string) => void
  user: any
}

const WillCreation: React.FC<WillCreationProps> = ({ navigateTo, user }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  // Mock form data
  const [formData] = useState({
    // Personal Information
    legalName: user?.firstName + ' ' + user?.lastName || '',
    address: '123 Maple Street',
    city: 'Atlanta',
    state: 'GA',
    zipCode: '30303',
    phone: '(404) 555-1234',
    dateOfBirth: '1975-05-15',
    maritalStatus: 'married',
    spouseName: 'Tanya Washington',
    
    // Beneficiaries
    beneficiaries: [
      { type: 'spouse', name: 'Tanya Washington', relationship: 'Spouse' },
      { type: 'child', name: 'Marcus Washington', age: 15, relationship: 'Child' },
      { type: 'child', name: 'Zoe Washington', age: 12, relationship: 'Child' }
    ],
    
    // Assets
    realEstate: [
      { type: 'primary', address: '123 Maple Street, Atlanta, GA 30303' }
    ],
    financialAccounts: [
      { type: 'checking', institution: 'Wells Fargo' },
      { type: 'savings', institution: 'Credit Union' },
      { type: 'retirement', institution: '401(k) Fidelity' }
    ],
    personalProperty: [
      { type: 'vehicle', description: '2019 Toyota Camry' },
      { type: 'heirlooms', description: 'Family Heirlooms' }
    ],
    
    // Distribution
    primaryHomeDistribution: 'spouse_then_children',
    financialDistribution: 'spouse_then_children',
    personalPropertyDistribution: 'specific',
    specificDistributions: [
      { item: 'Family Bible', recipient: 'Marcus Washington' },
      { item: 'Grandmother\'s jewelry', recipient: 'Zoe Washington' }
    ],
    
    // Executor
    primaryExecutor: { type: 'spouse', name: 'Tanya Washington' },
    backupExecutor: { type: 'relative', name: 'James Washington', relationship: 'Brother' },
    guardianForMinors: { name: 'Michelle Johnson', relationship: 'Sister' }
  })

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

  const handleFinalize = () => {
    // In a real app, this would save and finalize the will
    navigateTo('dashboard')
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalInformation()
      case 2:
        return renderBeneficiaries()
      case 3:
        return renderAssets()
      case 4:
        return renderDistribution()
      case 5:
        return renderExecutor()
      default:
        return null
    }
  }

  const renderPersonalInformation = () => {
    return (
      <div className="step-content">
        <h2>Personal Information</h2>
        
        <div className="form-group">
          <label htmlFor="legalName" className="form-label">Legal Name</label>
          <input
            type="text"
            id="legalName"
            className="form-input"
            value={formData.legalName}
            readOnly
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            id="address"
            className="form-input"
            value={formData.address}
            readOnly
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
              readOnly
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="state" className="form-label">State</label>
            <input
              type="text"
              id="state"
              className="form-input"
              value={formData.state}
              readOnly
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="zipCode" className="form-label">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              className="form-input"
              value={formData.zipCode}
              readOnly
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            id="phone"
            className="form-input"
            value={formData.phone}
            readOnly
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            className="form-input"
            value={formData.dateOfBirth}
            readOnly
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
          <select
            id="maritalStatus"
            className="form-select"
            value={formData.maritalStatus}
            disabled
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        
        {formData.maritalStatus === 'married' && (
          <div className="form-group">
            <label htmlFor="spouseName" className="form-label">Spouse Name</label>
            <input
              type="text"
              id="spouseName"
              className="form-input"
              value={formData.spouseName}
              readOnly
            />
          </div>
        )}
        
        <div className="info-box">
          <div className="info-box-title">Why This Matters</div>
          <p>
            Accurate personal information ensures your will is legally valid and can be properly executed.
            This helps prevent challenges to your wishes and protects your family's inheritance.
          </p>
        </div>
      </div>
    )
  }

  const renderBeneficiaries = () => {
    return (
      <div className="step-content">
        <h2>Beneficiaries</h2>
        <p>Who would you like to include in your will?</p>
        
        <div className="card">
          <h3>Family Members</h3>
          <ul className="beneficiary-list">
            {formData.beneficiaries.map((beneficiary, index) => (
              <li key={index} className="beneficiary-item">
                <div className="beneficiary-icon">+</div>
                <div className="beneficiary-info">
                  <strong>{beneficiary.name}</strong>
                  <span>{beneficiary.relationship}</span>
                  {beneficiary.type === 'child' && <span>Age: {beneficiary.age}</span>}
                </div>
              </li>
            ))}
            <li className="beneficiary-item add-item">
              <div className="beneficiary-icon">+</div>
              <div className="beneficiary-info">
                <span>Add another family member</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="card">
          <h3>Other Beneficiaries</h3>
          <ul className="beneficiary-list">
            <li className="beneficiary-item add-item">
              <div className="beneficiary-icon">+</div>
              <div className="beneficiary-info">
                <span>Add friend, relative, or organization</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Cultural Context</div>
          <p>
            In many Black families, extended family members and chosen family play important roles. 
            Consider including godparents, close friends, or community organizations that have been 
            meaningful to you.
          </p>
        </div>
      </div>
    )
  }

  const renderAssets = () => {
    return (
      <div className="step-content">
        <h2>Assets</h2>
        <p>List your major assets to be distributed:</p>
        
        <div className="card">
          <h3>Real Estate</h3>
          <ul className="asset-list">
            {formData.realEstate.map((property, index) => (
              <li key={index} className="asset-item">
                <div className="asset-icon">+</div>
                <div className="asset-info">
                  <strong>{property.type === 'primary' ? 'Primary Home' : 'Property'}</strong>
                  <span>{property.address}</span>
                </div>
              </li>
            ))}
            <li className="asset-item add-item">
              <div className="asset-icon">+</div>
              <div className="asset-info">
                <span>Add another property</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="card">
          <h3>Financial Accounts</h3>
          <ul className="asset-list">
            {formData.financialAccounts.map((account, index) => (
              <li key={index} className="asset-item">
                <div className="asset-icon">+</div>
                <div className="asset-info">
                  <strong>{account.type.charAt(0).toUpperCase() + account.type.slice(1)} Account</strong>
                  <span>{account.institution}</span>
                </div>
              </li>
            ))}
            <li className="asset-item add-item">
              <div className="asset-icon">+</div>
              <div className="asset-info">
                <span>Add another account</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="card">
          <h3>Personal Property</h3>
          <ul className="asset-list">
            {formData.personalProperty.map((item, index) => (
              <li key={index} className="asset-item">
                <div className="asset-icon">+</div>
                <div className="asset-info">
                  <strong>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</strong>
                  <span>{item.description}</span>
                </div>
              </li>
            ))}
            <li className="asset-item add-item">
              <div className="asset-icon">+</div>
              <div className="asset-info">
                <span>Add other property</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Preventing Heirs' Property Issues</div>
          <p>
            Clear documentation of property ownership helps prevent "heirs' property" situations 
            that have historically led to loss of land and homes in Black communities. Be specific 
            about who receives real estate and under what conditions.
          </p>
        </div>
      </div>
    )
  }

  const renderDistribution = () => {
    return (
      <div className="step-content">
        <h2>Distribution of Assets</h2>
        <p>Specify who receives which assets:</p>
        
        <div className="card">
          <h3>Primary Home</h3>
          <div className="distribution-options">
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="home_to_spouse"
                name="primaryHomeDistribution"
                checked={formData.primaryHomeDistribution === 'spouse'}
                readOnly
              />
              <label htmlFor="home_to_spouse">
                To spouse {formData.spouseName}
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="home_to_children"
                name="primaryHomeDistribution"
                checked={formData.primaryHomeDistribution === 'children'}
                readOnly
              />
              <label htmlFor="home_to_children">
                Divided equally among all children
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="home_to_spouse_then_children"
                name="primaryHomeDistribution"
                checked={formData.primaryHomeDistribution === 'spouse_then_children'}
                readOnly
              />
              <label htmlFor="home_to_spouse_then_children">
                To spouse, then to children equally if spouse is deceased
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="home_other"
                name="primaryHomeDistribution"
                checked={formData.primaryHomeDistribution === 'other'}
                readOnly
              />
              <label htmlFor="home_other">
                Other arrangement
              </label>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3>Financial Accounts</h3>
          <div className="distribution-options">
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="financial_to_spouse_then_children"
                name="financialDistribution"
                checked={formData.financialDistribution === 'spouse_then_children'}
                readOnly
              />
              <label htmlFor="financial_to_spouse_then_children">
                All accounts to spouse, then to children equally if spouse is deceased
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="financial_specific"
                name="financialDistribution"
                checked={formData.financialDistribution === 'specific'}
                readOnly
              />
              <label htmlFor="financial_specific">
                Specific distribution (click to specify)
              </label>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3>Personal Property</h3>
          <div className="distribution-options">
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="property_to_spouse"
                name="personalPropertyDistribution"
                checked={formData.personalPropertyDistribution === 'spouse'}
                readOnly
              />
              <label htmlFor="property_to_spouse">
                All to spouse
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="property_specific"
                name="personalPropertyDistribution"
                checked={formData.personalPropertyDistribution === 'specific'}
                readOnly
              />
              <label htmlFor="property_specific">
                Specific items to specific people (click)
              </label>
            </div>
          </div>
          
          {formData.personalPropertyDistribution === 'specific' && (
            <div className="specific-distributions">
              <h4>Specific Items</h4>
              <ul className="distribution-list">
                {formData.specificDistributions.map((distribution, index) => (
                  <li key={index} className="distribution-item">
                    <strong>{distribution.item}</strong> to {distribution.recipient}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Building Generational Wealth</div>
          <p>
            Consider how your assets can best support your family's long-term financial security. 
            Clear instructions help preserve wealth across generations and prevent costly legal disputes.
          </p>
        </div>
      </div>
    )
  }

  const renderExecutor = () => {
    return (
      <div className="step-content">
        <h2>Executor & Finalization</h2>
        
        <div className="card">
          <h3>Executor Selection</h3>
          <p>Who will ensure your wishes are carried out?</p>
          
          <div className="form-section">
            <h4>Primary Executor:</h4>
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="executor_spouse"
                name="primaryExecutor"
                checked={formData.primaryExecutor.type === 'spouse'}
                readOnly
              />
              <label htmlFor="executor_spouse">
                Spouse: {formData.spouseName}
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="executor_other"
                name="primaryExecutor"
                checked={formData.primaryExecutor.type !== 'spouse'}
                readOnly
              />
              <label htmlFor="executor_other">
                Other person (specify)
              </label>
            </div>
          </div>
          
          <div className="form-section">
            <h4>Backup Executor (if primary cannot serve):</h4>
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="backup_executor_relative"
                name="backupExecutor"
                checked={true}
                readOnly
              />
              <label htmlFor="backup_executor_relative">
                {formData.backupExecutor.relationship}: {formData.backupExecutor.name}
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="backup_executor_other"
                name="backupExecutor"
                checked={false}
                readOnly
              />
              <label htmlFor="backup_executor_other">
                Other person (specify)
              </label>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3>Guardian for Minor Children</h3>
          <p>(If both parents are deceased)</p>
          
          <div className="form-section">
            <h4>Primary Guardian:</h4>
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="guardian_relative"
                name="guardian"
                checked={true}
                readOnly
              />
              <label htmlFor="guardian_relative">
                {formData.guardianForMinors.relationship}: {formData.guardianForMinors.name}
              </label>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="radio"
                id="guardian_other"
                name="guardian"
                checked={false}
                readOnly
              />
              <label htmlFor="guardian_other">
                Other person (specify)
              </label>
            </div>
          </div>
        </div>
        
        <div className="info-box">
          <div className="info-box-title">Making It Official</div>
          <p>
            To make your will legally binding:
          </p>
          <ol>
            <li>Print your completed will</li>
            <li>Sign in front of two witnesses who are not beneficiaries in your will</li>
            <li>Have witnesses sign the will</li>
            <li>Consider having it notarized (recommended)</li>
          </ol>
        </div>
      </div>
    )
  }

  return (
    <div className="will-creation-page fade-in">
      <h1>Create Your Will - Step {currentStep} of {totalSteps}</h1>
      
      <div className="progress-container">
        <div className="progress-steps">
          {[...Array(totalSteps)].map((_, index) => (
            <div 
              key={index} 
              className={`step ${currentStep > index + 1 ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-label">
                {index === 0 && 'Personal Info'}
                {index === 1 && 'Beneficiaries'}
                {index === 2 && 'Assets'}
                {index === 3 && 'Distribution'}
                {index === 4 && 'Executor'}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="form-container">
        {renderStepContent()}
        
        <div className="form-navigation">
          {currentStep > 1 && (
            <button className="btn btn-secondary" onClick={handlePreviousStep}>
              ← Back
            </button>
          )}
          
          <button className="btn btn-secondary" onClick={handleSaveAndExit}>
            Save & Exit
          </button>
          
          {currentStep < totalSteps ? (
            <button className="btn btn-primary" onClick={handleNextStep}>
              Continue →
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleFinalize}>
              Finalize Will
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default WillCreation
