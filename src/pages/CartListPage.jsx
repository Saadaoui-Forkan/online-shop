import React from 'react'
import CartList from '../components/Cart/CartList'
import {Container} from 'react-bootstrap'

function CartListPage() {
  return (
    <React.Fragment>

    <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-40"><h2> Cart List</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
    </Container>

    <CartList/>
    
    </React.Fragment>
  )
}

export default CartListPage