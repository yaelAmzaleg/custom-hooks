// 10-useWindowSize
import useWindowSize from "../hooks/useWindowSize";

export function WindowSizePanel() {
  const { width, height } = useWindowSize();

  return (
    <section>
      <header>
        <h2>גודל חלון הדפדפן</h2>
      </header>

      <article>
        <p>רוחב (width): {width}px</p>
        <p>גובה (height): {height}px</p>
      </article>
    </section>
  );
}