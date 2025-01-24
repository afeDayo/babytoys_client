import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link, useLocation } from "react-router-dom";
import "./Shop.css";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import ProductRating from "../../components/ProductRating/ProductRating";

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (category) {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="shop-container">
      <h1>SHOP</h1>
      {filteredProducts.length ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product._id} className="each-card">
              <Link
                to={`/product/${product._id}`}
                className="text-decoration-none text-black"
              >
                <div className="each-img position-relative d-flex align-items-center justify-content-center">
                  <img className="m-0" src={product.image} alt={product.name} />
                  <div className="lovee-cart position-absolute">
                    <FaRegHeart />
                    <FiShoppingCart />
                  </div>
                </div>

                <div className="looo-card mt-4 d-flex flex-column align-items-start justify-content-start">
                  <div className="name-pri d-flex flex-column align-items-start justify-content-start">
                    <h3 className="m-0">{product.name}</h3>
                    <p className="m-0">₦{product.price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
              <ProductRating
                key={product._id}
                productId={product._id}
                initialRating={product.ratings?.average}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default Shop;
