// src/pages/Export/CheckoutPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CheckoutPage.css";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "../../api/axios";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import visac from "../../../public/Visa.png";
import massterc from "../../../public/MasterCard.png";
import dizzcoc from "../../../public/Discover Card.png";
import unionnc from "../../../public/UnionPay.png";
import americac from "../../../public/American Express.png";
import paypal from "../../../public/Logo paypal.png";

// Load Stripe using your public key from your environment
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

/*
  CheckoutPageContent:
  - Contains the full UI for delivery info, payment section, and order summary.
  - Uses Stripe Elements, so it must be rendered within an <Elements> provider.
*/
const CheckoutPageContent = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const token = user?.token || localStorage.getItem("authToken");

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission: create PaymentIntent, confirm payment, then create order
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError("");

    try {
      // 1. Create a PaymentIntent on your backend using the cart total.
      const paymentResponse = await axios.post(
        "/api/payment/create-intent",
        { amount: cart.total },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const clientSecret = paymentResponse.data.clientSecret;

      // 2. Confirm the card payment using Stripe Elements.
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            // Collect card details from the CardNumberElement.
            card: elements.getElement(CardNumberElement),
            billing_details: {
              // Get the cardholder name from the input field named "cardholderName".
              name: e.target.elements["cardholderName"].value,
            },
          },
          redirect: "if_required",
        });

      if (stripeError) {
        console.error("Stripe error:", stripeError);
        setError(stripeError.message);
        setProcessing(false);
        return;
      }

      // 3. If the payment succeeded, create the order on your backend.
      if (paymentIntent.status === "succeeded") {
        await axios.post(
          "/api/orders",
          {
            items: cart.items,
            total: cart.total,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Payment and order creation successful!");
        // Optionally, redirect to an order-success page here.
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred during checkout. Please try again."
      );
    }
    setProcessing(false);
  };

  // Calculate dynamic totals based on cart contents.
  const subtotal =
    cart?.items?.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    ) || 0;
  const shipping = 7000; // Fixed shipping fee (adjust if needed)
  const total = subtotal + shipping;

  return (
    <div className="checkpage-con container">
      <div className="checkpage-tit text-md-start px-3 py-2 mb-5">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          /{" "}
          <span>
            <Link to="/checkout" className="text-decoration-none">
              Checkout
            </Link>
          </span>
        </p>
      </div>

      {/* Your original UI structure remains unchanged */}
      <div className="checkpage-low text-start mb-5">
        <h2 className="mb-4 ms-3 mt-2">Check out</h2>
        <form
          onSubmit={handleSubmit}
          className="delpayou ms-3 d-flex align-items-start"
        >
          {/* Delivery Info Section */}
          <div className="delpay d-flex flex-column gap-5 mb-5">
            <div className="deliv rounded-3 d-flex flex-column">
              <h3>Delivery info</h3>
              <div className="deliv-form d-flex flex-column">
                <div className="delform-one d-flex align-items-center">
                  <div className="d-flex flex-column justify-content-start gap-3 w-100">
                    <label htmlFor="firstname">First name *</label>
                    <input
                      type="text"
                      placeholder="First namre"
                      required
                      id="firstname"
                      name="firstname"
                      className="px-3 py-2 rounded-3"
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-start gap-3 w-100">
                    <label htmlFor="lastname">Last name *</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      id="lastname"
                      name="lastname"
                      className="px-3 py-2 rounded-3"
                    />
                  </div>
                </div>
                <div className="delform-two d-flex flex-column justify-content-start gap-3 w-100">
                  <label htmlFor="address">Street address *</label>
                  <input
                    type="text"
                    placeholder="Address"
                    id="address"
                    name="address"
                    className="px-3 py-2 rounded-3"
                  />
                </div>
                <div className="delform-three d-flex align-items-center">
                  <div className="d-flex flex-column justify-content-start gap-3 w-100">
                    <label htmlFor="city">Town / City *</label>
                    <input
                      type="text"
                      placeholder="City"
                      required
                      id="city"
                      name="city"
                      className="px-3 py-2 rounded-3 position-relative"
                    />
                    <img src="" alt="" className="position-absolute" />
                  </div>
                  <div className="d-flex flex-column justify-content-start gap-3 w-100">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      placeholder="State"
                      required
                      id="state"
                      name="state"
                      className="px-3 py-2 rounded-3 position-relative"
                    />
                    <img src="" alt="" className="position-absolute" />
                  </div>
                </div>
                <div className="delform-four d-flex align-items-center">
                  <div className="d-flex flex-column justify-content-start gap-3 w-100">
                    <label htmlFor="zipcode">ZIP code *</label>
                    <input
                      type="text"
                      placeholder="First namre"
                      required
                      id="zipcode"
                      name="zipcode"
                      className="px-3 py-2 rounded-3"
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-start gap-3 w-100">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      id="phone"
                      name="phone"
                      className="px-3 py-2 rounded-3"
                    />
                  </div>
                </div>
                <div className="delform-five d-flex flex-column justify-content-start gap-3 w-100">
                  <label htmlFor="email">Email address *</label>
                  <input
                    type="email"
                    placeholder="Example@youremail.com"
                    id="email"
                    name="email"
                    className="px-3 py-2 rounded-3"
                  />
                </div>
                <div className="delform-six d-flex flex-column justify-content-start gap-3 w-100">
                  <label htmlFor="notes">Order notes (optional) *</label>
                  <textarea
                    rows="4"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    id="notes"
                    name="notes"
                    className="px-3 py-2 rounded-3"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* ==================== */}

            <div className="payme rounded-3 d-flex flex-column">
              <div className="payme-both d-flex flex-column">
                <div className="payme-tit d-flex flex-column gap-2">
                  <h3 className="mb-1">Payment</h3>
                  <p className="mb-0">
                    All transactions are secure and encryted.
                  </p>
                </div>
                <div className="credit-ca d-flex flex-column">
                  <div className="credit-inp d-flex flex-column gap-3">
                    <div className="credit-aldiv">
                      <div className="credit-al d-flex align-items-center justify-content-between">
                        <div className="rad-cre d-flex align-items-center gap-2">
                          <input type="radio" className="me-1" defaultChecked />
                          <label>Credit card</label>
                        </div>
                        <div className="card-cre d-flex align-items-center">
                          <img src={visac} alt="" />
                          <img src={massterc} alt="" />
                          <img src={americac} alt="" />
                          <img src={dizzcoc} alt="" />
                          <img src={unionnc} alt="" />
                        </div>
                      </div>
                      <hr className="m-0" />
                    </div>
                    {/* Replace plain card inputs with Stripe Elements */}
                    <CardNumberElement
                      className="car-nom px-3 py-2 rounded-3"
                      options={{ placeholder: "Card number" }}
                    />
                    <input
                      type="text"
                      name="cardholderName"
                      placeholder="Name on card"
                      className="car-nom px-3 py-2 rounded-3"
                      required
                    />
                    <div className="abou-car d-flex align-items-center">
                      <CardExpiryElement
                        className="car-nom px-3 py-2 rounded-3 w-100"
                        options={{ placeholder: "Expiration date (MM/YY)" }}
                      />
                      <CardCvcElement
                        className="car-nom px-3 py-2 rounded-3 w-100"
                        options={{ placeholder: "Security code" }}
                      />
                    </div>
                  </div>
                  <div className="credit-che d-flex flex-column gap-1">
                    <div className="chebo-one py-2 d-flex align-items-center gap-2">
                      <input type="checkbox" className="me-1" />
                      <label>Use shipping address as billing address</label>
                    </div>
                    <div className="chebo-two py-2 d-flex align-items-center gap-2">
                      <input type="checkbox" className="me-1" />
                      <label>
                        <img src={paypal} alt="PayPal" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="rounded-3"
                type="submit"
                disabled={processing || !stripe}
              >
                {processing ? "Processing..." : "Place order"}
              </button>
            </div>
          </div>

          {/* Payment Section */}

          {/* Order Summary Section */}
          <div className="youror rounded-3">
            <div className="youror-ipd d-flex flex-column gap-2">
              <h3 className="mb-1">Your order</h3>
              <div className="youror-list">
                {cart?.items?.map((item) => (
                  <div className="ylist-each" key={item.product._id}>
                    <div className="orderc-one d-flex align-items-center">
                      <div className="orderc-img d-flex align-items-center justify-content-center rounded-3">
                        <img src={item.product.image} alt={item.product.name} />
                      </div>
                      <div className="orderc-inf">
                        <h4 className="mb-0">{item.product.name}</h4>
                        <p className="mb-0">Amount: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="mb-0 ylist-pri">
                      ₦{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="che-tot d-flex flex-column">
              <div className="checko-cal d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between py-2">
                  <h4 className="mb-0">Subtotal</h4>
                  <p className="mb-0">₦{subtotal.toLocaleString()}</p>
                </div>
                <div className="d-flex align-items-center justify-content-between py-2">
                  <h4 className="mb-0">Shipping</h4>
                  <p className="mb-0">₦{shipping.toLocaleString()}</p>
                </div>
              </div>
              <div className="allin-all d-flex align-items-center justify-content-between py-2">
                <h4 className="mb-0">Total</h4>
                <p className="mb-0">₦{total.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Wrap the CheckoutPageContent in an Elements provider so that Stripe hooks work.
const CheckoutPageWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPageContent />
    </Elements>
  );
};

export default CheckoutPageWrapper;
