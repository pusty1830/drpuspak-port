import React from "react";
import puspak from "../assets/puspak.png";

const Aboutpuspak = () => {
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
          <div className="col-lg-6 mb-4 mb-lg-0 position-relative text-center">
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
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6">
            <h2
              className="fw-bold mb-4"
              style={{
                color: "#1d3557",
                fontSize: "2.2rem",
              }}
            >
              Memberships & Associations
            </h2>
            <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
              Proud member of leading national & international orthopedic
              associations, contributing to the advancement of healthcare and
              surgical excellence.
            </p>

            {/* Membership Items */}
            {[
              "Indian Orthopaedic Association (IOA)",
              "Indian Society of Hip & Knee Surgeons (ISHKS)",
              "AO Trauma Foundation",
            ].map((membership, index) => (
              <div
                key={index}
                className="d-flex align-items-center p-3 mb-3"
                style={{
                  background:
                    "rgba(255,255,255,0.7) border-box", // glassmorphism effect
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpuspak;
