import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Favorite() {
  return (
    <React.Fragment>
        <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55"><h2> Favorate produts</h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>
                <Col className="p-0" lg={3} md={3} sm={6} >
                    <div>
                        <Card className="image-box card w-100" >
                            <img alt='' className="center w-75" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/01/c5/bd/la-favorite.jpg?w=1200&h=-1&s=1" />
                            <Card.Body>
                                <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>

                                <Button  className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>  
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col className="p-0" lg={3} md={3} sm={6} >
                    <div>
                            <Card className="image-box card w-100" >
                                <img alt='' className="center w-75" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/01/c5/bd/la-favorite.jpg?w=1200&h=-1&s=1" />
                                <Card.Body>
                                    <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                    <Button  className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                </Card.Body>
                            </Card>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default Favorite