import React, { useState, useEffect } from "react";
function Timer() {
  let dateNow = new Date();
  const [date, setDate] = useState(dateNow.toLocaleString());

  function refreshClock() {
    const time = new Date();
    setDate(time.toLocaleString());
  }
  useEffect(() => {
    const time = new Date();
    setDate(time.toLocaleString());
    const timerId = setInterval(() => refreshClock(), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <div className="date-time">{date}</div>;
}
export default Timer;
