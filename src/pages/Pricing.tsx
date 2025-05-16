import React from 'react'

interface PricingProps {
  navigateTo: (page: string) => void
}

const Pricing: React.FC<PricingProps> = ({ navigateTo }) => {
  return (
    <div className="pricing-page fade-in">
      <div className="pricing-header">
        <h1>Choose Your Legacy Plan</h1>
        <p className="pricing-subtitle">
          Affordable estate planning solutions tailored to your needs
        </p>
      </div>
      
      <div className="pricing-tiers">
        <div className="pricing-tier free-tier">
          <div className="tier-header">
            <h2>Free</h2>
            <p className="tier-price">$0</p>
            <p className="tier-description">Basic will creation to get started</p>
          </div>
          
          <ul className="tier-features">
            <li>Basic will template</li>
            <li>Document storage (1 document)</li>
            <li>Limited educational resources</li>
            <li>Email support</li>
          </ul>
          
          <button 
            className="btn btn-secondary btn-block"
            onClick={() => navigateTo('register')}
          >
            Get Started
          </button>
        </div>
        
        <div className="pricing-tier premium-tier">
          <div className="tier-badge">Most Popular</div>
          <div className="tier-header">
            <h2>Premium</h2>
            <p className="tier-price">$49</p>
            <p className="tier-description">Per document upgrade</p>
          </div>
          
          <ul className="tier-features">
            <li>Advanced document templates</li>
            <li>Legal review of documents</li>
            <li>Unlimited document storage</li>
            <li>Full access to educational resources</li>
            <li>Priority customer support</li>
            <li>Document updates for 1 year</li>
          </ul>
          
          <button 
            className="btn btn-primary btn-block"
            onClick={() => navigateTo('register')}
          >
            Upgrade Now
          </button>
        </div>
        
        <div className="pricing-tier subsidy-tier">
          <div className="tier-header">
            <h2>Subsidized Access</h2>
            <p className="tier-price">Reduced or No Cost</p>
            <p className="tier-description">Based on eligibility</p>
          </div>
          
          <ul className="tier-features">
            <li>All Premium features</li>
            <li>Income-based qualification</li>
            <li>Supported by nonprofit partnerships</li>
            <li>Simple verification process</li>
          </ul>
          
          <button 
            className="btn btn-accent btn-block"
            onClick={() => navigateTo('subsidy-application')}
          >
            Check Eligibility
          </button>
        </div>
      </div>
      
      <div className="pricing-comparison">
        <h2>Feature Comparison</h2>
        
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free</th>
                <th>Premium</th>
                <th>Subsidized</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Will Template</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Healthcare Directive</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Financial Power of Attorney</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Legal Document Review</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Document Storage</td>
                <td>1 Document</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Educational Resources</td>
                <td>Limited</td>
                <td>Full Access</td>
                <td>Full Access</td>
              </tr>
              <tr>
                <td>Customer Support</td>
                <td>Email</td>
                <td>Priority</td>
                <td>Priority</td>
              </tr>
              <tr>
                <td>Document Updates</td>
                <td></td>
                <td>1 Year</td>
                <td>1 Year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="pricing-testimonials">
        <h2>What Our Customers Say</h2>
        
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"Inherit Tomorrow made creating my will so much easier than I expected. The cultural context really resonated with me and my family."</p>
            <div className="testimonial-author">- Michael J., Atlanta</div>
          </div>
          
          <div className="testimonial">
            <p>"The premium service was worth every penny. Having a legal professional review my documents gave me peace of mind that everything was done correctly."</p>
            <div className="testimonial-author">- Tanya W., Chicago</div>
          </div>
          
          <div className="testimonial">
            <p>"As a single mother, I qualified for the subsidized program. I'm so grateful to have been able to create these important documents for my family's future."</p>
            <div className="testimonial-author">- Keisha D., Houston</div>
          </div>
        </div>
      </div>
      
      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-container">
          <div className="faq-item">
            <h3>How does the Premium upgrade work?</h3>
            <p>
              When you choose to upgrade to Premium, you'll pay $49 per document type (Will, Healthcare Directive, or Financial Power of Attorney). 
              This gives you access to advanced features, legal review, and unlimited updates for that document for one year.
            </p>
          </div>
          
          <div className="faq-item">
            <h3>Who qualifies for the Subsidized Access program?</h3>
            <p>
              Our Subsidized Access program is available to individuals who meet certain income requirements or face financial hardships. 
              The application process is simple and dignified, requiring basic documentation to verify eligibility.
            </p>
          </div>
          
          <div className="faq-item">
            <h3>Is my payment information secure?</h3>
            <p>
              Yes, we use industry-standard encryption and security practices to protect your payment information. 
              We partner with trusted payment processors and never store your full credit card details on our servers.
            </p>
          </div>
          
          <div className="faq-item">
            <h3>Can I upgrade from Free to Premium later?</h3>
            <p>
              Absolutely! You can start with our Free tier and upgrade to Premium at any time. 
              Your existing information will transfer seamlessly to the upgraded document.
            </p>
          </div>
          
          <div className="faq-item">
            <h3>How does the legal review process work?</h3>
            <p>
              With Premium access, your completed documents are reviewed by a qualified legal professional who specializes in estate planning. 
              They'll provide feedback and suggestions to ensure your documents are properly prepared and legally sound.
            </p>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Ready to Secure Your Legacy?</h2>
        <p>
          Join thousands of families who have taken control of their future with Inherit Tomorrow.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-secondary" onClick={() => navigateTo('register')}>
            Start Free
          </button>
          <button className="btn btn-primary" onClick={() => navigateTo('register')}>
            Go Premium
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
