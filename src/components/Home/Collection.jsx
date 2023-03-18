import React from 'react'
import'../../assets/css/custom.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Collection() {
  return (
    <React.Fragment>
        <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55"><h2> Collection</h2>
                <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>
                <Col className="p-0" lg={3} md={3} sm={6} >
                    <div>
                        <Card className="image-box card w-100" >
                            <img className="center w-75" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
                            <Card.Body>
                                <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                <p className="product-price-on-card">price : 100$</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>


            <Col className="p-0" lg={3} md={3} sm={6} >
            <div>
                <Card className="image-box card w-100" >
                    <img className="center w-75" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
                    <Card.Body>
                        <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                        <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                </Card>
            </div>
        </Col>

        <Col className="p-0" lg={3} md={3} sm={6} >
        <div>
            <Card className="image-box card w-100" >
                <img className="center w-75" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                    <p className="product-price-on-card">price : 100$</p>
                </Card.Body>
            </Card>
        </div>
    </Col>

    <Col className="p-0" lg={3} md={3} sm={6} >
    <div>
        <Card className="image-box card w-100" >
            <img className="center w-75" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
            <Card.Body>
                <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                <p className="product-price-on-card">price : 100$</p>
            </Card.Body>
        </Card>
    </div>
</Col>


<Col className="p-0" lg={3} md={3} sm={6} >
<div>
    <Card className="image-box card w-100" >
        <img alt='' className="center w-75" src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
        <Card.Body>
            <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
            <p className="product-price-on-card">price : 100$</p>
        </Card.Body>
    </Card>
</div>
</Col>

<Col className="p-0" lg={3} md={3} sm={6} >
<div>
<Card className="image-box card w-100" >
    <img className="center w-75" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
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

export default Collection