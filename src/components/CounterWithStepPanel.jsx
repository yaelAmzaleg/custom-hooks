//3-useCounterWithStep
import React from 'react'
import useCounterWithStep from '../hooks/useCounterWithStep'
export default function CounterWithStepPanel() {
     const step = 2;
    const { value, inc, dec, reset }=useCounterWithStep(0,step)
  return (
    <section>
      <header>
        <h2>מונה עם צעד</h2>
        <p>גודל צעד: {step}</p>
      </header>

      <article>
        <p>ערך נוכחי: {value}</p>
        <button type="button" onClick={inc}>
          הגדל (+{step})
        </button>
        <button type="button" onClick={dec}>
          הקטן (-{step})
        </button>
        <button type="button" onClick={reset}>
          איפוס
        </button>
      </article>
    </section>
  )
}