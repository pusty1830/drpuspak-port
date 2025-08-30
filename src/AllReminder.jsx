import React, { useState, useEffect } from "react";
import {
  getReminderAccordingtoDate,
  sendBulkReminder,
} from "./services/services";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";

const AllReminders = () => {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // filter by createdAt
  const [selectedReason, setSelectedReason] = useState("");
  const [selected, setSelected] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchReminders = async () => {
      setLoading(true);
      try {
        const payload = {
          data: { filter: "" },
          page: 0,
          pageSize: 100,
          order: [["createdAt", "ASC"]],
        };

        const res = await getReminderAccordingtoDate(payload);
        setReminders(res?.data?.data?.rows || []);
      } catch (err) {
        console.error("Error fetching reminders:", err);
        toast.error("❌ Failed to load reminders");
      } finally {
        setLoading(false);
      }
    };

    fetchReminders();
  }, []);

  // Filter by date (createdAt), reason, and search
  const filtered = reminders.filter((r) => {
    const matchesSearch =
      r.patientName?.toLowerCase().includes(search.toLowerCase()) ||
      r.patientNumber?.includes(search);

    const matchesReason = selectedReason ? r.reason === selectedReason : true;

    const matchesDate = selectedDate
      ? new Date(r.createdAt).toISOString().split("T")[0] === selectedDate
      : true;

    return matchesSearch && matchesReason && matchesDate;
  });

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const sendReminders = async () => {
    setSending(true);
    try {
      const ids = reminders
        .filter((r) => selected.includes(r.id))
        .map((r) => r.id);

      if (ids.length === 0) {
        toast.warning("⚠️ Please select at least one reminder");
        setSending(false);
        return;
      }

      const res = await sendBulkReminder(ids);

      if (res?.data?.data) {
        toast.success(
          `✅ Sent: ${res?.data?.data?.results?.sent}, Failed: ${
            res?.data?.data?.results?.failed || 0
          } (Total: ${res?.data?.data?.results?.total})`
        );
      }

      setSelected([]);
    } catch (err) {
      toast.error("❌ Failed to send reminders");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  // Export filtered data to Excel
  // Export filtered data to Excel
  const exportToExcel = () => {
    const dataForExcel = filtered.map((r) => ({
      ID: r.id,
      Name: r.patientName,
      Phone: r.patientNumber,
      Age: r.Age,
      Address: r.address,
      "Disease / Concern": r.disease,
      From: r.fromWhere,
      Reason: r.reason,
      "Created At": r.createdAt?.split("T")[0],
      "Next Visit": r.nextVisit?.split("T")[0] || "-",
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reminders");
    XLSX.writeFile(workbook, "reminders.xlsx");
  };

  return (
    <div className="container py-5">
      <div className="card shadow border-0 rounded-3">
        <div className="card-body">
          {/* Header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <h2 className="h4 fw-bold text-dark mb-0">📋 Patient Reminders</h2>

            <div className="d-flex gap-2 flex-wrap">
              {/* CreatedAt Date Picker */}
              <input
                type="date"
                className="form-control"
                value={selectedDate || ""}
                onChange={(e) =>
                  setSelectedDate(e.target.value ? e.target.value : null)
                }
              />

              {/* Reason Filter */}
              <select
                className="form-select"
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
              >
                <option value="">All Reasons</option>
                <option value="operation">Operation</option>
                <option value="opd">OPD</option>
                <option value="revisit">Revisit</option>
              </select>

              {/* Search */}
              <input
                type="text"
                placeholder="🔍 Search name or phone"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control"
              />

              {/* Excel Download */}
              <button className="btn btn-primary" onClick={exportToExcel}>
                📥 Export to Excel
              </button>
            </div>
          </div>

          {/* Loader */}
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <div
                className="spinner-border text-primary"
                role="status"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <table className="table table-hover align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Select</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Disease / Concern</th>
                  <th>From</th>
                  <th>Reason</th>
                  <th>Created At</th>
                  <th>Next Visit</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((r) => (
                    <tr key={r.id}>
                      <td className="text-center">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selected.includes(r.id)}
                          onChange={() => toggleSelect(r.id)}
                        />
                      </td>
                      <td>{r.id}</td>
                      <td>{r.patientName}</td>
                      <td>{r.patientNumber}</td>
                      <td>{r.Age}</td>
                      <td>{r.address}</td>
                      <td>{r.disease}</td>
                      <td>{r.fromWhere}</td>
                      <td>
                        <span className="badge bg-info text-dark">
                          {r.reason}
                        </span>
                      </td>
                      <td>{r.createdAt?.split("T")[0]}</td>
                      <td>{r.nextVisit?.split("T")[0] || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="11"
                      className="text-center py-4 text-muted fst-italic"
                    >
                      No reminders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}

          {/* Action Button */}
          {selected.length > 0 && !loading && (
            <div className="d-flex justify-content-end mt-4">
              <button
                onClick={sendReminders}
                disabled={sending}
                className="btn btn-success d-flex align-items-center gap-2"
              >
                {sending && (
                  <span
                    className="spinner-border spinner-border-sm text-light me-2"
                    role="status"
                  ></span>
                )}
                🚀{" "}
                {sending ? "Sending..." : `Send Reminder (${selected.length})`}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllReminders;
