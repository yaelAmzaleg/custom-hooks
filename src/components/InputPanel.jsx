// 4-useInput
import useInput from "../hooks/useInput";

export function InputPanel() {
  const { value, onChange, setValue, reset } = useInput("");

  return (
    <section>
      <header>
        <h2>שדה קלט</h2>
      </header>
      <article>
        <label htmlFor="name-input">הקלד טקסט:</label>
        <input
          id="name-input"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="כתוב כאן..."
        />

        <p>ערך נוכחי: {value}</p>

        <button type="button" onClick={() => setValue("דוגמה")}>
          קבע ערך לדוגמה
        </button>
        <button type="button" onClick={reset}>
          איפוס
        </button>
      </article>
    </section>
  );
}