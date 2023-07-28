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
            <h3>Product List</h3>
            <ul>
                {products.map((product) => (
                    <li>
                        <p>{product.name} - ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Product