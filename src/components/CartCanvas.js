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
                <Col sm={3}><h5>$5</h5></Col>
              </Row>
              
            </ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
          <Button className='my-3 ' variant='success' >Continue</Button>
        </Offcanvas.Body>

        

      </Offcanvas>
    </div>
  );
}

export default CartCanvas