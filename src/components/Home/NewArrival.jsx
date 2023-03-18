import React from 'react'
import '../../assets/css/custom.css'
import { Container, Row, Card } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function NewArrival() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
   };

  return (
    <React.Fragment>
        <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
            <h2> New Arrival    &nbsp;
                <a href='/#' className="btn btn-sm ml-2 site-btn" ><i className="fa fa-angle-left"></i></a>
                &nbsp;
                <a href='/#' className="btn btn-sm ml-2 site-btn" ><i className="fa fa-angle-right"></i></a>
            </h2>
                <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>
                <Slider   {...settings}>
                    <div>
                        <Card className="image-box card" >
                            <img className="center" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
                            <Card.Body>
                                <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                <p className="product-price-on-card">price : 100$</p>
                            </Card.Body>
                        </Card>
                    </div>


                    <div>
                    <Card className="image-box card" >
                        <img className="center" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
                        <Card.Body>
                                <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                <p className="product-price-on-card">price : 100$</p>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                <Card className="image-box card" >
                    <img className="center" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
                    <Card.Body>
                        <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                        <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                </Card>
            </div>

            <div>
            <Card className="image-box card" >
                <img className="center" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
                <Card.Body>
                    <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                    <p className="product-price-on-card">price : 100$</p>
                </Card.Body>
            </Card>
    </div>

    <div>
    <Card className="image-box card" >
            <img className="center" alt='' src="https://polycliniquehammamet.com/wp-content/uploads/2015/07/banner22.jpg" />
            <Card.Body>
                <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                <p className="product-price-on-card">price : 100$</p>
            </Card.Body>
    </Card>
</div>
                </Slider>
            </Row>
        </Container>
               </React.Fragment>
  )
}

export default NewArrival