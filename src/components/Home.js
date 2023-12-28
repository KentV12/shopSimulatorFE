import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Home = () => {
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
  }, []); // need to include the dependency array [] or this will cause an infinite loop
  // as useEffect will run after every re-render, which is the case after updating setProduct

  return (
    <div>
      <Slider />

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

      <Row xs={1} md={5} className="g-4">
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
    </div>
  );
};

export default Home;
