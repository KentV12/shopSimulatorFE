import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import React from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/homeProducts", {
          method: "GET",
          headers: {},
        });

        if (!response.ok) {
          throw new Error("response not ok");
        }

        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error("error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // need to include the dependency array [] or this will cause a loop to server
  // as useEffect will run after every re-render, which is the case after updating setProduct

  return (
    <Row xs={1} md={5} className="g-4 mt-5">
      {products.map((product, i) => (
        <Col key={i}>
          <Card>
            <Card.Img variant="top" src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                ${product.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Product;
