import React from 'react'
import { Link } from "react-router-dom"
import '../assets/css/TopNavbar.css'
import {Col,Container,Navbar,Form,FormControl,Button} from'react-bootstrap'
import logo from '../assets/images/logo.JPG'

function ContainerOutsideExample() {
  return (
    <React.Fragment>
      <Navbar  expand="lg" variant="light" className="navbar" >
        <Container fluid={true}>
        <Col lg={3} md={4} sm={12} xs={12}>
            <Navbar.Brand >
              <Link to="/" className='home-link'>
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block "
                />{' '}
                AFFARIYETT
              </Link>
            </Navbar.Brand>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-0"
                aria-label="Search"
                />
                <Link to="/search" className="Search-btn">
                  <i className="fa fa-search"></i>
                </Link>
            </Form>
        </Col>
            <Link to="/cartList" className="cart-btn"><i className="fa fa-shopping-cart"></i> items 0 </Link>

            <Link to="/favorites"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">0</span></sup>  </Link>
            <Link to="/notifications"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">8</span></sup>  </Link>

            <Link to="/login" className='user-icon'><i className="fa fa-share"></i> </Link>
            
            <Link to="/profile"  className='user-icon'>
                <i className="fa  fa-address-card" ></i> 
            </Link>

        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default ContainerOutsideExample;