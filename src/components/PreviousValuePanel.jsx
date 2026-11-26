// 6-usePrevious
import { useState } from "react";
import usePrevious from "../hooks/usePrevious";
export default function PreviousValuePanel() {
      const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  return (
   <section>
      <header>
        <h2>מעקב אחר ערך קודם</h2>
      </header>

      <article>
        <p>ערך נוכחי: {count}</p>
        <p>ערך קודם: {previousCount ?? "אין עדיין"}</p>

        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          הגדל ערך
        </button>
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          הקטן ערך
        </button>
      </article>
    </section>
  )
}
