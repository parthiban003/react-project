import React, { useEffect, useState } from 'react';
 
function LiveClock() {
  const [time, setTime] = useState(new Date());
 
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
 
    return () => clearInterval(timer);
  }, []);
 
 
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };
 
  return (
    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
      🕒 Time Now: {formatTime(time)}
    </div>
  );
}
 
export default LiveClock;
 
 