import React from 'react'

interface SubsidyConfirmationProps {
  navigateTo: (page: string) => void
}

const SubsidyConfirmation: React.FC<SubsidyConfirmationProps> = ({ navigateTo }) => {
  return (
    <div className="subsidy-confirmation-page fade-in">
      <div className="confirmation-container">
        <div className="confirmation-icon">✓</div>
        <h1>Application Submitted</h1>
        <p className="confirmation-message">
          Thank you for applying to our subsidy program. We've received your application and will review it shortly.
        </p>
        
        <div className="application-details">
          <h2>Application Details</h2>
          <div className="application-info">
            <div className="application-row">
              <span>Application ID:</span>
              <span>SUB-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="application-row">
              <span>Date Submitted:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="application-row">
              <span>Status:</span>
              <span className="status-pending">Pending Review</span>
            </div>
          </div>
        </div>
        
        <div className="next-steps">
          <h2>What Happens Next?</h2>
          <ol className="next-steps-list">
            <li>
              <strong>Application Review (2-3 business days)</strong>
              <p>Our team will review your application and verify the information provided.</p>
            </li>
            <li>
              <strong>Notification</strong>
              <p>You'll receive an email notification regarding your eligibility status.</p>
            </li>
            <li>
              <strong>Access Granted</strong>
              <p>If approved, you'll gain immediate access to premium features at reduced or no cost.</p>
            </li>
          </ol>
        </div>
        
        <div className="confirmation-actions">
          <button 
            className="btn btn-primary"
            onClick={() => navigateTo('dashboard')}
          >
            Go to Dashboard
          </button>
          
          <button 
            className="btn btn-secondary"
            onClick={() => navigateTo('resources')}
          >
            Explore Resources
          </button>
        </div>
      </div>
      
      <div className="partner-section">
        <h2>Our Subsidy Program Partners</h2>
        <p>
          Our subsidy program is made possible through partnerships with these organizations 
          committed to increasing access to estate planning in the Black community:
        </p>
        <div className="partner-logos">
          <div className="partner-logo">Community Foundation Logo</div>
          <div className="partner-logo">Legal Aid Society Logo</div>
          <div className="partner-logo">Black Wealth Initiative Logo</div>
        </div>
        <p className="partner-note">
          Interested in becoming a partner organization? <button className="text-link">Contact us</button> to learn more.
        </p>
      </div>
    </div>
  )
}

export default SubsidyConfirmation
