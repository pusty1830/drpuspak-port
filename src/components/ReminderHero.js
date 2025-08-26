import React from 'react';

const ReminderHero = ({ onAddReminder, onViewList, onViewCreatedAt, activePage }) => {
  return (
    <section className="py-1 text-white" style={{ background: '#032e63' }}>
      <div className="container text-center py-5">
        <h1 className="fw-bold display-5">Reminder</h1>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center mt-3">
            <li className="breadcrumb-item">
              <a href="/" className="text-white text-decoration-none">Home</a>
            </li>
            <li className="breadcrumb-item active text-white" aria-current="page">
              Reminder
            </li>
          </ol>
        </nav>

        {/* Action Buttons */}
        <div className="mt-4 d-flex justify-content-center gap-3">
          <button
            className={`fw-bold px-4 ${
              activePage === 'form' ? 'btn btn-light text-dark' : 'btn btn-outline-light'
            }`}
            onClick={onAddReminder}
          >
            ➕ Add Reminder
          </button>

          <button
            className={`fw-bold px-4 ${
              activePage === 'list' ? 'btn btn-light text-dark' : 'btn btn-outline-light'
            }`}
            onClick={onViewList}
          >
            📋 Reminder List
          </button>

          <button
            className={`fw-bold px-4 ${
              activePage === 'createdAt' ? 'btn btn-light text-dark' : 'btn btn-outline-light'
            }`}
            onClick={onViewCreatedAt}
          >
            🗓️ CreatedAt List
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReminderHero;
