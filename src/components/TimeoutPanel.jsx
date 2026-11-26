
// 8-useTimeout
import { useState } from "react";
import useTimeout from "../hooks/useTimeout";

export function TimeoutPanel() {
  const [message, setMessage] = useState("ממתין להפעלה...");

  const { start, cancel, isScheduled } = useTimeout(
    () => {
      setMessage("ההשהיה הסתיימה והפעולה הופעלה!");
    },
    2000,
    false
  );

  const handleStart = () => {
    setMessage("הטיימר רץ (2 שניות)...");
    start();
  };

  const handleCancel = () => {
    cancel();
    setMessage("התזמון בוטל.");
  };

  return (
    <section>
      <header>
        <h2>הפעלה חד-פעמית לאחר השהיה</h2>
        <p>סטטוס תזמון: {isScheduled ? "מתוזמן" : "לא פעיל"}</p>
      </header>

      <article>
        <p>{message}</p>
        <button type="button" onClick={handleStart}>
          התחל השהיה
        </button>
        <button type="button" onClick={handleCancel}>
          בטל תזמון
        </button>
      </article>
    </section>
  );
}