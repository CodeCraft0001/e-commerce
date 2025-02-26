import React, { use } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Offcanvas, Button } from 'react-bootstrap';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
// import cartSlice from '../redux/slices/cartSlice'

//Previous

function Header() {

  const [cartCount, setCartCount] = useState(0)

  //For Toggle Functionality:
  const [show,setShow] = useState(false)

  const {cartlist} = useSelector((state)=>state.cartSlice)

  useEffect(()=>{
    setCartCount(cartlist.length)
  },[cartlist])

  //1
  useEffect(()=> {
    const handleResize = () => {
      isMobile
    }

    //2
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  

  console.log(cartCount);

  const isMobile = useMediaQuery({maxWidth: 992})

  const isSmallMobile = useMediaQuery({maxWidth : 768 })
  

  return (
    <div className='relative w-full'>
      <div className='w-full  text-white d-flex fw-bold py-2 px-5 fixed top-0 z-50'
      style={{ height: "40px" , display: "flex", alignItems: "center", overflow: "hidden", backgroundColor: isSmallMobile ? '#3081b0' : '#734cf3' }}>
        {/* 1 */}
        <marquee className="d-inline-block" style={{ lineHeight: "normal", width: '75%' , whiteSpace: "nowrap", fontSize: isMobile ? "12px" : "18px" }}>
          <span>
            Holliday Offer Up to <span className='text-warning fa-fade pe-2'>50% OFF</span><i className="fa-solid fa-champagne-glasses" style={{color: "#611b6f",}} />
          </span>
        </marquee>
        <span className='d-flex gap-2' style={{marginLeft: 'auto'}}>
          {/* 2,3,4,5,6 */}
        <button className="fa-brands fa-facebook border-0 bg-transparent p-2" 
         style={{fontSize : isMobile ? '12px' : '18px'}} />
        <button className="fa-brands fa-instagram border-0 bg-transparent p-2" 
         style={{fontSize : isMobile ? '12px' : '18px'}} />
        <button className="fa-brands fa-twitter border-0 bg-transparent p-2" 
         style={{fontSize : isMobile ? '12px' : '18px'}} />
        <button className="fa-solid fa-envelope border-0 bg-transparent p-2" 
         style={{fontSize : isMobile ? '12px' : '18px'}} />
        <button className="fa-solid fa-phone border-0 bg-transparent p-2" 
         style={{fontSize : isMobile ? '12px' : '18px'}} />
        </span>
      </div>
      <Navbar expand="lg" className="custom-navbar bg-success">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            <Link to="/" className="text-decoration-none text-dark display-5 fw-bold">
              <i className="fa-solid fa-cart-shopping" flip style={{ color: '#B197FC' }} />{' '}
              ClickCart
            </Link>
          </Navbar.Brand>

          {/* 3 Toggle Button Hide When in Desktop View */}
          {/* Toggle Button (Opens Sidebar) */}
          {isMobile&& (
            <Button variant="info" className="ms-auto" onClick={() => setShow(true)}>
            <i className="fa-solid fa-bars fa-lg"></i>
          </Button>
          )}
          
          {/* 4 In Desktop view Off Canvas disable(ignore) in Mobile Normal form */}
          {isMobile ? (
             /* Sidebar (Offcanvas) */
         
            <Offcanvas show={show} className='bg-secondary text-white ofCanva-custom' onHide={() => setShow(false)} placement="end">
            <Offcanvas.Header closeButton closeVariant='white'>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto flex-column" >
                <Nav.Link as={Link} onClick={()=>setShow(false)} to="/" className="nav-item fw-bold text-white">
                  Home
                </Nav.Link>
                <Nav.Link  as={Link} onClick={()=>setShow(false)} to="/cart" className="nav-item fw-bold text-dark" >
                  <div className='position-relative d-inline-block text-white'>
                    Cart Items
                    <span className="badge bg-secondary text-light ms-2 badge-top-right">{cartCount}</span>
                  </div>
                </Nav.Link>
                <NavDropdown title="Category" id="basic-nav-dropdown" className="nav-item fw-bold">
                  <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Fashion</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
         
          )
        :
        // Desktop View:
        (
          <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={Link} to="/" className="nav-item fw-bold text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="nav-item fw-bold text-dark">
                <div className="position-relative d-inline-block text-white">
                <i className="fa-solid fa-cart-shopping fa-lg" style={{color: "#74C0FC",}} /><span className="badge bg-light text-secondary ms-2 badge-top-right">{cartCount}</span>
                </div>
              </Nav.Link>
              <NavDropdown title={<span className='text-white'>Category</span>} id="basic-nav-dropdown" className="nav-item fw-bold">
                <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fashion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        )  
        }
         
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
