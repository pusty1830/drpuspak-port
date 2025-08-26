import React from 'react';


const CranialTreatment = () => {
  return (
    <section className="py-5" style={{ background: '#f5f9ff' }}>
      <div className="container">
        <h2 className="mb-4 text-primary fw-bold text-center">
          <i className="bi bi-thermometer-half me-2"></i>Cranial Treatments
        </h2>

        <div className="card shadow-sm p-4 border-0 mb-5 bg-white">
          <p className="mb-3">
            <i className="bi bi-droplet-half text-primary me-2"></i>
            Cranial Treatment, also known as Craniosacral Therapy (CST) or Cranial Osteopathy, is a gentle, hands-on method of evaluating and enhancing the functioning of the craniosacral system.
          </p>
          <p>
            <i className="bi bi-person-arms-up text-success me-2"></i>
            Therapists focus on subtle movements and fluid flows, spine, and cranium to restore tension, relieve pain, and optimize overall well-being.
          </p>
        </div>

        <div className="mb-5">
          <h4 className="text-secondary mb-3">
            <i className="bi bi-gear-wide-connected me-2"></i>How Does Cranial Treatment Work?
          </h4>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            {[
              'Therapists use gentle pressure on key areas of the head, neck, or spine.',
              'They monitor fluid movement and tissue.',
              'Gentle compression or traction is given (non-invasive).',
              'Results in deep relaxation and nervous system balance.',
            ].map((item, index) => (
              <div className="col" key={index}>
                <div className="d-flex align-items-start bg-white rounded shadow-sm p-3">
                  <i className="bi bi-check-circle-fill text-success fs-4 me-3"></i>
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h4 className="text-secondary mb-3">
            <i className="bi bi-heart-pulse me-2"></i>Conditions Cranial Treatment May Help With:
          </h4>
          <div className="row g-4">
            <div className="col-md-6">
              <ul className="list-group">
                {[
                  'Headaches and migraines',
                  'Stress, anxiety and sleep issues',
                  'Chronic neck and back pain',
                  'TMJ dysfunction',
                  'Sinus congestion',
                ].map((item, idx) => (
                  <li key={idx} className="list-group-item d-flex align-items-center">
                    <i className="bi bi-capsule text-primary me-2"></i>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                {[
                  'Nervous system disorders',
                  'Emotional trauma support',
                  'Autism and sensory processing',
                  'Fibromyalgia',
                  'Post-injury healing',
                ].map((item, idx) => (
                  <li key={idx} className="list-group-item d-flex align-items-center">
                    <i className="bi bi-capsule text-primary me-2"></i>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h4 className="text-secondary mb-3">
            <i className="bi bi-shield-check me-2"></i>Is Cranial Treatment Safe?
          </h4>
          <p className="bg-white p-3 rounded shadow-sm">
            Yes. Cranial treatment is non-invasive, drug-free, and safe for people of all ages,
            including newborns and elderly. Because the technique uses gentle touch,
            it's considered one of the most natural therapies available.
          </p>
        </div>

        <div className="mb-5">
          <h4 className="text-secondary mb-3">
            <i className="bi bi-stars me-2"></i>Benefits of Cranial Treatment:
          </h4>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            {[
              'Reduces anxiety and improves emotional regulation',
              'Promotes deep body and tissue relaxation',
              'Enhances circulation and fluid flow',
              'Supports immune and nervous system function',
            ].map((benefit, i) => (
              <div className="col" key={i}>
                <div className="d-flex align-items-start bg-light rounded p-3 shadow-sm">
                  <i className="bi bi-check2-circle text-success fs-5 me-2"></i>
                  <span>{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-secondary mb-3">
            <i className="bi bi-person-vcard me-2"></i>Who Performs Cranial Treatment?
          </h4>
          <ul className="list-group">
            {[
              'Chiropractors (with CST training)',
              'Osteopathic Physicians (DOs)',
              'Physical Therapists',
              'Massage Therapists trained in CST',
            ].map((item, idx) => (
              <li key={idx} className="list-group-item d-flex align-items-center">
                <i className="bi bi-person-circle text-info me-2"></i>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CranialTreatment;
