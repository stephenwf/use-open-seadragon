// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from 'react';

export function useInterval(
  callback: () => void,
  delay: number,
  active: boolean = true
) {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (active) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return;
  }, [active, delay]);
}
