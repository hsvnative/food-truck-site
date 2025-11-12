import React from "react";
import Menu from "./Menu.jsx";
import BookingCalendar from "./Calendar.jsx";

export default function App() {
  // ✅ Add this line here to verify your .env variables are loading
  console.log("Google Calendar ID:", import.meta.env.VITE_GOOGLE_CALENDAR_ID);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "#ff9900", color: "white", padding: "1rem 2rem" }}>
        <h1>🍔 Rolling Flavors Food Truck</h1>
      </header>
      <main>
        <Menu />
        <BookingCalendar />
      </main>
    </div>
  );
}
