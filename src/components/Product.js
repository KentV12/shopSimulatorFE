import { useEffect, useState } from "react";

import React from 'react'

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error('Error fetching product:', error));
  }, []);

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
          {products.map((product) => (
            <tr>
              <th scope="row">{product.name}</th>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default Product