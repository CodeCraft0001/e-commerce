import React,{useEffect, useState} from 'react'
import { Link } from 'react-router'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
// import { addToCart } from '../redux/slices/cartSlice'
// import Spinner from 'react-bootstrap/Spinner';


function ProductDetails() {

  const [pro,setPro] = useState({})
  const dispatch  = useDispatch()

  const {id} = useParams()
  console.log(id);
  // const {loading, product, error} = useSelector((state)=> state.productSlice)
  const product = JSON.parse(localStorage.getItem('products'))
  
  useEffect(()=>{
    setPro(product.find(item => item.id == id))
  },[])
  console.log(pro);
  

  return (
    <div>
      <section className="py-5">
        {/* {
          loading ?
          <h1 className='text-center'>   
                    <Spinner animation="border" variant='primary' role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>           
                </h1>
          : */}
          <div className="container px-4 px-lg-5 my-5">
                {
                  pro &&
                  <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={pro.thumbnail} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">{pro.id}</div>
                        <h1 className="display-5 fw-bolder">{pro.title}</h1>
                        <div className="fs-5 mb-5">
                            {/* <span className="text-decoration-line-through">$45.00</span> */}
                            <span>{pro.price} $</span>
                        </div>
                        <p className="lead">{pro.description}</p>
                        <div className="d-flex justify-content-between">
                            <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{maxWidth: "3rem"}} />
                            <button >
                              <button className="btn  flex-shrink-0" type="button">
                                  <i className="bi-cart-fill me-1"></i>
                                  <i className="fa-solid fa-cart-plus fa-2x" style={{color: "#63E6BE",}} /> 
                              </button>
                            </button>
                        </div>
                    </div>
                </div>
                }
                
            </div>
        {/* } */}
            
        </section>
    </div>
  )
}

export default ProductDetails
