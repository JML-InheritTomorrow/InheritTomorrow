import React from 'react'
import '../assets/css/pricing/pricing.css'
import ebanIcon from '../assets/images/icons/eban.svg'
import gyeNyameIcon from '../assets/images/icons/gye-nyame.svg'
import crownIcon from '../assets/images/icons/crown.svg'

interface PricingProps {
  navigateTo: (page: string) => void
}

const Pricing: React.FC<PricingProps> = ({ navigateTo }) => {
  return (
    <div className="pricing-page fade-in">
      <div className="pricing-header">
        <h1>Choose Your Legacy Plan</h1>
        <p className="pricing-subtitle">
          Estate planning designed for Black families to protect what matters most
        </p>
      </div>
      
      <div className="pricing-tiers">
        {/* Free Tier */}
        <div className="pricing-tier free-tier">
          <div className="tier-header">
            <img src={ebanIcon} alt="Eban - Symbol of Protection" className="tier-icon" />
            <h2>Foundations</h2>
            <p className="tier-price">Free</p>
            <p className="tier-description">Start with a will. Upgrade to protect more.</p>
          </div>
          
          <div className="image-placeholder">
            Family Image Placeholder
          </div>
          
          <ul className="tier-features">
            <li>Create a legally binding will</li>
            <li>Name guardians for your children</li>
            <li>Distribute heirlooms</li>
            <li>Honor your legacy</li>
            <li>Basic document storage</li>
          </ul>
          
          <button 
            className="btn-block"
            onClick={() => navigateTo('register')}
          >
            Start with Free
          </button>
        </div>
        
        {/* Basic Tier */}
        <div className="pricing-tier basic-tier">
          <div className="tier-header">
            <img src={gyeNyameIcon} alt="Gye Nyame - Symbol of Sovereignty" className="tier-icon" />
            <h2>Legacy Essentials</h2>
            <p className="tier-price">$55</p>
            <p className="tier-description">Your voice matters—plan your healthcare and legacy in one place.</p>
          </div>
          
          <div className="image-placeholder">
            Family Image Placeholder
          </div>
          
          <ul className="tier-features">
            <li>Everything in Foundations</li>
            <li>Healthcare directive</li>
            <li>Name a healthcare proxy</li>
            <li>Outline medical wishes</li>
            <li>State-specific compliance alerts</li>
            <li>E-signature tools</li>
          </ul>
          
          <button 
            className="btn-block"
            onClick={() => navigateTo('register')}
          >
            Upgrade to Legacy Essentials
          </button>
          
          <div className="add-on">
            Want peace of mind? Add a legal review by a Black-owned law firm for $75.
          </div>
        </div>
        
        {/* Premium Tier */}
        <div className="pricing-tier premium-tier">
          <div className="tier-badge">Most Popular</div>
          <div className="tier-header">
            <img src={crownIcon} alt="Crown - Symbol of Power and Legacy" className="tier-icon" />
            <h2>Legacy Builder</h2>
            <p className="tier-price">$99</p>
            <p className="tier-description">Your legacy, protected. All tools. One fair price.</p>
          </div>
          
          <div className="image-placeholder">
            Family Image Placeholder
          </div>
          
          <ul className="tier-features">
            <li>Everything in Legacy Essentials</li>
            <li>Trust creation</li>
            <li>Financial directive</li>
            <li>Bypass probate</li>
            <li>Protect small businesses</li>
            <li>Store digital assets (crypto, social media)</li>
            <li>Legacy Vault for important documents</li>
            <li>Access to Education Hub</li>
          </ul>
          
          <button 
            className="btn-block"
            onClick={() => navigateTo('register')}
          >
            Build Generational Wealth
          </button>
          
          <div className="add-on">
            Get a trust review by a Black-owned law firm for $50.
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Let's build a future where legacy is power</h2>
        <p>
          Join thousands of families who have taken control of their future with Inherit Tomorrow.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-secondary" onClick={() => navigateTo('register')}>
            Start with Free
          </button>
          <button className="btn btn-primary" onClick={() => navigateTo('register')}>
            Build Generational Wealth
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
