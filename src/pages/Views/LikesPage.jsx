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
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

// Custom confirm using toast that returns a promise.
const confirmClearLikes = () =>
  new Promise((resolve, reject) => {
    toast.info(
      <div>
        <div>Are you sure you want to clear all likes?</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <button
            onClick={() => {
              toast.dismiss();
              resolve(true);
            }}
            style={{ marginRight: "10px" }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              toast.dismiss();
              reject();
            }}
          >
            Cancel
          </button>
        </div>
      </div>,
      { autoClose: false }
    );
  });

const LikesPage = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();
  const { user } = useAuth();

  const fetchLikedProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      const products = response.data;
      let liked = [];
      // Only filter products if a user is logged in.
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
      // Optionally, sort liked products descending by likes.
      liked.sort((a, b) => b.likes - a.likes);
      setLikedProducts(liked);
    } catch (err) {
      setError("Failed to fetch liked products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLikedProducts();
  }, [user]);

  // Handler to unlike a single product.
  const handleUnlike = async (productId) => {
    if (!user) {
      toast.info("Please log in to unlike products.");
      return;
    }
    try {
      await axios.post(
        `/api/products/${productId}/unlike`,
        {},
        {
          headers: {
            Authorization: `Bearer ${
              user.token || localStorage.getItem("authToken")
            }`,
          },
        }
      );
      setLikedProducts((prev) =>
        prev.filter((product) => product._id !== productId)
      );
      toast.success("Product unliked!");
    } catch (err) {
      console.error("Error unliking product:", err);
      toast.error("Error unliking product");
    }
  };

  // Handler for "Clear All Likes"
  const handleClearAllLikes = async () => {
    try {
      await confirmClearLikes();
    } catch {
      return; // If user cancels, do nothing.
    }
    if (!user) {
      toast.info("Please log in to clear likes.");
      return;
    }
    try {
      await Promise.all(
        likedProducts.map((product) =>
          axios.post(
            `/api/products/${product._id}/unlike`,
            {},
            {
              headers: {
                Authorization: `Bearer ${
                  user.token || localStorage.getItem("authToken")
                }`,
              },
            }
          )
        )
      );
      toast.success("All likes cleared!");
      setLikedProducts([]);
    } catch (err) {
      console.error("Error clearing likes:", err);
      toast.error("Error clearing likes");
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "300px" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

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
