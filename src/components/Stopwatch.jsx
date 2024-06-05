import { useEffect, useState } from "react";
import "./Stopwatch.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const getTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(1, "0");
    seconds = String(seconds % 60).padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [running, time]);
  return (
    <div className="watch">
      <h1>Stopwatch</h1>
      <p>Time: {getTime(time)}</p>
      <div>
        <button onClick={() => setRunning(!running)}>
          {running ? "Stop" : "Start"}
        </button>
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
