import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!products.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>SHOP</h1>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <Link to={`/product/${product._id}`}>
              <h2>{product.name}</h2>
            </Link>
            <p>{product.price}</p>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
