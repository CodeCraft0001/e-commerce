import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router';
import { fetchProduct } from '../redux/slices/productSlice';
import { useDispatch,useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { addToCart, updateQuantity } from '../redux/slices/cartSlice';
//3                    ^


function Home() {
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch()
  const {loading, product, error} = useSelector((state)=> state.productSlice)
  console.log(loading,product);
  
  const [qties, setQties] = useState({})

 //4 :
  // const handleSendQty = (id) =>{
  //   dispatch(updateQuantity({id,newQty: qties[id] || 1})) //Send Specific products 
  //   setQties(0)
  // }

  const handleIncreaseQty =(item)=>{
    dispatch(addToCart({...item, quantity: qties[item.id] || 1}))
    updateQty(item.id,1)
  }

  //Functon For Updating Qauntity
  const updateQty =(id, value) => {
    setQties((prev)=>({
      ...prev,[id]:Math.max(1,(prev[id] || 1)+value) //
    }))
  }
  
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return (
    <div className=''>
      {/* <h1>Home page</h1> */}
      <Carousel activeIndex={index} onSelect={handleSelect} className='container mt-3 mb-2 shadow'>
      <Carousel.Item >
        <img src='https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg' text="First slide" className='d-block w-100' height={'485px'} />
        <Carousel.Caption>
          <h3 className='text-dark'>Shop Outside the Box</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SDCD0OTneaEaVHPhFVrb4R3d7sBM89hExg&s' text="Second slide" className='d-block w-100' height={'485px'} />
        <Carousel.Caption>
          <h3 className='text-light'>Discover Your Unseen Passion</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' text="Third slide" className='d-block w-100' height={'485px'} />
        <Carousel.Caption>
          <h3 className='text-info'>Unlock the Extraordinary</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <section className="py-5">
            {
              loading ? 
          
                // <h2>Loading....</h2>
                <h1 className='text-center'>   
                    <Spinner animation="border" variant='primary' role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>           
                </h1>
              :
              <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                      product.length > 0 ?
                      product.map(item =>(
                      <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <Link to={`/view/${item.id}`}>
                            <img className="card-img-top" src={item.thumbnail} alt="img" height={'200px'} />
                            </Link>
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{item.title.slice(0,10)}...</h5>
                                    {/* <!-- Product price--> */}
                                    ${item.price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                                {/* <div className="text-center">
                                  <Link className='stretched-link' to={'/view/1'}></Link>
                                </div> */}
                                <Link   onClick={()=>dispatch(addToCart({...item, quantity: qties[item.id] || 1}))} className='btn'>
                                  <i className="fa-solid fa-cart-plus fa-2x" style={{color: "#63E6BE",}} />
                                </Link> 
                                <div className='row'>
                                  <span>Quantity :</span>
                                  <div className='col-sm-12 col-md-2 '><button className='w-100 btn btn-light' onClick={()=>handleIncreaseQty(item)} >+</button></div>
                                  <div className='col-sm-12 col-md-8 '><input type="" value={qties[item.id] || 1} readOnly className='w-100 btn text-dark' /></div>
                                  <div className='col-sm-12 col-md-2 '><button className='w-100 btn btn-light' onClick={()=>updateQty(item.id,-1)} >-</button></div>
                                </div>                          
                             </div>
                        </div>
                    </div>
                    ))
                    :
                    <h4>{error}</h4>
                    }
                 </div>  
            </div>
            }
        </section>
    </div>
  )
}

export default Home
