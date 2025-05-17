import React from 'react'

interface HomePageProps {
  navigateTo: (page: string) => void
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="cultural-pattern"></div>
        <div className="hero-content">
          <h1>Preserve Your Legacy, Protect Your Family</h1>
          <h2>Estate planning designed for Black Americans</h2>
          <p>Create legally binding documents that honor your wishes and build generational wealth</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigateTo('register')}>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={() => navigateTo('resources')}>
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/src/assets/images/hero.png" alt="Family discussing estate planning documents" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <h2>Why Estate Planning Matters For Our Community</h2>
        <div className="stats-container">
          <div className="stat-card">
            <h3>77%</h3>
            <p>of Black Americans don't have a will</p>
          </div>
          <div className="stat-card">
            <h3>15%</h3>
            <p>of older Black Americans have advance healthcare directives</p>
          </div>
          <div className="stat-card">
            <h3>80%</h3>
            <p>of Black-owned land lost since 1907</p>
          </div>
        </div>
        <div className="cultural-accent">
          <p>
            Estate planning is crucial for Black families to secure their loved ones' wishes and build generational wealth. 
            This proactive approach helps address historical wealth disparities and systemic injustices that have hindered 
            wealth accumulation in the Black community.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              {/* Will icon placeholder */}
              <div className="icon-placeholder">📄</div>
            </div>
            <h3>Last Will & Testament</h3>
            <p>
              Protect your family's future and legacy. Ensure your property and assets are distributed according to your wishes.
            </p>
            <button className="btn btn-primary" onClick={() => navigateTo('will')}>
              Start Now
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">
              {/* Healthcare icon placeholder */}
              <div className="icon-placeholder">🏥</div>
            </div>
            <h3>Healthcare Directive</h3>
            <p>
              Ensure your medical wishes are respected. Appoint someone you trust to make healthcare decisions if you're unable to.
            </p>
            <button className="btn btn-primary" onClick={() => navigateTo('healthcare')}>
              Start Now
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">
              {/* Financial icon placeholder */}
              <div className="icon-placeholder">💰</div>
            </div>
            <h3>Financial Power of Attorney</h3>
            <p>
              Appoint someone you trust to manage your finances if you become unable to do so yourself.
            </p>
            <button className="btn btn-primary" onClick={() => navigateTo('financial')}>
              Start Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Community Voices</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>
              "Creating a will with Inherit Tomorrow gave me peace of mind knowing my children won't have to deal with the same property issues my family faced when my parents passed without a will."
            </p>
            <p className="testimonial-author">— Michael Johnson, Atlanta GA</p>
          </div>

          <div className="testimonial">
            <p>
              "The healthcare directive was explained in a way that respected my faith while helping me make important decisions about my future care. I finally feel prepared."
            </p>
            <p className="testimonial-author">— Tanya Williams, Chicago IL</p>
          </div>

          <div className="testimonial">
            <p>
              "As a small business owner, the financial power of attorney was essential for protecting what I've built. The process was straightforward and culturally sensitive."
            </p>
            <p className="testimonial-author">— Marcus Thompson, Houston TX</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Trusted Partners</h2>
        <div className="partners-container">
          {/* Partner logos would go here */}
          <div className="partner-placeholder">Black Church Coalition</div>
          <div className="partner-placeholder">National Urban League</div>
          <div className="partner-placeholder">Black Bar Association</div>
          <div className="partner-placeholder">Community Foundation</div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="resources-preview">
        <h2>Resources & Education</h2>
        <div className="resources-container">
          <div className="resource-link" onClick={() => navigateTo('resources')}>
            <h3 className="resource-link-title">The History of Black Land Ownership in America</h3>
            <p>Understanding the historical context of property ownership and wealth in the Black community</p>
          </div>

          <div className="resource-link" onClick={() => navigateTo('resources')}>
            <h3 className="resource-link-title">Faith and End-of-Life Planning</h3>
            <p>How to approach healthcare directives while honoring your spiritual beliefs</p>
          </div>

          <div className="resource-link" onClick={() => navigateTo('resources')}>
            <h3 className="resource-link-title">Building Generational Wealth in Black Families</h3>
            <p>Strategies for creating and preserving wealth for future generations</p>
          </div>

          <button className="btn btn-secondary" onClick={() => navigateTo('resources')}>
            View All Resources
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Building Your Legacy Today</h2>
        <p>
          Join thousands of Black Americans who are taking control of their family's future through proper estate planning.
        </p>
        <button className="btn btn-primary" onClick={() => navigateTo('register')}>
          Create Your Free Account
        </button>
      </section>
    </div>
  )
}

export default HomePage
