//1-useToggle
import React from 'react'
import useToggle from '../hooks/useToggle'
export default function TogglePanel() {
const { value, toggle, setTrue, setFalse } = useToggle(false);
  return (
   <section>
      <header>
        <h2>כרטיס מידע</h2>
        <p>מצב תצוגה: {value ? "מוצג" : "מוסתר"}</p>
      </header>

      <section>
        <button type="button" onClick={toggle}>
          החלף מצב
        </button>
        <button type="button" onClick={setTrue}>
          הצג פרטים
        </button>
        <button type="button" onClick={setFalse}>
          הסתר פרטים
        </button>
      </section>

      {value && (
        <article>
          <p>אלו הפרטים הנוספים שמוצגים כאשר המצב הבוליאני הוא true.</p>
        </article>
      )}
    </section>
  )
}
