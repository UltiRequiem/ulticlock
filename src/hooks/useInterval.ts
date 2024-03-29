import { useEffect, useRef } from "../deps.ts";

export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<typeof callback>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
}
