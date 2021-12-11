import React, { useState, useEffect } from "react";
import "../styles/App.css";

function Clock() {
  const [time, setTime] = useState(new Date());
  function refreshTime() {
    setTime(new Date());
  }
  useEffect(() => {
    const id = setInterval(refreshTime, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <div className="date-time">{time.toLocaleString}</div>;
}

const App = () => {
  return (
    <div id="main">
      <Clock />
    </div>
  );
};

export default App;
