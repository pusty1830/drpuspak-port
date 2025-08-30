import React, { useEffect, useState } from "react";
import { getReminderAccordingtoDate } from "./services/services";
import * as XLSX from "xlsx";

const CreatedAtReminderList = () => {
  const [selectedDate, setSelectedDate] = useState(""); // date string in YYYY-MM-DD
  const [allReminders, setAllReminders] = useState([]);
  const [filteredReminders, setFilteredReminders] = useState([]);
  const [loading, setLoading] = useState(false);

  // New states for search + reason filter
  const [search, setSearch] = useState("");
  const [reasonFilter, setReasonFilter] = useState("");

  useEffect(() => {
    // Set today's date by default
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
  }, []);

  useEffect(() => {
    setLoading(true);
    // Fetch all reminders without date filter
    getReminderAccordingtoDate({
      data: { filter: "" },
      page: 0,
      pageSize: 100,
      order: [["createdAt", "ASC"]],
    })
      .then((res) => {
        setAllReminders(res?.data?.data?.rows || []);
      })
      .catch((err) => {
        console.error("Error fetching reminders:", err);
        setAllReminders([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedDate) {
      setFilteredReminders([]);
      return;
    }

    // Filter reminders by createdAt date
    const filtered = allReminders.filter((r) => {
      const createdDate = new Date(r.createdAt).toISOString().split("T")[0];
      return createdDate === selectedDate;
    });

    // Apply search filter
    const searchLower = search.toLowerCase();
    const searched = filtered.filter((r) => {
      return (
        r.patientName?.toLowerCase().includes(searchLower) ||
        r.patientNumber?.includes(searchLower) ||
        r.disease?.toLowerCase().includes(searchLower)
      );
    });

    // Apply reason dropdown filter (if selected)
    const finalFiltered =
      reasonFilter !== ""
        ? searched.filter((r) => r.reason === reasonFilter)
        : searched;

    setFilteredReminders(finalFiltered);
  }, [selectedDate, allReminders, search, reasonFilter]);

  // ✅ Export filtered reminders to Excel
  const exportToExcel = () => {
    if (filteredReminders.length === 0) {
      alert("No reminders to export!");
      return;
    }

    const dataForExcel = filteredReminders.map((r) => ({
      ID: r.id,
      Name: r.patientName,
      Phone: r.patientNumber,
      Age: r.Age,
      Address: r.address,
      "Disease / Concern": r.disease,
      From: r.fromWhere,
      Reason:
        r.reason === "opd"
          ? "OPD"
          : r.reason === "operation"
          ? "Operation"
          : "Revisit",
      "Created At": r.createdAt?.split("T")[0],
      "Next Visit": r.nextVisit?.split("T")[0] || "-",
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reminders");
    XLSX.writeFile(workbook, `reminders_${selectedDate}.xlsx`);
  };

  return (
    <div
      className="p-4"
      style={{ background: "linear-gradient(135deg, #f8fbff, #e0f7fa)", minHeight: "100vh" }}
    >
      <h3 className="text-primary fw-bold mb-4">
        📅 Check Reminders by Created Date
      </h3>

      {/* Filters Row */}
      <div className="row mb-4 g-3">
        {/* Date Picker */}
        <div className="col-md-3">
          <label className="form-label fw-semibold">Select Created Date</label>
          <input
            type="date"
            className="form-control form-control-lg"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Search */}
        <div className="col-md-4">
          <label className="form-label fw-semibold">Search</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="🔍 Search by name, phone, or disease"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Reason Filter */}
        <div className="col-md-3">
          <label className="form-label fw-semibold">Filter by Reason</label>
          <select
            className="form-select form-select-lg"
            value={reasonFilter}
            onChange={(e) => setReasonFilter(e.target.value)}
          >
            <option value="">All Reasons</option>
            <option value="opd">OPD</option>
            <option value="operation">Operation</option>
            <option value="revisit">Revisit</option>
          </select>
        </div>

        {/* Excel Export Button */}
        <div className="col-md-2 d-flex align-items-end">
          <button className="btn btn-primary w-100" onClick={exportToExcel}>
            📥 Export to Excel
          </button>
        </div>
      </div>

      {/* Loader / Table */}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center p-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : selectedDate ? (
        <div className="card shadow-lg border-0 rounded-4 p-3">
          <h5 className="text-secondary fw-bold mb-3">
            Reminders created on {selectedDate}:
          </h5>

          {filteredReminders.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
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
                {filteredReminders.map((r, i) => (
                  <tr key={i}>
                    <td>{r.id}</td>
                    <td>{r.patientName}</td>
                    <td>{r.patientNumber}</td>
                    <td>{r.Age}</td>
                    <td>{r.address}</td>
                    <td>{r.disease}</td>
                    <td>{r.fromWhere}</td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#0d6efd",
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
                    <td>{r.createdAt?.split("T")[0]}</td>
                    <td>{r.nextVisit?.split("T")[0] || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-muted">No reminders found for this created date.</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default CreatedAtReminderList;
