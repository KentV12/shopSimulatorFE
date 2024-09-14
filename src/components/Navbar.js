import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Navbar = ({ JWT, handleCart, handleLogin, handleRegister }) => {
  const [show, setShow] = useState(false);
  const [isRegistering, setModal] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (JWT !== "") {
      navigate("/account");
    } else {
      setShow(true);
    }
  };

  const showSignin = () => setModal(false);
  const showRegister = () => setModal(true);

  const userCart = () => {
    if (JWT !== "") {
      handleCart();
    } else {
      setShow(true);
    }
  }

  const userLogin = (e) => {
    e.preventDefault();
    setShow(false);
    handleLogin({ username, password });
  };

  const userRegister = (e) => {
    e.preventDefault();
    setShow(false);
    handleRegister({ username, password });
  };

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
                <button
                  onClick={userCart}
                  className="nav-link"
                  aria-current="page1"
                  to="/"
                >
                  {/* <Link className="nav-link" to={JWT !== "" ? "/" : "/login"}> */}
                  <img src={require("../images/cart.svg").default} alt="cart" />
                  {/* </Link> */}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isRegistering ? "Register" : "Sign in"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={isRegistering ? userRegister : userLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              {isRegistering ? "Register" : "Sign in"}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>
            {isRegistering ? "Already" : "Don't"} have an account?{" "}
            <span
              role="button"
              onClick={isRegistering ? showSignin : showRegister}
              className="text-success"
            >
              {isRegistering ? "Sign in" : "Sign up"}
            </span>
          </p>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
