import React from 'react';
import bgImage from '../assets/bg.jpg';
import puspak from '../assets/puspak.png';

const AboutMe = () => {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(${bgImage}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
      className="py-5"
    >
      <div className="container">
        {/* Section 1 - Doctor Info */}
        <div className="row align-items-center mb-5">
          {/* Doctor Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="p-3 bg-white shadow-lg rounded-4 d-inline-block hover-shadow">
              <img
                src={puspak}
                alt="Dr. Puspak Samal"
                className="img-fluid rounded-4"
              />
              <div className="mt-3">
                <h5 className="mb-1 fw-bold text-dark">Prof. Dr. Puspak Samal</h5>
                <p className="text-muted mb-1">
                  Consultant Orthopedic & Spine Surgeon
                </p>
                <span className="badge bg-primary">MBBS, MS (Ortho)</span>
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="col-md-8">
            <h2 className="fw-bold text-primary mb-3 position-relative">
              A Brief History
              <div
                style={{
                  height: '3px',
                  width: '80px',
                  background: '#0d6efd',
                  marginTop: '8px',
                }}
              ></div>
            </h2>

            <p className="text-muted">
              Dr. Puspak Samal is a highly skilled and experienced orthopedic
              surgeon specializing in spine and joint care. With years of
              expertise in both surgical and non-surgical treatments, he is
              dedicated to providing personalized care to each patient.
            </p>
            <p className="text-muted">
              He completed his <strong>MBBS</strong> from Medical College,
              Kolkata, followed by an <strong>MS in Orthopedics</strong> from
              NRS Medical College. His extensive training and commitment to
              excellence have made him a trusted name in modern orthopedic
              treatment.
            </p>

            <div className="p-3 mt-4 rounded-3 bg-light border-start border-4 border-primary">
              <h5 className="text-success fw-bold">Practice Philosophy</h5>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Comprehensive evaluation and accurate diagnosis
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Minimally invasive techniques when possible
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Personalized treatment plans
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Thorough patient education
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Multidisciplinary collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
