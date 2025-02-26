import React from 'react';
import { useSelector } from 'react-redux';
import { removeFromCart, addToCart, decreaseQty, updateQuantity, increaseQty } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import PaymentDetails from '../components/PaymentDetails';
import CartInMobile from './CartInMobile';
import { useMediaQuery } from 'react-responsive';


function ShoppingCart() {
  const cartlist = useSelector((state) => state.cartSlice.cartlist);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 768 }); //checks this Condition

  return (
    <div className='container-fluid'>
      {/* Mobile View */}
      {isMobile ? (
        <CartInMobile />
      ) : (
        /* Desktop View */
        <div className='row'>
          {cartlist.length > 0 ? (
            <>
              <div className='col-lg-8 col-md-12 col-sm-12'>
                <div className='container mt-4'>
                  <h4 className='fw-bold'>Shopping Cart</h4>
                  <div className='row'>
                    <div className='col-lg-12 col-md-9 col-sm-12'>
                      <div className='table-responsive'>
                        <table className='table align-middle text-center'>
                          <thead>
                            <tr>
                              <th className='text-secondary'>Product Details</th>
                              <th className='text-secondary'>Price</th>
                              <th className='text-secondary'>Quantity</th>
                              <th className='text-secondary'>Total Price</th>
                              <th className='text-secondary'>Remove</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartlist.map((item) => (
                              <tr key={item.id}>
                                <td className='text-center'>
                                  <div className='row align-items-center'>
                                    <div className='col-6 d-flex justify-content-center'>
                                      <img src={item.thumbnail} height='100px' width='100px' alt="Product" className='rounded' />
                                    </div>
                                    <div className='col-6 d-flex align-items-center justify-content-center'>
                                      <p className='mb-0 fw-bold'>{item.title}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className='fw-bold align-middle text-center'>${item.price}</td>
                                <td className='align-middle text-end'>
                                  <div className='w-100 border rounded rounded-pill d-flex justify-content-between align-items-center py-1 ms-auto'>
                                    <button onClick={() => dispatch(increaseQty(item))} className='btn px-2 py-0'>+</button>
                                    <span className='fw-bold'>{item.quantity}</span>
                                    <button onClick={() => dispatch(decreaseQty(item))} className='btn px-2 py-0'>-</button>
                                  </div>
                                </td>
                                <td className='fw-bold align-middle text-center'>${item.quantity * item.price}</td>
                                <td className='align-middle text-center'>
                                  <button onClick={() => dispatch(removeFromCart(item.id))} className="fa-solid fa-xmark text-secondary border-0 bg-transparent fs-4"></button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-3 col-sm-12 mt-4'>
                      <div className='container-fluid border border-light shadow p-3'>
                        <h4 className='text-secondary fw-bold d-flex justify-content-between'>
                          Subtotal <span className='text-dark fw-bold'>${Math.round(cartlist.reduce((prev, item) => prev + item.quantity * item.price, 0))}</span>
                        </h4>
                        <h4 className='text-secondary fw-bold d-flex justify-content-between'>
                          Shipping <span className='text-dark fw-bold'>$20.00</span>
                        </h4>
                      </div>
                      <hr className='my-2' />
                      <h3 className='fw-bold d-flex justify-content-between px-3'>
                        <span>Total</span> <span className='text-danger'>${Math.round(cartlist.reduce((prev, item) => prev + item.quantity * item.price, 0)) + 20}</span>
                      </h3>
                      <hr className='my-2' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <PaymentDetails />
              </div>
            </>
          ) : (
            <div className='text-center mb-5'>
              <h3 className='text-center p-4 text-danger'>No Cart Items Added !!!</h3>
              <i className="fa-solid fa-face-sad-tear fa-3x fa-bounce"></i>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
