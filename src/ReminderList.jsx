import React, { useEffect, useState } from "react";
import { getReminderAccordingtoDate } from "./services/services";

const ReminderList = () => {
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(
    new Date(today + "T00:00:00.000Z").toISOString()
  );
  const [dateInput, setDateInput] = useState(today);
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(""); // name / phone / disease
  const [reasonFilter, setReasonFilter] = useState(""); // reason dropdown

  useEffect(() => {
    if (!selectedDate) return;

    const Payload = {
      data: { filter: "", nextVisit: selectedDate },
      page: 0,
      pageSize: 50,
      order: [["createdAt", "ASC"]],
    };

    console.log("Sending to backend:", Payload);

    setLoading(true);
    getReminderAccordingtoDate(Payload)
      .then((res) => {
        console.log("API Response:", res);
        if (res?.data?.data?.rows) {
          setReminders(res.data.data.rows);
        } else {
          setReminders([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching reminders:", err);
        setReminders([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedDate]);

  const handleDateChange = (e) => {
    const date = e.target.value;
    setDateInput(date);
    const dbFormat = new Date(date + "T00:00:00.000Z").toISOString();
    setSelectedDate(dbFormat);
  };

  // ✅ Apply filters: search + reason dropdown
  const filteredReminders = reminders.filter((r) => {
    const searchLower = search.toLowerCase();

    const matchesSearch =
      r.patientName?.toLowerCase().includes(searchLower) ||
      r.patientNumber?.includes(searchLower) ||
      r.disease?.toLowerCase().includes(searchLower);

    const matchesReason = reasonFilter ? r.reason === reasonFilter : true;

    return matchesSearch && matchesReason;
  });

  return (
    <div
      className="p-4"
      style={{
        background: "linear-gradient(135deg, #f8fbff, #e0f7fa)",
        minHeight: "100vh",
      }}
    >
      <h3 className="text-primary fw-bold mb-4">📅 Check Patient Reminders</h3>

      {/* Date Picker + Search Filter + Reason Dropdown */}
      <div className="row mb-4 g-3">
        <div className="col-md-3">
          <label className="form-label fw-semibold">Select Date</label>
          <input
            type="date"
            className="form-control form-control-lg"
            value={dateInput}
            onChange={handleDateChange}
          />
        </div>

        <div className="col-md-5">
          <label className="form-label fw-semibold">Search</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="🔍 Search by name, phone, or disease"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold">Filter by Reason</label>
          <select
            className="form-select form-select-lg"
            value={reasonFilter}
            onChange={(e) => setReasonFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="opd">OPD</option>
            <option value="operation">Operation</option>
            <option value="revisit">Revisit</option>
          </select>
        </div>
      </div>

      {/* Reminders Table */}
      {selectedDate && (
        <div className="card shadow-lg border-0 rounded-4 p-3">
          <h5 className="text-secondary fw-bold mb-3">
            Reminders for {dateInput}:
          </h5>

          {loading ? (
            <div className="d-flex justify-content-center p-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : filteredReminders.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Disease / Concern</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {filteredReminders.map((r, i) => (
                  <tr key={i}>
                    <td>{r.patientName}</td>
                    <td>{r.patientNumber}</td>
                    <td>{r.disease}</td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#0d6efd", // Bootstrap primary blue
                          color: "white",
                          padding: "6px 12px",
                          borderRadius: "12px",
                          fontSize: "0.9rem",
                        }}
                      >
                        {r.reason === "opd"
                          ? "OPD"
                          : r.reason === "operation"
                          ? "Operation"
                          : "Revisit"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-muted">No reminders found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ReminderList;
