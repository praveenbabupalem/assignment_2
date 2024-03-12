import React, { useState, useEffect } from "react"; 
import ProductCard from "../ProductCard";
import "./index.css";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
         setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="main-products-container">
      <div className="heading">
        <h1>Products</h1>
      </div>

      <ul className="product-list-items">
        {products.map((each) => (
          <ProductCard eachItem={each} key={each.id} />
        ))}
      </ul>
    </div>
  );
}

export default AllProducts;