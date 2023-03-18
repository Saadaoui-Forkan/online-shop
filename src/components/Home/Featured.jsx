import React from 'react'
import'../../assets/css/custom.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Featured() {
  return (
    <React.Fragment>
    <Container className="text-center" fluid={true}>
    <div className="section-title text-center mb-55"><h2> Featured Products</h2>
         <p>Some Of Our Exclusive Collection, You May Like</p>
    </div>
    <Row >

   <Col className="p-1" lg={2} md={2} sm={6} >
        <div>
             <Card className="image-box card w-100" >
                  <img className="center" alt='' src="https://izibios.com/wp-content/uploads/2022/05/computer.jpg" />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
        </div>
    </Col>


    <Col className="p-1" lg={2} md={2} sm={6} >
    <div>
         <Card className="image-box card w-100" >
              <img className="center w-75" alt='' src="https://izibios.com/wp-content/uploads/2022/05/computer.jpg" />
              <Card.Body>
                   <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                   <p className="product-price-on-card">price : 100$</p>
              </Card.Body>
         </Card>
    </div>
</Col>

<Col className="p-1" lg={2} md={2} sm={6} >
        <div>
             <Card className="image-box card w-100" >
                  <img className="center w-75" alt=' ' src="https://izibios.com/wp-content/uploads/2022/05/computer.jpg" />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
        </div>
    </Col>


    <Col className="p-1" lg={2} md={2} sm={6} >
    <div>
         <Card className="image-box card w-100" >
              <img className="center w-75" alt='' src="https://izibios.com/wp-content/uploads/2022/05/computer.jpg" />
              <Card.Body>
                   <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                   <p className="product-price-on-card">price : 100$</p>
              </Card.Body>
         </Card>
    </div>
</Col>
<Col className="p-1" lg={2} md={2} sm={6} >
        <div>
             <Card className="image-box card w-100" >
                  <img className="center w-75" alt='' src="https://izibios.com/wp-content/uploads/2022/05/computer.jpg" />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
        </div>
    </Col>


    <Col className="p-1" lg={2} md={2} sm={6} >
    <div>
         <Card className="image-box card w-100" >
              <img className="center w-75" alt='' src="https://izibios.com/wp-content/uploads/2022/05/computer.jpg" />
              <Card.Body>
                   <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                   <p className="product-price-on-card">price : 100$</p>
              </Card.Body>
         </Card>
    </div>
</Col>





    </Row>
</Container>

    </React.Fragment>
  )
}

export default Featured