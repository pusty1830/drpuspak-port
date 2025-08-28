import React from "react";
import doctorImg from "../assets/puspakbgremove.png"; // replace with actual image path
import drps from "../assets/drppskk.gif";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="hero-section text-white position-relative "
      style={{ backgroundColor: "#030c54", overflowX: "hidden" }}
    >
      <div className="container">
        <div className="row align-items-center pt-5">
          {/* Left Text Section */}
          <div className="col-md-7">
            <div className="badge bg-light text-dark mb-3">❤️ HI I AM</div>
            <h1 className="fw-bold mb-4">
              Meet Prof. Dr. Puspak Samal — Trusted Care for Bones & Spine.
            </h1>
            <p className="text-light">
              Dr. Puspak Samal is a highly experienced and compassionate
              Orthopaedics & Spine Surgeon dedicated to providing exceptional
              patient care.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a
                href="https://clinic.orthospinecare.shop/"
                className="btn btn-primary"
              >
                BOOK APPOINTMENT <i className="bi bi-arrow-right"></i>
              </a>
              <Link to="/contact" className="btn btn-outline-light">
                SEND MESSAGE <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Right Image + Mission + Social Icons */}
          <div className="col-md-5 position-relative pt-5 ">
            {/* Doctor Image */}
            <img
              src={doctorImg}
              alt="Dr. puspak"
              className="img-fluid  doctor-img pt-5"
            />

            <div
              style={{
                backgroundImage: `url(${drps})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "60vh", // 60% of viewport height
              }}
              className="doctor-bg"
            ></div>

            {/* Mission Quote Box */}
            <div
              className="position-absolute text-white  rounded shadow-lg"
              style={{
                top: "65%",
                right: "2%",
                padding: "1.5rem",
                maxWidth: "300px",
                boxShadow: "0 30px 40px rgba(0,0,0,0.9)",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              }}
            >
              <em>
                My mission is to treat every patient with care, respect, and the
                highest standard of medical knowledge
              </em>
              <div className="mt-2 text-warning">— Prof Dr Puspak Samal</div>
            </div>

            {/* Social Icons Box - Right Middle */}
            <div
              className="position-fixed d-flex flex-column align-items-center"
              style={{
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                backgroundColor: "#007BFF",
                padding: "0.5rem 0.4rem",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                zIndex: 1000,
              }}
            >
              <a href="#" className="text-white mb-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white mb-3 fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-white mb-3 fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
