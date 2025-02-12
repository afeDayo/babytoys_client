import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link, useLocation } from "react-router-dom";
import "./Shop.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import ProductRating from "../../components/ProductRating/ProductRating";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import starsR from "../../../public/Frame 53.png";
import donkeyT from "../../../public/image 6 1.png";
import stack from "../../../public/play set 2.png";
import bicycle from "../../../public/image 14 1.png";
import leftaro from "../../../public/Primary fill.png";
import rightaro from "../../../public/Primary fill2.png";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const categories = [
  "All Categories",
  "Playsets",
  "Control Toys",
  "Educational Toys",
  "Eco-Friendly Toys",
  "Stuffed Toys",
  "Type 1",
];

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200000);

  const [activeCategory, setActiveCategory] = useState(
    category || "All Categories"
  );

  const [sortOrder, setSortOrder] = useState("Default sorting");
  const [sortOrderDropdownOpen, setSortOrderDropdownOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  // Local state to track liked products (object: { [productId]: true/false })
  const [likedItems, setLikedItems] = useState({});

  const { addToCart } = useCart();
  const { user } = useAuth();

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

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory("All Categories");
    }
  }, [category]);

  // Updated useEffect: Only run if user exists and has a valid id.
  useEffect(() => {
    if (user && user.id && products.length > 0) {
      const updatedLikedItems = {};
      products.forEach((product) => {
        // Ensure product.likedBy is an array; filter out any null/undefined values.
        const likedByIds = (product.likedBy || [])
          .filter((id) => id != null)
          .map((id) => id.toString());
        updatedLikedItems[product._id] = likedByIds.includes(
          user.id.toString()
        );
      });
      setLikedItems(updatedLikedItems);
    } else {
      setLikedItems({});
    }
  }, [user, products]);

  const handlePriceFilter = () => {
    setFilteredProducts(
      products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      )
    );
  };

  const handleCategoryClick = (selectedCategory) => {
    setActiveCategory(selectedCategory);
    if (selectedCategory === "All Categories") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedProducts = [...filteredProducts];
    if (order === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (order === "Alphabetical") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedProducts = products.filter((product) => {
        const categoryMatch =
          activeCategory === "All Categories"
            ? true
            : product.category === activeCategory;
        const priceMatch =
          product.price >= minPrice && product.price <= maxPrice;
        return categoryMatch && priceMatch;
      });
    }
    setFilteredProducts(sortedProducts);
  };

  const productPerPage = 9;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productPerPage);
  const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
  const endPage = Math.min(startPage + 2, totalPages);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Toggle like/unlike for a product
  const handleToggleLike = async (id) => {
    if (!user) {
      alert("Please log in to like products.");
      return;
    }
    try {
      if (likedItems[id]) {
        // If already liked, call unlike endpoint
        await axios.post(`/api/products/${id}/unlike`);
        setLikedItems((prev) => ({ ...prev, [id]: false }));
        alert("Product unliked!");
      } else {
        // If not liked, call like endpoint
        await axios.post(`/api/products/${id}/like`);
        setLikedItems((prev) => ({ ...prev, [id]: true }));
        alert("Product liked!");
      }
    } catch (err) {
      console.error("Error toggling like:", err);
      alert("Error toggling like");
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="shop-container container">
      <div className="shop-tit text-start px-3 py-2 mb-5">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          /{" "}
          <span>
            <Link to="/shop" className="text-decoration-none">
              Products
            </Link>
          </span>
        </p>
      </div>

      <div className="low-shoppers d-flex align-items-start">
        <div className="side-bar d-flex flex-column justify-content-center gap-5">
          <div className="pro-cat text-start d-flex flex-column">
            <h3 className="m-0">Product categories</h3>
            <div className="cate-dire d-flex flex-column gap-4">
              {categories.map((categoryName) => (
                <div
                  key={categoryName}
                  className={`d-flex align-items-center gap-2 ${
                    activeCategory === categoryName ? "active-category" : ""
                  }`}
                  onClick={() => handleCategoryClick(categoryName)}
                >
                  <FaPlus className="plus-icon" />
                  <p className="mb-0">{categoryName}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handlePriceFilter();
            }}
            className="filter-price text-start d-flex flex-column"
          >
            <h3 className="m-0">Filter by price</h3>
            <div className="d-flex flex-column gap-3 align-items-end">
              <div className="d-flex flex-column gap-3">
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="1000"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(Number(event.target.value))}
                  className="range-filter"
                />
                <div className="d-flex align-items-center justify-content-between">
                  <p className="m-0">₦{minPrice}</p>
                  <p className="m-0">₦{maxPrice}</p>
                </div>
              </div>
              <button className="py-3 px-5">Apply</button>
            </div>
          </form>

          <div className="poor-con text-start d-flex flex-column">
            <h3 className="mb-0">Popular products</h3>
            <div className="three-poor d-flex flex-column gap-4">
              <div className="d-flex align-items-center gap-2">
                <img src={donkeyT} alt="" />
                <div>
                  <div>
                    <p className="mb-0">Stuffed Donkey</p>
                    <p className="mb-0">₦21,000</p>
                  </div>
                  <img src={starsR} alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <img src={stack} alt="" />
                <div>
                  <div>
                    <p className="mb-0">Stacking Rings</p>
                    <p className="mb-0">₦10,000</p>
                  </div>
                  <img src={starsR} alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <img src={bicycle} alt="" />
                <div>
                  <div>
                    <p className="mb-0">Baby Balance Bike</p>
                    <p className="mb-0">₦123,000</p>
                  </div>
                  <img src={starsR} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-shoppers">
          <h2 className="text-start m-0">{activeCategory}</h2>
          <div className="d-flex justify-content-between px-4 me-2 mt-4">
            <div
              className="default-s position-relative d-flex align-items-center gap-1 ms-2"
              onClick={() => setSortOrderDropdownOpen(!sortOrderDropdownOpen)}
            >
              <p className="m-0">{sortOrder}</p>
              <MdOutlineKeyboardArrowDown
                className={sortOrderDropdownOpen ? "rotate-icon" : ""}
              />
              {sortOrderDropdownOpen && (
                <ul className="catego-drop list-unstyled text-start py-2 rounded-2 position-absolute">
                  {[
                    "Price: Low to High",
                    "Price: High to Low",
                    "Alphabetical",
                    "Default sorting",
                  ].map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSort(option)}
                      className="px-2 py-1"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p className="m-0 show-res">
              Showing {indexOfFirstProduct + 1} -{" "}
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} results
            </p>
          </div>

          {filteredProducts.length ? (
            <div className="product-grid position-relative">
              {currentProducts.map((product) => (
                <div key={product._id} className="each-card">
                  <Link
                    to={`/product/${product._id}`}
                    className="text-decoration-none text-black"
                  >
                    <div className="each-img position-relative d-flex align-items-center justify-content-center">
                      <img
                        className="m-0"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="lovee-cart position-absolute">
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            handleToggleLike(product._id);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {likedItems[product._id] ? (
                            <FaHeart color="red" />
                          ) : (
                            <FaRegHeart />
                          )}
                        </span>
                        {user ? (
                          <FiShoppingCart
                            onClick={() => addToCart(product._id, 1)}
                            style={{ cursor: "pointer" }}
                          />
                        ) : (
                          <FiShoppingCart
                            onClick={() =>
                              alert("Please log in to add items to your cart")
                            }
                            style={{ cursor: "not-allowed", opacity: 0.5 }}
                          />
                        )}
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

              <div className="page-no d-flex align-items-center justify-content-between position-absolute">
                <div
                  onClick={() =>
                    currentPage > 1 && handlePageChange(currentPage - 1)
                  }
                  style={{
                    cursor: currentPage > 1 ? "pointer" : "not-allowed",
                  }}
                >
                  <img src={leftaro} alt="" />
                </div>

                {Array.from(
                  { length: endPage - startPage + 1 },
                  (_, index) => startPage + index
                ).map((pageNumber) => (
                  <div
                    key={pageNumber}
                    className={`page-circle ${
                      currentPage === pageNumber ? "active-page" : ""
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    <p className="mb-0">{pageNumber}</p>
                  </div>
                ))}

                <div
                  onClick={() =>
                    currentPage < totalPages &&
                    handlePageChange(currentPage + 1)
                  }
                  style={{
                    cursor:
                      currentPage < totalPages ? "pointer" : "not-allowed",
                  }}
                >
                  <img src={rightaro} alt="" />
                </div>
              </div>
            </div>
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
