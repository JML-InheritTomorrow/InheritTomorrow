import React, { useState } from 'react'

interface CheckoutProps {
  navigateTo: (page: string) => void
  productType: string
  price: number
}

const Checkout: React.FC<CheckoutProps> = ({ navigateTo, productType, price }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value
    })
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      navigateTo('payment-success')
    }, 2000)
  }
  
  return (
    <div className="checkout-page fade-in">
      <h1>Complete Your Purchase</h1>
      
      <div className="checkout-container">
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="order-details">
            <div className="product-info">
              <h3>{productType} Upgrade</h3>
              <p>Premium access to advanced features and legal review</p>
            </div>
            
            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal</span>
                <span>${price.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>${price.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="secure-badge">
            <div className="secure-icon">🔒</div>
            <div className="secure-text">
              <strong>Secure Checkout</strong>
              <p>Your information is encrypted and secure</p>
            </div>
          </div>
        </div>
        
        <div className="checkout-form-container">
          <h2>Payment Information</h2>
          
          <div className="payment-methods">
            <div 
              className={`payment-method ${paymentMethod === 'credit' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('credit')}
            >
              <div className="payment-icon">💳</div>
              <span>Credit Card</span>
            </div>
            
            <div 
              className={`payment-method ${paymentMethod === 'paypal' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('paypal')}
            >
              <div className="payment-icon">P</div>
              <span>PayPal</span>
            </div>
          </div>
          
          {paymentMethod === 'credit' && (
            <form className="payment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cardName" className="form-label">Name on Card</label>
                <input
                  type="text"
                  id="cardName"
                  className="form-input"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  className="form-input"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expDate" className="form-label">Expiration Date</label>
                  <input
                    type="text"
                    id="expDate"
                    className="form-input"
                    value={formData.expDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    className="form-input"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              
              <h3>Billing Address</h3>
              
              <div className="form-group">
                <label htmlFor="billingAddress" className="form-label">Street Address</label>
                <input
                  type="text"
                  id="billingAddress"
                  className="form-input"
                  value={formData.billingAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city" className="form-label">City</label>
                  <input
                    type="text"
                    id="city"
                    className="form-input"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="state" className="form-label">State</label>
                  <input
                    type="text"
                    id="state"
                    className="form-input"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    className="form-input"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => navigateTo('pricing')}
                >
                  Cancel
                </button>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Pay $${price.toFixed(2)}`}
                </button>
              </div>
            </form>
          )}
          
          {paymentMethod === 'paypal' && (
            <div className="paypal-container">
              <p>You will be redirected to PayPal to complete your payment.</p>
              <button 
                className="btn btn-primary paypal-button"
                onClick={() => {
                  setIsProcessing(true)
                  setTimeout(() => {
                    setIsProcessing(false)
                    navigateTo('payment-success')
                  }, 2000)
                }}
                disabled={isProcessing}
              >
                {isProcessing ? 'Connecting to PayPal...' : 'Continue to PayPal'}
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="checkout-footer">
        <p>
          By completing your purchase, you agree to our <button className="text-link">Terms of Service</button> and <button className="text-link">Privacy Policy</button>.
        </p>
        <p>
          Need help? <button className="text-link">Contact our support team</button>
        </p>
      </div>
    </div>
  )
}

export default Checkout
