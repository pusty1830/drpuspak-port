// AboutSection.js
import React from 'react';
import img1 from '../assets/img1.jpg'; // Top large image
import img2 from '../assets/img2.jpg'; // Bottom overlapping image
import why1 from '../assets/why1.jpg';
import why2 from '../assets/why2.jpg';

const AboutSection = () => {
  return (
   <div>
        <section className="py-5 position-relative" style={{ backgroundColor: "#0B2F6A" }}>
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
      
      objectFit: "cover"
    }}
  />
  <div
    className="position-absolute"
    style={{
      bottom: "-10px",
      right: "70px",
      zIndex: 2
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
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
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
        <h2 className="fw-bold mb-3">Where Compassion Meets Excellence</h2>
        <p className="mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
          That's why we are committed to delivering world-class medical services with compassion,
          innovation, and integrity — putting your health and comfort first.
        </p>

        {/* List Items */}
        {[
          { num: "01", title: "Personalized Patient Care" },
          { num: "02", title: "World-Class Medical Experts" },
          { num: "03", title: "World-Class Medical Experts" }
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
              <p className="mb-0" style={{ color: "rgba(255,255,255,0.8)" }}>
                Our team includes highly trained doctors, nurses, and specialists, each
                dedicated to providing the best possible care.
              </p>
            </div>
          </div>
        ))}

        {/* Button */}
        <button className="btn btn-outline-light px-4 py-2 mt-3">
          APPOINTMENT NOW <i className="bi bi-arrow-right ms-1"></i>
        </button>
      </div>
    </div>
  </div>

  {/* Background Pattern */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: "url('/images/medical-pattern.png') no-repeat center center",
      backgroundSize: "cover",
      opacity: 0.1,
      zIndex: 0
    }}
  ></div>
</section>

    <section className="py-5 bg-white position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* LEFT IMAGE COLUMN */}
          <div className="col-lg-6 position-relative">
            <div className="position-relative">
              <img src={img1} alt="Main" className="img-fluid rounded shadow w-60" />

              {/* Experience Ribbon */}
              <div
                className="position-absolute top-0 start-0 bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                style={{
                  width: '30px',
                  height: '100%',
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                  fontSize: '12px',
                  letterSpacing: '1px',
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
                  bottom: '-20px',
                  right: '40px',
                  width: '30%',
                  border: '4px solid white',
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
            <h2 className="fw-bold mb-3 mt-3">Committed to Your Care Every Step of the Way</h2>
            <p className="text-muted mb-4" style={{ maxWidth: '600px' }}>
              With a team of world-class doctors, experienced nurses, and dedicated healthcare professionals,
              we are committed to delivering compassionate, high-quality medical care to every patient.
            </p>

            <div className="row mb-4">
              <div className="col-sm-6">
                <ul className="list-unstyled mb-0">
                  <li>✅ Highly Qualified Specialists</li>
                  <li>✅ Safe, Comfortable Environment</li>
                  <li>✅ Patient-Centered Approach</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled mb-0">
                  <li>✅ Advanced Medical Equipment</li>
                  <li>✅ 24/7 Emergency Services</li>
                  <li>✅ Affordable, Transparent Pricing</li>
                </ul>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="CEO"
                className="rounded-circle me-3"
              />
              <div>
                <p className="mb-1 fw-semibold">CEO, Founder Of CarePoint</p>
                <p className="mb-0 text-muted">Hosain Raji</p>
              </div>
            </div>

            <a href="/more-about" className="btn btn-outline-primary mt-4">More About →</a>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default AboutSection;
