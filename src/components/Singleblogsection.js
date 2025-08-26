import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Singleblogsection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    // If no blog data, redirect to /blogs or show error
    navigate("/blogs");
    return null;
  }

  const { title, image, paragraphs, extra } = blog;

  return (
    <div className="container py-5">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="img-fluid rounded mb-4 w-50 shadow"
      />

      {/* Title */}
      <h2 className="mb-3 text-primary fw-bold">{title}</h2>

      {/* Paragraphs */}
      {paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}

      {/* Extra Info Sections */}
      {extra && (
        <>
          {/* Intro */}
          {extra.intro && <p>{extra.intro}</p>}

          {/* Causes */}
          {extra.causes && (
            <div className="border-start border-3 border-primary bg-light p-3 mb-4">
              <h5 className="fw-semibold">{extra.causesTitle}</h5>
              <ul className="mb-0">
                {extra.causes.map((cause, i) => (
                  <li key={i}>{cause}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Symptoms */}
          {extra.symptoms && (
            <>
              <h5 className="fw-semibold">{extra.symptomsTitle}</h5>
              <p>{extra.symptomsIntro}</p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {extra.symptoms.map((symptom, i) => (
                  <div key={i} className="p-3 bg-primary bg-opacity-10 rounded">
                    <h6 className="text-primary mb-1">{symptom.title}</h6>
                    <small>{symptom.desc}</small>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Relief */}
          {extra.relief && (
            <>
              <h5 className="fw-semibold">{extra.reliefTitle}</h5>
              <p>{extra.reliefIntro}</p>
              <ul>
                {extra.relief.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* Tip */}
          {extra.tipText && (
            <div className="p-3 bg-success bg-opacity-10 rounded text-center mt-4">
              <h6 className="text-success fw-bold mb-1">{extra.tipTitle}</h6>
              <small>{extra.tipText}</small>
              <div className="pt-3">
                <a
                  className="btn btn-success rounded-pill px-4 text-uppercase fw-semibold"
                  href="https://clinic.orthospinecare.shop/"
                >
                  BOOK A APPOINTMENT
                </a>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Singleblogsection;
