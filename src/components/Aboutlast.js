import React from 'react';
import puspak from '../assets/thumbnail-1.jpg';

const Aboutlast = () => {
  return (
    <section className="aboutlast-section text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Images */}
          <div className="col-lg-6 mb-4 mb-lg-0 position-relative">
            <div className="position-relative rounded shadow-sm overflow-hidden">
          <a href="https://www.youtube.com/watch?time_continue=1&v=3u_Q2r2k2jI&embeds_referring_euri=http%3A%2F%2Fdrpuspaksamal.com%2F&source_ve_path=Mjg2NjY" target="_blank" rel="noopener noreferrer">
            <img
              src={puspak}
              alt="YouTube thumbnail"
              className="img-fluid w-100"
            />
            {/* Play Icon Overlay */}
            <div className="play-overlay position-absolute top-50 start-50 translate-middle">
              <div className="play-circle">
                <i className="bi bi-play-fill fs-3 text-white"></i>
              </div>
            </div>
          </a>
        </div>
           
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6">
            <span
            className="px-3 py-1 rounded-pill  text-primary fw-semibold"
            style={{ backgroundColor: "#f5f9ff" }}
          >
            <i className="bi bi-heart-fill text-primary me-1"></i> Patient-Centered Approach
          </span>
            <h2 className="fw-bold mb-4 mt-3">Patient-Centered Approach</h2>
            <p className="mb-4 text-white">
              Dr. Samal takes time to understand each patient's unique needs and concerns. He believes in educating patients about their conditions and involving them in decision-making about their treatment options.

              His approach combines technical expertise with compassionate care to achieve the best possible outcomes for every patient.
            </p>

            {/* <div className="mb-3 d-flex">
              <div className="circle-number me-3">01</div>
              <div>
                <h5 className="fw-bold mb-1">Personalized Patient Care</h5>
                <p className="mb-0">Our team includes highly trained doctors, nurses, and specialists, each dedicated to providing the best possible care.</p>
              </div>
            </div>

            <div className="mb-3 d-flex">
              <div className="circle-number me-3">02</div>
              <div>
                <h5 className="fw-bold mb-1">World-Class Medical Experts</h5>
                <p className="mb-0">Highly experienced professionals with a passion for healing.</p>
              </div>
            </div>

            <div className="mb-4 d-flex">
              <div className="circle-number me-3">03</div>
              <div>
                <h5 className="fw-bold mb-1">Advanced Technology</h5>
                <p className="mb-0">State-of-the-art equipment ensures you receive precise diagnostics and treatment.</p>
              </div>
            </div> */}

            <a href="#appointment" className="btn btn-outline-light rounded-pill px-4">
              Appointment Now <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutlast;
