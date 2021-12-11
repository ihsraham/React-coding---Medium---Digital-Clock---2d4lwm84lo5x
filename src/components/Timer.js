import React, { useState, useEffect } from "react";
function Timer() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(() => refreshClock(), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <div className="date-time">{date.toLocaleString()}</div>;
}
export default Timer;
