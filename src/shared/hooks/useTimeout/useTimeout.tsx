import { useEffect, useRef } from "react";

export default function useTimeout(callback: () => void, delay: number | undefined) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
}
