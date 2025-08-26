import React from 'react';
import { Link } from 'react-router-dom';
import puspak from '../assets/puspak.png';
import bgImage from '../assets/bg.jpg';

const Aboutpuspak = () => {
  return (
    <>
      

      <div class="container p-lg-5">
            <div className="row align-items-center">
          {/* Left Side Images */}
          <div className="col-lg-6 mb-4 mb-lg-0 position-relative">
            <div className="main-image  overflow-hidden">
              <img
                src={puspak}
                alt="Patient"
                className="img-fluid rounded"
              />
            </div>
           
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6">
           
            <h2 className="fw-bold mb-4">Membership</h2>
           

            <div className="p-3 h-100 d-flex align-items-center mb-3"
        style={{
          backgroundColor: "#f4f4f4",
          borderRadius: "12px",
        }}>
              <div className="circle-number me-3">01</div>
              <div>
                <h5 className="fw-bold mb-1">Indian Orthopaedic Association (IOA)</h5>
              </div>
            </div>

            <div  className="p-3 h-100 d-flex align-items-center mb-3"
        style={{
          backgroundColor: "#f4f4f4",
          borderRadius: "12px",
        }}>
              <div className="circle-number me-3">02</div>
              <div>
                <h5 className="fw-bold mb-1">Indian Society of Hip & Knee Surgeons (ISHKS)</h5>
                
              </div>
            </div>

            <div  className="p-3 h-100 d-flex align-items-center mb-3"
        style={{
          backgroundColor: "#f4f4f4",
          borderRadius: "12px",
        }}>
              <div className="circle-number me-3">03</div>
              <div>
                <h5 className="fw-bold mb-1">AO Trauma Foundation</h5>
                
              </div>
            </div>

          
          </div>
        </div> 
      </div>

      
    </>
  );
};

export default Aboutpuspak;
