// src/pages/Views/LikesPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import "./LikesPage.css";
import ProductRating from "../../components/ProductRating/ProductRating";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const LikesPage = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const products = response.data;
        let liked = [];
        // Only filter products for a logged-in user
        if (user && user.id) {
          liked = products.filter((product) => {
            return (
              product.likedBy &&
              product.likedBy.some(
                (uid) => uid && uid.toString() === user.id.toString()
              )
            );
          });
        }
        // Optionally sort the liked products (e.g. descending by likes)
        liked.sort((a, b) => b.likes - a.likes);
        setLikedProducts(liked);
      } catch (err) {
        setError("Failed to fetch liked products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [user]);

  // Handler to unlike a single product
  const handleUnlike = async (productId) => {
    if (!user) {
      alert("Please log in to unlike products.");
      return;
    }
    try {
      await axios.post(`/api/products/${productId}/unlike`);
      // Remove the product from local state after unliking
      setLikedProducts((prev) =>
        prev.filter((product) => product._id !== productId)
      );
      alert("Product unliked!");
    } catch (err) {
      console.error("Error unliking product:", err);
      alert("Error unliking product");
    }
  };

  // Handler for the "Clear All Likes" button
  const handleClearAllLikes = async () => {
    if (!window.confirm("Are you sure you want to clear all likes?")) return;
    if (!user) {
      alert("Please log in to clear likes.");
      return;
    }
    try {
      // Call unlike endpoint for every liked product
      await Promise.all(
        likedProducts.map((product) =>
          axios.post(`/api/products/${product._id}/unlike`)
        )
      );
      alert("All likes cleared!");
      setLikedProducts([]); // Reset local liked products state
    } catch (err) {
      console.error("Error clearing likes:", err);
      alert("Error clearing likes");
    }
  };

  if (loading) return <p>Loading liked products...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>Please log in to view your liked products.</p>;
  if (likedProducts.length === 0)
    return <p>You have not liked any products yet.</p>;

  return (
    <div className="likes-page container mb-5">
      <div className="page-header text-center mb-4 d-flex flex-column align-items-start ms-4">
        <h2>Liked Products</h2>
        <p>These are the products that you have liked.</p>
        {likedProducts.length > 0 && (
          <button onClick={handleClearAllLikes} className="btn btn-danger">
            Clear All Likes
          </button>
        )}
      </div>
      <div className="products-grid ms-4">
        {likedProducts.map((product) => (
          <div key={product._id} className="each-card mb-5">
            <Link
              to={`/product/${product._id}`}
              className="text-decoration-none text-black"
            >
              <div className="each-img position-relative d-flex align-items-center justify-content-center">
                <img className="m-0" src={product.image} alt={product.name} />
                <div className="lovee-cart position-absolute">
                  <FaRegHeart
                    onClick={(e) => {
                      e.preventDefault();
                      handleUnlike(product._id);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <FiShoppingCart
                    onClick={() => addToCart(product._id, 1)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <div className="looo-card mt-4 d-flex flex-column align-items-start justify-content-start">
                <div className="name-pri d-flex flex-column align-items-start justify-content-start">
                  <h3 className="m-0">{product.name}</h3>
                  <p className="m-0">₦{product.price.toLocaleString()}</p>
                  <p className="card-likes">Likes: {product.likes}</p>
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
    </div>
  );
};

export default LikesPage;
