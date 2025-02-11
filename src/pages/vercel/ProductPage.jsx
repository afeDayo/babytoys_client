// src/pages/vercel/ProductPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import axios from "../../api/axios";
import "./ProductPage.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import visa from "../../../public/Visa.png";
import master from "../../../public/MasterCard.png";
import amex from "../../../public/American Express.png";
import discover from "../../../public/Discover Card.png";
import union from "../../../public/UnionPay.png";
import instagram from "../../../public/Instagram.png";
import twitter from "../../../public/twitter.png";
import facebook from "../../../public/facebook.png";
import pinterest from "../../../public/pinterest.png";
import out from "../../../public/miiinus.png";
import into from "../../../public/plusssss.png";
import incart from "../../../public/addtcart.png";
import heart from "../../../public/love.png";
import sharing from "../../../public/sharing.png";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext"; // Import AuthContext

const popularProducts = [
  {
    id: 4,
    name: "Natural Rubber Teething Ring",
    image: "/toy4.png",
    price: "₦13,000",
    initialRating: 0,
  },
  {
    id: 16,
    name: "Superhero Playset",
    image: "/toy16.png",
    price: "₦40,000",
    initialRating: 0,
  },
  {
    id: 23,
    name: "Shape Sorter Toy",
    image: "/toy23.png",
    price: "₦13,000",
    initialRating: 0,
  },
  {
    id: 11,
    name: "Space Explorer Playset",
    image: "/toy11.png",
    price: "₦67,200",
    initialRating: 0,
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const { addToCart } = useCart();
  const { user } = useAuth(); // Retrieve authentication status

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch product");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="productid-con container">
      <div className="proid-tit text-md-start px-3 py-2 mb-3">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          /{" "}
          <span>
            <Link
              to={`/product/${product._id}`}
              className="text-decoration-none"
            >
              {product.name}
            </Link>
          </span>
        </p>
      </div>

      {/* =========================================== */}

      <div className="low-proid d-flex align-items-start">
        <div className="proid-img rounded-3">
          <img src={product.image} alt={product.name} />
        </div>

        {/* ===================================================== */}

        <div className="proid-contents text-start d-flex flex-column gap-5">
          <div className="proid-det d-flex flex-column gap-5">
            <div className="proid-info d-flex flex-column gap-4">
              <div className="proid-three d-flex flex-column gap-4">
                <div className="proid-two d-flex flex-column gap-3">
                  <div className="proid-log d-flex flex-column gap-2">
                    <div className="eachproid-tit d-flex flex-column gap-3 mb-1">
                      <h3 className="mb-1">{product.name}</h3>
                      <h4 className="m-0">₦{product.price.toLocaleString()}</h4>
                    </div>

                    <div className="proid-rating d-flex align-items-center gap-1">
                      <p className="m-0">⭐⭐⭐⭐⭐</p>
                      <p className="m-0">(14 Reviews)</p>
                    </div>
                  </div>
                  <p className="m-0">{product.description}</p>
                </div>

                <div className="proid-share d-flex align-items-center gap-2 mb-2">
                  <p className="m-0">Share this:</p>
                  <div className="d-flex align-items-center gap-2">
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={pinterest} alt="" />
                  </div>
                </div>
              </div>

              <div className="proid-cart d-flex align-items-center gap-3">
                <div className="click-cart d-flex align-items-center">
                  <div className="rounded-start-3">
                    <img src={out} alt="" />
                  </div>
                  <div>
                    <p className="m-0">1</p>
                  </div>
                  <div className="rounded-end-3">
                    <img src={into} alt="" />
                  </div>
                </div>
                {user ? (
                  <button
                    onClick={() => addToCart(product._id, 1)}
                    className="d-flex align-items-center justify-content-center gap-2 px-3 py-2 rounded-3 border-0"
                  >
                    <img src={incart} alt="" /> Add to cart
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      alert("Please log in to add items to your cart")
                    }
                    className="d-flex align-items-center justify-content-center gap-2 px-3 py-2 rounded-3 border-0"
                    style={{ cursor: "not-allowed", opacity: 0.5 }}
                  >
                    <img src={incart} alt="" /> Add to cart
                  </button>
                )}

                <div className="proid-likez rounded-3">
                  <img src={heart} alt="" />
                </div>

                <div className="proid-sharez rounded-3">
                  <img src={sharing} alt="" />
                </div>
              </div>
            </div>

            <div className="short-descrip d-flex align-items-start flex-column px-3 py-2 gap-3 rounded-3">
              <p className="m-0">Short description</p>
              <div className="d-flex align-items-center">
                <p className="m-0">
                  <b>SKU :</b> BG-1068
                </p>
                <p className="m-0">
                  <b>Category:</b> {product.category}
                </p>
              </div>
              <div className="d-flex align-items-center">
                <p className="m-0">
                  <b>Tags :</b> 2 - 5 years{" "}
                </p>
                <p className="m-0">
                  <b>EXP :</b> 06/08/2026
                </p>
              </div>
            </div>
          </div>

          {/* ============================ */}

          <div className="proid-checkout d-flex align-items-start flex-column px-3 py-2 gap-3 rounded-3">
            <p className="m-0">Guaranteed Safe Checkout</p>
            <div className="proid-pay d-flex align-items-center gap-3">
              <img src={visa} alt="" />
              <img src={master} alt="" />
              <img src={amex} alt="" />
              <img src={discover} alt="" />
              <img src={union} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ================================== */}

      <div className="desrev container py-5 d-flex flex-column align-items-center gap-4 rounded-3">
        <div className="d-flex align-items-center gap-5">
          <h3 className="mb-0 me-1">Description</h3>
          <h3 className="mb-0 ms-1">Reviews (14)</h3>
        </div>
        <p>{product.description}</p>
      </div>

      {/* ===================================== */}

      <div className="pt-3 mt-5 mb-4">
        <div className="mb-5 related-tit">
          <h2 className="m-0">Related products</h2>
        </div>
        <div className="related-slide">
          {popularProducts.map((poproduct) => (
            <div key={poproduct.id} className="related-card">
              <div className="related-img position-relative d-flex align-items-center justify-content-center">
                <img
                  className="m-0"
                  src={poproduct.image}
                  alt={poproduct.name}
                />
                <div className="related-cart position-absolute">
                  <FaRegHeart />
                  <FiShoppingCart />
                </div>
              </div>
              <div className="rela-card d-flex flex-column align-items-start justify-content-start">
                <div className="related-pri d-flex flex-column align-items-start justify-content-start">
                  <h3 className="m-0">{poproduct.name}</h3>
                  <p className="m-0">{poproduct.price}</p>
                </div>
              </div>
              <ProductCard key={poproduct.id} poproduct={poproduct} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
