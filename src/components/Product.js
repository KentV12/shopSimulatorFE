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
          <Card className="hoverHighlight">
            <Card.Img variant="top" src={product.imageLink} style={{ height: '200px', objectFit: 'cover' }}/>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <div>
                  <small className="text-muted">{product.category}</small>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h3>${product.price}</h3>
                  <button className="btn btn-success">Add</button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Product;
