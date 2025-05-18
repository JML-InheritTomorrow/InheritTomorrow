import React from 'react'
import founderImage from '../assets/images/JLoadholt-IMG_4370v1.jpg'

interface AboutPageProps {
  navigateTo: (page: string) => void
}

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  return (
    <div className="about-page fade-in">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Your Legacy, Secured Today</h1>
          <h2>Inherit Tomorrow is a culturally proud platform designed to empower Black families to protect what matters most—through wills, trusts, and estate planning tools rooted in legacy, trust, and community.</h2>
          
          <div className="founder-quote">
            <p>"When my brother passed without a will, our family went through a very rough time handling his affairs. That moment inspired me to build Inherit Tomorrow—a space where legacy planning meets cultural pride."</p>
            <p className="quote-author">– James Loadholt</p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At <strong>Inherit Tomorrow</strong>, we believe every family deserves to protect their legacy—regardless of wealth, status, or background. 
            For Black Americans, systemic barriers have long excluded us from the tools needed to build generational wealth. We're changing that.
          </p>
          
          <div className="mission-points">
            <div className="mission-point">
              <h3>Empower Black families</h3>
              <p>to create wills, trusts, and directives that honor their stories and secure their futures.</p>
            </div>
            
            <div className="mission-point">
              <h3>Bridge the trust gap</h3>
              <p>by combining culturally resonant design with partnerships with Black-owned law firms, churches, and HBCUs.</p>
            </div>
            
            <div className="mission-point">
              <h3>Democratize access</h3>
              <p>to estate planning tools, making them affordable, simple, and rooted in our shared history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="why-section">
        <div className="container">
          <h2>Why We Exist</h2>
          <div className="stat-highlight">
            <h3>70% of Black Americans do not have a will.</h3>
          </div>
          
          <p>
            This gap isn't about lack of care—it's about exclusion. Generations of systemic inequity have left our communities 
            skeptical of legal systems and priced out of tools that protect families. At Inherit Tomorrow, we're building more than software; 
            we're creating a movement to:
          </p>
          
          <ul className="why-points">
            <li><strong>Reclaim agency</strong> over our legacies.</li>
            <li><strong>Protect small businesses, heirlooms, and hard-earned assets</strong> from probate courts.</li>
            <li><strong>Turn estate planning into an act of resistance</strong>—a way to say, "Our families matter."</li>
          </ul>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-image">
              <img src={founderImage} alt="James Loadholt - Founder & CEO of Inherit Tomorrow" width="300" height="300" className="circular-image" />
            </div>
            
            <div className="founder-bio">
              <h2>Meet James Loadholt</h2>
              <h3>Founder & CEO</h3>
              
              <p>
                As a Digital Marketing professional for the past 30 years, I've spent my career creating websites and products and delivering services to manage state and federal compliance regulations. After my brother passed away from a sudden illness without a will or any directives on how to handle his health and affairs, I realized how many Black families face the same set of circumstances. Inherit Tomorrow is my answer—a platform where legacy planning meets cultural pride.
              </p>
              
              <div className="founder-quote">
                <p>"I want my children to inherit more than memories. I want them to inherit power."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-section">
        <div className="container">
          <h2>Join Us</h2>
          <p>
            Inherit Tomorrow is more than a service—it's a community. Whether you're creating your first will, 
            advocating for policy changes, or partnering with us to expand access, your voice matters.
          </p>
          
          <h3>Let's build a future where legacy is power.</h3>
          
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => navigateTo('login')}>
              Log In to Start Your Will
            </button>
            <button className="btn btn-secondary" onClick={() => navigateTo('contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
