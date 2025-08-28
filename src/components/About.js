import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../assets/footer-bg.jpg";
import puspak from "../assets/puspak.jpg";

const About = () => {
  const navigate = useNavigate();

  // Animation variants
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="container py-5">
        <div className="row align-items-center g-lg-5 ms-lg-5 me-lg-5">
          {/* Left Card */}
          <motion.div
            className="col-lg-4 mb-4 mb-lg-0"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="text-white rounded-4 overflow-hidden shadow"
              style={{
                background: "linear-gradient(180deg, #0d1b3f, #0a1433)",
              }}
            >
              <div className="p-4">
                <h5 className="fw-semibold text-center">Time For Meet</h5>
                <hr className="opacity-25" />
                <div className="mb-4 text-center">
                  <div className="fw-medium">Monday - Friday</div>
                  <small>9:00 AM - 06:00 PM</small>
                </div>
                <hr className="opacity-25" />
                <div className="text-center">
                  <div className="fw-medium">Saturday - Sunday</div>
                  <small>9:00 AM - 06:00 PM</small>
                </div>
              </div>

              {/* Emergency Section */}
              <div
                className="p-3 text-center"
                style={{ backgroundColor: "#0066ff" }}
              >
                <div className="fw-semibold">For Emergency Care</div>
                <small>+91 7873366631</small>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="col-lg-8"
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* About Me badge */}
            <div className="mb-3">
              <span
                className="px-3 py-1 border border-primary text-primary rounded-pill fw-semibold"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="bi bi-heart-fill me-1 text-primary"></i>
                About Me
              </span>
            </div>

            <h2 className="fw-bold mb-3">Prof Dr Puspak Samal</h2>

            <p className="text-muted">
              Dr. Puspak Samal is a highly skilled and experienced cardiologist
              dedicated to providing comprehensive cardiac care. He specializes
              in preventive cardiology, interventional procedures, and heart
              disease management with years of expertise and advanced
              diagnostics. He completed his MBBS from Medical College, Kolkata,
              followed by an MD in General Medicine and a DM in Cardiology from
              NRS Medical College. His training and dedication make him a
              trusted name in modern cardiac treatment.
            </p>

            {/* Motto */}
            <p className="mb-4">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              <strong>Doctor's Motto or Belief:</strong> Your Spine, Your
              Strength, Our Care.
            </p>

            {/* Buttons */}
            <motion.div
              className="d-flex flex-wrap gap-3"
              variants={buttonVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button
                onClick={() => navigate("/contact")}
                className="btn btn-primary fw-semibold px-4"
              >
                SEND MESSAGE <i className="bi bi-arrow-up-right ms-1"></i>
              </button>
              <button
                className="btn btn-outline-dark fw-semibold px-4"
                onClick={() => {
                  window.location.href = "https://clinic.orthospinecare.shop/";
                }}
              >
                BOOK APPOINTMENT <i className="bi bi-arrow-up-right ms-1"></i>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
