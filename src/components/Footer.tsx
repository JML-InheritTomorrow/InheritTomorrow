import React from 'react'

const Footer: React.FC<{ navigateTo: (page: string) => void }> = ({ navigateTo }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/src/assets/images/logo.png" alt="Inherit Tomorrow - Your Legacy, Secured Today" />
            <p>Preserving your legacy, protecting your family</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Documents</h4>
              <ul>
                <li><button onClick={() => navigateTo('will')}>Last Will & Testament</button></li>
                <li><button onClick={() => navigateTo('healthcare')}>Healthcare Directive</button></li>
                <li><button onClick={() => navigateTo('financial')}>Financial Power of Attorney</button></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><button onClick={() => navigateTo('resources')}>Educational Articles</button></li>
                <li><button onClick={() => navigateTo('resources')}>Community Resources</button></li>
                <li><button onClick={() => navigateTo('resources')}>Find an Attorney</button></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><button onClick={() => navigateTo('about')}>About Us</button></li>
                <li><button onClick={() => navigateTo('privacy')}>Privacy Policy</button></li>
                <li><button onClick={() => navigateTo('terms')}>Terms of Service</button></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Inherit Tomorrow. All rights reserved.</p>
          <p>https://www.inherittomorrow.com</p>
          <p>Created with cultural understanding and legal expertise for Black American families.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
