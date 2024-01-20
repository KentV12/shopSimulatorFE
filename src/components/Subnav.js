import React from "react";
import { Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Subnav = () => {
  return (
    <Navbar expand="lg" className="my-3">
      <Navbar.Brand href="#home">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
            All Departments
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Drinks and Snacks</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Dairy and Eggs</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Chicken, Meat and Fish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Shop</Nav.Link>
          <Nav.Link href="#link">Docs</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Dairy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Snacks</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Soft Drink and Juice
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Subnav;
