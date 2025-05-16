import React from 'react'

interface ResourcesProps {
  navigateTo: (page: string) => void
}

const Resources: React.FC<ResourcesProps> = ({ navigateTo }) => {
  return (
    <div className="resources-page fade-in">
      <h1>Educational Resources</h1>
      
      <section className="resources-section">
        <h2>Understanding Estate Planning</h2>
        
        <div className="resources-container">
          <div className="resource-card">
            <h3>The History of Black Land Ownership in America</h3>
            <p>
              Understanding the historical context of property ownership and wealth in the Black community is essential
              for effective estate planning. This article explores how historical barriers have affected property
              ownership and wealth accumulation, and how proper estate planning can help address these challenges.
            </p>
            <button className="btn btn-secondary">Read Article</button>
          </div>
          
          <div className="resource-card">
            <h3>How to Prevent Heirs' Property Issues</h3>
            <p>
              "Heirs' property" situations have led to significant land loss in Black communities. Learn how
              proper estate planning can prevent fractional ownership problems and protect family land for
              future generations.
            </p>
            <button className="btn btn-secondary">Read Article</button>
          </div>
          
          <div className="resource-card">
            <h3>Faith and End-of-Life Planning</h3>
            <p>
              Many people worry that advance planning conflicts with their faith. This resource explores how
              creating healthcare directives and wills can align with spiritual beliefs while ensuring your
              wishes are respected.
            </p>
            <button className="btn btn-secondary">Read Article</button>
          </div>
          
          <div className="resource-card">
            <h3>Building Generational Wealth in Black Families</h3>
            <p>
              Discover strategies for creating and preserving wealth across generations through effective
              estate planning, financial literacy, and strategic asset management.
            </p>
            <button className="btn btn-secondary">Read Article</button>
          </div>
        </div>
      </section>
      
      <section className="video-resources-section">
        <h2>Video Resources</h2>
        
        <div className="resources-container">
          <div className="video-resource">
            <div className="video-placeholder">
              <p>Black Faith Leaders Discuss Estate Planning</p>
            </div>
            <h3>Faith Perspectives on Estate Planning</h3>
            <p>
              Faith leaders from various denominations discuss how estate planning aligns with
              spiritual values and community responsibility.
            </p>
          </div>
          
          <div className="video-resource">
            <div className="video-placeholder">
              <p>How to Complete Your Documents</p>
            </div>
            <h3>Step-by-Step Document Guidance</h3>
            <p>
              A detailed walkthrough of how to complete and properly execute your estate planning documents.
            </p>
          </div>
          
          <div className="video-resource">
            <div className="video-placeholder">
              <p>Family Conversation Guide</p>
            </div>
            <h3>Talking to Your Family About Your Wishes</h3>
            <p>
              Practical advice for having productive conversations with family members about your estate plans.
            </p>
          </div>
        </div>
      </section>
      
      <section className="community-resources-section">
        <h2>Community Resources</h2>
        
        <div className="resources-container">
          <div className="community-resource-card">
            <h3>Find a Black Attorney in Your Area</h3>
            <p>
              Connect with legal professionals who understand your unique needs and cultural context.
            </p>
            <button className="btn btn-primary">Search Directory</button>
          </div>
          
          <div className="community-resource-card">
            <h3>Free Legal Clinics Calendar</h3>
            <p>
              Find upcoming free legal clinics in your area where you can get assistance with estate planning.
            </p>
            <button className="btn btn-primary">View Calendar</button>
          </div>
          
          <div className="community-resource-card">
            <h3>Financial Literacy Workshops</h3>
            <p>
              Discover workshops and classes focused on building financial literacy and wealth management skills.
            </p>
            <button className="btn btn-primary">Find Workshops</button>
          </div>
          
          <div className="community-resource-card">
            <h3>Community Estate Planning Events</h3>
            <p>
              Learn about upcoming community events focused on estate planning and wealth preservation.
            </p>
            <button className="btn btn-primary">View Events</button>
          </div>
        </div>
      </section>
      
      <section className="downloadable-guides-section">
        <h2>Downloadable Guides</h2>
        
        <div className="resources-container">
          <div className="guide-card">
            <h3>Family Conversation Starter Kit</h3>
            <p>
              A comprehensive guide to help you start important conversations with your family about your estate plans.
            </p>
            <button className="btn btn-secondary">Download PDF</button>
          </div>
          
          <div className="guide-card">
            <h3>Estate Inventory Worksheet</h3>
            <p>
              A detailed worksheet to help you catalog all your assets and important information in one place.
            </p>
            <button className="btn btn-secondary">Download PDF</button>
          </div>
          
          <div className="guide-card">
            <h3>Healthcare Wishes Discussion Guide</h3>
            <p>
              A guide to help you think through and document your healthcare preferences.
            </p>
            <button className="btn btn-secondary">Download PDF</button>
          </div>
          
          <div className="guide-card">
            <h3>Legacy Letter Template</h3>
            <p>
              A template to help you write a personal letter to your loved ones expressing your values, hopes, and wishes.
            </p>
            <button className="btn btn-secondary">Download PDF</button>
          </div>
        </div>
      </section>
      
      <div className="cta-section">
        <h2>Ready to Start Your Estate Plan?</h2>
        <p>
          Take the first step toward protecting your family's future and preserving your legacy.
        </p>
        <button className="btn btn-primary" onClick={() => navigateTo('register')}>
          Create Your Free Account
        </button>
      </div>
    </div>
  )
}

export default Resources
