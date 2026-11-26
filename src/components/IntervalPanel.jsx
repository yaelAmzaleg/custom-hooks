
// 7-useInterval
import { useState } from "react";
import useInterval from "../hooks/useInterval";

export function IntervalPanel() {
  const [seconds, setSeconds] = useState(0);

  const { start, stop, isRunning } = useInterval(
    () => {
      setSeconds((prev) => prev + 1);
    },
    1000,
    false
  );

  return (
    <section>
      <header>
        <h2>מונה זמן מחזורי</h2>
        <p>סטטוס: {isRunning ? "פועל" : "מושהה"}</p>
      </header>

      <article>
        <p>זמן שעבר: {seconds} שניות</p>

        <button type="button" onClick={start}>
          התחל
        </button>
        <button type="button" onClick={stop}>
          עצור
        </button>
        <button type="button" onClick={() => setSeconds(0)}>
          אפס מונה
        </button>
      </article>
    </section>
  );
}