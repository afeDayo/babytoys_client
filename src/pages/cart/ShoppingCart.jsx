// src/pages/cart/ShoppingCart.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
import deletecart from "../../../public/deletecart.png";
import outcart from "../../../public/miiinus.png";
import intocart from "../../../public/plusssss.png";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const ShoppingCart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const { user } = useAuth();

  // If the user is not logged in, show a prompt to log in
  if (!user) {
    return (
      <div className="cartpage-con container">
        <h2>Please log in to view your shopping cart</h2>
        <Link to="/login" className="text-decoration-none">
          Login
        </Link>
      </div>
    );
  }

  // Calculate subtotal dynamically from the cart items
  const subtotal =
    cart?.items?.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0) || 0;

  // Assume shipping is a fixed cost (adjust as needed)
  const shipping = 7000;
  const total = subtotal + shipping;

  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    await updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = async (productId) => {
    await removeFromCart(productId);
  };

  return (
    <div className="cartpage-con container">
      <div className="cartpage-tit text-md-start px-3 py-2 mb-5">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          /{" "}
          <span>
            <Link to="/cart" className="text-decoration-none">
              Your shopping cart
            </Link>
          </span>
        </p>
      </div>

      <div className="cartpage-low text-start mb-5">
        <h2 className="mb-0 ms-3 mt-2">Your Cart</h2>

        <div className="cartpage-table mx-3 mt-4">
          <div className="cart-subtit d-flex align-items-center justify-content-between p-3">
            <p className="m-0">Product</p>
            <div className="d-flex align-items-center">
              <p className="m-0">Price</p>
              <p className="m-0">Quantity</p>
              <p className="m-0">Subtotal</p>
              <p className="m-0">Action</p>
            </div>
          </div>

          {cart?.items?.map((item) => (
            <div
              className="cartrow-one py-5 d-flex align-items-center gap-4"
              key={item.product._id}
            >
              <div className="carow-des d-flex align-items-center px-3 gap-4">
                <div className="carow-img rounded-5 d-flex align-items-center justify-content-center">
                  <img src={item.product.image} alt="" />
                </div>
                <p className="mb-0">{item.product.name}</p>
              </div>
              <p className="carow-quan mb-0 ms-1">
                ₦{item.product.price.toLocaleString()}
              </p>
              <div className="carow-cart d-flex align-items-center">
                <div
                  className="carow-out d-flex align-items-center justify-content-center rounded-start-4"
                  onClick={() =>
                    handleQuantityChange(item.product._id, item.quantity - 1)
                  }
                >
                  <img src={outcart} alt="" />
                </div>
                <div className="carow-num d-flex align-items-center justify-content-center">
                  <p className="m-0">{item.quantity}</p>
                </div>
                <div
                  className="carow-in d-flex align-items-center justify-content-center rounded-end-4"
                  onClick={() =>
                    handleQuantityChange(item.product._id, item.quantity + 1)
                  }
                >
                  <img src={intocart} alt="" />
                </div>
              </div>
              <p className="carow-subt mb-0 ms-1">
                ₦{(item.product.price * item.quantity).toLocaleString()}
              </p>
              <img
                className="carow-del ms-5"
                src={deletecart}
                alt=""
                onClick={() => handleRemoveItem(item.product._id)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="carttopro px-3 d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between">
          <form className="cart-proform d-flex align-items-center">
            <input type="text" placeholder="Coupon code" />
            <button className="px-4 py-2 rounded-3">Apply</button>
          </form>
          <div className="conup-cart d-flex align-items-center">
            <button className="carts-tinue rounded-3">Continue Shopping</button>
            <button className="carts-upcart rounded-3">Update Cart</button>
          </div>
        </div>

        <form className="cart-chekout d-flex flex-column align-items-start rounded-3">
          <div className="cart-totali d-flex flex-column text-start">
            <h3>Cart total</h3>
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="mb-0">Subtotal</h4>
              <p className="mb-0">₦{subtotal.toLocaleString()}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="mb-0">Shipping</h4>
              <p className="mb-0">₦{shipping.toLocaleString()}</p>
            </div>
          </div>
          <div className="allin-all d-flex align-items-center justify-content-between py-2">
            <h4 className="mb-0">Total</h4>
            <p className="mb-0 fs-4">₦{total.toLocaleString()}</p>
          </div>
          {/* Wrap the button in a Link to navigate to the Checkout page */}
          <Link
            to="/checkout"
            className="rounded-3 text-decoration-none d-flex align-items-center justify-content-center"
          >
            Proceed to checkout
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ShoppingCart;
