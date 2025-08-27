// AboutSection.js
import React from "react";
import img1 from "../assets/img1.jpg"; // Top large image
import img2 from "../assets/img2.jpg"; // Bottom overlapping image
import why1 from "../assets/why1.jpg";
import why2 from "../assets/why2.jpg";

const AboutSection = () => {
  return (
    <div>
      <section
        className="py-5 position-relative"
        style={{ backgroundColor: "#0B2F6A" }}
      >
        <div className="container">
          <div className="row align-items-center ms-lg-5 me-lg-5">
            {/* Left Side Images */}
            <div className="col-lg-6 position-relative mb-4 mb-lg-0">
              <div className="position-relative">
                <img
                  src={why1}
                  alt="Compassion Care"
                  className="img-fluid rounded-4 shadow"
                  style={{
                    height: "450px", // increase height

                    objectFit: "cover",
                  }}
                />
                <div
                  className="position-absolute"
                  style={{
                    bottom: "-10px",
                    right: "70px",
                    zIndex: 2,
                  }}
                >
                  <div className="position-relative">
                    <img
                      src={why2}
                      alt="Patient Care"
                      className="img-fluid rounded-4 shadow"
                      style={{ width: "250px" }}
                    />
                    {/* Play Button */}
                    <div
                      className="position-absolute top-50 start-50 translate-middle bg-warning rounded-circle d-flex justify-content-center align-items-center shadow"
                      style={{
                        width: "50px",
                        height: "50px",
                        cursor: "pointer",
                      }}
                    >
                      <i className="bi bi-play-fill fs-4 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-lg-6 text-white">
              <p className="text-primary fw-bold mb-2">
                <i className="bi bi-heart-fill me-1"></i> WHY CHOOSE US
              </p>
              <h2 className="fw-bold mb-3">
                Where Compassion Meets Excellence
              </h2>
              <p className="mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                We are dedicated to providing advanced orthopedic care with
                compassion, precision, and innovation — ensuring you regain
                mobility and live pain-free.
              </p>

              {/* List Items */}
              {[
                { num: "01", title: "Specialized Orthopedic Expertise" },
                {
                  num: "02",
                  title: "Advanced Surgical & Non-Surgical Treatments",
                },
                { num: "03", title: "Comprehensive Rehabilitation Support" },
              ].map((item, index) => (
                <div key={index} className="d-flex mb-3">
                  <div
                    className="rounded-circle bg-white text-primary fw-bold d-flex justify-content-center align-items-center me-3"
                    style={{ width: "65px", height: "45px" }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">{item.title}</h5>
                    <p
                      className="mb-0"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {index === 0 &&
                        "Our orthopedic specialists bring years of experience in bone, joint, and spine care."}
                      {index === 1 &&
                        "From minimally invasive surgery to pain management, we provide the latest treatment options."}
                      {index === 2 &&
                        "We focus on complete recovery with tailored physiotherapy and rehabilitation programs."}
                    </p>
                  </div>
                </div>
              ))}
            </div>  
          </div>
        </div>

        {/* Background Pattern */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "url('/images/medical-pattern.png') no-repeat center center",
            backgroundSize: "cover",
            opacity: 0.1,
            zIndex: 0,
          }}
        ></div>
      </section>

      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center gy-5">
            {/* LEFT IMAGE COLUMN */}
            <div className="col-lg-6 position-relative">
              <div className="position-relative">
                <img
                  src={img1}
                  alt="Main"
                  className="img-fluid rounded shadow w-60"
                />

                {/* Experience Ribbon */}
                <div
                  className="position-absolute top-0 start-0 bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                  style={{
                    width: "30px",
                    height: "100%",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  12+ YEARS EXPERIENCE
                </div>

                {/* Overlapping small image */}
                <img
                  src={img2}
                  alt="Bottom Small"
                  className="img-fluid rounded shadow position-absolute"
                  style={{
                    bottom: "-20px",
                    right: "40px",
                    width: "30%",
                    border: "4px solid white",
                  }}
                />
              </div>
            </div>

            {/* RIGHT TEXT COLUMN */}
            <div className="col-lg-5">
              <span
                className="px-3 py-1 rounded-pill border border-primary text-primary fw-semibold"
                style={{ backgroundColor: "#f5f9ff" }}
              >
                <i className="bi bi-heart-fill text-primary me-1"></i> About Us
              </span>
              <h2 className="fw-bold mb-3 mt-3">
                Advanced Orthopedic & Spine Care You Can Trust
              </h2>
              <p className="text-muted mb-4" style={{ maxWidth: "600px" }}>
                At <strong>Ortho Spine Care</strong>, we specialize in
                comprehensive treatment for bone, joint, and spine conditions.
                With a team of highly skilled orthopedic surgeons,
                physiotherapists, and spine care experts, we are committed to
                restoring mobility, relieving pain, and improving quality of
                life for every patient.
              </p>

              <div className="row mb-4">
                <div className="col-sm-6">
                  <ul className="list-unstyled mb-0">
                    <li>✅ Expertise in Joint Replacement & Spine Surgery</li>
                    <li>✅ Minimally Invasive Orthopedic Procedures</li>
                    <li>✅ Personalized Rehabilitation Programs</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled mb-0">
                    <li>✅ Advanced Imaging & Diagnostic Facilities</li>
                    <li>✅ 24/7 Emergency Orthopedic Support</li>
                    <li>✅ Affordable, Transparent Pricing</li>
                  </ul>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <img
                  src="https://image2url.com/images/1756188342524-a035f36d-d261-44b4-914a-2a7fee0a35f4.jpg"
                  alt="CEO"
                  className="rounded-circle me-3"
                  style={{ height: "50px", width: "50px" }}
                />
                <div>
                  <p className="mb-1 fw-semibold">Founder & Director</p>
                  <p className="mb-0 text-muted">Prof. Dr Puspak Samal</p>
                  <small className="text-primary fw-semibold">
                    Consultant Orthopedic & Spine Surgeon
                  </small>
                </div>
              </div>

              <a
                href="https://clinic.orthospinecare.shop/"
                className="btn btn-outline-primary mt-4"
              >
                BOOK APPOINTMENT →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
