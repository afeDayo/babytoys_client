import React from "react";
import { Link } from "react-router-dom";
import navSearch from "../../assets/Images/navsearch.png";
import "./Blog.css";
import { FaPlus } from "react-icons/fa";
import blogpone from "../../assets/Images/Rectangle 60.png";
import blogptwo from "../../assets/Images/Rectangle 61.png";
import blogpthree from "../../assets/Images/Rectangle 62.png";
import pinkposter from "../../assets/Images/Rectangle 64.png";
import blogimg1 from "../../assets/Images/blog1.png";
import blogimg2 from "../../assets/Images/blog2.png";
import blogimg3 from "../../assets/Images/blog3.png";
import blogimg4 from "../../assets/Images/blog4.png";
import blogdate from "../../assets/Images/blogdate.png";

const Blog = () => {
  return (
    <div className="blogpage-con container">
      <div className="blogpage-tit text-md-start px-3 py-2 mb-5">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          /{" "}
          <span>
            <Link to="/blog" className="text-decoration-none">
              News
            </Link>
          </span>
        </p>
      </div>

      {/* ================================== */}

      <div className="blogpage-low d-flex align-items-start mx-3">
        <div className="left-blog d-flex flex-column align-items-start">
          <h2 className="mb-0">Blog standard</h2>

          {/* ==================== */}

          <div className="position-relative">
            <input className="blogshinput" type="text" placeholder="Search" />
            <img className="position-absolute end-0" src={navSearch} alt="" />
          </div>

          {/* ==================== */}

          <div className="blogs-carte d-flex flex-column align-items-start rounded-3">
            <h3 className="mb-0">Categories</h3>

            <div className="blogeach-carte d-flex flex-column align-items-start gap-4">
              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Education and Development</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Toy Safety</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Toy Trends</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Customer Stories</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Events and Promotions</p>
              </div>
            </div>
          </div>

          {/* =================== */}

          <div className="blogsrec-post d-flex flex-column align-items-start rounded-3">
            <h3 className="mb-0">Recent Posts</h3>

            <div className="blogrec-eachp d-flex flex-column align-items-start">
              <div className="d-flex align-items-center gap-2">
                <img src={blogpone} alt="loo" />
                <p className="mb-0 ms-1 text-start">
                  Enhancing motor skills through play
                </p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <img src={blogptwo} alt="loo" />
                <p className="mb-0 ms-1 text-start">
                  Fostering problem solving skills
                </p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <img src={blogpthree} alt="loo" />
                <p className="mb-0 ms-1 text-start">
                  Emotional and Social Development
                </p>
              </div>
            </div>
          </div>

          {/* ================== */}

          <div className="blogsrec-popu d-flex flex-column align-items-start rounded-3">
            <h3 className="mb-0">Popular Tag</h3>

            <div className="blogspopu-tags d-flex flex-column align-items-start">
              <div className="d-flex align-items-center gap-3">
                <div className="p-2 rounded-3">
                  <p className="mb-0">Learn & Inspire</p>
                </div>
                <div className="p-2 rounded-3">
                  <p className="mb-0">Top Toy</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="p-2 rounded-3">
                  <p className="mb-0">Family fun</p>
                </div>
                <div className="p-2 rounded-3">
                  <p className="mb-0">Toy Reviews </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="p-2 rounded-3">
                  <p className="mb-0">Toy Trends</p>
                </div>
                <div className="p-2 rounded-3">
                  <p className="mb-0">Tips & Tricks</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================== */}

          <div className="dream-toyz position-relative">
            <img className="position-relative" src={pinkposter} alt="" />

            <div className="dream-shop position-absolute d-flex flex-column align-items-center">
              <div className="d-flex flex-column">
                <h3 className="mb-0">Dream Toys at Delightful Prices!</h3>
                <p className="mb-0">15% Off on Kids' Toys and Gifts!</p>
              </div>
              <button className="border-0">Shop now</button>
            </div>
          </div>
        </div>

        {/* ====================================================================== */}

        <div className="right-blog d-flex flex-column align-items-start">
          <div className="right-each d-flex flex-column align-items-start rounded-3">
            <img src={blogimg1} alt="" />
            <div className="inblog d-flex flex-column align-items-start text-start">
              <div className="blog-time d-flex align-items-center gap-2 py-2 px-3 rounded-3">
                <img src={blogdate} alt="" />
                <p className="mb-0">March 24, 2024</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <h4 className="mb-0">Enhancing motor skills through play</h4>
                <p className="mb-0">
                  Motor skills are divided into two categories: fine motor
                  skills and gross motor skills. Toys play a vital role in the
                  development of both.
                </p>
              </div>
            </div>
          </div>

          <div className="right-each d-flex flex-column align-items-start rounded-3">
            <img src={blogimg2} alt="" />
            <div className="inblog d-flex flex-column align-items-start text-start">
              <div className="blog-time d-flex align-items-center gap-2 py-2 px-3 rounded-3">
                <img src={blogdate} alt="" />
                <p className="mb-0"> Feb 12, 2024</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <h4 className="mb-0">Fostering problem solving skills</h4>
                <p className="mb-0">
                  Problem-solving is a critical skill that children begin to
                  develop from a very young age through interactive and engaging
                  play. Toys that challenge children to think and strategize
                  encourage this development.
                </p>
              </div>
            </div>
          </div>

          <div className="right-each d-flex flex-column align-items-start rounded-3">
            <img src={blogimg3} alt="" />
            <div className="inblog d-flex flex-column align-items-start text-start">
              <div className="blog-time d-flex align-items-center gap-2 py-2 px-3 rounded-3">
                <img src={blogdate} alt="" />
                <p className="mb-0"> Jun 16, 2023</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <h4 className="mb-0">Emotional and Social Development</h4>
                <p className="mb-0">
                  Toys also help children express their emotions and understand
                  those of others, which is foundational for developing empathy
                  and interpersonal skills.
                </p>
              </div>
            </div>
          </div>

          <div className="right-each d-flex flex-column align-items-start rounded-3">
            <img src={blogimg4} alt="" />
            <div className="inblog d-flex flex-column align-items-start text-start">
              <div className="blog-time d-flex align-items-center gap-2 py-2 px-3 rounded-3">
                <img src={blogdate} alt="" />
                <p className="mb-0"> September 16, 2023</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <h4 className="mb-0">Language Development and Social Skills</h4>
                <p className="mb-0">
                  Language development is significantly influenced by
                  interactive play. Toys that involve multiple participants can
                  help develop this skill, as well as social skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
