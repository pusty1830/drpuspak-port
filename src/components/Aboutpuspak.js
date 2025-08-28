import React from "react";
import puspak from "../assets/puspak.png";
import { motion } from "framer-motion";

const Aboutpuspak = () => {
  // Animation variants
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const memberships = [
    "Indian Orthopaedic Association (IOA)",
    "Indian Society of Hip & Knee Surgeons (ISHKS)",
    "AO Trauma Foundation",
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f0f4ff, #ffffff)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Image */}
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0 position-relative text-center"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: "15%",
                width: "70%",
                height: "70%",
                background:
                  "linear-gradient(135deg, rgba(0,123,255,0.4), rgba(0,198,255,0.4))",
                borderRadius: "50%",
                zIndex: 1,
                filter: "blur(80px)",
              }}
            ></div>
            <img
              src={puspak}
              alt="Prof Dr Puspak"
              className="img-fluid rounded-4 shadow-lg position-relative"
              style={{
                zIndex: 2,
                borderRadius: "20px",
                maxHeight: "450px",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="col-lg-6"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="fw-bold mb-4"
              style={{ color: "#1d3557", fontSize: "2.2rem" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Memberships & Associations
            </motion.h2>

            <motion.p
              className="text-muted mb-4"
              style={{ lineHeight: "1.6" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Proud member of leading national & international orthopedic
              associations, contributing to the advancement of healthcare and
              surgical excellence.
            </motion.p>

            {/* Membership Items */}
            {memberships.map((membership, index) => (
              <motion.div
                key={index}
                className="d-flex align-items-center p-3 mb-3"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                custom={index}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  className="me-3 d-flex justify-content-center align-items-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #007bff, #00c6ff)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <h5
                  className="fw-bold mb-0"
                  style={{ color: "#333", fontSize: "1.1rem" }}
                >
                  {membership}
                </h5>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpuspak;
