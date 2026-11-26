// 7-useInterval
import { useEffect, useRef, useState } from "react";

export default function useInterval(callback, intervalMs, enabled = false) {
  const [isRunning, setIsRunning] = useState(Boolean(enabled));
  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);

  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isRunning || intervalMs == null || intervalMs <= 0) {
      return;
    }
    const id = setInterval(() => {
      callbackRef.current?.();
    }, intervalMs);

    return () => clearInterval(id);
  }, [isRunning, intervalMs]);

  return { start, stop, isRunning };
}