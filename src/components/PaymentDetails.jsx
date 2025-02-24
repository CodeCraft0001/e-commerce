import React from 'react'
import './Payment.css'
// import '../assets/src/assets/realistic-credit-card-design_23-2149126090-removebg-preview.png'
// import myImage from '../assets/card.png'

function PaymentDetails() {
  return (
    <div className= 'bg-light p-3'>
  <h3 className='mt-2'>Payment Details</h3><br />
    <div className='container-fluid'>
      <h6 className='text-secondary ms-2'>Card Type</h6> 
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujGaOrEq35cE8H1cwo2dHKq8hEuUlqr3qXQ&s' className='w-75 mt-3 ms-1' alt="" /> 
    </div>  
    <div className='container-fluid mt-5'>
        <h6 className='text-secondary ms-2'>Name on the card</h6> 
        <span className='fw-bold ms-2'>Card Holder Name</span>
    </div>
    <div className="container-fluid mt-4">
  <h6 className="text-secondary ms-2">Card Number</h6>
  <input 
    type="text" 
    value={'•••• •••• •••• 8943'} 
    readOnly
    className="custom-input"
  />
</div>
    <div className="row container-fluid mt-4 mb-5">
        <div className='col-6'>
            <h6 className='text-secondary ms-2'>Expiration Date</h6>
            <span className='ms-3'>MM</span><span className='ms-5'>YYYY</span> <span></span>
        </div>
        <div className="col-6">
            <h6 className='text-secondary'>CVV</h6>
            <span className='cvv'>•••</span>
        </div>
    </div>
    <div className='container-fluid d-flex justify-content-center'><button className='w-75 py-2 rounded-pill bg-danger fa-x text-white fw-bold border'>Checkout</button></div>
</div>
  )
}

export default PaymentDetails
