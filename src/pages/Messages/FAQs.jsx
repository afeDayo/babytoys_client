import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQs.css";
import pluss from "../../assets/Images/plus.png";
import minuss from "../../assets/Images/minus.png";

const FAQs = () => {
  // State to track which accordion is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle accordion click
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // FAQ data
  const faqs = [
    {
      question: "How will my order be delivered to me?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum maxime laborum similique obcaecati numquam nihil. Fugit eos, quasi eaque minus, provident corrupti velit ea illo quo dolor enim nihil.",
    },
    {
      question: "What do I need to know?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum maxime laborum similique obcaecati numquam nihil. Fugit eos, quasi eaque minus, provident corrupti velit ea illo quo dolor enim nihil.",
    },
    {
      question: "How will I know if order is placed successfully?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum maxime laborum similique obcaecati numquam nihil. Fugit eos, quasi eaque minus, provident corrupti velit ea illo quo dolor enim nihil.",
    },
    {
      question: "How do I check the status of my order?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum maxime laborum similique obcaecati numquam nihil. Fugit eos, quasi eaque minus, provident corrupti velit ea illo quo dolor enim nihil.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum maxime laborum similique obcaecati numquam nihil. Fugit eos, quasi eaque minus, provident corrupti velit ea illo quo dolor enim nihil.",
    },
  ];

  return (
    <section className="faq-sec container">
      <div className="faq-one text-md-start px-3 py-2 mb-3">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          /{" "}
          <span>
            <Link to="/faq" className="text-decoration-none">
              FAQ's
            </Link>
          </span>
        </p>
      </div>

      <div className="faq-two px-3 text-md-start d-flex flex-column align-items-md-start gap-5">
        <h2 className="m-0">FAQ'S</h2>
        <div className="arcodion d-flex flex-column align-items-start gap-4 w-100 rounded-4">
          {faqs.map((faq, index) => (
            <div
              className={`arco-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-click d-flex align-items-center gap-3 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <img
                  src={activeIndex === index ? minuss : pluss}
                  alt="toggle icon"
                />
                <h5 className="m-0">{faq.question}</h5>
              </div>
              <div
                className="faq-para mt-4 pt-2"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.5s ease-out",
                }}
              >
                <p className="m-0">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
