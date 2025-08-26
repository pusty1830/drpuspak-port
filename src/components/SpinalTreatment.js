import React from 'react';

const SpinalTreatment = () => {
  return (
    <section className="py-5" style={{ background: '#f5f9ff' }}>
      <div className="container">
        {/* Title */}
        <h2 className="text-center text-primary fw-bold mb-4">
          <i className="bi bi-bandaid me-2"></i>Spinal Treatments
        </h2>

        {/* Intro */}
        <div className="card p-4 shadow-sm border-0 mb-5 bg-white">
          <p className="mb-2">
            <i className="bi bi-info-circle-fill text-primary me-2"></i>
            Spinal treatment refers to a variety of medical and therapeutic techniques aimed at diagnosing, managing, and relieving conditions related to the spine.
          </p>
          <p>
            <i className="bi bi-heart-pulse text-danger me-2"></i>
            These treatments are designed to reduce pain, restore mobility, and improve the quality of life for individuals with spinal disorders or injuries.
          </p>
        </div>

        {/* Common Conditions */}
        <h4 className="text-secondary mb-3"><i className="bi bi-exclamation-circle me-2"></i>Common Conditions Treated</h4>
        <div className="row row-cols-1 row-cols-md-2 g-3 mb-5">
          {[
            'Herniated or slipped discs',
            'Spinal stenosis',
            'Sciatica (nerve pain)',
            'Scoliosis and kyphosis',
            'Lower back pain and neck pain',
            'Spinal injuries or trauma',
            'Degenerative disc disease',
          ].map((item, i) => (
            <div className="col" key={i}>
              <div className="d-flex align-items-start bg-white rounded shadow-sm p-3">
                <i className="bi bi-check-circle-fill text-success fs-5 me-2"></i>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Types of Treatments */}
        <h4 className="text-secondary mb-3"><i className="bi bi-list-ul me-2"></i>Types of Spinal Treatments</h4>
        <div className="row row-cols-1 row-cols-md-2 g-3 mb-5">
          {[
            'Physical Therapy: Strengthening and stretching exercises to relieve pressure and support spinal alignment.',
            'Chiropractic Care: Manual spinal adjustments to improve mobility and relieve pain.',
            'Medications: Anti-inflammatory drugs, pain relievers, or muscle relaxants as prescribed.',
            'Minimally Invasive Procedures: Such as epidural injections or nerve blocks.',
            'Surgery: In severe cases, procedures like spinal fusion, discectomy, or laminectomy may be recommended.',
          ].map((text, index) => (
            <div className="col" key={index}>
              <div className="bg-white rounded shadow-sm p-3 d-flex align-items-start">
                <i className="bi bi-star-fill text-warning fs-5 me-2"></i>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <h4 className="text-secondary mb-3"><i className="bi bi-plus-circle-dotted me-2"></i>Benefits of Spinal Treatment</h4>
        <div className="row row-cols-1 row-cols-md-2 g-3 mb-5">
          {[
            'Improved posture and spinal alignment',
            'Reduced pain and inflammation',
            'Restored flexibility and mobility',
            'Better nerve function and muscle control',
            'Enhanced quality of life',
          ].map((item, idx) => (
            <div className="col" key={idx}>
              <div className="d-flex align-items-start bg-light p-3 rounded shadow-sm">
                <i className="bi bi-check2-circle text-success fs-5 me-2"></i>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Is it safe? */}
        <h4 className="text-secondary mb-3"><i className="bi bi-shield-check me-2"></i>Is Spinal Treatment Safe?</h4>
        <div className="bg-white rounded shadow-sm p-3 mb-5">
          <p>
            Yes. Most spinal treatments, especially non-surgical ones, are safe when performed by certified professionals. It’s essential to get a proper diagnosis and follow the treatment plan prescribed by a licensed physician, physiotherapist, or chiropractor.
          </p>
        </div>

        {/* When to Seek Help */}
        <h4 className="text-secondary mb-3"><i className="bi bi-person-x me-2"></i>When to Seek Help?</h4>
        <div className="bg-white rounded shadow-sm p-3">
          <p>
            If you experience persistent back or neck pain, numbness, tingling, or weakness in the limbs, it's important to seek medical attention. Early diagnosis and treatment can prevent further complications.
          </p>
          <p className="text-danger fw-semibold mt-2">
            <i className="bi bi-exclamation-triangle me-2"></i>Note: Always consult a healthcare provider before starting any spinal treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpinalTreatment;
