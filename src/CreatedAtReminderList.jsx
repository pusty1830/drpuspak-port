import React, { useEffect, useState } from "react";
import { getReminderAccordingtoDate } from "./services/services";

const CreatedAtReminderList = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [allReminders, setAllReminders] = useState([]);
  const [filteredReminders, setFilteredReminders] = useState([]);

  useEffect(() => {
    // Fetch all reminders without date filter
    getReminderAccordingtoDate({ data: {}, page: 0, pageSize: 100, order: [["createdAt", "ASC"]] })
      .then((res) => {
        setAllReminders(res?.data?.data?.rows || []);
      })
      .catch((err) => {
        console.error("Error fetching reminders:", err);
        setAllReminders([]);
      });
  }, []);

  useEffect(() => {
    if (!selectedDate) {
      setFilteredReminders([]);
      return;
    }

    // Filter reminders by createdAt date on frontend
    const filtered = allReminders.filter((r) => {
      const createdDate = new Date(r.createdAt).toISOString().split("T")[0];
      return createdDate === selectedDate;
    });

    setFilteredReminders(filtered);
  }, [selectedDate, allReminders]);

  return (
    <div
      className="p-4"
      style={{
        background: "linear-gradient(135deg, #f8fbff, #e0f7fa)",
        minHeight: "100vh",
      }}
    >
      <h3 className="text-primary fw-bold mb-4">
        📅 Check Reminders by Created Date
      </h3>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="form-label fw-semibold">Select Created Date</label>
        <input
          type="date"
          className="form-control form-control-lg"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Reminders Table */}
      {selectedDate && (
        <div className="card shadow-lg border-0 rounded-4 p-3">
          <h5 className="text-secondary fw-bold mb-3">
            Reminders created on {selectedDate}:
          </h5>

          {filteredReminders.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Disease / Concern</th>
                  <th>Next Visit</th>
                </tr>
              </thead>
              <tbody>
                {filteredReminders.map((r, i) => (
                  <tr key={i}>
                    <td>{r.patientName}</td>
                    <td>{r.patientNumber}</td>
                    <td>{r.disease}</td>
                    <td>{r.nextVisit?.split("T")[0] || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-muted">
              No reminders found for this created date.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatedAtReminderList;
