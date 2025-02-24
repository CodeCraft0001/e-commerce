import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

function Footer() {
  return (
    <div>
      
      <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center text-md-start">
          
          {/* About Us */}
          <Col md={3} className="mb-3">
            <h5 className="text-warning">ClickCart</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda consectetur molestiae, deserunt praesentium sint provident reiciendis architecto omnis nihil asperiores, quam necessitatibus. Vel eos excepturi natus deleniti, amet quidem! Error!</p>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-3">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to={'/'} className="text-light text-decoration-none">Home</Link></li>
              <li><Link to={'/cart'} className="text-light text-decoration-none">Cart</Link></li>
              {/* <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li> */}
            </ul>
          </Col>

          {/* Customer Service */}
          <Col md={3} className="mb-3">
            <h5 className="text-warning">Contact Us</h5>
            <p>Phone No : +91 8943065398 </p>
            <textarea name="" placeholder='feedback' className='rounded p-1' id=""></textarea><br />
            <button className='btn btn-info fw-bold'>Submit</button>
          </Col>

          {/* Social Media */}
          <Col md={3} className="mb-3">
            <h5 className="text-warning">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
              <a href="#" className="text-light"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-light"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light"><i className="fab fa-youtube"></i></a>
            </div>
          </Col>

        </Row>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">&copy; 2025 Your <span className='text-primary'>ClickCart</span> | All Rights Reserved</p>
        </div>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
