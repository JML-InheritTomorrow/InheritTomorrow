import React, { useState } from 'react'

interface DashboardProps {
  navigateTo: (page: string) => void
  user: any
}

const Dashboard: React.FC<DashboardProps> = ({ navigateTo, user }) => {
  // Mock document status data
  const [documents] = useState({
    will: { status: 'not_started', progress: 0 },
    healthcare: { status: 'in_progress', progress: 50 },
    financial: { status: 'completed', progress: 100 }
  })

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'not_started':
        return 'Not Started'
      case 'in_progress':
        return 'In Progress'
      case 'completed':
        return 'Complete'
      default:
        return 'Unknown'
    }
  }

  const getActionButton = (documentType: string, status: string) => {
    switch (status) {
      case 'not_started':
        return (
          <button 
            className="btn btn-primary" 
            onClick={() => navigateTo(documentType)}
          >
            Begin
          </button>
        )
      case 'in_progress':
        return (
          <button 
            className="btn btn-primary" 
            onClick={() => navigateTo(documentType)}
          >
            Continue
          </button>
        )
      case 'completed':
        return (
          <button 
            className="btn btn-secondary" 
            onClick={() => navigateTo(documentType)}
          >
            View
          </button>
        )
      default:
        return null
    }
  }

  return (
    <div className="dashboard-page fade-in">
      <div className="dashboard-header">
        <h1>My Dashboard</h1>
        <p className="welcome-message">
          Welcome back, {user?.firstName || 'User'}. Let's continue building your legacy plan.
        </p>
      </div>

      <section className="documents-section">
        <h2>Your Documents</h2>
        <div className="documents-container">
          <div className="document-card">
            <div className="document-icon">
              <div className="icon-placeholder">📄</div>
            </div>
            <h3>Last Will & Testament</h3>
            <div className="document-status">
              <span className="status-label">Status: {getStatusLabel(documents.will.status)}</span>
              {documents.will.status === 'in_progress' && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${documents.will.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
            <p>
              Protect your family's future and legacy. Ensure your property and assets are distributed according to your wishes.
            </p>
            {getActionButton('will', documents.will.status)}
          </div>

          <div className="document-card">
            <div className="document-icon">
              <div className="icon-placeholder">🏥</div>
            </div>
            <h3>Healthcare Directive</h3>
            <div className="document-status">
              <span className="status-label">Status: {getStatusLabel(documents.healthcare.status)}</span>
              {documents.healthcare.status === 'in_progress' && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${documents.healthcare.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
            <p>
              Ensure your medical wishes are respected. Appoint someone you trust to make healthcare decisions if you're unable to.
            </p>
            {getActionButton('healthcare', documents.healthcare.status)}
          </div>

          <div className="document-card">
            <div className="document-icon">
              <div className="icon-placeholder">💰</div>
            </div>
            <h3>Financial Power of Attorney</h3>
            <div className="document-status">
              <span className="status-label">Status: {getStatusLabel(documents.financial.status)}</span>
              {documents.financial.status === 'in_progress' && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${documents.financial.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
            <p>
              Appoint someone you trust to manage your finances if you become unable to do so yourself.
            </p>
            {getActionButton('financial', documents.financial.status)}
          </div>
        </div>
      </section>

      <section className="recommendations-section">
        <h2>Recommended For You</h2>
        <div className="recommendations-container">
          <div className="recommendation-item">
            <div className="recommendation-icon">✓</div>
            <div className="recommendation-content">
              <h3>Complete your Healthcare Directive</h3>
              <p>You're halfway there! Finish documenting your healthcare wishes.</p>
              <button 
                className="btn btn-accent" 
                onClick={() => navigateTo('healthcare')}
              >
                Continue
              </button>
            </div>
          </div>

          <div className="recommendation-item">
            <div className="recommendation-icon">💬</div>
            <div className="recommendation-content">
              <h3>Schedule a family conversation about your wishes</h3>
              <p>Discussing your plans with loved ones helps ensure they understand your wishes.</p>
              <button 
                className="btn btn-accent" 
                onClick={() => navigateTo('resources')}
              >
                Get Conversation Guide
              </button>
            </div>
          </div>

          <div className="recommendation-item">
            <div className="recommendation-icon">📚</div>
            <div className="recommendation-content">
              <h3>Learn about protecting family property</h3>
              <p>Understand how to prevent heirs' property issues and preserve your assets.</p>
              <button 
                className="btn btn-accent" 
                onClick={() => navigateTo('resources')}
              >
                Read Article
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <h2>Community Resources</h2>
        <div className="resources-container">
          <div className="resource-link" onClick={() => navigateTo('resources')}>
            <h3 className="resource-link-title">Find a Black attorney in your area</h3>
            <p>Connect with legal professionals who understand your unique needs</p>
          </div>

          <div className="resource-link" onClick={() => navigateTo('resources')}>
            <h3 className="resource-link-title">Upcoming webinar: "Faith and End-of-Life Planning"</h3>
            <p>Join faith leaders for a discussion on balancing spiritual beliefs with practical planning</p>
          </div>

          <div className="resource-link" onClick={() => navigateTo('resources')}>
            <h3 className="resource-link-title">Financial literacy workshop this weekend</h3>
            <p>Learn strategies for building and preserving generational wealth</p>
          </div>
        </div>
      </section>

      <div className="info-box">
        <div className="info-box-title">Did You Know?</div>
        <p>
          Completing all three essential documents (Will, Healthcare Directive, and Financial Power of Attorney) 
          provides comprehensive protection for you and your loved ones. Each document serves a unique purpose 
          in ensuring your wishes are honored.
        </p>
      </div>
    </div>
  )
}

export default Dashboard
