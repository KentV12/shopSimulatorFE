import React from 'react'
import { Button, Col, Offcanvas, Row } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const CartCanvas = ({displayCart, handleClose}) => {
  return (
    <div>
      <Offcanvas placement='end' show={displayCart} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row className="align-items-center">
                <Col sm={3}><Image src='https://karantenabc.hu/img/44906/596238/440x440,r/596238.jpg?time=1690947737' fluid/></Col>
                <Col sm={6}><h5>Potato chips</h5></Col>
                <Col sm={3}><h5>$5.00</h5></Col>
              </Row>
              
            </ListGroup.Item>
            <ListGroup.Item>
            <Row className="align-items-center">
                <Col sm={3}><Image src='https://assets.shop.loblaws.ca/products/20827293/b2/en/front/20827293_front_a06_@2.png' fluid/></Col>
                <Col sm={6}><h5>Soft Drink</h5></Col>
                <Col sm={3}><h5>$3.00</h5></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
            <Row className="align-items-center">
                <Col sm={3}><Image src='https://crackerbarrel.ca/wp-content/uploads/2022/06/0002_2043510_620g_CB_CB_DOUBCHED_SHRED_3D.png' fluid/></Col>
                <Col sm={6}><h5>Cheese</h5></Col>
                <Col sm={3}><h5>$12.00</h5></Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <Button className='my-3 ' variant='success' >Continue</Button>
        </Offcanvas.Body>

        

      </Offcanvas>
    </div>
  );
}

export default CartCanvas