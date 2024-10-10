import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import React from "react";

const Product = ({products, addToCart}) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/products", {
  //         method: "GET",
  //         headers: {},
  //       });

  //       if (!response.ok) {
  //         throw new Error("response not ok");
  //       }

  //       const json = await response.json();
  //       setProducts(json);
  //     } catch (error) {
  //       console.error("error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // need to include the dependency array [] or this will cause a loop to server
  // // as useEffect will run after every re-render, which is the case after updating setProduct

  return (
    <div>
      <h3 className="mt-5">Popular Products</h3>
      <Row xs={1} md={5} className="g-4 mt-1">
        {products.map((product, i) => (
          <Col key={i}>
            <Card className="hoverHighlight">
              <Card.Img variant="top" src={product.imageLink} style={{ height: '200px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <span>
                    <small className="text-muted">{product.category}</small>
                  </span>
                  <span className="d-flex justify-content-between align-items-center mt-3">
                    <strong>${product.price}</strong>
                    <button className="btn btn-success" onClick={() => addToCart(product)}>Add</button>
                  </span>
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
