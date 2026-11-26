// 2-useCounter
import useCounter from "../hooks/useCounter";

export default function CounterPanel() {
  const { value, inc, dec, reset } = useCounter(0);
  return (
    <section>
      <header>
        <h2>מונה</h2>
      </header>
      <article>
        <p>ערך נוכחי: {value}</p>
        <button type="button" onClick={inc}>
          הגדל (+1)
        </button>
        <button type="button" onClick={dec}>
          הקטן (-1)
        </button>
        <button type="button" onClick={reset}>
          איפוס
        </button>
      </article>
    </section>
  );
}