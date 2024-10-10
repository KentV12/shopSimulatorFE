import React, { useEffect, useState } from 'react'
import { Button, Col, Offcanvas, Row } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const CartCanvas = ({displayCart, handleClose, JWT, cartItems}) => {
  const [problem, setProblem] = useState(false);

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
              {/* <ListGroup.Item>
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
              </ListGroup.Item> */}
            </ListGroup>

            <h4 className="my-3">Total: $
              {cartItems?.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </h4>

            <Button className="my-3" variant="success" >Continue</Button>
          </Offcanvas.Body>
        )}

      </Offcanvas>
    </div>
  );
}

export default CartCanvas