import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import WillCreation from './pages/WillCreation'
import HealthcareDirective from './pages/HealthcareDirective'
import FinancialPOA from './pages/FinancialPOA'
import Resources from './pages/Resources'
import Pricing from './pages/Pricing'
import Checkout from './pages/Checkout'
import PaymentSuccess from './pages/PaymentSuccess'
import SubsidyApplication from './pages/SubsidyApplication'
import SubsidyConfirmation from './pages/SubsidyConfirmation'
import NYAdvancedDirective from './pages/NYAdvancedDirective'
import AboutPage from './pages/AboutPage'
import './App.css'
import './assets/css/about.css'
import './assets/css/forms/advanced-directive.css'

function App() {
  // Get the hash from the URL
  const getHashRoute = () => {
    const hash = window.location.hash.substring(1);
    return hash || 'home';
  };

  const [currentPage, setCurrentPage] = useState(getHashRoute())
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [selectedProduct] = useState({
    type: 'Will',
    price: 49
  })

  // Update the URL hash when page changes
  const updateHash = (page) => {
    window.location.hash = page;
  };

  const handleLogin = (userData: any) => {
    setUser(userData)
    setIsLoggedIn(true)
    setCurrentPage('dashboard')
    updateHash('dashboard');
  }

  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
    setCurrentPage('home')
    updateHash('home');
  }

  const handleRegister = () => {
    setCurrentPage('login')
    updateHash('login');
  }

  const navigateTo = (page: string) => {
    setCurrentPage(page)
    updateHash(page);
  }

  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    setCurrentPage(getHashRoute());
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />
      case 'login':
        return <Login onLogin={handleLogin} navigateTo={navigateTo} />
      case 'register':
        return <Register onRegister={handleRegister} navigateTo={navigateTo} />
      case 'dashboard':
        return <Dashboard navigateTo={navigateTo} user={user} />
      case 'will':
        return <WillCreation navigateTo={navigateTo} user={user} />
      case 'healthcare':
        return <HealthcareDirective navigateTo={navigateTo} user={user} />
      case 'financial':
        return <FinancialPOA navigateTo={navigateTo} user={user} />
      case 'resources':
        return <Resources navigateTo={navigateTo} />
      case 'pricing':
        return <Pricing navigateTo={navigateTo} />
      case 'checkout':
        return <Checkout navigateTo={navigateTo} productType={selectedProduct.type} price={selectedProduct.price} />
      case 'payment-success':
        return <PaymentSuccess navigateTo={navigateTo} />
      case 'subsidy-application':
        return <SubsidyApplication navigateTo={navigateTo} />
      case 'subsidy-confirmation':
        return <SubsidyConfirmation navigateTo={navigateTo} />
      case 'ny-advanced-directive':
        return <NYAdvancedDirective navigateTo={navigateTo} />
      case 'about':
        return <AboutPage />
      default:
        return <HomePage navigateTo={navigateTo} />
    }
  }

  return (
    <div className="app-container">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} navigateTo={navigateTo} user={user} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  )
}

export default App
