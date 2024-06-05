import { useEffect, useState } from "react";
import "./Stopwatch.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const getTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = String(time - minutes * 60).padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const startHandler = () => {
    setRunning(true);
  };
  useEffect(() => {
    if (running) {
      const id = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }
  }, [running, time]);
  return (
    <div className="watch">
      <h1>Stopwatch</h1>
      <p>{`Time: ${getTime()}`}</p>
      <div>
        <button onClick={startHandler}>Start</button>
        <button
          onClick={() => {
            setRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
