// 5-useTextarea
import useTextarea from "../hooks/useTextarea";

export function TextareaPanel() {
  const { value, onChange, setValue, reset } = useTextarea("");

  return (
    <section>
      <header>
        <h2>אזור טקסט</h2>
      </header>

      <article>
        <label htmlFor="notes-textarea">הערות או תיאור:</label>
        <textarea
          id="notes-textarea"
          value={value}
          onChange={onChange}
          rows={4}
          placeholder="כתוב כאן מספר שורות..."
        />

        <p>מספר תווים: {value.length}</p>
        <p>תוכן נוכחי: {value}</p>

        <button type="button" onClick={() => setValue("שורה ראשונה\nשורה שנייה")}>
          הכנס טקסט לדוגמה
        </button>
        <button type="button" onClick={reset}>
          ניקוי
        </button>
      </article>
    </section>
  );
}