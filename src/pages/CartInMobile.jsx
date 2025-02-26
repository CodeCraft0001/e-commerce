import React from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart,removeFromCart,updateQuantity,emptyCart,decreaseQty,increaseQty } from '../redux/slices/cartSlice';

function CartInMobile() {
  const cartlist = useSelector((state) => state.cartSlice.cartlist);
  const dispatch = useDispatch();

  return (
    <div className='container-fluid bg-light p-3'>
      <h6 className='fw-bold text-dark mb-4'>
        Your cart <span className='ps-4 text-secondary'>{cartlist.length} Items</span>
      </h6>

      {/* Cart Items List */}
     { 
      cartlist.length > 0 ?
      <div className='row'>
        {cartlist.map((item, index) => (
          <div key={index} className="col-12 d-flex align-items-center mb-3">
            {/* Product Image */}
            <div className="col-3">
              <img 
                className='img-fluid rounded' 
                src={item.thumbnail} 
                alt="Product" 
              />
            </div>

            {/* Product Details */}
            <div className="col-6 ps-2">
              <h6 className='fw-bold'>{item.title}</h6>
              <p className='text-secondary small'>
                {item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description}
              </p>
              <span className='fw-bold text-secondary'>${item.price}</span>
            </div>

            {/* Quantity & Remove Button */}
            <div className="col-3 d-flex flex-column align-items-center">
              <Button onClick={()=>dispatch(increaseQty(item))} variant='light' size='sm' className='w-25'>+</Button>
              <InputGroup className='my- w-50'>
                <Form.Control type='text' value={item.quantity} readOnly className='text-center' />
              </InputGroup>
              <Button onClick={()=>dispatch(decreaseQty(item))} variant='light' size='sm' className='w-25'>-</Button>
              <button onClick={()=>dispatch(removeFromCart(item.id))}
                className="fa-solid fa-trash border-0 bg-transparent mt-4" 
                style={{ color: "#f51919" }} 
              />
            </div>
          </div>
        ))}
      </div>
      :
      <div className='text-center'>
      <h4 className='text-center text-danger !!!'>Your Cart is Now Empty</h4>
      <img className='rounded-pill' src="https://i.ibb.co/0jXgntBL/images-removebg-preview.png" alt="" />
    </div>
      }
      

      {/* Subtotal & Checkout Section */}
      <div className='container-fluid'>
        <hr className='border-secondary'/>
        <h4 className='d-flex justify-content-between text-primary fw-bold'>
          <span>Subtotal</span> <span>${Math.round(cartlist.reduce((prev,item)=>prev + item.quantity * item.price,0))}</span>
        </h4>
        <h4 className='d-flex justify-content-between text-secondary fw-bold'>
          <span>Next refill total</span> <span>$10</span>
        </h4>
        <button onClick={()=>dispatch(emptyCart())} className='btn btn-success text-dark rounded-pill w-100 fw-bold p-2 mt-2'>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartInMobile;
