import React from 'react';
import brainImage from '../assets/cranial.png'; // Replace with your actual image path

const CranialCondition = () => {
  return (
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="mb-4 text-primary">Cranial Conditions</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Headaches and migraines</li>
              <li className="list-group-item">Chronic neck and back pain</li>
              <li className="list-group-item">Stress and tension-related disorders</li>
              <li className="list-group-item">TMJ dysfunction</li>
              <li className="list-group-item">Sinus infections</li>
              <li className="list-group-item">Sleep disturbances</li>
              <li className="list-group-item">Neurological disorders</li>
              <li className="list-group-item">Chronic fatigue</li>
              <li className="list-group-item">Immune system support</li>
              <li className="list-group-item">Post-traumatic stress</li>
              <li className="list-group-item">Trigeminal Neuralgia</li>
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

export default CranialCondition;
