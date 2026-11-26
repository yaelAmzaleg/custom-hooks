// 9-useDocumentTitle
import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export function DocumentTitlePanel() {
  const [title, setTitle] = useState("עמוד ראשי - React Hooks");

  useDocumentTitle(title);

  return (
    <section>
      <header>
        <h2>עדכון כותרת המסמך</h2>
        <p>כותרת נוכחית: {title}</p>
      </header>

      <article>
        <label htmlFor="doc-title-input">כותרת חדשה ללשונית:</label>
        <input
          id="doc-title-input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button type="button" onClick={() => setTitle("לוח בקרה - סעיף 9")}>
          קבע כותרת לוח בקרה
        </button>
      </article>
    </section>
  );
}