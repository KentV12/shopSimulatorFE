import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import React from "react";

const Product = ({ JWT }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
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
  }, [JWT]); // need to include the dependency array [] or this will cause an infinite loop
  // as useEffect will run after every re-render, which is the case after updating setProduct

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <th scope="row">{product.name}</th>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row">
        {products.map((product, i) => (
          <div className="col-sm" key={i}>
            <div className="card">
              <img
                src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-text">
                  {product.name} - ${product.price}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Row xs={1} md={2} className="g-4">
        {products.map((product, i) => (
          <Col key={i}>
            <Card>
              <Card.Img variant="top" src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. {product.name} - ${product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default Product;
