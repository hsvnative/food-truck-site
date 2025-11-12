import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/getCalendarEvents")
      .then((res) => res.json())
      .then((data) => {
        const dates = data.map((event) =>
          new Date(event.start.dateTime || event.start.date)
        );
        setBookedDates(dates);
      })
      .catch((err) => console.error("Error fetching calendar events:", err));
  }, []);

  const isBooked = (date) =>
    bookedDates.some(
      (booked) => booked.toDateString() === date.toDateString()
    );

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Check Our Availability</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileDisabled={({ date }) => isBooked(date)}
      />
      <p style={{ marginTop: "1rem" }}>
        {isBooked(selectedDate)
          ? "🚫 We're already booked on this date."
          : `✅ We're available on ${selectedDate.toDateString()}!`}
      </p>
    </div>
  );
}
