import { useState, useEffect } from "react";

export function useTimer() {
  console.log("use Timer hook called");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UT effect callback");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
    return () => {
      console.log("UT hook effect cleanup");
      clearInterval(interval);
    };
  }, []);
  return count;
}
