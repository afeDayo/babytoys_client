import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

// Icon imports
import iconPhone from "../../../public/phone.png";
import iconMail from "../../../public/envelope.png";
import iconLocate from "../../../public/locate.png";

// React Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Leaflet icon fix
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Contact = () => {
  // Approximate coordinates for "No 18, Dailey Street, Shomolu, Lagos, Nigeria"
  const position = [6.601, 3.351];

  // State for the contact form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  // Handle changes in the form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission by saving the form data in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve previous submissions, if any
    const previousSubmissions =
      JSON.parse(localStorage.getItem("contactSubmissions")) || [];

    // Add the current form data to the submissions array
    const updatedSubmissions = [...previousSubmissions, formData];

    // Save the updated submissions array to localStorage
    localStorage.setItem(
      "contactSubmissions",
      JSON.stringify(updatedSubmissions)
    );

    alert("Message saved successfully in localStorage!");

    // Clear the form fields after saving
    setFormData({ name: "", phone: "", email: "", comment: "" });
  };

  return (
    <section className="contact-sec container">
      <div className="contact-one text-md-start px-3 py-2 mb-3">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          /{" "}
          <span>
            <Link to="/contact" className="text-decoration-none">
              Contact
            </Link>
          </span>
        </p>
      </div>

      {/* ============================= */}

      <div className="contact-two px-3 text-md-start py-4 d-flex flex-column align-items-md-start gap-5 mb-3">
        <h2 className="m-0">Contact</h2>

        {/* Contact information */}
        <div className="all-media d-flex align-items-center justify-content-between">
          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={iconPhone} alt="Phone" />
              <p className="m-0 reach">Phone number</p>
            </div>
            <p className="m-0 get">+234 8124374721</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={iconMail} alt="Email" />
              <p className="m-0 reach">Email</p>
            </div>
            <p className="m-0 get">afedayo@gmail.com</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-3">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={iconLocate} alt="Address" />
              <p className="m-0 reach">Address place</p>
            </div>
            <p className="m-0 get">
              No 18, Dailey Street, Shomolu, Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* ===================================== */}

      <div className="loc-con d-flex align-items-center">
        {/* Interactive Map */}
        <div
          className="map-container mb-4"
          style={{ height: "581px", flex: "1 1 45%", minWidth: "674.81px" }}
        >
          <MapContainer
            center={position}
            zoom={16}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>No 18, Dailey Street, Shomolu, Lagos, Nigeria.</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="con-form text-start d-flex flex-column align-items-md-start gap-5"
          style={{ flex: "1 1 45%", minWidth: "300px" }}
        >
          <div className="d-flex flex-column gap-4">
            <h3>Contact Us</h3>
            <div className="con-inp d-flex flex-column gap-4">
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                className="px-3 py-2 rounded-3"
                type="text"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                className="px-3 py-2 rounded-3"
                rows="5"
                name="comment"
                placeholder="Write your comment here..."
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="px-4 py-2 rounded-4 border-0">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
