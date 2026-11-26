// 8-useTimeout
import { useEffect, useRef, useState } from "react";

export default function useTimeout(callback, delayMs, enabled = false) {
  const [isScheduled, setIsScheduled] = useState(Boolean(enabled));
  const [runCount, setRunCount] = useState(0);

  const start = () => {
    setRunCount((prev) => prev + 1);
    setIsScheduled(true);
  };

  const cancel = () => {
    setIsScheduled(false);
  };

  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isScheduled || delayMs == null || delayMs < 0) {
      return;
    }

    const id = setTimeout(() => {
      setIsScheduled(false);
      callbackRef.current?.();
    }, delayMs);

    return () => clearTimeout(id);
  }, [isScheduled, delayMs, runCount]);

  return { start, cancel, isScheduled };
}