import { useEffect, useState } from "react";

import React from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th scope="row">{product.name}</th>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row">
        {products.map((product) => (
          <div className="col-sm">
            <div class="card">
              <img
                src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h3 class="card-text">
                  {product.name} - ${product.price}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
