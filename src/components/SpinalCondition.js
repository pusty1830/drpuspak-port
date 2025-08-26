import React from 'react';
import brainImage from '../assets/spinal.png'; 

const SpinalCondition = () => {
  return (
     <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="mb-4 text-primary">Spinal Conditions</h2>
            <ul className="list-group shadow">
              <li className="list-group-item">Herniated or Bulging Disc</li>
              <li className="list-group-item">Spinal Stenosis</li>
              <li className="list-group-item">Degenerative Disc Disease</li>
              <li className="list-group-item">Scoliosis or Spinal Deformities</li>
              <li className="list-group-item">Spine Fractures or Trauma</li>
              <li className="list-group-item">Chronic Back or Neck Pain</li>
              <li className="list-group-item">Sciatica or Nerve Compression</li>
              <li className="list-group-item">Lumbar Stenosis</li>
              <li className="list-group-item">Pars Defect</li>
              <li className="list-group-item">Radiculopathy</li>
              <li className="list-group-item">Spinal Canal Stenosis</li>
              <li className="list-group-item">Spinal Cord Compression</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img src={brainImage} alt="Brain Illustration" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default SpinalCondition;
