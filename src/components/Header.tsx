import React from 'react'
import logoImage from '../assets/images/InheritTomorrow-Color logo with background-fixed.jpg'

interface HeaderProps {
  isLoggedIn: boolean
  onLogout: () => void
  navigateTo: (page: string) => void
  user: any
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout, navigateTo, user }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => navigateTo('home')}>
            <img src={logoImage} alt="Inherit Tomorrow - Your Legacy, Secured Today" width="365" height="62" />
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <button onClick={() => navigateTo('home')}>Home</button>
              </li>
              <li>
                <button onClick={() => navigateTo('pricing')}>Pricing</button>
              </li>
              <li>
                <button onClick={() => navigateTo('resources')}>Resources</button>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <button onClick={() => navigateTo('dashboard')}>My Dashboard</button>
                  </li>
                  <li>
                    <div className="user-menu">
                      <span>Welcome, {user?.firstName || 'User'}</span>
                      <button className="btn btn-secondary" onClick={onLogout}>
                        Log Out
                      </button>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button className="btn btn-secondary" onClick={() => navigateTo('login')}>
                      Log In
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-primary" onClick={() => navigateTo('register')}>
                      Get Started
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
