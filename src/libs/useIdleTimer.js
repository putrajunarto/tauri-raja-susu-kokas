import { useEffect, useRef } from "react";

const useIdleTimer = (onIdle, idleTime = 10000) => {
  const timerRef = useRef(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        onIdle();
      }, idleTime);
    };

    // Event listeners untuk mendeteksi aktivitas
    const events = ["mousemove", "keydown", "scroll", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Set timer pertama kali
    resetTimer();

    // Cleanup
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [onIdle, idleTime]);

  return null;
};

export default useIdleTimer;
