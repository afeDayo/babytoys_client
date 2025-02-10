import React, { useState } from "react";
import "./Testimonials.css";
import leftArr from "../../../../assets/Images/lefty.png";
import rightArr from "../../../../assets/Images/righty.png";

const testimonials = [
  {
    id: 1,
    name: "Oluwatayo Fatoki",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 5,
  },

  {
    id: 2,
    name: "Akin Ogundele",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 4,
  },

  {
    id: 3,
    name: "Ademide Omikunle",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 5,
  },

  {
    id: 4,
    name: "Olaribigbe Adepoju",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 5,
  },

  {
    id: 5,
    name: "Odimegwu chuka",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 3,
  },

  {
    id: 6,
    name: "Onyekwelu Valentine",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 4,
  },

  {
    id: 7,
    name: "Bieni Emeka",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 5,
  },

  {
    id: 8,
    name: "Ajayi hassan",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 5,
  },

  {
    id: 9,
    name: "Oluwamayowa David",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 4,
  },

  {
    id: 10,
    name: "Tabuke Ezekiel",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    comment:
      "Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibileTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1;
    });
  };

  return (
    <div className="testi-con container mb-5">
      <div className="testi-tits">
        <h2 className="mb-1">Hear from Other Happy Parents</h2>
        <p className="mb-5">Customer testimonials</p>
      </div>

      {/* =================================== */}

      <div className="testimonial-carousel mt-5">
        <div className="carousel-itemz">
          {visibileTestimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className="testimonial-item text-start d-flex flex-column gap-3 rounded-2"
              >
                <div className="star-t m-0">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>

                {/* ===================== */}

                <p className="test-comm m-0">{testimonial.comment}</p>

                {/* =============== */}

                <div className="person-info d-flex align-items-center justify-content-start gap-2">
                  <img src={testimonial.image} alt="" className="person-pic" />

                  <h4 className="m-0">{testimonial.name}</h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================== */}

        <img src={leftArr} alt="" onClick={handlePrev} className="arrow left" />
        <img
          src={rightArr}
          alt=""
          onClick={handleNext}
          className="arrow right"
        />
      </div>
    </div>
  );
};

export default Testimonials;
