// AboutHero.js
import React from 'react';

const CranialHero = () => {
  return (
    <section className="py-5 text-white" style={{ background: '#032e63' }}>
      <div className="container text-center py-5">
        <h1 className="fw-bold display-5">Cranial</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center mt-3">
            <li className="breadcrumb-item">
              <a href="/" className="text-white text-decoration-none">Home</a>
            </li>
            <li className="breadcrumb-item active text-white" aria-current="page">Cranial</li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default CranialHero;
