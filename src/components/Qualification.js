import React from "react";


// Import award images
import award1 from "../assets/award-1.svg";
import award2 from "../assets/award-2.svg";
import award3 from "../assets/award-3.svg";
import award4 from "../assets/award-4.svg";
import award5 from "../assets/award-6.svg";
import award6 from "../assets/award-5.svg";
const Qualification = () => {
  const qualifications = [
    {
      university: "Oxford University",
      duration: "Jan 2014 - Dec 2018",
      degree: "Bachelor of Medicine & Bachelor of Surgery ( MBBS )",
    },
    {
      university: "Oxford University",
      duration: "Jan 2014 - Dec 2018",
      degree: "Bachelor of Medicine & Bachelor of Surgery ( MBBS )",
    },
    {
      university: "Oxford University",
      duration: "Jan 2014 - Dec 2018",
      degree: "Bachelor of Medicine & Bachelor of Surgery ( MBBS )",
    },
    {
      university: "Oxford University",
      duration: "Jan 2014 - Dec 2018",
      degree: "Bachelor of Medicine & Bachelor of Surgery ( MBBS )",
    },
  ];

  // Awards array (5 images)
  const awards = [award1, award2, award3, award4, award5,award6];

  return (
    <section className="py-5 position-relative qualification-section">
      <div className="container">
        {/* Badge */}
        <div className="text-center mb-2">
          <span
            className="px-3 py-1 rounded-pill border border-primary text-primary fw-semibold"
            style={{ backgroundColor: "#f5f9ff" }}
          >
            <i className="bi bi-heart-fill text-primary me-1"></i> My Qualification
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center fw-bold mb-4">My Qualification & Awards</h2>

        {/* Qualification Cards */}
         <div className="row g-3 mb-5">
  {qualifications.map((q, index) => (
    <div className="col-md-6" key={index}>
      <div
        className="p-3 h-100 d-flex align-items-center"
        style={{
          backgroundColor: "#f4f4f4",
          borderRadius: "12px",
        }}
      >
        <div className="row w-100">
          {/* Left col: university + duration */}
          <div className="col-4">
            <div className="fw-semibold">{q.university}</div>
            <small className="text-muted">{q.duration}</small>
          </div>

          {/* Right col: degree */}
          <div className="col-8 d-flex justify-content-end align-items-center">
            <h5 className="fw-bold">{q.degree}</h5>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>




        {/* Awards Section */}
        <div className="row g-3 align-items-center">
          {awards.map((img, index) => (
            <div className="col-4 col-md-2 text-center bg-light" key={index}>
              <div
                className="p-3 "
                style={{ borderRadius: "12px" }}
              >
                <img src={img} alt={`Award ${index + 1}`} className="img-fluid" />
              </div>
            </div>
          ))}

          {/* View All Awards Button */}
      
        </div>
      </div>
    </section>
  );
};

export default Qualification;
