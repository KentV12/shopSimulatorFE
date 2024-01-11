import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Navbar = ({JWT}) => {
  const [show, setShow] = useState(false);
  const [isRegistering, setModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showSignin = () => setModal(false);
  const showRegister = () => setModal(true);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              // src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"
              src={require("../test/brand-logo.svg").default}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  onClick={handleShow}
                  className="nav-link"
                  aria-current="page"
                  to="/login"
                >
                  <img
                    src={require("../images/person.svg").default}
                    alt="person-circle"
                  />
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={JWT !== "" ? (
                  "/"
                ) : (
                  "/login"
                )}>
                  <img src={require("../images/cart.svg").default} alt="cart" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isRegistering ? "Register" : "Sign in"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="success" type="submit">
              {isRegistering ? "Register" : "Sign in"}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>{isRegistering ? "Already" : "Don't"} have an account? <span role="button" onClick={isRegistering ? showSignin : showRegister} className="text-success">{isRegistering ? "Sign in" : "Sign up"}</span></p>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
