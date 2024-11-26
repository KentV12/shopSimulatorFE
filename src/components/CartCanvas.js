import React, { useEffect, useState } from 'react'
import { Button, Col, Offcanvas, Row } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const CartCanvas = ({displayCart, handleClose, JWT, cartItems, handleCheckout}) => {
  const [problem, setProblem] = useState(false);

  const handleSubmit = (e) => {
    const price = parseInt(cartItems?.reduce((acc, item) => acc + item.price * 1.12, 0).toFixed(2));
    handleCheckout(price);
  }

  useEffect(() => {
    const handleRequest = async () => {
      try {
        const response = await fetch("/account", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${JWT}`,
            "Content-Type": "application/json",
          }
        });

        if (response.ok) {
          // Successful
          console.log("CartCanvas " + JWT);
          setProblem(false); // needed to reload state
        } else {
          // Handle failed
          setProblem(true);
        }
      } catch (error) {
        console.log("Error during JWT authentication");
        setProblem(true);
      }
    };

    handleRequest();
  }, [JWT]);

  return (
    <div>
      <Offcanvas placement='end' show={displayCart} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        {problem ? (<p>error</p>) : (
          <Offcanvas.Body>
            <ListGroup variant="flush">
              {cartItems?.map((item, i) => (
                <ListGroup.Item key={i}>
                  <Row className="align-items-center">
                    <Col sm={3}><Image src={item.imageLink} fluid/></Col>
                    <Col sm={6}><h5>{item.name}</h5></Col>
                    <Col sm={3}><h5>${item.price}</h5></Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <h4 className="my-3">Total: $
              {cartItems?.reduce((acc, item) => acc + item.price * 1.12, 0).toFixed(2)}
            </h4>

            <Button onClick={handleSubmit} className="my-3" variant="success" >Checkout</Button>
          </Offcanvas.Body>
        )}

      </Offcanvas>
    </div>
  );
}

export default CartCanvas