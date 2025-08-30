import React, { useState } from "react";
import ReminderHero from "./components/ReminderHero";
import Reminderform from "./components/Reminderform";
import ReminderList from "./ReminderList.jsx"; // NextVisit List
import CreatedAtReminderList from "./CreatedAtReminderList.jsx"; // CreatedAt List
import AllReminders from "./AllReminder.jsx";

const Reminder = () => {
  const [activePage, setActivePage] = useState("form"); // default to form

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          activePage === "form"
            ? "linear-gradient(135deg, #e8f5e9, #c8e6c9)" // light green
            : activePage === "list"
            ? "linear-gradient(135deg, #f8fbff, #e0f7fa)" // light blue
            : activePage === "createdAt"
            ? "linear-gradient(135deg, #fff3e0, #fef9f4)" // light orange
            : "linear-gradient(135deg, #f3e5f5, #ede7f6)", // light purple for bulk page
        transition: "background 0.3s ease",
      }}
    >
      <ReminderHero
        onAddReminder={() => setActivePage("form")}
        onViewList={() => setActivePage("list")}
        onViewCreatedAt={() => setActivePage("createdAt")}
        onViewBulk={() => setActivePage("bulk")} // ✅ new handler
        activePage={activePage}
      />
      {/* Conditionally render pages */}
      {activePage === "form" && <Reminderform />}
      {activePage === "list" && <ReminderList />}
      {activePage === "createdAt" && <CreatedAtReminderList />}
      {activePage === "bulk" && <AllReminders />} {/* ✅ new page */}
    </div>
  );
};

export default Reminder;
