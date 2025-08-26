import React from 'react';
import bgImage from '../assets/bg.jpg';
import puspak from '../assets/puspak.png';
const AboutMe = () => {
  return (
    <section style={{ background: `url(${bgImage}) no-repeat center center`,
    backgroundSize: 'cover', }} className="py-5">
      <div className="container">
        {/* Section 1 - Doctor Info */}
        <div className="row align-items-center mb-5">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={puspak}
              alt="Dr. Puspak Samal"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-8">
            <h2 className="text-primary fw-bold mb-3">A Brief History</h2>
            <p>
              Dr. Puspak Samal is a highly skilled and experienced orthopedic surgeon specializing in spine and joint care.
              With years of expertise in both surgical and non-surgical treatments, he is dedicated to providing personalized care to each patient.
            </p>
            <p>
              He completed his MBBS from Medical College, Kolkata, followed by an MS in Orthopedics from NRS Medical College.
              His extensive training and commitment to excellence have made him a trusted name in modern orthopedic treatment.
            </p>

            <h4 className="mt-4 text-success">Practice Philosophy</h4>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Comprehensive evaluation and accurate diagnosis</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Minimally invasive techniques when possible</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Personalized treatment plans</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Thorough patient education</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Multidisciplinary collaboration</li>
            </ul>
          </div>
        </div>

        {/* Section 2 - Qualifications */}
       
      </div>
    </section>
  );
};

export default AboutMe;
