import React, { useState } from 'react'

interface PaymentSuccessProps {
  navigateTo: (page: string) => void
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ navigateTo }) => {
  const [receiptSent, setReceiptSent] = useState(false)
  
  const handleSendReceipt = () => {
    setReceiptSent(true)
  }
  
  return (
    <div className="payment-success-page fade-in">
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h1>Payment Successful!</h1>
        <p className="success-message">
          Thank you for your purchase. Your premium features have been activated.
        </p>
        
        <div className="order-details">
          <h2>Order Details</h2>
          <div className="order-info">
            <div className="order-row">
              <span>Order Number:</span>
              <span>IT-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="order-row">
              <span>Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="order-row">
              <span>Product:</span>
              <span>Premium Document Upgrade</span>
            </div>
            <div className="order-row">
              <span>Amount:</span>
              <span>$49.00</span>
            </div>
            <div className="order-row">
              <span>Payment Method:</span>
              <span>Credit Card (ending in 1234)</span>
            </div>
          </div>
        </div>
        
        <div className="receipt-actions">
          <button 
            className="btn btn-secondary"
            onClick={handleSendReceipt}
            disabled={receiptSent}
          >
            {receiptSent ? 'Receipt Sent' : 'Email Receipt'}
          </button>
          
          <button className="btn btn-secondary">
            Download Receipt
          </button>
        </div>
        
        <div className="next-steps">
          <h2>What's Next?</h2>
          <p>
            You now have access to all premium features for your document. Here's what you can do next:
          </p>
          <ul className="next-steps-list">
            <li>Complete your document with advanced features</li>
            <li>Submit for legal review when ready</li>
            <li>Store and manage your documents securely</li>
            <li>Access premium educational resources</li>
          </ul>
        </div>
        
        <div className="success-actions">
          <button 
            className="btn btn-primary"
            onClick={() => navigateTo('dashboard')}
          >
            Go to Dashboard
          </button>
          
          <button 
            className="btn btn-secondary"
            onClick={() => navigateTo('will')}
          >
            Continue to Document
          </button>
        </div>
      </div>
      
      <div className="referral-section">
        <h2>Share with Family & Friends</h2>
        <p>
          Help your loved ones secure their legacy too. Share Inherit Tomorrow with family and friends.
        </p>
        <div className="share-buttons">
          <button className="btn btn-social">
            Share via Email
          </button>
          <button className="btn btn-social">
            Share on Facebook
          </button>
          <button className="btn btn-social">
            Share on Twitter
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
