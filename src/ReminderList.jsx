import React, { useEffect, useState } from "react";
import { getReminderAccordingtoDate } from "./services/services";

const ReminderList = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    if (!selectedDate) return;

    const Payload = {
      data: { filter: "", nextVisit: selectedDate }, // already ISO string
      page: 0,
      pageSize: 50,
      order: [["createdAt", "ASC"]],
    };

    console.log("Sending to backend:", Payload);

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
      });
  }, [selectedDate]);

  const handleDateChange = (e) => {
    const date = e.target.value; // "2025-09-16"
    const dbFormat = new Date(date + "T00:00:00.000Z").toISOString();
    // → "2025-09-16T00:00:00.000Z"
    setSelectedDate(dbFormat);
  };

  return (
    <div
      className="p-4"
      style={{
        background: "linear-gradient(135deg, #f8fbff, #e0f7fa)",
        minHeight: "100vh",
      }}
    >
      <h3 className="text-primary fw-bold mb-4">📅 Check Patient Reminders</h3>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="form-label fw-semibold">Select Date</label>
        <input
          type="date"
          className="form-control form-control-lg"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      {/* Reminders Table */}
      {selectedDate && (
        <div className="card shadow-lg border-0 rounded-4 p-3">
          <h5 className="text-secondary fw-bold mb-3">
            Reminders for {selectedDate.split(" ")[0]}:
          </h5>

          {reminders.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Disease / Concern</th>
                </tr>
              </thead>
              <tbody>
                {reminders.map((r, i) => (
                  <tr key={i}>
                    <td>{r.patientName}</td>
                    <td>{r.patientNumber}</td>
                    <td>{r.disease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-muted">No reminders found for this date.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ReminderList;
